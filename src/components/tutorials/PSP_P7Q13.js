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
        {
            explanation: `
            <p>Let's take a look at the output!</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: []
                }
            ]
        },
        {
            explanation: `
            <p>Let's take a look at the output!</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: ["[3, 5]", "[2, 3, 6, 8, 12]", "[]"]
                }
            ]
        },
        
    ]
};
