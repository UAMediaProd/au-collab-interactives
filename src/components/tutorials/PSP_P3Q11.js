// 02 Prac 3 Question 11 Solution
export default {
    code: ``,
    steps: [
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in two integers as input from the user. Compute the difference between their product and their sum and display the result to the screen. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in <strong>two integers</strong> as <strong>input from the user</strong>. Compute the difference between their product and their sum and display the result to the screen. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in two integers as input from the user. Compute the difference between <strong>their product</strong> and their sum and display the result to the screen. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
            
# 2. Calculate the product num1 * num2.`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in two integers as input from the user. Compute the difference between their product and <strong>their sum</strong> and display the result to the screen. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
            
# 2. Calculate the product num1 * num2.

# 3. Calculate the sum num1 + num2.`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in two integers as input from the user. Compute <strong>the difference</strong> between their product and their sum and display the result to the screen. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
            
# 2. Calculate the product num1 * num2.

# 3. Calculate the sum num1 + num2.

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong></p><p>Write a program that takes in two integers as input from the user. Compute the difference between their product and their sum and <strong>display the result to the screen</strong>. </p><p><strong>Step 1:</strong> Break the problem down into manageable stages.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
            
# 2. Calculate the product num1 * num2.

# 3. Calculate the sum num1 + num2.

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).

# 5. Display the result.`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
            
# 2. Calculate the product num1 * num2.

# 3. Calculate the sum num1 + num2.

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).

# 5. Display the result.`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
# 2. Calculate the product num1 * num2.

# 3. Calculate the sum num1 + num2.

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).

# 5. Display the result.`,
            highlightLines: [0, 1, 2],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
# 2. Calculate the product num1 * num2.
num_product = num1 * num2

# 3. Calculate the sum num1 + num2.

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).

# 5. Display the result.`,
            highlightLines: [4, 5],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
# 2. Calculate the product num1 * num2.
num_product = num1 * num2

# 3. Calculate the sum num1 + num2.
num_sum = num1 + num2

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).

# 5. Display the result.`,
            highlightLines: [7, 8],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
# 2. Calculate the product num1 * num2.
num_product = num1 * num2

# 3. Calculate the sum num1 + num2.
num_sum = num1 + num2

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).
result = num_product - num_sum

# 5. Display the result.`,
            highlightLines: [10, 11],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 2:</strong> Convert each stage into Python code!</p><p>Alright! We have a finished program.</p>`,
            code: `# 1. Obtain two integer inputs: num1 and num2.
num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))
            
# 2. Calculate the product num1 * num2.
num_product = num1 * num2

# 3. Calculate the sum num1 + num2.
num_sum = num1 + num2

# 4. Calculate the difference: (num1 * num2) - (num1 + num2).
result = num_product - num_sum

# 5. Display the result.
print("The difference is: ", result)
`,
            highlightLines: [13, 14],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Step 3:</strong> Let's trace through the program execution with example inputs.</p><p>We'll use <code>6</code> and <code>4</code> as our test values.</p>`,
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p>Prompt the user for the first integer and assign it to <code>num1</code>.</p><p>User enters: <code>6</code></p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                    values: {
                        "Please enter an integer: ": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p>Prompt the user for the second integer and assign it to <code>num2</code>.</p><p>User enters: <code>4</code></p>`,
            highlightLines: [2],
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: ": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p>Calculate the product: <code>num1 * num2 = 6 * 4 = 24</code></p><p>Assign the result to <code>num_product</code>.</p>`,
            highlightLines: [5],
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: 4": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p>Calculate the sum: <code>num1 + num2 = 6 + 4 = 10</code></p><p>Assign the result to <code>num_sum</code>.</p>`,
            highlightLines: [8],
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: 4": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p>Calculate the difference: <code>num_product - num_sum = 24 - 10 = 14</code></p><p>Assign the result to <code>result</code>.</p>`,
            highlightLines: [11],
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: 4": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p>Display the result to the screen with a descriptive message.</p>`,
            highlightLines: [14],
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: 4": { value: "" }
                    }
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
                    values: {
                        "Please enter an integer: 6": { value: "" },
                        "Please enter another integer: 4": { value: "" },
                        "The difference is:  14": { value: "", highlight: true }
                    }
                }
            ]
        },
    ]
};
