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
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>`,
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
        {
            explanation: `
            <p>Let's try it out!</p>
            <p>We'll enter 3 as our first input...</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: [
                        "Enter an integer: "
                    ]
                }
            ]
        },
        {
            explanation: `
            <p>...and 5 as our second input.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: [
                        "Enter an integer: 3",
                        "Enter another integer: ",
                    ]
                }
            ]
        },
        {
            explanation: `
            <p>The program prints 3 lines of 5 '#' characters each.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: [
                        "Enter an integer: 3",
                        "Enter another integer: 5",
                        "#####",
                        "#####",
                        "#####"
                    ]
                }
            ]
        },

    ]
};
