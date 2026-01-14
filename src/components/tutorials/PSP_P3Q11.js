// 02 Prac 3 Question 11 Solution
export default {
    code: ``,
    steps: [
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute the difference between their product and their sum and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in <span class="span-highlight">two integers as input from the user</span>. Compute the difference between their product and their sum and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            `,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute the difference between <span class="span-highlight">their product</span> and their sum and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            `,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute the difference between their product and <span class="span-highlight">their sum</span> and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            `,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute <span class="span-highlight">the difference</span> between their product and their sum and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            `,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute the difference between their product and their sum and <span class="span-highlight">display the result to the screen</span>. </p>
            `,
            explanation: `<p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            info2: `
            <p><strong>Question:</strong> Write a program that takes in two integers as input from the user. Compute the difference between their product and their sum and display the result to the screen. </p>
            `,
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            info: `
            <div class="flowchart-solid">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))`,
            highlightLines: [0, 1],
            info: `
            <div class="flowchart-solid flowchart-highlight">Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
num_product = num1 * num2`,
            highlightLines: [3],
            info: `
            <div class="flowchart-solid">✅ Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
num_product = num1 * num2

num_sum = num1 + num2`,
            highlightLines: [5],
            info: `
            <div class="flowchart-solid">✅ Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
num_product = num1 * num2

num_sum = num1 + num2

result = num_product - num_sum`,
            highlightLines: [7],
            info: `
            <div class="flowchart-solid">✅ Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p><p>Alright! We have a finished program.</p>`,
            code: `num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
num_product = num1 * num2

num_sum = num1 + num2

result = num_product - num_sum

print("The difference is: ", result)
`,
            highlightLines: [9],
            info: `
            <div class="flowchart-solid">✅ Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Display the result.</div>
            `,
        },
        {
            explanation: `<p><strong>Step 3:</strong> Let's trace through the program execution with example inputs.</p><p>We'll use <code>6</code> and <code>4</code> as our test values.</p>`,
            info: `
            <div class="flowchart-solid">✅ Obtain two integer inputs: <code>num1</code> and <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the product <code>num1 * num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the sum <code>num1</code> + <code>num2</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Calculate the difference: <code>(num1 * num2) - (num1 + num2)</code>.</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ Display the result.</div>
            `,
        },
        {
            explanation: `<p>Prompt the user for the first integer and assign it to <code>num1</code>.</p><p>User enters: <code>6</code></p>`,
            highlightLines: [0],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: "]
                }
            ]
        },
        {
            explanation: `<p>Prompt the user for the second integer and assign it to <code>num2</code>.</p><p>User enters: <code>4</code></p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6", highlight: true }
                    },
                    connections: [
                        { from: "num1", toValue: "6" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: "]
                }
            ]
        },
        {
            explanation: `<p>Calculate the product: <code>num1 * num2 = 6 * 4 = 24</code></p><p>Assign the result to <code>num_product</code>.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6" },
                        "num2": { value: "4", highlight: true }
                    },
                    connections: [
                        { from: "num1", toValue: "6" },
                        { from: "num2", toValue: "4" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: 4"]
                }
            ]
        },
        {
            explanation: `<p>Calculate the sum: <code>num1 + num2 = 6 + 4 = 10</code></p><p>Assign the result to <code>num_sum</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6" },
                        "num2": { value: "4" },
                        "num_product": { value: "24", highlight: true }
                    },
                    connections: [
                        { from: "num1", toValue: "6" },
                        { from: "num2", toValue: "4" },
                        { from: "num_product", toValue: "24" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: 4"]
                }
            ]
        },
        {
            explanation: `<p>Calculate the difference: <code>num_product - num_sum = 24 - 10 = 14</code></p><p>Assign the result to <code>result</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6" },
                        "num2": { value: "4" },
                        "num_product": { value: "24" },
                        "num_sum": { value: "10", highlight: true }
                    },
                    connections: [
                        { from: "num1", toValue: "6" },
                        { from: "num2", toValue: "4" },
                        { from: "num_product", toValue: "24" },
                        { from: "num_sum", toValue: "10" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: 4"]
                }
            ]
        },
        {
            explanation: `<p>Display the result to the screen with a descriptive message.</p>`,
            highlightLines: [9],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6" },
                        "num2": { value: "4" },
                        "num_product": { value: "24" },
                        "num_sum": { value: "10" },
                        "result": { value: "14", highlight: true }
                    },
                    connections: [
                        { from: "num1", toValue: "6" },
                        { from: "num2", toValue: "4" },
                        { from: "num_product", toValue: "24" },
                        { from: "num_sum", toValue: "10" },
                        { from: "result", toValue: "14" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: 4"]
                }
            ]
        },
        {
            explanation: `<p>Program execution complete!</p><p>The final output shows that the difference between the product (24) and the sum (10) is 14.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "num1": { value: "6" },
                        "num2": { value: "4" },
                        "num_product": { value: "24" },
                        "num_sum": { value: "10" },
                        "result": { value: "14" }
                    },
                    connections: [
                        { from: "num1", toValue: "6" },
                        { from: "num2", toValue: "4" },
                        { from: "num_product", toValue: "24" },
                        { from: "num_sum", toValue: "10" },
                        { from: "result", toValue: "14" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Please enter an integer: 6", "Please enter another integer: 4", "The difference is:  14"]
                }
            ]
        },
    ]
};
