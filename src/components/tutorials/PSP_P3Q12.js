// 03 Prac 3 Question 12 Solution
export default {
    code: `x = int(input("Enter a number: "))
display = x * "-"
print(display)`,
    steps: [
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>`,
             
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
             
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            highlightLines: [0]     
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            code: `# Obtain an integer (x) as input from the user
x = int(input("Enter a number: "))

display = x * "-"
print(display)`, 
            highlightLines: [0, 1]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            highlightLines: [3]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            highlightLines: [3, 4],
            code: `# Obtain an integer (x) as input from the user
x = int(input("Enter a number: "))

# Create a new string (display) consisting of x dashes
display = x * "-"

print(display)`, 
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            highlightLines: [6],
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function (this is how the computer thinks).</p>`,
            highlightLines: [6, 7],
            code: `# Obtain an integer (x) as input from the user
x = int(input("Enter a number: "))

# Create a new string (display) consisting of x dashes
display = x * "-"

# Print the string (display) to the screen
print(display)`, 
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>`,
            code: `# Obtain an integer (x) as input from the user
x = int(input("Enter a number: "))

# Create a new string (display) consisting of x dashes
display = x * "-"

# Print the string (display) to the screen
print(display)`, 
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            <p>This program takes an integer from the user...</p>`,
            highlightLines: [0]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            <p>This program takes an integer from the user... <br>...and displays that number of dashes “-” to the screen.</p>`,
            highlightLines: [3, 6]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 3:</strong> Execute the code to see what happens.</p>`,
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 3:</strong> Execute the code to see what happens.</p>
            <p>Prompt the user for a number and assign it to <code>x</code>.</p><p>User enters: <code>8</code></p>`,
            highlightLines: [1],
            boxes: [
                {
                    title: "Memory",
                },
                {
                    title: "Output",
                    values: {
                        "Enter a number: ": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 3:</strong> Execute the code to see what happens.</p>
            <p>Create a string by repeating the dash character <code>x</code> times.</p><p>Calculation: <code>x * "-" = 8 * "-" = "--------"</code></p><p>Assign the result to <code>display</code>.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "x": { value: "8", highlight: true }
                    },
                    connections: [
                        { from: "x", toValue: "8" }
                    ]
                },
                {
                    title: "Output",
                    values: {
                        "Enter a number: 8": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 3:</strong> Execute the code to see what happens.</p>
            <p>Display the value of <code>display</code> to the screen.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "x": { value: "8" },
                        "display": { value: "--------", highlight: true }
                    },
                    connections: [
                        { from: "x", toValue: "8" },
                        { from: "display", toValue: "--------" }
                    ]
                },
                {
                    title: "Output",
                    values: {
                        "Enter a number: 8": { value: "" }
                    }
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> What is the following program intended to do?</p>
            <p><strong>Step 3:</strong> Execute the code to see what happens.</p>
            <p>Program execution complete!</p><p>The program displayed 8 dashes to the screen, confirming our understanding of its purpose. This style of concatenation is particularly useful for creating and controlling the width of decorative borders/spacing in your program output.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "x": { value: "8" },
                        "display": { value: "--------" }
                    },
                    connections: [
                        { from: "x", toValue: "8" },
                        { from: "display", toValue: "--------" }
                    ]
                },
                {
                    title: "Output",
                    values: {
                        "Enter a number: 8": { value: "" },
                        "--------": { value: "", highlight: true }
                    }
                }
            ]
        },
        
    ]
};
