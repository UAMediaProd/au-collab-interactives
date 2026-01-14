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
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The integers 1 and 2 are converted into their string equivalents.</li>
                <li>'a' and b' appear unchanged because they were strings to begin with.</li>
            </ol>
            `,
            boxes: [
                {
                    title: "Output",
                    values: ["['a', 1, 'b', 2]", "['a', '1', 'b', '2']"]
                }
            ]
        },
        
    ]
};
