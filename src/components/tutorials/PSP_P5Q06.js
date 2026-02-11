// 07 Prac 5 Question 6 Solution
export default {
    code: `index1 = 0
index2 = 0

input1 = int(input("Enter an integer: "))
input2 = int(input("Enter another integer: "))

while index1 < input1:
    while index2 < input2:
        print("#", end="")
        index2 = index2 + 1
    print()
    index2 = 0
    index1 = index1 + 1`,
    steps: [
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>`,
        },
        {
            explanation: `<p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>`,
        },
        {
            explanation: `
            <p>Initialising variables.</p>
            <p>We can see by looking ahead that <code>index1</code> will help control an outer loop, while <code>index2</code> will control an inner loop.</p>
            `,
            highlightLines: [0, 1]
        },
        {
            explanation: `
            <p>The user inputs two integers.</p>
            `,
            highlightLines: [3, 4],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            `,
        },
        {
            explanation: `
            <p>We enter the outer loop...</p>
            `,
            highlightLines: [6],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline"><p>Begin loop</p></div>
            `,
        },
        {
            explanation: `
            <p>Then enter the inner loop...</p>
            `,
            highlightLines: [7],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                </div>
            </div>
            `,
        },
        {
            explanation: `
            <p>...and display a '#' symbol.</p>
            `,
            highlightLines: [8],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
            </div>
            `,
        },
        {
            explanation: `
            <p>This is the last indented line inside the inner loop.</p>
            <p>Notice that:</p>
            <ul>
                <li><code>index2</code> was initially 0.</li>
                <li><code>index2</code> increments by 1 each cycle.</li>
                <li>The inner loop condition was while <code>index2&lt;input2</code>.</li>
            </ul>
            <p>Therefore this loop executes <code>input2</code> times.</p>
            `,
            highlightLines: [9],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
            </div>
            `,
        },
        {
            explanation: `
            <p>An empty <code>print()</code> call is used to create a new line.</p>
            `,
            highlightLines: [10],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>This line resets <code>index2</code> to its initial value of 0</p>
            <p>This ensures that the inner loop will always behave the same way on each cycle of the outer loop.</p>
            `,
            highlightLines: [11],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>This is the last indented line inside the outer loop.</p>
            <p>Notice that:</p>
            <ul>
                <li><code>index1</code> was initially 0.</li>
                <li><code>index1</code> increments by 1 each cycle.</li>
                <li>The outer loop condition was while <code>index1&lt;input1</code>.</li>
            </ul>
            <p>Therefore this loop executes <code>input1</code> times.</p>
            `,
            highlightLines: [12],
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>The program ends after final execution of the outer loop.</p>
            <p>Now let's review our diagram and try to describe the program's function in plain English.</p>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `
            <p>This program...</p>
            <ul>
                <li>Prompts for two integers</li>
            </ul>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `
            <p>This program...</p>
            <ul>
                <li>Prompts for two integers</li>
                <li>A line of '#' characters is displayed with width equal to the second integer</li>
            </ul>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `
            <p>This program...</p>
            <ul>
                <li>Prompts for two integers</li>
                <li>A line of '#' characters is displayed with width equal to the second integer</li>
                <li>Followed by dropping to a new line where the process repeats.</li> 
            </ul>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `
            <p>This program...</p>
            <ul>
                <li>Prompts for two integers</li>
                <li>A line of '#' characters is displayed with width equal to the second integer</li>
                <li>Followed by dropping to a new line where the process repeats.</li> 
                <li>This repeats until the number of lines reaches the first integer, at which point the program ends.</li>
            </ul>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
                <div class="flowchart-outline">
                    <p>Begin loop</p>
                    <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
                    <div class="flowchart-solid">Display a '#'.</div>
                </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 3:</strong> Execute the code to verify what happens.</p>
            `,
            info: `
            <div class="flowchart-solid">Obtain integers <code>input1</code> and <code>input2</code> from the user.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size: 0.8rem;">Number of iterations = <code>input1</code></p>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size: 0.8rem;">Number of iterations = <code>input2</code></p>
            <div class="flowchart-solid">Display a '#'.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display goes to the next line.</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Program ends.</div>
            `,
        },
        // =============================================
        // Code step-through section
        // Scenario: input1 = 3, input2 = 5
        // Output: 3 rows of 5 '#' characters
        // =============================================
        {
            explanation: `<p>Let's trace through the code step by step using the inputs <code>3</code> and <code>5</code>.</p>`,
            highlightLines: [],
            boxes: [
                {
                    title: "Memory",
                    values: {}
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        // --- Initialisation ---
        {
            explanation: `<p>Initialise <code>index1</code> to <code>0</code>. This variable will control the outer loop — it tracks which row we are currently on.</p>`,
            highlightLines: [0],
            boxes: [
                {
                    title: "Memory",
                    values: {}
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        {
            explanation: `<p>Initialise <code>index2</code> to <code>0</code>. This variable will control the inner loop — it tracks how many <code>'#'</code> characters have been printed on the current row.</p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": { value: 0, highlight: true } },
                    connections: [
                        { from: "index1", toKey: "index1" }
                    ]
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        // --- Input 1 ---
        {
            explanation: `<p>The <code>input()</code> function displays the prompt <code>"Enter an integer: "</code> and waits for the user to type something.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 0, highlight: true } },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: "]
                }
            ]
        },
        {
            explanation: `<p>The user enters <code>3</code>. The <code>int()</code> function converts the string <code>\"3\"</code> to the integer <code>3</code>, which is stored in <code>input1</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": { value: 3, highlight: true } },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3"]
                }
            ]
        },
        // --- Input 2 ---
        {
            explanation: `<p>The second <code>input()</code> displays <code>"Enter another integer: "</code>.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: "]
                }
            ]
        },
        {
            explanation: `<p>The user enters <code>5</code>. This is converted to the integer <code>5</code> and stored in <code>input2</code>.</p><p>So we'll be printing a grid of <code>#</code> characters that is 3 rows tall and 5 columns wide.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3, "input2": { value: 5, highlight: true } },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5"]
                }
            ]
        },
        // --- Outer loop check (index1 = 0) ---
        {
            explanation: `<p>Check the outer <code>while</code> loop condition: is <code>index1 &lt; input1</code>?</p><p><code>0 &lt; 3</code> is <code>True</code>, so we enter the outer loop body. This will be <strong>row 1</strong>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5"]
                }
            ]
        },
        // --- Inner loop check (index2 = 0, row 1) ---
        {
            explanation: `<p>Check the inner <code>while</code> loop condition: is <code>index2 &lt; input2</code>?</p><p><code>0 &lt; 5</code> is <code>True</code>, so we enter the inner loop body.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5"]
                }
            ]
        },
        // --- Inner iteration 1: index2=0 ---
        {
            explanation: `<p><strong>Inner iteration 1:</strong> Print a <code>'#'</code> character. The <code>end=\"\"</code> argument means the cursor stays on the same line instead of moving to a new line.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>index2</code>: <code>index2 = 0 + 1 = 1</code>.</p>`,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#"]
                }
            ]
        },
        // --- Inner loop check (index2 = 1) ---
        {
            explanation: `<p>Check: <code>index2 &lt; input2</code>? <code>1 &lt; 5</code> is <code>True</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 1, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#"]
                }
            ]
        },
        // --- Inner iteration 2: index2=1 ---
        {
            explanation: `<p><strong>Inner iteration 2:</strong> Print another <code>'#'</code>. It appears on the same line because of <code>end=\"\"</code>.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 1, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>index2</code>: <code>index2 = 1 + 1 = 2</code>.</p>`,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 1, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "##"]
                }
            ]
        },
        // --- Inner iteration 3: index2=2 ---
        {
            explanation: `<p><strong>Inner iteration 3:</strong> Print <code>'#'</code>. Increment <code>index2</code> to <code>3</code>.</p>`,
            highlightLines: [7, 8, 9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 3, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "###"]
                }
            ]
        },
        // --- Inner iteration 4: index2=3 ---
        {
            explanation: `<p><strong>Inner iteration 4:</strong> Print <code>'#'</code>. Increment <code>index2</code> to <code>4</code>.</p>`,
            highlightLines: [7, 8, 9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 4, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "####"]
                }
            ]
        },
        // --- Inner iteration 5: index2=4 ---
        {
            explanation: `<p><strong>Inner iteration 5:</strong> Print the last <code>'#'</code> for this row. Increment <code>index2</code> to <code>5</code>.</p>`,
            highlightLines: [7, 8, 9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 5, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Inner loop exits (index2 = 5) ---
        {
            explanation: `<p>Check: <code>index2 &lt; input2</code>? <code>5 &lt; 5</code> is <code>False</code>, so the inner loop exits.</p><p>We've printed 5 <code>'#'</code> characters on the current line — the first row is complete!</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 5, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- print() newline ---
        {
            explanation: `<p>Call <code>print()</code> with no arguments. This simply moves the cursor to a new line, ending the current row of <code>'#'</code> characters.</p>`,
            highlightLines: [10],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 5, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Reset index2 ---
        {
            explanation: `<p>Reset <code>index2</code> back to <code>0</code>.</p><p>Just like in the multiplication tables program, this reset is essential. Without it, <code>index2</code> would still be <code>5</code> when the next row starts, and the inner loop condition <code>index2 &lt; 5</code> would immediately be <code>False</code> — no more <code>'#'</code> characters would ever be printed.</p>`,
            highlightLines: [11],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": 5, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Increment index1 ---
        {
            explanation: `<p>Increment <code>index1</code>: <code>index1 = 0 + 1 = 1</code>. We've finished the first row and are moving on to the second.</p>`,
            highlightLines: [12],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 0, "index2": { value: 0, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Outer loop check (index1 = 1) ---
        {
            explanation: `<p>Back to the top of the outer loop. Check: <code>index1 &lt; input1</code>? <code>1 &lt; 3</code> is <code>True</code>, so we continue with <strong>row 2</strong>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": { value: 1, highlight: true }, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Inner loop check (index2 = 0, row 2) ---
        {
            explanation: `<p>Check: <code>index2 &lt; input2</code>? <code>0 &lt; 5</code> is <code>True</code>. The inner loop starts again for row 2.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 1, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        // --- Inner iteration 1 (row 2): index2=0 ---
        {
            explanation: `<p><strong>Inner iteration 1:</strong> Print <code>'#'</code>. The second row begins building in exactly the same way as the first.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 1, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>index2</code>: <code>index2 = 0 + 1 = 1</code>.</p>`,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 1, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####", "#"]
                }
            ]
        },
        // --- Inner iteration 2 (row 2): index2=1 ---
        {
            explanation: `<p><strong>Inner iteration 2:</strong> Print <code>'#'</code>. Increment <code>index2</code> to <code>2</code>.</p>`,
            highlightLines: [7, 8, 9],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 1, "index2": { value: 2, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####", "##"]
                }
            ]
        },
        // --- Fast-forward rest of row 2 and row 3 ---
        {
            explanation: `<p>By now, you can see the pattern clearly. The inner loop continues printing <code>'#'</code> characters until <code>index2</code> reaches <code>5</code>, completing the second row of <code>\"#####\"</code>.</p><p>Then <code>print()</code> moves to a new line, <code>index2</code> is reset to <code>0</code>, and <code>index1</code> is incremented to <code>2</code>.</p><p>The same process repeats one more time for row 3. After that, <code>index1</code> is incremented to <code>3</code>.</p>`,
            highlightLines: [6, 7, 8, 9, 10, 11, 12],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": { value: 3, highlight: true }, "index2": { value: 0, highlight: true }, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####", "#####", "#####"]
                }
            ]
        },
        // --- Outer loop exits ---
        {
            explanation: `<p>Check: <code>index1 &lt; input1</code>? <code>3 &lt; 3</code> is <code>False</code>, so the outer loop exits and the program ends.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 3, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####", "#####", "#####"]
                }
            ]
        },
        // --- End ---
        {
            explanation: `<p>The program has finished.</p><p><strong>Key takeaways:</strong></p><p>This program uses a <strong>nested loop</strong> to draw a rectangle of <code>'#'</code> characters. The outer loop controls the number of rows (<code>input1</code>), and the inner loop controls the number of columns (<code>input2</code>).</p><p>The <code>end=\"\"</code> argument in <code>print(\"#\", end=\"\")</code> is what keeps the characters on the same line. Without it, each <code>'#'</code> would appear on its own line.</p><p>The <code>print()</code> call after the inner loop moves to a new line, and the <code>index2 = 0</code> reset ensures the inner loop runs again for the next row.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: { "index1": 3, "index2": 0, "input1": 3, "input2": 5 },
                    connections: [
                        { from: "index1", toKey: "index1" },
                        { from: "index2", toKey: "index2" },
                        { from: "input1", toKey: "input1" },
                        { from: "input2", toKey: "input2" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Enter an integer: 3", "Enter another integer: 5", "#####", "#####", "#####"]
                }
            ]
        },

    ]
};
