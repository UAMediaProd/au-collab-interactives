import{r as g,c as b,o as h,d as o,a as s,f as l,v as e,w as n,g as M,b as y,T as c,n as i,e as u,F as C}from"./index-C9FPHhQW.js";import{R as k,H as w}from"./RotateDeviceBanner-BCSmb1fQ.js";import{_ as x}from"./GraphLabel-DlM9PN2Q.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $={id:"graph",class:"max-w-[900px] mx-auto flex flex-col select-none overflow-x-hidden"},B={class:"flex justify-between items-center"},T={class:"flex-auto relative"},_={class:"absolute inset-0 h-full w-full flex pointer-events-none"},z={xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 405 343.7"},q={class:"quartz"},D={class:"quartz"},H={class:"cls-2 bedload glow",d:"M32,308.1c50.2-25,103.3-48.2,158.9-55.9,11.5-1.6,23.4-1.5,34.3-5.4,29.8-10.7,47.8-27.7,77.2-39.6,15.4-6.2,62.6-29.1,78.6-35.1"},V={class:"cls-2 suspended glow",d:"M187.4,252.7c21.7-27.8,44-55.3,73.9-74,8.1-5.1,16.7-9.3,25.3-13.5,32-15.7,61.8-29.6,94.4-44.1"},N={class:"cls-2 washload glow",d:"M129.3,266.6c16.3-30.5,35.6-59.3,55.7-87.5,14.1-19.9,28.8-39.8,46.6-56.4,24.5-22.8,49.2-34.1,79.4-48.6,20.6-9.9,48.4-24.5,70-32"},P={class:"basalt"},S={class:"basalt"},E={class:"cls-3 bedload",d:"M32,319.1c60.1-28.9,120.3-53.5,184.8-62.2,9.3-1.3,22.8-4.5,31.2-8.8,12-6,21.6-11.1,31-17,23.2-14.5,42.8-20.9,67.9-31.7,11.9-5.2,22.2-10.1,34.1-15.3"},F={class:"cls-3 suspended",d:"M195,260.1c22.7-35.1,52.6-63.5,90-83,23-12,87.7-41.2,96-45"},j={class:"cls-3 washload",d:"M381,54.1c-100,41-131.2,67.3-137,72-10.7,8.7-19.4,19.5-28.3,30-28.1,32.9-59.8,80.1-78.7,119"},O={class:"organics"},W={class:"organics"},R={class:"cls-4 bedload",d:"M50.4,321c33-15,66.9-28.2,101.4-39.4,13.9-4.5,24.6-5.7,39.1-7.5,16.2-2,35-5.7,50-12,5.7-2.4,17.6-9.9,23-13,42-24,73-33,117-54"},I={class:"cls-4 suspended",d:"M189,274.1c20.3-34,51.8-61.1,86-81s70.4-32.6,106-50"},L={class:"cls-4 washload",d:"M130,289c7.1-16,17.2-32,26.7-46.7,23.7-36.6,46.7-74.4,80.3-102.2,29.7-24.6,66.5-40,101.6-55.8,14.3-6.4,28.1-12.7,42.4-19.2"},Q={class:"water"},A={class:"water"},J={class:"cls-5 bedload",d:"M71.3,322.5c41.3-18.9,76.3-35.4,123.7-42.4,18.5-2.7,41.9-5.5,59-13,14.4-6.3,26-17,39.5-25,8.4-5,17.5-8.8,26.5-12.6,20.6-8.8,41.3-17.6,62-26.4"},K={class:"cls-5 suspended",d:"M195.3,280.1c20.2-33,47.7-60,83.7-80,33.8-18.8,66.1-33.7,102-48"},U={class:"cls-5 washload",d:"M139.1,293.9c26-50,47.4-83.2,77.9-120.8,5.7-7,11.7-13.6,18-20,27-27.6,110.5-63.9,146-79"},X={class:"flex justify-center"},Y={class:"bg-primary-lighter p-5 pb-2 mb-5 rounded max-w-xl"},Z={class:"flex flex-col sm:flex-row sm:flex-wrap justify-center"},ss={class:"w-5 inline-block text-center"},as={class:"w-5 inline-block text-center"},ts={class:"w-5 inline-block text-center"},ls={class:"w-5 inline-block text-center"},es={class:"w-5 inline-block text-center"},ns={class:"w-5 inline-block text-center"},os={__name:"ETGeoParticleMovementInFluids",setup(ds){const d=g({quartz:!0,basalt:!0,organics:!0,water:!0,labels:!0,hotspots:!0}),t=g({washload:!1,suspended:!1,bedload:!1}),f=v=>{d.value[v]=!d.value[v]},m=v=>{t.value[v]=!t.value[v]};return(v,a)=>{const p=M("VDropdown");return h(),b(C,null,[o(k,{class:"sm:hidden"}),a[45]||(a[45]=s("h2",{class:"text-4xl sm:text-5xl text-center text-primary p-3 sm:p-5"},"Particle movement in fluids",-1)),s("div",$,[s("div",B,[a[31]||(a[31]=s("div",{class:"rotated-text-container"},[s("span",{class:"rotated-text px-3 sm:p-5 sm:text-xl text-primary"}," Frictional shear velocity (cm/s) ")],-1)),s("div",T,[l(s("div",{class:"absolute inset-0 h-full w-full flex",onClick:a[0]||(a[0]=r=>t.value.washload=t.value.bedload=t.value.suspended=!1)},[o(p,{placement:"top",distance:"32",class:"absolute top-[88%] left-[29%]"},{popper:n(()=>a[16]||(a[16]=[s("p",{class:"p-4 max-w-md"}," Why is this part of the graph only showing bedload? ",-1)])),default:n(()=>[o(w)]),_:1}),o(p,{placement:"top",distance:"32",class:"absolute top-[59%] left-[89%]"},{popper:n(()=>a[17]||(a[17]=[s("p",{class:"p-4 max-w-md"}," Why do you think you need less energy/lower flow to move large organic particles as bedload on Titan compared to on Mars? ",-1)])),default:n(()=>[o(w)]),_:1}),o(p,{placement:"top",distance:"32",class:"absolute top-[38%] left-[55%]"},{popper:n(()=>a[18]||(a[18]=[s("p",{class:"p-4 max-w-md"}," Why do you think you need more energy/higher flow to move a 1mm particle in a washload on Earth compared to on Mars? ",-1)])),default:n(()=>[o(w)]),_:1})],512),[[e,d.value.hotspots]]),l(s("div",_,[o(p,{placement:"top",distance:"32",class:"absolute top-[27%] left-[76%]"},{popper:n(()=>a[20]||(a[20]=[s("p",{class:"p-4 max-w-md"}," Particles remain suspended throughout the water column, even in slow flows. ",-1)])),default:n(()=>[o(x,{onMouseover:a[1]||(a[1]=r=>t.value.washload=!0),onMouseleave:a[2]||(a[2]=r=>t.value.washload=!1),onTouchend:a[3]||(a[3]=r=>m("washload"))},{default:n(()=>a[19]||(a[19]=[u(" Washload ")])),_:1})]),_:1}),o(p,{placement:"top",distance:"32",class:"absolute top-[48%] left-[76%]"},{popper:n(()=>a[22]||(a[22]=[s("p",{class:"p-4 max-w-md"}," Particles are suspended in the water column close to the bed surface. ",-1)])),default:n(()=>[o(x,{onMouseover:a[4]||(a[4]=r=>t.value.suspended=!0),onMouseleave:a[5]||(a[5]=r=>t.value.suspended=!1),onTouchend:a[6]||(a[6]=r=>m("suspended"))},{default:n(()=>a[21]||(a[21]=[u("Suspended load ")])),_:1})]),_:1}),o(p,{placement:"top",distance:"32",class:"absolute top-[64%] left-[76%]"},{popper:n(()=>a[24]||(a[24]=[s("p",{class:"p-4 max-w-md"}," Particles roll or slide along in contact with the bed surface. ",-1)])),default:n(()=>[o(x,{onMouseover:a[7]||(a[7]=r=>t.value.bedload=!0),onMouseleave:a[8]||(a[8]=r=>t.value.bedload=!1),onTouchend:a[9]||(a[9]=r=>m("bedload"))},{default:n(()=>a[23]||(a[23]=[u("Bedload")])),_:1})]),_:1}),o(p,{placement:"top",distance:"32",class:"absolute top-[82%] left-[76%]"},{popper:n(()=>a[26]||(a[26]=[s("p",{class:"p-4 max-w-md"}," Particles do not move. ",-1)])),default:n(()=>[o(x,null,{default:n(()=>a[25]||(a[25]=[u(" No motion ")])),_:1})]),_:1})],512),[[e,d.value.labels]]),(h(),b("svg",z,[a[30]||(a[30]=y('<defs data-v-6209666f><filter id="glow-quartz" x="-50%" y="-50%" width="200%" height="200%" data-v-6209666f><feGaussianBlur in="SourceGraphic" stdDeviation="3" data-v-6209666f></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.8   0 0 0 0 0.2   0 0 0 0 0.8  0 0 0 1 0" data-v-6209666f></feColorMatrix></filter><filter id="glow-basalt" x="-50%" y="-50%" width="200%" height="200%" data-v-6209666f><feGaussianBlur in="SourceGraphic" stdDeviation="3" data-v-6209666f></feGaussianBlur><feColorMatrix type="matrix" values="1 0 0 0 0.2   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0" data-v-6209666f></feColorMatrix></filter><filter id="glow-organics" x="-50%" y="-50%" width="200%" height="200%" data-v-6209666f><feGaussianBlur in="SourceGraphic" stdDeviation="3" data-v-6209666f></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0   0.8 0 0 0 0.2   0 0 0 0 0  0 0 0 1 0" data-v-6209666f></feColorMatrix></filter><filter id="glow-water" x="-50%" y="-50%" width="200%" height="200%" data-v-6209666f><feGaussianBlur in="SourceGraphic" stdDeviation="3" data-v-6209666f></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0   0.2 0 0 0 0.2   1 0 0 0 0.2  0 0 0 1 0" data-v-6209666f></feColorMatrix></filter></defs>',1)),s("g",null,[a[28]||(a[28]=y('<g id="Text" data-v-6209666f><text class="cls-1" transform="translate(11.9 341.5)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>0.001</tspan></text><text class="cls-1" transform="translate(86.9 341.5)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>0.01</tspan></text><text class="cls-1" transform="translate(164.9 341.5)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>0.1</tspan></text><text class="cls-1" transform="translate(243.9 341.5)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>1</tspan></text><text class="cls-1" transform="translate(310 341.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(0 268.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 265.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>0</tspan></text><text class="cls-1" transform="translate(0 325.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 322.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>-1</tspan></text><text class="cls-1" transform="translate(0 205.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 202.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>1</tspan></text><text class="cls-1" transform="translate(0 136.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 133.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>2</tspan></text><text class="cls-1" transform="translate(0 74.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 71.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>3</tspan></text><text class="cls-1" transform="translate(0 12.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(11.6 9.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>4</tspan></text><text class="cls-1" transform="translate(390 273.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(401.6 270.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>1</tspan></text><text class="cls-1" transform="translate(389 206.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(400.6 203.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>2</tspan></text><text class="cls-1" transform="translate(389 141.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(400.6 138.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>3</tspan></text><text class="cls-1" transform="translate(389 76.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(400.6 73.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>4</tspan></text><text class="cls-1" transform="translate(389 11.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>10</tspan></text><text class="cls-1" transform="translate(400.6 8.6) scale(.6)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>5</tspan></text><text class="cls-1" transform="translate(373 341.9)" data-v-6209666f><tspan x="0" y="0" data-v-6209666f>100</tspan></text></g>',1)),o(c,{name:"fade"},{default:n(()=>[s("g",null,[l(s("g",q,a[27]||(a[27]=[s("path",{class:"cls-2 bedload",d:"M32,308.1c50.2-25,103.3-48.2,158.9-55.9,11.5-1.6,23.4-1.5,34.3-5.4,29.8-10.7,47.8-27.7,77.2-39.6,15.4-6.2,62.6-29.1,78.6-35.1"},null,-1),s("path",{class:"cls-2 suspended",d:"M187.4,252.7c21.7-27.8,44-55.3,73.9-74,8.1-5.1,16.7-9.3,25.3-13.5,32-15.7,61.8-29.6,94.4-44.1"},null,-1),s("path",{class:"cls-2 washload",d:"M129.3,266.6c16.3-30.5,35.6-59.3,55.7-87.5,14.1-19.9,28.8-39.8,46.6-56.4,24.5-22.8,49.2-34.1,79.4-48.6,20.6-9.9,48.4-24.5,70-32"},null,-1)]),512),[[e,d.value.quartz]]),l(s("g",D,[l(s("path",H,null,512),[[e,t.value.bedload]]),l(s("path",V,null,512),[[e,t.value.suspended]]),l(s("path",N,null,512),[[e,t.value.washload]])],512),[[e,d.value.quartz]])])]),_:1}),o(c,{name:"fade"},{default:n(()=>[s("g",null,[l(s("g",P,[s("path",{class:i(["cls-3 bedload",t.value.bedload?"glow":""]),d:"M32,319.1c60.1-28.9,120.3-53.5,184.8-62.2,9.3-1.3,22.8-4.5,31.2-8.8,12-6,21.6-11.1,31-17,23.2-14.5,42.8-20.9,67.9-31.7,11.9-5.2,22.2-10.1,34.1-15.3"},null,2),s("path",{class:i(["cls-3 suspended",t.value.suspended?"glow":""]),d:"M195,260.1c22.7-35.1,52.6-63.5,90-83,23-12,87.7-41.2,96-45"},null,2),s("path",{class:i(["cls-3 washload",t.value.washload?"glow":""]),d:"M381,54.1c-100,41-131.2,67.3-137,72-10.7,8.7-19.4,19.5-28.3,30-28.1,32.9-59.8,80.1-78.7,119"},null,2)],512),[[e,d.value.basalt]]),l(s("g",S,[l(s("path",E,null,512),[[e,t.value.bedload]]),l(s("path",F,null,512),[[e,t.value.suspended]]),l(s("path",j,null,512),[[e,t.value.washload]])],512),[[e,d.value.basalt]])])]),_:1}),o(c,{name:"fade"},{default:n(()=>[s("g",null,[l(s("g",O,[s("path",{class:i(["cls-4 bedload",t.value.bedload?"glow":""]),d:"M50.4,321c33-15,66.9-28.2,101.4-39.4,13.9-4.5,24.6-5.7,39.1-7.5,16.2-2,35-5.7,50-12,5.7-2.4,17.6-9.9,23-13,42-24,73-33,117-54"},null,2),s("path",{class:i(["cls-4 suspended",t.value.suspended?"glow":""]),d:"M189,274.1c20.3-34,51.8-61.1,86-81s70.4-32.6,106-50"},null,2),s("path",{class:i(["cls-4 washload",t.value.washload?"glow":""]),d:"M130,289c7.1-16,17.2-32,26.7-46.7,23.7-36.6,46.7-74.4,80.3-102.2,29.7-24.6,66.5-40,101.6-55.8,14.3-6.4,28.1-12.7,42.4-19.2"},null,2)],512),[[e,d.value.organics]]),l(s("g",W,[l(s("path",R,null,512),[[e,t.value.bedload]]),l(s("path",I,null,512),[[e,t.value.suspended]]),l(s("path",L,null,512),[[e,t.value.washload]])],512),[[e,d.value.organics]])])]),_:1}),o(c,{name:"fade"},{default:n(()=>[s("g",null,[l(s("g",Q,[s("path",{class:i(["cls-5 bedload",t.value.bedload?"glow":""]),d:"M71.3,322.5c41.3-18.9,76.3-35.4,123.7-42.4,18.5-2.7,41.9-5.5,59-13,14.4-6.3,26-17,39.5-25,8.4-5,17.5-8.8,26.5-12.6,20.6-8.8,41.3-17.6,62-26.4"},null,2),s("path",{class:i(["cls-5 suspended",t.value.suspended?"glow":""]),d:"M195.3,280.1c20.2-33,47.7-60,83.7-80,33.8-18.8,66.1-33.7,102-48"},null,2),s("path",{class:i(["cls-5 washload",t.value.washload?"glow":""]),d:"M139.1,293.9c26-50,47.4-83.2,77.9-120.8,5.7-7,11.7-13.6,18-20,27-27.6,110.5-63.9,146-79"},null,2)],512),[[e,d.value.water]]),l(s("g",A,[l(s("path",J,null,512),[[e,t.value.bedload]]),l(s("path",K,null,512),[[e,t.value.suspended]]),l(s("path",U,null,512),[[e,t.value.washload]])],512),[[e,d.value.water]])])]),_:1}),a[29]||(a[29]=y('<g id="Graph_border_and_lines" data-v-6209666f><polyline class="cls-6" points="384.5 6.6 384.5 325.6 26.5 325.6 26.5 6.6" data-v-6209666f></polyline><line class="cls-6" x1="26.5" y1="69.6" x2="36.5" y2="69.6" data-v-6209666f></line><line class="cls-6" x1="26.5" y1="134.6" x2="36.5" y2="134.6" data-v-6209666f></line><line class="cls-6" x1="26.5" y1="199.6" x2="36.5" y2="199.6" data-v-6209666f></line><line class="cls-6" x1="26.5" y1="264.6" x2="36.5" y2="264.6" data-v-6209666f></line><line class="cls-6" x1="374.5" y1="73.6" x2="384.5" y2="73.6" data-v-6209666f></line><line class="cls-6" x1="374.5" y1="138.6" x2="384.5" y2="138.6" data-v-6209666f></line><line class="cls-6" x1="374.5" y1="203.6" x2="384.5" y2="203.6" data-v-6209666f></line><line class="cls-6" x1="374.5" y1="268.6" x2="384.5" y2="268.6" data-v-6209666f></line><line class="cls-6" x1="317.5" y1="315.6" x2="317.5" y2="325.6" data-v-6209666f></line><line class="cls-6" x1="244.2" y1="315.6" x2="244.2" y2="325.6" data-v-6209666f></line><line class="cls-6" x1="170.8" y1="315.6" x2="170.8" y2="325.6" data-v-6209666f></line><line class="cls-6" x1="97.5" y1="315.6" x2="97.5" y2="325.6" data-v-6209666f></line></g>',1))])]))]),a[32]||(a[32]=s("div",{class:"rotated-text-container"},[s("span",{class:"rotated-text px-3 sm:p-5 sm:text-xl text-primary"}," Mean flow velocity (cm/s) ")],-1))]),a[44]||(a[44]=s("div",{class:"flex justify-center"},[s("span",{class:"py-3 sm:p-5 sm:text-xl text-primary"},"Grain diameter (mm)")],-1)),s("div",X,[s("div",Y,[a[43]||(a[43]=s("p",{class:"text-center text-lg pb-2"},[s("strong",null,"Visibility toggles")],-1)),s("div",Z,[s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[10]||(a[10]=r=>f("quartz"))},[s("span",ss,[s("i",{class:i(["fal",d.value.quartz?"fa-eye":"fa-eye-slash"])},null,2)]),a[33]||(a[33]=s("span",{class:"w-4 h-4 ml-2 bg-[#93278f] rounded-full"},null,-1)),a[34]||(a[34]=s("span",{class:"ml-2"},[u("Quartz in H"),s("sub",null,"2"),u("O on Earth")],-1))]),s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[11]||(a[11]=r=>f("basalt"))},[s("span",as,[s("i",{class:i(["fal",d.value.basalt?"fa-eye":"fa-eye-slash"])},null,2)]),a[35]||(a[35]=s("span",{class:"w-4 h-4 ml-2 bg-[#ed1c24] rounded-full"},null,-1)),a[36]||(a[36]=s("span",{class:"ml-2"},[u("Basalt in H"),s("sub",null,"2"),u("O on Mars")],-1))]),s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[12]||(a[12]=r=>f("organics"))},[s("span",ts,[s("i",{class:i(["fal",d.value.organics?"fa-eye":"fa-eye-slash"])},null,2)]),a[37]||(a[37]=s("span",{class:"w-4 h-4 ml-2 bg-[#09892a] rounded-full"},null,-1)),a[38]||(a[38]=s("span",{class:"ml-2"},[u("Organics in CH"),s("sub",null,"4"),u("N"),s("sub",null,"2"),u(" on Titan")],-1))]),s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[13]||(a[13]=r=>f("water"))},[s("span",ls,[s("i",{class:i(["fal",d.value.water?"fa-eye":"fa-eye-slash"])},null,2)]),a[39]||(a[39]=s("span",{class:"w-4 h-4 ml-2 bg-[#1448ff] rounded-full"},null,-1)),a[40]||(a[40]=s("span",{class:"ml-2"},[u("H"),s("sub",null,"2"),u("O in CH"),s("sub",null,"4"),u("N"),s("sub",null,"2"),u(" on Titan")],-1))]),s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[14]||(a[14]=r=>f("labels"))},[s("span",es,[s("i",{class:i(["fal",d.value.labels?"fa-eye":"fa-eye-slash"])},null,2)]),a[41]||(a[41]=s("span",{class:"ml-2"},"Load labels",-1))]),s("button",{class:"p-3 rounded inline-flex items-center hover:bg-primary-light/10",onClick:a[15]||(a[15]=r=>f("hotspots"))},[s("span",ns,[s("i",{class:i(["fal",d.value.hotspots?"fa-eye":"fa-eye-slash"])},null,2)]),a[42]||(a[42]=s("span",{class:"ml-2"},"Hotspots",-1))])])])])])],64)}}},fs=G(os,[["__scopeId","data-v-6209666f"]]);export{fs as default};
