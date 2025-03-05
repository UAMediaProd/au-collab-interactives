<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

class SolarSystem {
    constructor() {
        // Store the base URL for image paths
        this.baseUrl = baseUrl.value;
        // Flag to track planet-to-planet navigation
        this.planetToPlaneNavigation = false;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance"
        });

        // Initialize texture loader with proper defaults
        this.loadingManager = new THREE.LoadingManager();
        this.textureLoader = new THREE.TextureLoader(this.loadingManager);
        THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;

        // Track loading state
        this.isLoading = true;
        this.texturesLoaded = false;
        this.maxLoadAttempts = 3;
        this.loadAttempts = 0;

        // Default colors for planets when textures fail to load
        this.planetDefaultColors = {
            "Mercury": 0x8C8C8C, // Gray
            "Venus": 0xE6E6BA,  // Light yellow
            "Earth": 0x6B93D6,  // Blue
            "Mars": 0xC1440E,   // Red-orange
            "Jupiter": 0xD8CA9D, // Light brown
            "Saturn": 0xEAD6B8,  // Light gold
            "Uranus": 0xB1E2E2,  // Light blue
            "Neptune": 0x5B5DDF, // Deep blue
            "Sun": 0xFFFF00     // Yellow
        };

        // Setup loading events
        this.setupLoadingManager();
        this.planets = new Map();
        this.orbits = new Map();
        this.isAnimating = true;
        this.pausedTime = 0;
        this.totalPausedTime = 0;
        this.pausedAngles = new Map();
        this.lastTime = performance.now() * 0.001;
        this.accumulatedAngles = new Map();
        this.animationFactor = 1.0; // Current animation speed (0 = paused, 1 = full speed)
        this.targetAnimationFactor = 1.0; // Target animation speed
        this.transitionDuration = 0.5; // Duration of pause/resume transition in seconds
        this.lastViewDirection = null; // Stores the direction we were viewing a planet from

        // Create hover label
        this.hoverLabel = document.createElement('div');
        this.hoverLabel.className = 'hover-label';
        document.body.appendChild(this.hoverLabel);

        // Planet popovers
        this.planetPopovers = {};

        // Initialize popovers immediately or after DOM is loaded
        const initPopovers = () => {
            console.log('Initializing planet popovers');
            document.querySelectorAll('.planet-popover').forEach(popover => {
                const planetName = popover.id.replace('-popover', '');
                this.planetPopovers[planetName] = popover;
                // Add hidden class to all popovers initially
                popover.classList.add('hidden');
                console.log(`Registered popover for ${planetName}`);
            });
        };

        // If DOM is already loaded, initialize now, otherwise wait for the event
        if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', () => {
                initPopovers();
                this.setupPopoverNavigation();
            });
        } else {
            initPopovers();
            this.setupPopoverNavigation();
        }

        // Canvas element and its original position
        this.canvas = document.getElementById('canvas');
        this.originalCanvasPosition = 0; // Original transform value

        // Bottom feather gradient element
        this.bottomFeather = document.getElementById('bottom-feather');

        // Debug display for camera coordinates
        this.debugDisplay = document.getElementById('debug-display');

        // Initial positions from JPL data for Jan 1st 2026
        // Using mean longitude (L) from the JPL ephemeris
        this.initialPositions = {
            "Mercury": 149472.67411175 * 26 + 252.25032350,
            "Venus": 58517.81538729 * 26 + 181.97909950,
            "Earth": 35999.37244981 * 26 + 100.46457166,
            "Mars": 19140.30268499 * 26 - 4.55343205,
            "Jupiter": 3034.74612775 * 26 + 34.39644051,
            "Saturn": 1222.49362201 * 26 + 49.95424423,
            "Uranus": 428.48202785 * 26 + 313.23810451,
            "Neptune": 218.45945325 * 26 - 55.12002969
        };

        // Initially hide the canvas and scene
        this.canvas.style.opacity = '0';

        // Initialize the scene
        this.init();

        // Initialize with a loading screen
    }

    createStars() {
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 3000; // Reduced from 10000 for better performance
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            // Random position in a sphere, using simpler math
            const radius = 150; // Fixed radius for better performance
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            // Dimmer stars with a more subtle appearance
            const brightness = Math.random();
            const bright = brightness > 0.8 ? 0.8 : brightness > 0.5 ? 0.6 : 0.4; // Dimmer levels

            colors[i * 3] = bright;
            colors[i * 3 + 1] = bright;
            colors[i * 3 + 2] = bright;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const starsMaterial = new THREE.PointsMaterial({
            size: 0.8, // Slightly smaller stars
            transparent: true,
            opacity: 0.8, // Reduced opacity
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: false, // Disabled for performance
            depthWrite: false
        });

        const starField = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(starField);
    }

    // Configure loading manager
    setupLoadingManager() {
        // Track failed textures to avoid duplicate loading
        this.failedTextures = new Set();
        this.loadingAttempt = 1;

        // Loading has started
        this.loadingManager.onStart = () => {
            console.log(`Loading started (attempt ${this.loadingAttempt})`);
        };

        // Loading has progressed
        this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            const progress = (itemsLoaded / itemsTotal * 100).toFixed(0);
            console.log(`Loading: ${progress}% (${itemsLoaded}/${itemsTotal})`);
        };

        // Loading completed successfully
        this.loadingManager.onLoad = () => {
            console.log('Loading completed');
            this.texturesLoaded = true;

            // Update all planet materials to ensure proper rendering
            this.planets.forEach(planet => {
                if (planet.material && planet.material.map) {
                    planet.material.color.set(0xffffff);
                    planet.material.needsUpdate = true;
                }
            });

            this.hideLoadingScreen();
        };

        // Loading error occurred
        this.loadingManager.onError = (url) => {
            console.error('Error loading texture:', url);

            // Add to failed textures set
            this.failedTextures.add(url);

            // Only increment attempts when we've tried all textures
            if (this.failedTextures.size >= 1 && !this.retryScheduled) {
                this.loadingAttempt++;

                if (this.loadingAttempt <= this.maxLoadAttempts) {
                    console.log(`Scheduling retry for ${this.failedTextures.size} textures, attempt ${this.loadingAttempt}/${this.maxLoadAttempts}`);

                    // Set flag to prevent multiple retries being scheduled
                    this.retryScheduled = true;

                    // Retry loading just the failed textures
                    setTimeout(() => {
                        this.retryFailedTextures();
                        this.retryScheduled = false;
                    }, 1000);
                } else {
                    console.error('Max load attempts reached, showing scene anyway');
                    this.hideLoadingScreen();
                }
            }
        };
    }

    // Nothing needed here - loading ring is centered using CSS

    // Hide the loading screen and reveal the solar system
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const canvas = this.canvas;

        // Fade out the loading screen
        loadingScreen.style.opacity = '0';

        // Fade in the canvas/solar system
        setTimeout(() => {
            canvas.style.opacity = '1';
            canvas.style.transition = 'opacity 1.5s ease';

            // Remove the loading screen after fade out completes
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1500);
        }, 750); // 750ms delay before fading in the canvas

        this.isLoading = false;
    }

    // Retry loading only failed textures
    retryFailedTextures() {
        console.log(`Retrying ${this.failedTextures.size} failed textures`);

        // Create a new texture loader for this retry attempt
        const retryLoader = new THREE.TextureLoader();

        // Extract planet name from texture URL
        const getTextureNameFromUrl = (url) => {
            const filename = url.split('/').pop();
            // Extract planet name from filename (e.g., 2k_earth_daymap.jpg -> earth)
            const match = filename.match(/2k_([a-z]+)/i);
            return match ? match[1].toLowerCase() : null;
        };

        // For each failed texture URL
        this.failedTextures.forEach(url => {
            console.log(`Retrying texture: ${url}`);

            // Get planet name from texture URL
            const planetName = getTextureNameFromUrl(url);

            // Load the texture
            const texture = retryLoader.load(
                url,
                // Success callback
                (loadedTexture) => {
                    console.log(`Successfully loaded texture on retry: ${url}`);
                    this.failedTextures.delete(url);

                    // Find the planet by name or by matching texture URL
                    this.planets.forEach((planet, name) => {
                        // Try to match by planet name first
                        const planetNameMatches = planetName && name.toLowerCase().includes(planetName);

                        // Then try to match by texture URL if we have access to it
                        let textureUrlMatches = false;
                        try {
                            if (planet.material && planet.material.map &&
                                planet.material.map.source &&
                                planet.material.map.source.data &&
                                planet.material.map.source.data.src) {
                                textureUrlMatches = planet.material.map.source.data.src.includes(url);
                            }
                        } catch (e) {
                            console.log(`Could not check texture URL for ${name}:`, e);
                        }

                        // Update the material if we have a match
                        if (planetNameMatches || textureUrlMatches) {
                            console.log(`Updating material for planet ${name} using texture: ${url}`);
                            if (planet.material) {
                                planet.material.map = loadedTexture;
                                planet.material.color.set(0xffffff);
                                planet.material.needsUpdate = true;
                            }
                        }
                    });
                },
                // Progress callback
                undefined,
                // Error callback
                (error) => {
                    console.error(`Failed to load texture on retry: ${url}`, error);
                }
            );
        });
    }

    // Get default color for a planet when texture is not available
    getPlanetDefaultColor(planetName) {
        return this.planetDefaultColors[planetName] || 0x999999; // Default gray if not found
    }

    // Clear all celestial objects from the scene
    clearCelestialObjects() {
        // Remove all planets from the scene
        this.planets.forEach(planet => {
            // Handle removal of children like Saturn's rings
            while (planet.children.length > 0) {
                planet.remove(planet.children[0]);
            }
            this.scene.remove(planet);
        });

        // Remove all orbits from the scene
        this.orbits.forEach(orbit => {
            this.scene.remove(orbit);
        });

        // Clear the maps
        this.planets.clear();
        this.orbits.clear();

        console.log('Cleared all celestial objects');
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas').appendChild(this.renderer.domElement);

        // Setup camera and controls - starting closer to the Sun from the opposite side
        this.camera.position.set(0, 20, -30); // Closer position, 180° from original
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Set maximum zoom distance to prevent going outside the starfield
        // The starfield radius is 150, so we'll set max distance to 140
        this.controls.maxDistance = 140;

        // Create starfield
        this.createStars();

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x333333);
        this.scene.add(ambientLight);

        // Add point light (sun)
        const sunLight = new THREE.PointLight(0xffffff, 2, 300);
        this.scene.add(sunLight);

        // Create celestial bodies
        this.createSun();
        this.createPlanets();

        // Setup event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        this.renderer.domElement.addEventListener('click', (event) => this.onCanvasClick(event));

        // Only add hover label for non-touch devices
        if (!('ontouchstart' in window)) {
            console.log('Adding hover label for non-touch device');
            this.renderer.domElement.addEventListener('mousemove', (event) => this.updateHoverLabel(event));
            this.renderer.domElement.addEventListener('mouseleave', () => this.hoverLabel.style.opacity = '0');
        } else {
            console.log('Touch device detected - disabling hover labels');
            // Hide the hover label permanently on touch devices
            this.hoverLabel.style.display = 'none';
        }
        // Back button removed, now using home buttons in popovers

        // Setup pause button
        const pauseButton = document.getElementById('pause-button');
        pauseButton.addEventListener('click', () => {
            this.isAnimating = !this.isAnimating;
            this.targetAnimationFactor = this.isAnimating ? 1.0 : 0.0;

            if (!this.isAnimating) {
                // Store current angles of all planets
                this.planets.forEach((planet, name) => {
                    if (name !== "Sun") {
                        const angle = Math.atan2(planet.position.z, planet.position.x);
                        this.pausedAngles.set(name, angle);
                    }
                });
            } else {
                // Clear stored angles when starting to resume
                this.pausedAngles.clear();
            }
            // Update icon based on animation state
            pauseButton.innerHTML = this.isAnimating ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        });

        // Start animation
        this.animate();
    }

    createSun() {
        // Create a brighter sun core
        const sunGeometry = new THREE.SphereGeometry(4.9, 32, 32);
        // Create texture loader with proper settings
        const sunTexture = this.textureLoader.load(this.baseUrl + 'planets/img/2k_sun.jpg');
        const sunMaterial = new THREE.MeshBasicMaterial({
            map: sunTexture,
            transparent: true
        });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.userData.name = "Sun";

        // Add a soft glow sphere
        const glowGeometry = new THREE.SphereGeometry(4.8, 32, 32);
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xffff88) }
            },
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(color, intensity);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        sun.add(glow);

        // Set up bloom effect
        const renderScene = new RenderPass(this.scene, this.camera);
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.65,   // bloom strength - moderately increased
            0.45,   // radius - slightly increased
            0.8     // threshold - moderately lowered
        );

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);
        this.composer.addPass(bloomPass);

        this.scene.add(sun);
        this.planets.set("Sun", sun);
    }

    createPlanets() {
        // Planet data with scientifically accurate values
        // - tilt: axial tilt in degrees
        // - rotationPeriod: rotation period in Earth days (negative values indicate retrograde rotation)
        // period: orbital period in Earth years
        const planetData = [
            { name: "Mercury", radius: 0.8, distance: 10, textureFile: '2k_mercury.jpg', period: 0.24, tilt: 0.034, rotationPeriod: 58.65 },
            { name: "Venus", radius: 1.2, distance: 15, textureFile: '2k_venus_surface.jpg', period: 0.62, tilt: 177.36, rotationPeriod: -243.02 }, // Retrograde rotation
            { name: "Earth", radius: 1.5, distance: 20, textureFile: '2k_earth_daymap.jpg', period: 1, tilt: 23.44, rotationPeriod: 1.0 },
            { name: "Mars", radius: 1, distance: 25, textureFile: '2k_mars.jpg', period: 1.88, tilt: 25.19, rotationPeriod: 1.03 },
            { name: "Jupiter", radius: 3, distance: 35, textureFile: '2k_jupiter.jpg', period: 11.86, tilt: 3.13, rotationPeriod: 0.41 },
            { name: "Saturn", radius: 2.5, distance: 45, textureFile: '2k_saturn.jpg', period: 29.46, tilt: 26.73, rotationPeriod: 0.45 },
            { name: "Uranus", radius: 2, distance: 55, textureFile: '2k_uranus.jpg', period: 84, tilt: 97.77, rotationPeriod: -0.72 }, // Retrograde rotation (axial tilt > 90°)
            { name: "Neptune", radius: 2, distance: 65, textureFile: '2k_neptune.jpg', period: 164.79, tilt: 28.32, rotationPeriod: 0.67 }
        ];

        // Add ambient light for minimum illumination - making dark side of planets very bright
        const ambientLight = new THREE.AmbientLight(0x606060, 1.5); // Dramatically increased ambient light
        this.scene.add(ambientLight);

        // Add a stronger point light at the Sun's position
        const sunLight = new THREE.PointLight(0xffffff, 6.5, 300, 0.4); // Moderately increased intensity
        sunLight.position.set(0, 0, 0); // At the Sun's position
        this.scene.add(sunLight);

        // Add a backup directional light to ensure planets are visible
        const dirLight = new THREE.DirectionalLight(0xffffff, 0);
        dirLight.position.set(5, 3, 5); // From a camera-friendly angle
        this.scene.add(dirLight);

        // Store the light for later reference
        this.sunLight = sunLight;

        planetData.forEach(data => {
            // Create planet
            const planetGeometry = new THREE.SphereGeometry(data.radius, 32, 32);
            const texture = this.textureLoader.load(`${this.baseUrl}planets/img/${data.textureFile}`);

            // Use MeshStandardMaterial for better lighting
            const planetMaterial = new THREE.MeshStandardMaterial({
                map: texture,
                metalness: 0,
                roughness: 0.8,
                // Set initial color based on planet type to ensure visibility even without texture
                color: this.getPlanetDefaultColor(data.name)
            });

            // Store the texture URL in the planet's userData for retry matching
            const textureUrl = `${this.baseUrl}planets/img/${data.textureFile}`;

            // Update material when texture loads
            texture.addEventListener('load', () => {
                // Reset color to white once texture is loaded
                planetMaterial.color.set(0xffffff);
                planetMaterial.needsUpdate = true;
            });

            // Handle texture loading error
            texture.addEventListener('error', () => {
                console.log(`Texture failed to load for ${data.name}, using default color`);
                // Keep the default color if texture fails
            });

            // Special handling for Saturn's rings
            if (data.name === "Saturn") {
                const ringTexture = this.textureLoader.load(this.baseUrl + 'planets/img/2k_saturn_ring_alpha.png');

                // Create ring geometry with more segments for smoother texture
                const ringGeometry = new THREE.RingGeometry(data.radius * 1.4, data.radius * 2.2, 180, 1);

                // Create custom UV mapping for radial texture
                const pos = ringGeometry.attributes.position;
                const uv = ringGeometry.attributes.uv;
                const v2 = new THREE.Vector2();

                for (let i = 0; i < uv.count; i++) {
                    const vertex = v2.fromBufferAttribute(pos, i);
                    const angle = Math.atan2(vertex.y, vertex.x);
                    const radius = vertex.length();

                    // Swap U and V to fix orientation:
                    // V is now based on angle (goes around the ring)
                    const v = (angle + Math.PI) / (Math.PI * 2);
                    // U is now based on radius (goes from inner to outer)
                    const u = (radius - data.radius * 1.4) / (data.radius * 0.8);

                    uv.setXY(i, u, v);
                }

                // Only set repeat property which is safe
                ringTexture.repeat.set(1, 1);

                const ringMaterial = new THREE.MeshStandardMaterial({
                    map: ringTexture,
                    transparent: true,
                    side: THREE.DoubleSide,
                    alphaTest: 0.2,
                    depthWrite: false,
                    metalness: 0.3,
                    roughness: 0.9,
                    emissive: 0x000000,
                    emissiveIntensity: 0
                });
                const ring = new THREE.Mesh(ringGeometry, ringMaterial);
                ring.rotation.x = Math.PI / 2;
                ring.rotation.y = -0.2;
                const planet = new THREE.Mesh(planetGeometry, planetMaterial);
                planet.add(ring);
                planet.userData.name = data.name;
                planet.userData.orbitRadius = data.distance;
                planet.userData.period = data.period;

                // Set initial position
                const meanLongitude = this.initialPositions[data.name];
                const initialAngle = (meanLongitude % 360) * Math.PI / 180;
                planet.position.x = Math.cos(initialAngle) * data.distance;
                planet.position.z = Math.sin(initialAngle) * data.distance;
                this.accumulatedAngles.set(data.name, initialAngle);

                this.scene.add(planet);
                this.planets.set(data.name, planet);

                // Create orbit for Saturn
                const orbitGeometry = new THREE.RingGeometry(data.distance - 0.1, data.distance + 0.1, 128);
                const orbitMaterial = new THREE.MeshBasicMaterial({
                    color: 0x666666,
                    side: THREE.DoubleSide,
                    opacity: 0.3,
                    transparent: true
                });
                const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
                orbit.rotation.x = Math.PI / 2;

                orbit.userData.defaultOpacity = 0.3;
                orbit.userData.highlightOpacity = 0.8;
                orbit.userData.planetName = data.name;

                // Add orbit hover effect
                orbit.userData.onMouseOver = () => {
                    orbitMaterial.opacity = orbit.userData.highlightOpacity;
                };
                orbit.userData.onMouseOut = () => {
                    orbitMaterial.opacity = orbit.userData.defaultOpacity;
                };

                this.scene.add(orbit);
                this.orbits.set(data.name, orbit);
                return;
            }
            const planet = new THREE.Mesh(planetGeometry, planetMaterial);
            planet.userData.name = data.name;
            planet.userData.orbitRadius = data.distance;
            planet.userData.period = data.period;
            planet.userData.rotationPeriod = data.rotationPeriod;
            planet.userData.tilt = data.tilt;

            // Apply axial tilt
            planet.rotation.z = data.tilt * Math.PI / 180;

            // Set initial position based on JPL data
            const meanLongitude = this.initialPositions[data.name];
            const initialAngle = (meanLongitude % 360) * Math.PI / 180; // Convert to radians
            planet.position.x = Math.cos(initialAngle) * data.distance;
            planet.position.z = Math.sin(initialAngle) * data.distance;
            this.accumulatedAngles.set(data.name, initialAngle);

            // Create orbit
            const orbitGeometry = new THREE.RingGeometry(data.distance - 0.1, data.distance + 0.1, 128);
            const orbitMaterial = new THREE.MeshBasicMaterial({
                color: 0x666666,
                side: THREE.DoubleSide,
                opacity: 0.3,
                transparent: true
            });
            const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbit.rotation.x = Math.PI / 2;

            orbit.userData.defaultOpacity = 0.3;
            orbit.userData.highlightOpacity = 0.8;
            orbit.userData.planetName = data.name;

            // Add orbit hover effect
            orbit.userData.onMouseOver = () => {
                orbitMaterial.opacity = orbit.userData.highlightOpacity;
            };
            orbit.userData.onMouseOut = () => {
                orbitMaterial.opacity = orbit.userData.defaultOpacity;
            };

            this.scene.add(planet);
            this.scene.add(orbit);
            this.planets.set(data.name, planet);
            this.orbits.set(data.name, orbit);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Calculate speed factor based on camera distance
        const distanceToOrigin = this.camera.position.length();
        const maxDistance = 100;
        const minDistance = 10;
        const speedFactor = THREE.MathUtils.clamp(
            (distanceToOrigin - minDistance) / (maxDistance - minDistance),
            0.1, // minimum speed (10%)
            1    // maximum speed (100%)
        );

        // Update animation factor
        const currentTime = performance.now() * 0.001;
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        // Smoothly transition animation factor
        if (this.animationFactor !== this.targetAnimationFactor) {
            const step = (deltaTime / this.transitionDuration) * (this.targetAnimationFactor > this.animationFactor ? 1 : -1);
            this.animationFactor = THREE.MathUtils.clamp(
                this.animationFactor + step,
                Math.min(this.targetAnimationFactor, this.animationFactor),
                Math.max(this.targetAnimationFactor, this.animationFactor)
            );
        }

        // Update planet positions and rotations
        this.planets.forEach((planet, name) => {
            if (name !== "Sun") {
                // Orbital motion
                const radius = planet.userData.orbitRadius;

                // Initialize accumulated angle if not exists
                if (!this.accumulatedAngles.has(name)) {
                    this.accumulatedAngles.set(name, Math.atan2(planet.position.z, planet.position.x));
                }

                // Always update orbital angles, but scale by animation factor
                // Base multiplier reduced from 0.5 to 0.25 to halve orbit speed
                const angularSpeed = (0.25 / planet.userData.period) * speedFactor * this.animationFactor;
                const deltaAngle = angularSpeed * deltaTime;
                const newAngle = this.accumulatedAngles.get(name) + deltaAngle;
                this.accumulatedAngles.set(name, newAngle);

                planet.position.x = Math.cos(newAngle) * radius;
                planet.position.z = Math.sin(newAngle) * radius;

                // Axial rotation
                if (planet.userData.rotationPeriod) {
                    // Convert days to seconds for rotation calculation
                    // Note: day = 86400 seconds
                    const rotationSpeed = (2 * Math.PI / (Math.abs(planet.userData.rotationPeriod) * 86400)) *
                        Math.sign(planet.userData.rotationPeriod) * // Direction of rotation
                        speedFactor * this.animationFactor * 86400 * 2.5; // Reduced multiplier from 5 to 2.5

                    // Create rotation axis adjusted for axial tilt
                    // We use the planet's local Y axis which is already tilted by our earlier z-rotation
                    planet.rotateY(rotationSpeed * deltaTime);
                }
            }
        });

        // Always update controls
        this.controls.update();

        // Update debug display with camera coordinates
        this.updateDebugDisplay();

        // Loading logic handled by manager

        // Render the scene
        this.composer.render();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    updateHoverLabel(event) {
        // Don't show hover labels when focused on an object
        if (this.currentFocus) {
            this.hoverLabel.style.opacity = '0';
            return;
        }

        // Skip if this is a touch event
        if (event.pointerType === 'touch') {
            this.hoverLabel.style.opacity = '0';
            return;
        }

        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);

        // Check for intersections with all objects (including the sun and its glow)
        const planetObjects = Array.from(this.planets.values());
        const intersects = raycaster.intersectObjects(planetObjects, true); // Include child objects

        if (intersects.length > 0) {
            // Find the root object (planet or sun)
            let hoveredObject = intersects[0].object;
            while (hoveredObject.parent && !hoveredObject.userData.name) {
                hoveredObject = hoveredObject.parent;
            }

            // Show label if we have a name
            if (hoveredObject.userData.name) {
                this.hoverLabel.textContent = hoveredObject.userData.name;
                this.hoverLabel.style.opacity = '1';
                this.hoverLabel.style.left = event.clientX + 'px';
                this.hoverLabel.style.top = event.clientY + 'px';
            }
        } else {
            this.hoverLabel.style.opacity = '0';
        }
    }

    onCanvasClick(event) {
        console.log('Canvas clicked at:', event.clientX, event.clientY);

        // If we're already focused on an object, ignore clicks on other objects
        if (this.currentFocus) {
            console.log('Already focused on an object, ignoring click');
            return;
        }

        // Hide hover label immediately on click
        this.hoverLabel.style.opacity = '0';

        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );
        console.log('Normalized mouse position:', mouse.x, mouse.y);

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);

        // Check for intersections with both planets and orbits
        const allObjects = [
            ...Array.from(this.planets.values()),
            ...Array.from(this.orbits.values())
        ];
        console.log('Checking intersections with', allObjects.length, 'objects');
        const intersects = raycaster.intersectObjects(allObjects, true); // Include child objects
        console.log('Found', intersects.length, 'intersections');

        if (intersects.length > 0) {
            let selectedObject = intersects[0].object;

            // If we clicked an orbit, find its corresponding planet
            if (this.orbits.has(selectedObject.userData.planetName)) {
                const planet = this.planets.get(selectedObject.userData.planetName);
                this.focusOnObject(planet);
                return;
            }

            // If we clicked a child object (like Saturn's rings), get its parent planet
            if (!selectedObject.userData.name) {
                // Traverse up to find parent with userData.name
                let parent = selectedObject.parent;
                while (parent && !parent.userData.name) {
                    parent = parent.parent;
                }

                if (parent && parent.userData.name) {
                    selectedObject = parent; // Use parent planet
                }
            }

            // Don't look at the sun.
            if (selectedObject.userData.name === 'Sun') {
                return; // Seriously, not even the president of the USA should look directly at the sun.
            }

            this.focusOnObject(selectedObject);
        }
    }

    bezier(t, p0, p1, p2, p3) {
        const cX = 3 * (p1.x - p0.x);
        const bX = 3 * (p2.x - p1.x) - cX;
        const aX = p3.x - p0.x - cX - bX;

        const cY = 3 * (p1.y - p0.y);
        const bY = 3 * (p2.y - p1.y) - cY;
        const aY = p3.y - p0.y - cY - bY;

        const cZ = 3 * (p1.z - p0.z);
        const bZ = 3 * (p2.z - p1.z) - cZ;
        const aZ = p3.z - p0.z - cZ - bZ;

        const x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
        const y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
        const z = (aZ * Math.pow(t, 3)) + (bZ * Math.pow(t, 2)) + (cZ * t) + p0.z;

        return new THREE.Vector3(x, y, z);
    }

    focusOnObject(object) {
        const pauseButton = document.getElementById('pause-button');

        // Set current focus and disable zooming
        this.currentFocus = object;
        this.controls.enableZoom = false;

        // Show planet popover if it exists
        if (object.userData && object.userData.name) {
            this.showPlanetPopover(object.userData.name);
        }

        // Pause the animation
        this.isAnimating = false;
        this.targetAnimationFactor = 0.0;
        pauseButton.innerHTML = '<i class="fas fa-play"></i>';

        // Get viewport height and calculate the desired shift (negative to move up)
        const viewportHeight = window.innerHeight;
        const targetShift = -(viewportHeight * 0.36); // 36% up from center

        // Smoothly animate canvas position
        this.animateCanvasPosition(targetShift);

        // Add planet-focus class to body to show the bottom feather gradient via CSS
        document.body.classList.add('planet-focus');

        // Get current camera position
        const startPosition = this.camera.position.clone();

        // Get sun position (at 0,0,0) and direction from sun to planet
        const sunPosition = new THREE.Vector3(0, 0, 0);
        const sunToPlanetDirection = object.position.clone().sub(sunPosition).normalize();

        // Store this direction for use when resetting camera
        this.lastViewDirection = sunToPlanetDirection.clone();

        // Calculate desired distance based on object size
        const targetDistance = object.geometry.parameters.radius * 8;

        // Set target position between sun and planet, offset slightly above the orbital plane
        // This ensures we're looking at the illuminated side
        const targetPosition = object.position.clone().sub(
            sunToPlanetDirection.multiplyScalar(targetDistance)
        );

        // Significant vertical offset for better viewing angle
        // This helps avoid other planets blocking the view
        const heightFactor = 0.5; // Increased for an even higher viewing angle
        targetPosition.y += targetDistance * heightFactor;

        // Current distance for arc calculation
        const currentDistance = startPosition.distanceTo(object.position);

        // Create control points for a smooth arc
        const midPoint = startPosition.clone().lerp(targetPosition, 0.5);
        const arcHeight = Math.min(currentDistance * 0.2, 10); // Increased arc height for more dramatic swoop
        const midOffset = new THREE.Vector3(0, arcHeight, 0);

        const controlPoint1 = startPosition.clone().lerp(midPoint, 0.33).add(midOffset);
        const controlPoint2 = startPosition.clone().lerp(midPoint, 0.66).add(midOffset);

        const duration = 2200; // Increased duration for slower, smoother movement
        const startTime = performance.now();

        const animateCamera = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easeInOutCubic for smoother acceleration/deceleration
            const easedProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const position = this.bezier(
                easedProgress,
                startPosition,
                controlPoint1,
                controlPoint2,
                targetPosition
            );

            this.camera.position.copy(position);

            // Update look-at target
            // Create a target position slightly above the planet's center
            // This helps position the planet at 25% from the top of the screen
            const adjustedTarget = object.position.clone();
            adjustedTarget.y += object.geometry.parameters.radius * 0.5;
            this.controls.target.lerp(adjustedTarget, easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animateCamera);
            }
        };

        requestAnimationFrame(animateCamera);
    }

    resetCamera() {
        const pauseButton = document.getElementById('pause-button');

        // Reset planet-to-planet navigation flag when returning to solar system
        this.planetToPlaneNavigation = false;

        // Hide any visible planet popover
        this.hideAllPopovers();

        // Clear current focus and re-enable zooming
        this.currentFocus = null;
        this.controls.enableZoom = true;

        // Resume the animation
        this.isAnimating = true;
        this.targetAnimationFactor = 1.0;
        pauseButton.innerHTML = '<i class="fas fa-pause"></i>';

        // Reset canvas position and delay the feather gradient fade-out until after the animation completes
        this.animateCanvasPosition(0, () => {
            // Remove the planet-focus class to hide the bottom feather gradient via CSS
            // after the canvas movement is complete
            document.body.classList.remove('planet-focus');
        });

        // Get current camera position
        const startPosition = this.camera.position.clone();
        const startTarget = this.controls.target.clone();

        // Default target is center of solar system
        const endTarget = new THREE.Vector3(0, 0, 0);

        // Calculate target position based on the last view direction
        let targetPosition;

        if (this.lastViewDirection) {
            // Use the last view direction but from much further away
            // and higher up for a good overview
            const direction = this.lastViewDirection.clone();

            // Reverse the direction (we want to be on the lit side, far back)
            direction.negate();

            // Move higher up for a better overview
            direction.y += 0.7; // Increased for a higher angle to see Mercury better
            direction.normalize();

            // Position far back in that direction
            targetPosition = direction.multiplyScalar(40); // Increased distance for a wider view
        } else {
            // Fallback to default position if no previous direction
            targetPosition = new THREE.Vector3(0, 40, 55); // Higher and further back
        }
        const duration = 3000; // Slightly faster animation
        const startTime = performance.now();

        const animateReset = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            this.camera.position.lerpVectors(startPosition, targetPosition, eased);
            this.controls.target.lerpVectors(startTarget, endTarget, eased);

            if (progress < 1) {
                requestAnimationFrame(animateReset);
            }
        };

        requestAnimationFrame(animateReset);
    }

    // Animate the canvas position with smooth transition
    // Update the debug display with camera coordinates
    updateDebugDisplay() {
        const pos = this.camera.position;
        const roundTo = (num) => Math.round(num * 100) / 100; // Round to 2 decimal places
        this.debugDisplay.textContent = `Camera: X:${roundTo(pos.x)} Y:${roundTo(pos.y)} Z:${roundTo(pos.z)}`;
    }

    // Setup navigation for planet popovers
    setupPopoverNavigation() {
        // Setup event listeners for all home buttons in popovers
        document.querySelectorAll('.home-button').forEach(button => {
            button.addEventListener('click', () => {
                console.log('Home button clicked');
                this.resetCamera();
            });
        });

        // Setup event listeners for previous planet buttons
        document.querySelectorAll('.previous-button').forEach(button => {
            button.addEventListener('click', (event) => {
                // Get the button element (might have clicked on the icon inside)
                const buttonElement = event.target.closest('.previous-button');
                if (!buttonElement) return;

                const currentPopover = buttonElement.closest('.planet-popover');
                const currentPlanet = currentPopover.id.replace('-popover', '');

                // Extract planet name by removing the icon
                let planetName = buttonElement.textContent.trim();
                planetName = planetName.replace(/^\S+\s+/, ''); // Remove the icon text if any

                console.log(`Navigating from ${currentPlanet} to previous planet: ${planetName}`);
                this.focusOnPlanet(planetName);
            });
        });

        // Setup event listeners for next planet buttons
        document.querySelectorAll('.next-button').forEach(button => {
            button.addEventListener('click', (event) => {
                // Get the button element (might have clicked on the icon inside)
                const buttonElement = event.target.closest('.next-button');
                if (!buttonElement) return;

                const currentPopover = buttonElement.closest('.planet-popover');
                const currentPlanet = currentPopover.id.replace('-popover', '');

                // Extract planet name by removing the icon
                let planetName = buttonElement.textContent.trim();
                planetName = planetName.replace(/\s+\S+$/, ''); // Remove the icon text if any

                console.log(`Navigating from ${currentPlanet} to next planet: ${planetName}`);
                this.focusOnPlanet(planetName);
            });
        });
    }

    // Focus on a planet by name
    focusOnPlanet(planetName) {
        console.log(`Focusing on planet: ${planetName}`);

        // Get the planet object from the planets Map
        const planet = this.planets.get(planetName);

        if (!planet) {
            console.error(`Planet not found: ${planetName}`);
            return;
        }

        // Set a flag to indicate we're navigating between planets (not from solar system)
        this.planetToPlaneNavigation = true;

        // Focus on the planet object
        this.focusOnObject(planet);

        // Reset the flag after navigation
        setTimeout(() => {
            this.planetToPlaneNavigation = false;
        }, 100);
    }

    // Show a planet's popover
    showPlanetPopover(planetName) {
        // First hide any visible popovers
        this.hideAllPopovers();

        // Find the popover for this planet
        const popover = this.planetPopovers[planetName];
        if (!popover) {
            console.log(`No popover found for planet: ${planetName}`);
            console.log('Available popovers:', Object.keys(this.planetPopovers));
            return;
        }

        console.log(`Showing popover for ${planetName}`);

        // The bottom feather gradient visibility is now controlled via CSS

        // Remove hidden class first
        popover.classList.remove('hidden');

        // Check if we're navigating between planets
        if (this.planetToPlaneNavigation) {
            // For planet-to-planet navigation, skip the transition
            popover.style.transition = 'none';
            popover.classList.add('visible');
            // Force a reflow to apply the style change
            void popover.offsetWidth;
            // Reset transition after a short delay
            setTimeout(() => {
                popover.style.transition = '';
            }, 50);
        } else {
            // For solar system to planet navigation, use the transition
            // Force a reflow before adding the visible class
            void popover.offsetWidth;
            popover.classList.add('visible');
        }
    }

    // Hide all planet popovers
    hideAllPopovers() {
        Object.values(this.planetPopovers).forEach(popover => {
            // Check if we're navigating between planets
            if (this.planetToPlaneNavigation) {
                // For planet-to-planet navigation, skip the transition
                popover.style.transition = 'none';
                popover.classList.remove('visible');
                popover.classList.add('hidden');
                // Reset transition after a short delay
                setTimeout(() => {
                    popover.style.transition = '';
                }, 50);
            } else {
                // For planet to solar system navigation, use the transition
                popover.classList.remove('visible');
                // Add hidden class immediately for faster navigation
                setTimeout(() => {
                    if (!popover.classList.contains('visible')) {
                        popover.classList.add('hidden');
                    }
                }, 0);
            }
        });
    }

    animateCanvasPosition(targetPosition, callback = null) {
        const startPosition = parseFloat(this.canvas.style.transform?.replace('translateY(', '').replace('px)', '') || 0);
        const duration = 1000; // 1 second transition
        const startTime = performance.now();

        const animatePosition = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easeInOutCubic for smooth motion
            const easedProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const currentPosition = startPosition + (targetPosition - startPosition) * easedProgress;
            this.canvas.style.transform = `translateY(${currentPosition}px)`;

            if (progress < 1) {
                requestAnimationFrame(animatePosition);
            } else if (callback) {
                // Execute the callback when animation is complete
                callback();
            }
        };

        requestAnimationFrame(animatePosition);
    }
}

// Create a reactive reference to store the solar system instance
let solarSystemInstance = null;

// Create a computed property for the base URL
const baseUrl = computed(() => import.meta.env.BASE_URL);

// Initialize the solar system when the component is mounted
onMounted(() => {
  solarSystemInstance = new SolarSystem();
  console.log('Solar system initialized');
});

// Clean up when the component is unmounted
onBeforeUnmount(() => {
  if (solarSystemInstance) {
    // Remove event listeners
    window.removeEventListener('resize', solarSystemInstance.onWindowResize);
    
    // Clean up Three.js resources
    solarSystemInstance.clearCelestialObjects();
    
    // Dispose of renderer
    if (solarSystemInstance.renderer) {
      solarSystemInstance.renderer.dispose();
    }
    
    console.log('Solar system cleaned up');
  }
});

// Expose the instance for debugging
onMounted(() => {
  window.solarSystem = solarSystemInstance;
});

</script>

<template>
    <!-- FontAwesome and Google Fonts should be added to the main index.html file instead -->
    <div id="loading-screen">
        <div id="loading-ring"></div>
    </div>

    <button id="pause-button"><i class="fas fa-pause"></i></button>
    <div id="debug-display">Camera: X:0 Y:0 Z:0</div>

    <!-- 3D Canvas -->
    <div id="canvas">
        <div id="planet-label"></div>
        <div id="bottom-feather"></div>
    </div>

    <!-- Planet Popovers -->
    <div class="planet-popovers">
        <div id="Mercury-popover" class="planet-popover">
            <div class="popover-header">Mercury</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/mercury.webp'"
                        alt="Mercury is gray with bright white patches, and craters visible in this image from the MESSENGER spacecraft.">
                    <figcaption>Source: <a href="https://science.nasa.gov/solar-system/planets/">NASA</a></figcaption>
                </figure>

                <table>
                    <tr>
                        <th>Type</th>
                        <td>Terrestrial</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            58 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            4879 km <br>
                            Smallest planet in the solar system.
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>88 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. 430&deg;C <br>
                            Min. &minus;180&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            38% of Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            Solid surface-rock with volcanic activity.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div style="grid-column: 1; visibility: hidden;" class="previous-button"><i
                        class="fas fa-arrow-left"></i> Sun</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Venus <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Venus-popover" class="planet-popover">
            <div class="popover-header">Venus</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/venus.webp'" alt="A serene-looking Venus with creamy white, and tan clouds.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Terrestrial</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            107.82 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            12,104 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>24.7 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. 465&deg;C <br>
                            Min. &minus;173&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            90% of Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            Solid surface-rock with volcanic activity.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Mercury</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Earth <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Earth-popover" class="planet-popover">
            <div class="popover-header">Earth</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/earth.webp'"
                        alt="A view of Earth from Apollo 17 showing the blue ocean, reddish brown landmasses, and wispy, white clouds.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Terrestrial</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            149.6 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            12,742 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>365 days</td>
                        <!-- Should we be more specific? -->
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. 56.7&deg;C <br>
                            Min. &minus;89&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            9.8 m/s
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Nitrogen (78%), Oxygen (21%), Argon (0.93%), green house gases (0.04%) </td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>1 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            Solid-rock surface with volcanic activity.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Venus</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Mars <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Mars-popover" class="planet-popover">
            <div class="popover-header">Mars</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/mars.webp'"
                        alt="Mars is a reddish brown in this image from a spacecraft. A deep gash is visible across the center of the planet.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Terrestrial</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            228 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            6779 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>687 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. 20&deg;C <br>
                            Min. &minus;60&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            62% of Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Mostly CO2, nitrogen, Argon</td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>2 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            Solid-rock surface that may have had volcanic activity.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Earth</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Jupiter <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Jupiter-popover" class="planet-popover">
            <div class="popover-header">Jupiter</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/jupiter.webp'"
                        alt="A view of Jupiter's Great Red Spot and colorful cloud bands of tan, brown, white, and orange as seen from the Juno spacecraft.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Jovian</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            778 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            142,984 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>12 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. &minus;166&deg;C <br>
                            Min. &minus;145&deg;C (Clouds)
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            2.4 &times; Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Hydrogen, helium, water, methane and ammonia</td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>95 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            No solid-rock surface. It is composed by an ocean made primary of metallic hydrogen.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Mars</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Saturn <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Saturn-popover" class="planet-popover">
            <div class="popover-header">Saturn</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/saturn.webp'"
                        alt="A view of Saturn from the Cassini spacecraft shows the golden planet with its rings.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Jovian</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            1439.2 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            12,0536 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>29.4 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. &minus;122&deg;C <br>
                            Min. &minus;185&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            1.065&ndash;1.08 &times; Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Hydrogen (75%), helium (25%), water ice and methane</td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>146 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            No solid-rock surface. It is composed by gas.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Jupiter</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Uranus <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Uranus-popover" class="planet-popover">
            <div class="popover-header">Uranus</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/uranus.webp'"
                        alt="Pale blue planet Uranus is seen against the darkness of space in an image from the Voyager 2 spacecraft.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Jovian</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            2923.6 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            50,724 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>84 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. &minus;320&deg;C <br>
                            Min. &minus;372&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            88.6% of Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Hydrogen (83%), helium (15%), and methane (2%)</td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>28 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            No solid-rock surface. It is composed by gas.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Saturn</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button">Neptune <i class="fas fa-arrow-right"></i></div>
            </div>
        </div>

        <div id="Neptune-popover" class="planet-popover">
            <div class="popover-header">Neptune</div>
            <div class="popover-body">
                <figure>
                    <img :src="baseUrl + 'planets/img/neptune.webp'" alt="Neptune is blue and banded with clouds and storms.">
                    <figcaption>Source: <a href="">NASA</a></figcaption>
                </figure>
                <table>
                    <tr>
                        <th>Type</th>
                        <td>Jovian</td>
                    </tr>
                    <tr>
                        <th>Distance from sun</th>
                        <td>
                            4471.4 million km
                        </td>
                    </tr>
                    <tr>
                        <th>Diameter</th>
                        <td>
                            49,244 km
                        </td>
                    </tr>
                    <tr>
                        <th>Orbit</th>
                        <td>165 Earth days</td>
                    </tr>
                    <tr>
                        <th>Surface temperature</th>
                        <td>
                            Max. &minus;201&deg;C <br>
                            Min. &minus;218&deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>Gravity</th>
                        <td>
                            14% times Earth's
                        </td>
                    </tr>
                    <tr>
                        <th>Atmosphere</th>
                        <td>Hydrogen (80%), helium (19%), and methane (1.5%)</td>
                    </tr>
                    <tr>
                        <th>Moons</th>
                        <td>16 (Not shown)</td>
                    </tr>
                    <tr>
                        <th>Surface</th>
                        <td>
                            No solid-rock surface. It is composed by ice.
                        </td>
                    </tr>
                </table>
            </div>
            <div class="planet-nav-container">
                <div class="previous-button"><i class="fas fa-arrow-left"></i> Uranus</div>
                <div class="home-button"><i class="fas fa-solar-system"></i></div>
                <div class="next-button" style="visibility:hidden">Pluto<i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
    </div>


    <!-- Import map is not needed here as we're using npm modules -->
</template>

<style>
body {
    margin: 0;
    overflow: hidden;
    background: #000;
    font-family: 'Lato Extended', 'Lato', Helvetica, Arial, sans-serif;
}

#canvas {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    /* Lower z-index so popovers can appear above */
}

#back-button {
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    backdrop-filter: blur(5px);
}

#back-button:hover,
#pause-button:hover {
    background: rgba(255, 255, 255, 0.3);
}

#pause-button {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    backdrop-filter: blur(5px);
    z-index: 10001;
    /* Higher than loading screen */
    transition: opacity 0.5s ease, background 0.3s ease;
    font-size: 16px;
}

.hover-label {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    pointer-events: none;
    transition: opacity 0.2s;
    opacity: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10000;
    transform: translate(-50%, -100%);
    margin-top: -10px;
}

#planet-label {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
}

#bottom-feather {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200px;
    /* Height of the gradient */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    pointer-events: none;
    /* Allow clicking through */
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 5000;
}

/* Show feather when a planet is in focus */
body.planet-focus #bottom-feather {
    opacity: 1;
}

#debug-display {
    display: none;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #00ff00;
    font-family: monospace;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 4px;
    z-index: 9999;
    pointer-events: none;
}

#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 1.5s ease;
}

#loading-ring {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #ffaa00;
    animation: spin 1.5s linear infinite, pulse 2s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(255, 150, 0, 0.5);
}

/* Planet Popovers Styling */
.planet-popovers {
    position: fixed;
    top: 33%;
    left: 0;
    width: 100%;
    pointer-events: none;
    /* Default is none to let clicks pass through */
    z-index: 2000;
    /* Higher than canvas but lower than UI elements */
}

/* This ensures clicks work on visible popovers */
.planet-popovers .planet-popover.visible {
    pointer-events: auto;
}

.planet-popover {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    max-width: 600px;
    max-height: 61vh;
    margin: 0 auto;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    color: #080620;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 2000;
}

.planet-popover.hidden {
    display: none;
}

.planet-popover.visible {
    opacity: 1;
    pointer-events: auto;
    /* Enable interaction when visible */
}

/* Planet navigation buttons */
.planet-nav-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.previous-button,
.home-button,
.next-button {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid lightgrey;
    color: #080620;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
}

.previous-button:hover,
.home-button:hover,
.next-button:hover {
    background-color: #B8ADFF;
    /* transform: scale(1.05); */
}

.fa-arrow-left {
    margin-right: 6px;
}

.fa-arrow-right {
    margin-left: 6px;
}

.previous-button {
    justify-self: start;
}

.home-button {
    justify-self: center;
}

.next-button {
    justify-self: end;
}

.popover-header {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    font-weight: bold;
    font-size: 18px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #CDC4FF;
    text-align: center;
}

.popover-body {
    padding: 15px;
    font-size: 14px;
    line-height: 1.5;
    overflow: auto;
}

.popover-body img {
    width: 100%;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        width: 100px;
        height: 100px;
        box-shadow: 0 0 20px rgba(255, 150, 0, 0.5);
    }

    50% {
        width: 110px;
        height: 110px;
        box-shadow: 0 0 30px rgba(255, 180, 0, 0.7);
    }
}

table th {
    text-align: left;
    vertical-align: top;
    padding-right: 16px;
}

table td {
    text-align: left;
    vertical-align: top;
    padding-bottom: 12px;
}

table {
    padding-left: max(16px, 0);
}

figcaption,
figcaption a,
figcaption a:visited {
    text-align: center;
    color: rgb(46, 46, 46)
}
</style>