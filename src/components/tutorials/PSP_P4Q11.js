// 04 Prac 4 Question 11 Solution
export default {
    code: ``,
    steps: [
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages</p>`,
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
            explanation: `<p><strong>Question:</strong> Write a program that creates <strong>10 random numbers between 1 and 20</strong>, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages</p>`,
            code: `# 1. Create 10 random numbers between 1 and 20`,
            highlightLines: [0],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the <strong>highest of those numbers to the screen.</strong></p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages</p>`,
            code: `# 1. Create 10 random numbers between 1 and 20
            
# 2. Determine the highest number created`,
            highlightLines: [2],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and <strong>displays</strong> the highest of those numbers to the screen.</p>
            <p><strong>Step 1:</strong> Break the problem down into manageable stages</p>`,
            code: `# 1. Create 10 random numbers between 1 and 20
            
# 2. Determine the highest number created

# 3. Display the result`,
            highlightLines: [4],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>`,
            code: `# 1. Create 10 random numbers between 1 and 20
            
# 2. Determine the highest number created

# 3. Display the result`,
            highlightLines: [4],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>This first stage includes repeating behaviour! Let's update our comments to reflect this.</p>`,
            code: `# 1. Create 10 random numbers between 1 and 20
            
# 2. Determine the highest number created

# 3. Display the result`,
            highlightLines: [0],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>This first stage includes repeating behaviour! Let's update our comments to reflect this.</p>`,
            code: `# 1. Loop 10 times:
    # Create a random number between 1 and 20
            
# 2. Determine the highest number created

# 3. Display the result`,
            highlightLines: [0, 1],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>The next stage can now be included in the same loop – on each cycle, check if the current number is the highest so far. Let's update our comments again.</p>`,
            code: `# 1. Loop 10 times:
    # Create a random number between 1 and 20
    # Store the number if it is the highest so far
            
# 2. Display the result`,
            highlightLines: [2],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            <hr>
            <p>The final stage does not belong in the loop as we only need to display the final result to the screen once!</p>`,
            highlightLines: [4],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
                <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>`,
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Before we start implementing the algorithm, let's begin by importing any necessary modules and initialising any variables that we anticipate we will need.</p>`,
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>First, our program will be creating random numbers. To do this we must import the appropriate module (random) for later use.</p>`,
            code: `import random

# 1. Loop 10 times:
    # Create a random number between 1 and 20
    # Store the number if it is the highest so far
            
# 2. Display the result`,
            highlightLines: [0],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Because we will be using a loop, we need a variable to keep track of how many cycles have been executed (<code>index</code>).</p>
            <p>We will also need a variable to store the highest number (<code>highest_num</code>).</p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
    # Create a random number between 1 and 20
    # Store the number if it is the highest so far
            
# 2. Display the result`,
            highlightLines: [2, 3],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Next, lets create the loop. To force a while loop to execute <code>n</code> times, we simply set the condition for the loop to be <code>index < n</code>. </p>
            <p>In the case here, <code>n = 10</code>. </p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
while index < 10:    
    # Create a random number between 1 and 20
    # Store the number if it is the highest so far
            
# 2. Display the result`,
            highlightLines: [6],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>However, we do have to remember to increment the value of <code>index</code> by 1 at the end of the loop. This way, the loop will naturally break on the <em>n</em><sup>th</sup> iteration. </p>
            <p>This loop will now execute exactly 10 times.</p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
while index < 10:    
    # Create a random number between 1 and 20
    # Store the number if it is the highest so far
    # Increment the value of index by 1
    index = index + 1
            
# 2. Display the result`,
            highlightLines: [9, 10],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Our algorithm shows two processes that occur within this loop. </p>
            <p>Lets start with the random number generation.</p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
while index < 10:    
    # Create a random number between 1 and 20
    random_num = random.randint(1, 20)
    # Store the number if it is the highest so far
    # Increment the value of index by 1
    index = index + 1
            
# 2. Display the result`,
            highlightLines: [8],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Now we need to keep track of the highest number generated. </p>
            <p>To do this, we can check the most recently generated number <code>rand_num</code> against the highest recorded value so far <code>highest_num</code>, overwriting the latter if it has now been exceeded.</p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
while index < 10:    
    # Create a random number between 1 and 20
    random_num = random.randint(1, 20)
    # Store the number if it is the highest so far
    if random_num > highest_num:
        highest_num = random_num
    # Increment the value of index by 1
    index = index + 1
            
# 2. Display the result`,
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            <hr>
            <p>Finally, we have completed the contents of the loop as shown in the algorithm.</p>
            <p>The only thing that remains to be done is print the result to the screen! The program is now complete!</p>`,
            code: `import random

index = 0
highest_num = 0

# 1. Loop 10 times:
while index < 10:    
    # Create a random number between 1 and 20
    random_num = random.randint(1, 20)
    # Store the number if it is the highest so far
    if random_num > highest_num:
        highest_num = random_num
    # Increment the value of index by 1
    index = index + 1
            
# 2. Display the result
print("The highest number is ", highest_num)`,
            highlightLines: [15],
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Let's trace through the program execution. We'll use a sample sequence of random numbers for demonstration purposes.</p>`,
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
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Initialize variables <code>index</code> and <code>highest_num</code> to <code>0</code>.</p>`,
            highlightLines: [2, 3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "0", highlight: true },
                        "highest_num": { value: "0", highlight: true }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 1:</strong> Check loop condition <code>index < 10</code> (0 < 10 is True), enter loop.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "0" },
                        "highest_num": { value: "0" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 1:</strong> Generate random number. For this example: <code>random_num = 7</code></p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "0" },
                        "highest_num": { value: "0" },
                        "random_num": { value: "7", highlight: true }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 1:</strong> Check if <code>random_num > highest_num</code> (7 > 0 is True), so update <code>highest_num</code>.</p>`,
            highlightLines: [10, 11],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "0" },
                        "highest_num": { value: "7", highlight: true },
                        "random_num": { value: "7" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 1:</strong> Increment <code>index</code> by 1. Loop back to condition check.</p>`,
            highlightLines: [12],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "1", highlight: true },
                        "highest_num": { value: "7" },
                        "random_num": { value: "7" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 2:</strong> Check loop condition <code>index < 10</code> (1 < 10 is True), enter loop.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "1" },
                        "highest_num": { value: "7" },
                        "random_num": { value: "7" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 2:</strong> Generate random number. For this example: <code>random_num = 14</code></p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "1" },
                        "highest_num": { value: "7" },
                        "random_num": { value: "14", highlight: true }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 2:</strong> Check if <code>random_num > highest_num</code> (14 > 7 is True), so update <code>highest_num</code>.</p>`,
            highlightLines: [10, 11],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "1" },
                        "highest_num": { value: "14", highlight: true },
                        "random_num": { value: "14" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 2:</strong> Increment <code>index</code> by 1. Loop back to condition check.</p>`,
            highlightLines: [12],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "2", highlight: true },
                        "highest_num": { value: "14" },
                        "random_num": { value: "14" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><em>Iterations 3-9 continue in the same manner...</em></p>
            <p>Let's skip ahead to the final iteration.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "2" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "14" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 10:</strong> Check loop condition <code>index < 10</code> (9 < 10 is True), enter loop for the final time.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "9" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "14" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 10:</strong> Generate random number. For this example: <code>random_num = 11</code></p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "9" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11", highlight: true }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 10:</strong> Check if <code>random_num > highest_num</code> (11 > 14 is False), so <code>highest_num</code> remains unchanged.</p>`,
            highlightLines: [10],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "9" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p><strong>Iteration 10:</strong> Increment <code>index</code> by 1. Loop back to condition check.</p>`,
            highlightLines: [12],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "10", highlight: true },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Check loop condition <code>index < 10</code> (10 < 10 is False). Exit the loop.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "10" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Display the result to the screen.</p>`,
            highlightLines: [15],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "10" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                }
            ]
        },
        {
            explanation: `<p><strong>Question:</strong> Write a program that creates 10 random numbers between 1 and 20, and displays the highest of those numbers to the screen.</p>
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            <hr>
            <p>Program execution complete!</p>
            <p>The program successfully generated 10 random numbers and identified the highest value (14 in this example) to display to the user.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "index": { value: "10" },
                        "highest_num": { value: "14" },
                        "random_num": { value: "11" }
                    },
                    connections: [
                        { from: "index", toKey: "index" },
                        { from: "highest_num", toKey: "highest_num" },
                        { from: "random_num", toKey: "random_num" }
                    ]
                },
                {
                    title: "Output",
                    values: {
                        "The highest number is  14": { value: "", highlight: true }
                    }
                }
            ]
        },
    ]
};
