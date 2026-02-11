// 10 Prac 6 Question 9 Solution
export default {
    code: `list1 = ['a', 1, 'b', 2]
list2 = []

for element in list1:
    element = str(element)
    list2.append(element)

print(list1)
print(list2)`,
    steps: [
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>`,
        },
        {
            explanation: `
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>
            `,
        },
        {
            explanation: `
            <p>We start by creating a list of data and an empty list.</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            `,
            highlightLines: [0,1]
        },
        {
            explanation: `
            <p>This line sets up a loop to iterate over <code>list1</code>.</p>
            <p>Because it is a for loop, we already know there will be a number of cycles equal to <code>len(list1)</code>.</p>
            <p>But what is its purpose?</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
            </div>
            `,
            highlightLines: [3]
        },
        {
            explanation: `
            <p>In this line, the variable <code>element</code> is transformed using the <code>str()</code> function.</p>
            <p><strong>Important:</strong> When this line executes, the values in <code>list1</code> remain unchanged.</p>
            <p>The value of <code>element</code> may change - but this will not affect the original list data.</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
                <div class="flowchart-solid">Convert the next data list item to a string</div>
            </div>
            `,
            highlightLines: [4]
        },
        {
            explanation: `
            <p>The new value (now a string) is added to the new list.</p>
            <p>This is the last line inside the loop.</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
                <div class="flowchart-solid">Convert the next data list item to a string</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Add the item to the transformed new list</div>
            </div>
            `,
            highlightLines: [5]
        },
        {
            explanation: `
            <p>This program is now complete.</p>
            <p>Let's take a step back and try to deduce the overall function.</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
            <div class="flowchart-solid">Convert the next data list item to a string</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add the item to the transformed new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the lists in their final state</div>
            `,
            highlightLines: [7,8]
        },
        {
            explanation: `
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
            <div class="flowchart-solid">Convert the next data list item to a string</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add the item to the transformed new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the lists in their final state</div>
            `,
        },
        {
            explanation: `
            <p>This program:</p>
            <ol>
                <li>Takes a list of data and a new empty list.</li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid flowchart-highlight">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
            <div class="flowchart-solid">Convert the next data list item to a string</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add the item to the transformed new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the lists in their final state</div>
            `,
        },
        {
            explanation: `
            <p>This program:</p>
            <ol>
                <li>Takes a list of data and a new empty list.</li>
                <li>The data of the original list is copied into the new list in the form of strings.</li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline flowchart-highlight">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
                <div class="flowchart-solid flowchart-highlight">Convert the next data list item to a string</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid flowchart-highlight">Add the item to the transformed new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the lists in their final state</div>
            `,
        },
        {
            explanation: `
            <p>This program:</p>
            <ol>
                <li>Takes a list of data and a new empty list.</li>
                <li>The data of the original list is copied into the new list in the form of strings.</li>
                <li>The original and new list are displayed to the screen for comparison.</li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Create a list of data; create an empty new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(list1)</code></p>
                <div class="flowchart-solid">Convert the next data list item to a string</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Add the item to the transformed new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Display the lists in their final state</div>
            `,
        },
        {
            explanation: `
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            `,
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 0: list1 = ['a', 1, 'b', 2]
        // =============================================
        {
            explanation: `<p>Create a list called <code>list1</code> containing four elements: the string <code>'a'</code>, the integer <code>1</code>, the string <code>'b'</code>, and the integer <code>2</code>.</p><p>Notice that this list contains a mix of data types — both strings and integers.</p>`,
            highlightLines: [0],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 1: list2 = []
        // =============================================
        {
            explanation: `<p>Create an empty list called <code>list2</code>.</p><p>This will be used to store the converted string versions of each element from <code>list1</code>.</p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // for loop — iteration 1: element = 'a'
        // =============================================
        {
            explanation: `<p>Start the <code>for</code> loop. This loop goes through each element in <code>list1</code> one at a time.</p><p><strong>Iteration 1:</strong> <code>element</code> is assigned the first item: <code>'a'</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2] },
                        "list2": { value: ["\u00a0"], highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Convert <code>element</code> to a string using <code>str()</code>.</p><p><code>element</code> is currently <code>'a'</code>, which is already a string. So <code>str('a')</code> returns <code>'a'</code> — no change.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 0 },
                        "list2": ["\u00a0"],
                        "element": { value: "'a'", highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append the value of <code>element</code> to <code>list2</code>.</p><p><code>element</code> is <code>'a'</code>, so <code>'a'</code> is added to <code>list2</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 0 },
                        "list2": ["\u00a0"],
                        "element": "'a'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // for loop — iteration 2: element = 1
        // =============================================
        {
            explanation: `<p><strong>Iteration 2:</strong> The loop moves to the next item. <code>element</code> is now <code>1</code> — an integer.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 0 },
                        "list2": { value: ["'a'"], highlight: true },
                        "element": "'a'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Convert <code>element</code> to a string using <code>str()</code>.</p><p><code>element</code> is <code>1</code> (an integer). <code>str(1)</code> returns <code>'1'</code> — the string version of the number.</p><p>This is where the conversion actually makes a difference. The integer <code>1</code> becomes the string <code>'1'</code>.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 1 },
                        "list2": ["'a'"],
                        "element": { value: 1, highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append the value of <code>element</code> to <code>list2</code>.</p><p><code>element</code> is now <code>'1'</code> (a string), so <code>'1'</code> is added to <code>list2</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 1 },
                        "list2": ["'a'"],
                        "element": { value: "'1'", highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // for loop — iteration 3: element = 'b'
        // =============================================
        {
            explanation: `<p><strong>Iteration 3:</strong> The loop moves to the next item. <code>element</code> is now <code>'b'</code> — another string.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 1 },
                        "list2": { value: ["'a'", "'1'"], highlight: [1] },
                        "element": "'1'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Convert <code>element</code> to a string using <code>str()</code>.</p><p><code>element</code> is <code>'b'</code>, which is already a string. So <code>str('b')</code> returns <code>'b'</code> — no change, just like with <code>'a'</code>.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 2 },
                        "list2": ["'a'", "'1'"],
                        "element": { value: "'b'", highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append the value of <code>element</code> to <code>list2</code>.</p><p><code>element</code> is <code>'b'</code>, so <code>'b'</code> is added to <code>list2</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 2 },
                        "list2": ["'a'", "'1'"],
                        "element": "'b'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // for loop — iteration 4: element = 2
        // =============================================
        {
            explanation: `<p><strong>Iteration 4:</strong> The loop moves to the last item. <code>element</code> is now <code>2</code> — another integer.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 2 },
                        "list2": { value: ["'a'", "'1'", "'b'"], highlight: [2] },
                        "element": "'b'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Convert <code>element</code> to a string using <code>str()</code>.</p><p><code>element</code> is <code>2</code> (an integer). <code>str(2)</code> returns <code>'2'</code> — the string version of the number.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 3 },
                        "list2": ["'a'", "'1'", "'b'"],
                        "element": { value: 2, highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append the value of <code>element</code> to <code>list2</code>.</p><p><code>element</code> is now <code>'2'</code> (a string), so <code>'2'</code> is added to <code>list2</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": { value: ["'a'", 1, "'b'", 2], highlight: 3 },
                        "list2": ["'a'", "'1'", "'b'"],
                        "element": { value: "'2'", highlight: true }
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 7: print(list1)
        // =============================================
        {
            explanation: `<p>The loop has finished — every element in <code>list1</code> has been converted to a string and added to <code>list2</code>.</p><p>Print <code>list1</code> to display the original list.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": ["'a'", 1, "'b'", 2],
                        "list2": { value: ["'a'", "'1'", "'b'", "'2'"], highlight: [3] },
                        "element": "'2'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 8: print(list2)
        // =============================================
        {
            explanation: `<p>Print <code>list2</code> to display the new list of string-converted elements.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": ["'a'", 1, "'b'", 2],
                        "list2": ["'a'", "'1'", "'b'", "'2'"],
                        "element": "'2'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: ["['a', 1, 'b', 2]"] }
            ]
        },
        // =============================================
        // Final step
        // =============================================
        {
            explanation: `<p>The program has finished.</p><p><strong>Key takeaways:</strong></p><p>The <code>for</code> loop iterates over each element in <code>list1</code>, converts it to a string using <code>str()</code>, and appends the result to <code>list2</code>.</p><p>Notice that <code>list1</code> is <strong>unchanged</strong> — the original integers <code>1</code> and <code>2</code> are still integers. The line <code>element = str(element)</code> only changes the local variable <code>element</code>, not the item inside <code>list1</code>.</p><p>The result is a new list where every element is a string.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "list1": ["'a'", 1, "'b'", 2],
                        "list2": ["'a'", "'1'", "'b'", "'2'"],
                        "element": "'2'"
                    },
                    connections: [
                        { from: "list1", toKey: "list1" },
                        { from: "list2", toKey: "list2" },
                        { from: "element", toKey: "element" }
                    ]
                },
                { title: "Output", values: ["['a', 1, 'b', 2]", "['a', '1', 'b', '2']"] }
            ]
        },
        
    ]
};
