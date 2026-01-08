// 06 Prac 5 Question 5 Solution
export default {
    code: ``,
    steps: [
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>
            <hr>
            <p>At first glance, this problem doesn't appear as though it can be easily decomposed.</p>
            <p>Do not be intimidated. Let's try to identify repeating behaviour.</p>
            `,
            info: `
            <div class="flowchart-solid">Display all 12 multiplication tables</div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            `,
            info: `
            <div class="flowchart-solid">Display all 12 multiplication tables</div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>The first task is to display all 12 multiplication tables.</p>
            <p>This is repeated 12 times, so we can use a loop to simplify this problem.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display the next multiplication table</div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>In the new sub-problem, we concern ourselves with a single (generic) multiplication table, rather than 12 specific individual ones. This is possible because multiplication tables are structurally similar.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display the next multiplication table</div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>Next, lets decompose this new sub-problem further.</p>
            <p>When doing so, remember that the loop should still include all identified components of the sub-problem.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 1x<code>table_num</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 2x<code>table_num</code></div>
                <div class="flowchart-connection">🡇</div>
                <p style="margin:0.8rem 0 1.4rem 0">...</p>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 12x<code>table_num</code></div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>Now that the sub-problem has been broken down into its components, we should check again for repetitive behaviour.</p>
            <p>Notice that 12 calculations need to be displayed for each table.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 1x<code>table_num</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 2x<code>table_num</code></div>
                <div class="flowchart-connection">🡇</div>
                <p style="margin:0.8rem 0 1.4rem 0">...</p>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display: 12x<code>table_num</code></div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>We can use a loop to display each calculation.</p>
            <p>The 'outer' loop executes 12 times (so there will be 12 multiplication tables).</p>
            <p>The 'inner' loop executes 144 times (so there will be 12 calculations on each of the 12 tables).</p>
            <p>This is referred to as a 'nested loop'.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>Our program design is now complete.</p>
            <p>Lets proceed to write some code!</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>This program has two loops. Let's declare variables to control them independently.</p>
            <p><code>table_number</code> will track which table is being displayed (outer loop).</p>
            <p><code>counter</code> will track the other operand used for each calculation (inner loop).</p>
            `,
            code: `table_number = 1
counter = 1`,
            highlightLines: [0,1],
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Next lets set up the outer loop. It must execute 12 times.</p>
            <p>To ensure this, we require two things:</p>
            <ol>
                <li>The loop must break when <code>table_number</code> exceeds 12 <br>(since it has an initial value of 1)</li>
                <li><code>table_number</code> must increment by 1 each cycle.</li>
            </ol>
            `,
            code: `table_number = 1
counter = 1

while table_number <= 12:
    




    table_number += 1`,
            highlightLines: [3,9],
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Next is the inner loop. To be nested correctly, it must be indented inside the outer loop.</p>
            <p>It will also execute exactly 12 times, but with <code>counter</code> as the controlling variable.</p>
            <p>Note that <code>counter</code> must also reset back to 1 after the inner loop completes - otherwise the condition will stay broken on subsequent cycles of the outer loop.</p>
            `,
            code: `table_number = 1
counter = 1

while table_number <= 12:
    
    while counter <= 12:
        
        counter += 1
    counter = 1
    table_number += 1`,
            highlightLines: [5,7,8],
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Now that the loops function correctly, we can focus on the remaining program behaviour.</p>
            <p>Displaying a table heading happens once at the beginning of each cycle of the outer loop, before the inner loop starts.</p>
            `,
            code: `table_number = 1
counter = 1

while table_number <= 12:
    print('\\n===== ',table_number,'x table =====\\n',sep='')
    while counter <= 12:
        
        counter += 1
    counter = 1
    table_number += 1`,
            highlightLines: [4],
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Finally, we display the lines of the multiplication table.</p>
            <p>All of the components in the diagram are now accounted for. The program is complete!</p>
            `,
            code: `table_number = 1
counter = 1

while table_number <= 12:
    print('\\n===== ',table_number,'x table =====\\n',sep='')
    while counter <= 12:
        print(counter,'x',table_number,'=',counter*table_number)
        counter += 1
    counter = 1
    table_number += 1`,
            highlightLines: [6],
            info: `
            <div class="flowchart-outline">
                <p>Loop 12 times:</p>
                <div class="flowchart-solid">Display heading for next table</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop 12 times:</p>
                    <div class="flowchart-solid">Display: <code>counter</code> x <code>table_num</code></div>
                </div>
            </div>
            `,
             
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            `,
            boxes: [
                {
                    title: "Memory"
                },
                {
                    title: "Output"
                },
            ],
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Let's trace through the program execution. We'll show the first few iterations to demonstrate the nested loop behavior.</p>
            `,
            boxes: [
                {
                    title: "Memory"
                },
                {
                    title: "Output"
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Initialize variables <code>table_number</code> to <code>1</code> and <code>counter</code> to <code>1</code>.</p>
            `,
            highlightLines: [0, 1],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1", highlight: true },
                        "counter": { value: "1", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output"
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Outer Loop:</strong> Check condition <code>table_number <= 12</code> (1 <= 12 is True), enter outer loop.</p>
            `,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output"
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Outer Loop:</strong> Display heading for 1x table.</p>
            `,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table ====="]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Check condition <code>counter <= 12</code> (1 <= 12 is True), enter inner loop.</p>
            `,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table ====="]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Display calculation: <code>1 x 1 = 1</code></p>
            `,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Increment <code>counter</code> by 1.</p>
            `,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "2", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Check condition <code>counter <= 12</code> (2 <= 12 is True), enter inner loop. Display calculation: <code>2 x 1 = 2</code>. Increment <code>counter</code>.</p>
            `,
            highlightLines: [5, 6, 7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "3", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Display calculation: <code>3 x 1 = 3</code>. Increment <code>counter</code>.</p>
            `,
            highlightLines: [6, 7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "4", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop continues...</strong> The inner loop will continue until <code>counter</code> reaches 13, displaying all calculations from <code>1 x 1</code> to <code>12 x 1</code>.</p>
            `,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "12" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> After displaying <code>12 x 1 = 12</code>, increment <code>counter</code> to 13. Check condition <code>counter <= 12</code> (13 <= 12 is False), exit inner loop.</p>
            `,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "13", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>End of Inner Loop:</strong> Reset <code>counter</code> to 1 for the next table.</p>
            `,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "1" },
                        "counter": { value: "1", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>End of Outer Loop:</strong> Increment <code>table_number</code> by 1.</p>
            `,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "2", highlight: true },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12", "===== 2x table ====="]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Outer Loop:</strong> Check condition <code>table_number <= 12</code> (2 <= 12 is True), enter outer loop. Display 
            `,
            highlightLines: [3, 4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "2" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12", "===== 2x table ====="]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Inner Loop:</strong> Begin inner loop for table 2. Display calculation: <code>1 x 2 = 2</code>. Increment <code>counter</code>.</p>
            `,
            highlightLines: [5, 6, 7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "2" },
                        "counter": { value: "2", highlight: true }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "...", "11 x 1 = 11", "12 x 1 = 12", "===== 2x table =====", "1 x 2 = 2"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Pattern continues...</strong> The program will continue this pattern, displaying all 12 multiplication tables from 1x to 12x.</p>
            `,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "12" },
                        "counter": { value: "12" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "...", "12 x 1 = 12", "===== 2x table =====", "1 x 2 = 2", "...", "12 x 2 = 24", "===== 3x table =====", "...", "===== 12x table =====", "1 x 12 = 12", "...", "12 x 12 = 144"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Final iteration:</strong> After completing the 12x table, <code>table_number</code> increments to 13. Check condition <code>table_number <= 12</code> (13 <= 12 is False), exit outer loop.</p>
            `,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "13", highlight: true },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["===== 1x table =====", "1 x 1 = 1", "...", "12 x 1 = 12", "===== 2x table =====", "1 x 2 = 2", "...", "12 x 2 = 24", "===== 3x table =====", "...", "===== 12x table =====", "1 x 12 = 12", "...", "12 x 12 = 144"]
                }
            ]
        },
        {
            explanation: `<p><strong>Question: </strong>Write a program that evaluates and displays all of the classic children's multiplication tables between 1 and 12 (inclusive).</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Program execution complete!</p>
            <p>The program successfully displayed all 12 multiplication tables (1x through 12x) with 12 calculations each, totaling 144 multiplication calculations. The nested loop structure efficiently handled the repetitive nature of the multiplication tables.</p>
            `,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "table_number": { value: "13" },
                        "counter": { value: "1" }
                    },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: 
                        ["===== 1x table =====",
                        "1 x 1 = 1",
                        "...",
                        "12 x 1 = 12",
                        "===== 2x table =====",
                        "1 x 2 = 2",
                        "...",
                        "12 x 2 = 24",
                        "===== 3x table =====",
                        "...",
                        "===== 12x table =====",
                        "1 x 12 = 12",
                        "...",
                        "12 x 12 = 144"]
                    
                }
            ]
        }
        
    ]
};
