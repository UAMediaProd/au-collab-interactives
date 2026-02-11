// 14 Prac 7 Question 13 Solution
export default {
    code: `def my_function(number):
    new_list = []
    index = 2
    while index < number:
        if number%index == 0:
            new_list.append(index)
        index += 1
    return new_list`,
    steps: [
        {
            explanation: `<p><strong>Question:</strong> What is the purpose of the following function?</p>`,
             
        },
        {
            explanation: `<p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>`,
        },
        {
            explanation: `
            <p>Let's begin by first examining the function interface (input and output).</p>
            <p>This function appears to take an integer (<code>number</code>) as a parameter, and provides a list (<code>new_list</code>) as the return value.</p>
            <p>The next question is — what is the relation between input and output? To answer this, we look inside the function.</p>
            `,
            highlightLines: [0,7],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light"><code>my_function(number)</code></div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>Looking inside the function, the first thing that happens is that <code>new_list</code> (the eventual output) is defined as an initially empty list.</p>
            `,
            highlightLines: [1],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>Next we encounter a simple loop structure.</p>
            <p>The variable controlling the loop is <code>index</code>. Beginning at 2, it increases by 1 each cycle, and will break the loop when its value reaches <code>number</code>. This means the loop will iterate a total of <code>(number-2)</code> times.</p>
            `,
            highlightLines: [2,3,6],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>Inside the loop, <code>number</code> is checked for divisibility by the current value of <code>index</code>.</p>
            <p>If it is divisible, that value of <code>index</code> is appended to the eventual output <code>new_list</code>.</p>
            <p>Because this takes place within the loop, every numerical factor of <code>number</code> between the values 2 and <code>(number-1)</code> will be appended to the list.</p>
            `,
            highlightLines: [4,5],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>When the loop ends, the function immediately concludes with <code>new_list</code> being returned as its output.</p>
            <p>Our diagram is complete.</p>
            <p>Now let's review the diagram and attempt to describe the process in plain English.</p>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>This function:</p>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>This function:</p>
            <ol>
                <li>Takes a single integer (number) as input.</li>
            </ol>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;" class="span-highlight">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>This function:</p>
            <ol>
                <li>Takes a single integer (number) as input.</li>
                <li>Starting with an empty list, </li>
            </ol>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid flowchart-highlight">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>This function:</p>
            <ol>
                <li>Takes a single integer (number) as input.</li>
                <li>Starting with an empty list, all numerical factors of <code>number</code> between 1 and itself (not inclusive) are added to the list,</li>
            </ol>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline flowchart-highlight">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid flowchart-highlight">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>This function:</p>
            <ol>
                <li>Takes a single integer (number) as input.</li>
                <li>Starting with an empty list, all numerical factors of <code>number</code> between 1 and itself (not inclusive) are added to the list,</li>
                <li>Which is then returned as the function output.</li>
            </ol>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;" class="span-highlight">return: <code>new_list</code></p>
            `,
        },
        {
            code: `def my_function(number):
    new_list = []
    index = 2
    while index < number:
        if number%index == 0:
            new_list.append(index)
        index += 1
    return new_list
    
print(my_function(15))
print(my_function(24))
print(my_function(29))`,
            explanation: `
            <p>Let's test <code>my_function()</code> with a few simple function calls.</p>
            <p>In this example, we make 3 separate calls feeding in different integer values, and display the result.</p>
            `,
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>What will happen when this is run?</p>
            <p>First, <code>my_function()</code> is called with a value of 15 as the parameter. Control is then handed over to the function, setting <code>number</code> = 15.</p>
            `,
            highlightChars: [
                {
                    line: 0,
                    match: "(number)"
                },
                {
                    line: 9,
                    match: "15"
                },
            ],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        {
            explanation: `
            <p>The function then executes and a value of <code>new_list</code> is generated.</p>
            <p>This list will be returned back to the calling code, where it will be resolved as the solution to the expression <code>my_function(15)</code>.</p>
            <p>Therefore the list is what will ultimately be displayed by the print statement.</p>
            <p>This process of passing control to and back from the function will repeat for the remaining print statements.</p>
            `,
            highlightChars: [
                {
                    line: 7,
                    match: "return new_list"
                },
                {
                    line: 9,
                    match: "my_function(15)"
                },
            ],
            info: `
            <p style="text-align:center;margin-bottom:1rem;">params: <code>number</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <code>my_function(number)</code>
                <div class="flowchart-solid">Create an empty list (<code>new_list</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p style="font-size:0.8rem">Loop: Iterations = <code>(number-2)</code><br>Start at: 2</p>
                    <div class="flowchart-solid">If number is divisible by <code>index</code>, append <code>index</code> to <code>new_list</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align:center;margin:1rem 0 0.5rem 0;">return: <code>new_list</code></p>
            `,
        },
        // =============================================
        // Code step-through: my_function(15)
        // =============================================
        {
            explanation: `<p>Now let's trace through the code step by step. We'll follow the first call: <code>my_function(15)</code>.</p>`,
            highlightLines: [],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 9: print(my_function(15))
        // =============================================
        {
            explanation: `<p>This line calls <code>my_function(15)</code>. The value <code>15</code> is passed as the argument, so inside the function, <code>number</code> will be <code>15</code>.</p><p>Execution jumps into the function body.</p>`,
            highlightLines: [9],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 1: new_list = []
        // =============================================
        {
            explanation: `<p>Create an empty list called <code>new_list</code>. This will store any factors we find.</p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": { value: 15, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 2: index = 2
        // =============================================
        {
            explanation: `<p>Initialise <code>index</code> to <code>2</code>. The loop will check every integer from <code>2</code> up to <code>number - 1</code>.</p>`,
            highlightLines: [2],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": { value: ["\u00a0"], highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 1: index = 2
        // =============================================
        {
            explanation: `<p>Check the <code>while</code> condition: is <code>index < number</code>?</p><p><code>2 < 15</code> is <code>True</code>, so we enter the loop.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": { value: 2, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Is <code>number % index == 0</code>?</p><p><code>15 % 2</code> is <code>1</code> (15 divided by 2 leaves a remainder of 1). <code>1 == 0</code> is <code>False</code>.</p><p>So 2 is <strong>not</strong> a factor of 15. We skip the <code>append</code>.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": 2
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": 2
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 2: index = 3
        // =============================================
        {
            explanation: `<p>Check the condition: <code>3 < 15</code> is <code>True</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": { value: 3, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Is <code>15 % 3 == 0</code>?</p><p><code>15 % 3</code> is <code>0</code> (15 divides evenly by 3). <code>0 == 0</code> is <code>True</code>!</p><p>So 3 <strong>is</strong> a factor of 15. We enter the <code>if</code> block.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": 3
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append <code>index</code> (which is <code>3</code>) to <code>new_list</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": ["\u00a0"],
                        "index": 3
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": { value: [3], highlight: [0] },
                        "index": 3
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 3: index = 4
        // =============================================
        {
            explanation: `<p>Check the condition: <code>4 < 15</code> is <code>True</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": { value: 4, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Is <code>15 % 4 == 0</code>?</p><p><code>15 % 4</code> is <code>3</code>. <code>3 == 0</code> is <code>False</code>. Not a factor — skip.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": 4
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": 4
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 4: index = 5 (hit)
        // =============================================
        {
            explanation: `<p>Check the condition: <code>5 < 15</code> is <code>True</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Is <code>15 % 5 == 0</code>?</p><p><code>15 % 5</code> is <code>0</code>. <code>True</code>! 5 is a factor of 15.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": 5
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Append <code>5</code> to <code>new_list</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3],
                        "index": 5
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p><p>The loop continues checking <code>index</code> values <code>6</code>, <code>7</code>, <code>8</code>, … all the way up to <code>14</code>, incrementing the <code>index</code> each time. We'll skip ahead to the final iteration.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": { value: [3, 5], highlight: [1] },
                        "index": 5
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Fast-forward: index = 6 through 14
        // =============================================
        {
            explanation: `<p>None of these are factors of 15 (since 15 = 3 × 5, and we've already found both), so the <code>if</code> condition is <code>False</code> every time and <code>new_list</code> remains unchanged.</p>`,
            highlightLines: [3, 4, 6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3, 5],
                        "index": { value: 14, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — condition fails
        // =============================================
        {
            explanation: `<p>After incrementing, <code>index</code> is now <code>15</code>. Check the condition: <code>15 < 15</code> is <code>False</code>. The loop ends.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3, 5],
                        "index": { value: 15, highlight: true }
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 7: return new_list
        // =============================================
        {
            explanation: `<p>Return <code>new_list</code>, which is <code>[3, 5]</code> — the factors of 15 (excluding 1 and 15 itself).</p><p>the function call, where the return value is passed to <code>print()</code>.</p>`,
            highlightLines: [7, 9],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "number": 15,
                        "new_list": [3, 5],
                        "index": 15
                    },
                    connections: [
                        { from: "number", toKey: "number" },
                        { from: "new_list", toKey: "new_list" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 10: print(my_function(24))
        // =============================================
        {
            explanation: `<p>The first result is printed: <code>[3, 5]</code>.</p><p>Now the second call: <code>my_function(24)</code>. The same process repeats with <code>number = 24</code>. The loop checks every integer from 2 to 23.</p><p><code>24</code> has many factors: <code>2, 3, 4, 6, 8, 12</code>. Each of these passes the <code>number % index == 0</code> check and gets appended to <code>new_list</code>.</p>`,
            highlightLines: [10],
            boxes: [
                {
                    title: "Memory",
                    values: {},
                },
                { title: "Output", values: ["[3, 5]"] }
            ]
        },
        // =============================================
        // Line 11: print(my_function(29))
        // =============================================
        {
            explanation: `<p>The second result is printed: <code>[2, 3, 6, 8, 12]</code>.</p><p>Now the third call: <code>my_function(29)</code>. This time <code>number = 29</code>, which is a <strong>prime number</strong> — it has no factors other than 1 and itself.</p><p>The loop checks every integer from 2 to 28, but <code>29 % index</code> is never <code>0</code>. The <code>if</code> block is never entered, so <code>new_list</code> stays empty.</p>`,
            highlightLines: [11],
            boxes: [
                {
                    title: "Memory",
                    values: {},
                },
                { title: "Output", values: ["[3, 5]", "[2, 3, 6, 8, 12]"] }
            ]
        },
        // =============================================
        // Final step
        // =============================================
        {
            explanation: `<p>The program has finished.</p><p><strong>Key takeaway:</strong> This function finds all the <strong>factors</strong> of a number (excluding 1 and the number itself). It does this by testing every integer from 2 up to <code>number - 1</code> using the modulo operator (<code>%</code>).</p><p>Notice that for the prime number 29, the result is an empty list — because prime numbers have no factors other than 1 and themselves.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {},
                },
                { title: "Output", values: ["[3, 5]", "[2, 3, 6, 8, 12]", "[]"] }
            ]
        },
        
    ]
};
