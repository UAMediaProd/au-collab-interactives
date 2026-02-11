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
            explanation: `
            <p>At first glance, this problem doesn't appear as though it can be easily decomposed.</p>
            <p>Do not be intimidated. Let's try to identify repeating behaviour.</p>
            `,
            info: `
            <div class="flowchart-solid">Display all 12 multiplication tables</div>
            `,

        },
        {
            explanation: `
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            `,
            info: `
            <div class="flowchart-solid">Display all 12 multiplication tables</div>
            `,

        },
        {
            explanation: `
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
            explanation: `
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
            explanation: `
            <p>Next, let's decompose this new sub-problem further.</p>
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
            explanation: `
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
            explanation: `
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
            explanation: `
            <p>Our program design is now complete.</p>
            <p>Let's proceed to write some code!</p>
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
            explanation: `
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
            explanation: `
            <p>This program has two loops. Let's declare variables to control them independently.</p>
            <p><code>table_number</code> will track which table is being displayed (outer loop).</p>
            <p><code>counter</code> will track the other operand used for each calculation (inner loop).</p>
            `,
            code: `table_number = 1
counter = 1`,
            highlightLines: [0, 1],
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
            explanation: `
            <p>Next let's set up the outer loop. It must execute 12 times.</p>
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
            highlightLines: [3, 9],
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
            explanation: `
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
            highlightLines: [5, 7, 8],
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
            explanation: `
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
            explanation: `
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
        // =============================================
        // Code step-through section
        // =============================================
        {
            explanation: `<p><strong>Step 4:</strong> Execute the code to verify what happens.</p>`,
            code: `table_number = 1
counter = 1

while table_number <= 12:
    print('\\n===== ',table_number,'x table =====\\n',sep='')
    while counter <= 12:
        print(counter,'x',table_number,'=',counter*table_number)
        counter += 1
    counter = 1
    table_number += 1`,
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
            explanation: `<p>Initialise <code>table_number</code> to <code>1</code>. This variable controls the outer loop — it tracks which multiplication table we are currently displaying.</p>`,
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
            explanation: `<p>Initialise <code>counter</code> to <code>1</code>. This variable controls the inner loop — it tracks the multiplier for each line within a table.</p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": { value: 1, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" }
                    ]
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        // --- Outer loop check (table_number = 1) ---
        {
            explanation: `<p>Check the outer <code>while</code> loop condition: is <code>table_number &lt;= 12</code>?</p><p><code>1 &lt;= 12</code> is <code>True</code>, so we enter the outer loop body.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": { value: 1, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        // --- Print heading for 1x table ---
        {
            explanation: `<p>Print the heading for the current table. Since <code>table_number</code> is <code>1</code>, this prints <code>"===== 1x table ====="</code>.</p><p>The <code>\\n</code> characters add blank lines above and below the heading, and <code>sep=''</code> removes the default spaces between the arguments.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        // --- Inner loop check (counter = 1) ---
        {
            explanation: `<p>Check the inner <code>while</code> loop condition: is <code>counter &lt;= 12</code>?</p><p><code>1 &lt;= 12</code> is <code>True</code>, so we enter the inner loop body.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", ""]
                }
            ]
        },
        // --- Inner iteration 1: counter=1, table_number=1 ---
        {
            explanation: `<p><strong>Inner iteration 1:</strong> Print <code>counter</code> x <code>table_number</code> = <code>counter * table_number</code>.</p><p><code>1 x 1 = 1</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", ""]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>counter</code> by 1: <code>counter = 1 + 1 = 2</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1"]
                }
            ]
        },
        // --- Inner loop check (counter = 2) ---
        {
            explanation: `<p>Check: <code>counter &lt;= 12</code>? <code>2 &lt;= 12</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": { value: 2, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1"]
                }
            ]
        },
        // --- Inner iteration 2: counter=2, table_number=1 ---
        {
            explanation: `<p><strong>Inner iteration 2:</strong> <code>2 x 1 = 2</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 2 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>counter</code>: <code>counter = 2 + 1 = 3</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 2 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2"]
                }
            ]
        },
        // --- Inner loop check (counter = 3) ---
        {
            explanation: `<p>Check: <code>counter &lt;= 12</code>? <code>3 &lt;= 12</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": { value: 3, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2"]
                }
            ]
        },
        // --- Inner iteration 3: counter=3, table_number=1 ---
        {
            explanation: `<p><strong>Inner iteration 3:</strong> <code>3 x 1 = 3</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 3 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>counter</code>: <code>counter = 3 + 1 = 4</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 3 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3"]
                }
            ]
        },
        // --- Fast-forward inner iterations 4–12 for 1x table ---
        {
            explanation: `<p>The inner loop continues in exactly the same way. Each iteration prints the next line of the 1x table and increments <code>counter</code>.</p><p><code>4 x 1 = 4</code>, <code>5 x 1 = 5</code>, <code>6 x 1 = 6</code>, <code>7 x 1 = 7</code>, <code>8 x 1 = 8</code>, <code>9 x 1 = 9</code>, <code>10 x 1 = 10</code>, <code>11 x 1 = 11</code>, <code>12 x 1 = 12</code>.</p><p>After the 12th iteration, <code>counter</code> is incremented to <code>13</code>.</p>`,
            highlightLines: [5, 6, 7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": { value: 13, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Inner loop exits (counter = 13) ---
        {
            explanation: `<p>Check: <code>counter &lt;= 12</code>? <code>13 &lt;= 12</code> is <code>False</code>, so the inner loop exits.</p><p>The entire 1x table has been printed!</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 13 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Reset counter ---
        {
            explanation: `<p>Reset <code>counter</code> back to <code>1</code>.</p><p>This is essential! Without this line, <code>counter</code> would still be <code>13</code> when the next table starts, and the inner loop condition <code>counter &lt;= 12</code> would immediately be <code>False</code> — the inner loop would never run again.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": 13 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Increment table_number ---
        {
            explanation: `<p>Increment <code>table_number</code> by 1: <code>table_number = 1 + 1 = 2</code>.</p><p>We're now moving on to the 2x table.</p>`,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 1, "counter": { value: 1, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Outer loop check (table_number = 2) ---
        {
            explanation: `<p>Back to the top of the outer loop. Check: <code>table_number &lt;= 12</code>? <code>2 &lt;= 12</code> is <code>True</code>, so we continue.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": { value: 2, highlight: true }, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Print heading for 2x table ---
        {
            explanation: `<p>Print the heading for the 2x table.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12"]
                }
            ]
        },
        // --- Inner loop check (counter = 1, 2x table) ---
        {
            explanation: `<p>Check: <code>counter &lt;= 12</code>? <code>1 &lt;= 12</code> is <code>True</code>. The inner loop starts again for the 2x table.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", ""]
                }
            ]
        },
        // --- Inner iteration 1: counter=1, table_number=2 ---
        {
            explanation: `<p><strong>Inner iteration 1:</strong> <code>1 x 2 = 2</code>.</p><p>Notice that the structure is identical to the 1x table — only <code>table_number</code> has changed from <code>1</code> to <code>2</code>, which changes the multiplication result.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", ""]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>counter</code>: <code>counter = 1 + 1 = 2</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2"]
                }
            ]
        },
        // --- Inner iteration 2: counter=2, table_number=2 ---
        {
            explanation: `<p><strong>Inner iteration 2:</strong> <code>2 x 2 = 4</code>.</p>`,
            highlightLines: [5, 6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": { value: 2, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2"]
                }
            ]
        },
        {
            explanation: `<p>Increment <code>counter</code>: <code>counter = 2 + 1 = 3</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": 2 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2", "2 x 2 = 4"]
                }
            ]
        },
        // --- Inner iteration 3: counter=3, table_number=2 ---
        {
            explanation: `<p><strong>Inner iteration 3:</strong> <code>3 x 2 = 6</code>.</p>`,
            highlightLines: [5, 6],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 2, "counter": { value: 3, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "3 x 1 = 3", "4 x 1 = 4", "5 x 1 = 5", "6 x 1 = 6", "7 x 1 = 7", "8 x 1 = 8", "9 x 1 = 9", "10 x 1 = 10", "11 x 1 = 11", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2", "2 x 2 = 4"]
                }
            ]
        },
        // --- Fast-forward rest of 2x table and remaining tables ---
        {
            explanation: `<p>By now, you can see the pattern clearly. The inner loop continues printing <code>4 x 2 = 8</code>, <code>5 x 2 = 10</code>, and so on until <code>12 x 2 = 24</code>.</p><p>When the inner loop finishes, <code>counter</code> is reset to <code>1</code>, <code>table_number</code> is incremented to <code>3</code>, and the whole process repeats for the 3x table.</p><p>This continues for all 12 tables. Each cycle of the outer loop prints one complete multiplication table, and the inner loop handles the 12 lines within each table.</p>`,
            highlightLines: [3, 4, 5, 6, 7, 8, 9],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": { value: 13, highlight: true }, "counter": { value: 1, highlight: true } },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "...", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2", "2 x 2 = 4", "3 x 2 = 6", "...", "12 x 2 = 24", "", "...", "", "===== 12x table =====", "", "1 x 12 = 12", "2 x 12 = 24", "...", "12 x 12 = 144"]
                }
            ]
        },
        // --- Outer loop exits ---
        {
            explanation: `<p>After the 12x table is complete, <code>table_number</code> is incremented to <code>13</code>.</p><p>Check: <code>table_number &lt;= 12</code>? <code>13 &lt;= 12</code> is <code>False</code>, so the outer loop exits and the program ends.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 13, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "...", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2", "2 x 2 = 4", "3 x 2 = 6", "...", "12 x 2 = 24", "", "...", "", "===== 12x table =====", "", "1 x 12 = 12", "2 x 12 = 24", "...", "12 x 12 = 144"]
                }
            ]
        },
        // --- End ---
        {
            explanation: `<p>The program has finished.</p><p><strong>Key takeaways:</strong></p><p>This program uses a <strong>nested loop</strong> — a loop inside another loop. The outer loop runs 12 times (once per multiplication table), and the inner loop runs 12 times within each outer iteration (once per line of the table). That's <code>12 × 12 = 144</code> print statements in total, plus 12 headings.</p><p>The critical detail is the <code>counter = 1</code> reset on line 9. Without it, <code>counter</code> would remain at <code>13</code> after the first table, and the inner loop would never execute again. This is a very common mistake when using <code>while</code> loops for counting — always remember to reset your loop variable!</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: { "table_number": 13, "counter": 1 },
                    connections: [
                        { from: "table_number", toKey: "table_number" },
                        { from: "counter", toKey: "counter" }
                    ]
                },
                {
                    title: "Output",
                    values: ["", "===== 1x table =====", "", "1 x 1 = 1", "2 x 1 = 2", "...", "12 x 1 = 12", "", "===== 2x table =====", "", "1 x 2 = 2", "2 x 2 = 4", "3 x 2 = 6", "...", "12 x 2 = 24", "", "...", "", "===== 12x table =====", "", "1 x 12 = 12", "2 x 12 = 24", "...", "12 x 12 = 144"]
                }
            ]
        },

    ]
};
