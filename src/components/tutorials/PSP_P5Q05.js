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
        {
            explanation: `
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
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
            <p>Well this is awkward. The output was so big it broke the layout of our tutorial! 😂</p>
            <p>But it does work as intended, which is what matters.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: [
                        "===== 1x table =====",
                        "",
                        "1 x 1 = 1",
                        "2 x 1 = 2",
                        "3 x 1 = 3",
                        "4 x 1 = 4",
                        "5 x 1 = 5",
                        "6 x 1 = 6",
                        "7 x 1 = 7",
                        "8 x 1 = 8",
                        "9 x 1 = 9",
                        "10 x 1 = 10",
                        "11 x 1 = 11",
                        "12 x 1 = 12",
                        "",
                        "===== 2x table =====",
                        "",
                        "1 x 2 = 2",
                        "2 x 2 = 4",
                        "3 x 2 = 6",
                        "4 x 2 = 8",
                        "5 x 2 = 10",
                        "6 x 2 = 12",
                        "7 x 2 = 14",
                        "8 x 2 = 16",
                        "9 x 2 = 18",
                        "10 x 2 = 20",
                        "11 x 2 = 22",
                        "12 x 2 = 24",
                        "",
                        "===== 3x table =====",
                        "",
                        "1 x 3 = 3",
                        "2 x 3 = 6",
                        "3 x 3 = 9",
                        "4 x 3 = 12",
                        "5 x 3 = 15",
                        "6 x 3 = 18",
                        "7 x 3 = 21",
                        "8 x 3 = 24",
                        "9 x 3 = 27",
                        "10 x 3 = 30",
                        "11 x 3 = 33",
                        "12 x 3 = 36",
                        "",
                        "===== 4x table =====",
                        "",
                        "1 x 4 = 4",
                        "2 x 4 = 8",
                        "3 x 4 = 12",
                        "4 x 4 = 16",
                        "5 x 4 = 20",
                        "6 x 4 = 24",
                        "7 x 4 = 28",
                        "8 x 4 = 32",
                        "9 x 4 = 36",
                        "10 x 4 = 40",
                        "11 x 4 = 44",
                        "12 x 4 = 48",
                        "",
                        "===== 5x table =====",
                        "",
                        "1 x 5 = 5",
                        "2 x 5 = 10",
                        "3 x 5 = 15",
                        "4 x 5 = 20",
                        "5 x 5 = 25",
                        "6 x 5 = 30",
                        "7 x 5 = 35",
                        "8 x 5 = 40",
                        "9 x 5 = 45",
                        "10 x 5 = 50",
                        "11 x 5 = 55",
                        "12 x 5 = 60",
                        "",
                        "===== 6x table =====",
                        "",
                        "1 x 6 = 6",
                        "2 x 6 = 12",
                        "3 x 6 = 18",
                        "4 x 6 = 24",
                        "5 x 6 = 30",
                        "6 x 6 = 36",
                        "7 x 6 = 42",
                        "8 x 6 = 48",
                        "9 x 6 = 54",
                        "10 x 6 = 60",
                        "11 x 6 = 66",
                        "12 x 6 = 72",
                        "",
                        "===== 7x table =====",
                        "",
                        "1 x 7 = 7",
                        "2 x 7 = 14",
                        "3 x 7 = 21",
                        "4 x 7 = 28",
                        "5 x 7 = 35",
                        "6 x 7 = 42",
                        "7 x 7 = 49",
                        "8 x 7 = 56",
                        "9 x 7 = 63",
                        "10 x 7 = 70",
                        "11 x 7 = 77",
                        "12 x 7 = 84",
                        "",
                        "===== 8x table =====",
                        "",
                        "1 x 8 = 8",
                        "2 x 8 = 16",
                        "3 x 8 = 24",
                        "4 x 8 = 32",
                        "5 x 8 = 40",
                        "6 x 8 = 48",
                        "7 x 8 = 56",
                        "8 x 8 = 64",
                        "9 x 8 = 72",
                        "10 x 8 = 80",
                        "11 x 8 = 88",
                        "12 x 8 = 96",
                        "",
                        "===== 9x table =====",
                        "",
                        "1 x 9 = 9",
                        "2 x 9 = 18",
                        "3 x 9 = 27",
                        "4 x 9 = 36",
                        "5 x 9 = 45",
                        "6 x 9 = 54",
                        "7 x 9 = 63",
                        "8 x 9 = 72",
                        "9 x 9 = 81",
                        "10 x 9 = 90",
                        "11 x 9 = 99",
                        "12 x 9 = 108",
                        "",
                        "===== 10x table =====",
                        "",
                        "1 x 10 = 10",
                        "2 x 10 = 20",
                        "3 x 10 = 30",
                        "4 x 10 = 40",
                        "5 x 10 = 50",
                        "6 x 10 = 60",
                        "7 x 10 = 70",
                        "8 x 10 = 80",
                        "9 x 10 = 90",
                        "10 x 10 = 100",
                        "11 x 10 = 110",
                        "12 x 10 = 120",
                        "",
                        "===== 11x table =====",
                        "",
                        "1 x 11 = 11",
                        "2 x 11 = 22",
                        "3 x 11 = 33",
                        "4 x 11 = 44",
                        "5 x 11 = 55",
                        "6 x 11 = 66",
                        "7 x 11 = 77",
                        "8 x 11 = 88",
                        "9 x 11 = 99",
                        "10 x 11 = 110",
                        "11 x 11 = 121",
                        "12 x 11 = 132",
                        "",
                        "===== 12x table =====",
                        "",
                        "1 x 12 = 12",
                        "2 x 12 = 24",
                        "3 x 12 = 36",
                        "4 x 12 = 48",
                        "5 x 12 = 60",
                        "6 x 12 = 72",
                        "7 x 12 = 84",
                        "8 x 12 = 96",
                        "9 x 12 = 108",
                        "10 x 12 = 120",
                        "11 x 12 = 132",
                        "12 x 12 = 144",
                    ],
                }
            ],
        },

    ]
};
