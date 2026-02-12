// 13 Prac 7 Question 8 Solution
export default {
    code: ``,
    steps: [
        {
            explanation: `<p>In the problems explored so far, we have used loops iteratively - that is, to execute a specific number of times.</p>
            <p>This type of loop is great for incrementally building or accessing strings/lists, or to guarantee a certain number of repetitions for a process.</p>
            <p>Let's look at some examples.</p>
            `,
        },
        {
            explanation: `
            <p>Examples 1 and 2 each guarantee <em>n</em> repetitions (n=100).</p>
            `,
            code: `# Example 1
print("This loop executes 100 times.")            
index = 0
while index < 100:
    print("Looping...")
    index = index + 1

# Example 2
print("This loop executes 100 times.")            
for index in range(0,100):
    print("Looping...")
            `
        },
        {
            explanation: `
            <p>Examples 3 and 4 each iterate over a list (<code>new_list</code>) and access its contents.</p>
            `,
            code: `# Example 3
new_list = [1,2,3,'a','b','c']
index = 0
while index < len(new_list):
    print(new_list[index])
    index = index + 1

# Example 4
new_list = [1,2,3,'a','b','c']
for item in new_list:
    print(item)
            `
        },
        {
            explanation: `
            <p>However, loops can be used to control the flow of a program in other ways than iteration. One common usage is to restrict the boundaries of program behaviour until the user intervenes - for example, a main loop in a game, or a loop governing a menu system.</p>
            <p>Let's revisit the password generator example and use a control loop to allow the user to create as many passwords as they like.</p>
            `,
        },
        {
            explanation: `
            <p><strong>Question:</strong> Write code to call the function <code>generate_password()</code> such that the user can create multiple passwords in succession.</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password`,
        },
        {
            explanation: `
            <p>Recall our prior definition of the function <code>generate_password()</code>, shown above.</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password`,
        },
        {
            explanation: `
            <p>Let's begin by first writing code to create a single password. We need to:</p>
            <ul>
                <li>Obtain the desired password length from the user.</li>
            </ul>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    

    

length = int(input('\\nEnter password length: '))



    
`,
        highlightLines: [17],
        },
        {
            explanation: `
            <p>Recall our prior definition of the function <code>generate_password()</code>, shown above.</p>
            <p>Let's begin by first writing code to create a single password. We need to:</p>
            <ul>
                <li>Obtain the desired password length from the user.</li>
                <li>Use the specified password length to call the function.</li>
            </ul>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    

    

length = int(input('\\nEnter password length: '))
new_password = generate_password(length)


    
`,
        highlightLines: [18],
        },
        {
            explanation: `
            <p>Recall our prior definition of the function <code>generate_password()</code>, shown above.</p>
            <p>Let's begin by first writing code to create a single password. We need to:</p>
            <ul>
                <li>Obtain the desired password length from the user.</li>
                <li>Use the specified password length to call the function.</li>
                <li>Display the result.</li>
            </ul>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    

    

length = int(input('\\nEnter password length: '))
new_password = generate_password(length)
print('\\nYour new password is: ' + new_password,'\\n\\n')

    
`,
        highlightLines: [19],
        },
        {
            explanation: `
            <p>Next, we want to make this behaviour repeat. But what is the condition for that repetition?</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    

    

length = int(input('\\nEnter password length: '))
new_password = generate_password(length)
print('\\nYour new password is: ' + new_password,'\\n\\n')

    
`,
        },
        {
            explanation: `
            <p><strong>Answer:</strong> We want the user to be able to decide when to enter and exit the loop - therefore our loop condition should be predicated on a user input.</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    

    
while choice == 'y':
    length = int(input('\\nEnter password length: '))
    new_password = generate_password(length)
    print('\\nYour new password is: ' + new_password,'\\n\\n')

    
`,
            highlightLines: [16]
        },
        {
            explanation: `
            <p>This input statement governs entry to the loop (only begin the loop if the user enters 'y').</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    
choice = input('\\nGenerate a password? [y/n] ')
    
while choice == 'y':
    length = int(input('\\nEnter password length: '))
    new_password = generate_password(length)
    print('\\nYour new password is: ' + new_password,'\\n\\n')

    
`,
            highlightChars: [
                {
                    line: 14,
                    match: "choice"
                },
                {
                    line: 16,
                    match: "choice == 'y':"
                }
            ]
        },
        {
            explanation: `
            <p>This input statement governs exit from the loop (only loop again if the user enters 'y')</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    



    
choice = input('\\nGenerate a password? [y/n] ')
    
while choice == 'y':
    length = int(input('\\nEnter password length: '))
    new_password = generate_password(length)
    print('\\nYour new password is: ' + new_password,'\\n\\n')
    choice = input('\\nGenerate another password? [y/n] ')
    
`,
            highlightChars: [
                {
                    line: 16,
                    match: "choice == 'y':"
                },
                {
                    line: 20,
                    match: "choice"
                },
            ]
        },
        {
            explanation: `
            <p>Now our behaviour for password generation will repeat continually - provided that the user keeps entering 'y' when prompted.</p>
            <p>This is a good example of a loop being used to give the user control over the program.</p>
            `,
        },
        {
            explanation: `
            <p>Lastly, we'll add a few more print statements - just for flavour. Now the output will look nice.</p>
            <p>It's time to run the code and take a look at how it behaves!</p>
            `,
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
    
print(34*'=')
print("Welcome to PSP Password Generator")
print(34*'=')
    
choice = input('\\nGenerate a password? [y/n] ')
    
while choice == 'y':
    length = int(input('\\nEnter password length: '))
    new_password = generate_password(length)
    print('\\nYour new password is: ' + new_password,'\\n\\n')
    choice = input('\\nGenerate another password? [y/n] ')
    
print('\\nThank you!')`,
            highlightLines: [10,11,12,22]
        },
        // =============================================
        // Code step-through
        // =============================================
        {
            explanation: `<p>Now let's trace through the code. In this example, the user will generate a single 5-character password.</p>`,
            highlightLines: [],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Lines 10-12: print banner
        // =============================================
        {
            explanation: `<p>The program begins with three <code>print()</code> statements that display a banner.</p>`,
            highlightLines: [10, 11, 12],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 14: choice = input(...)
        // =============================================
        {
            explanation: `<p>The banner is now displayed.</p><p>Next, the program asks the user whether they'd like to generate a password. The <code>input()</code> function displays the prompt and waits for the user to type something.</p>`,
            highlightLines: [14],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] "] }
            ]
        },
        {
            explanation: `<p>Let's say the user enters <code>'y'</code>. This value is stored in the variable <code>choice</code>.</p>`,
            highlightLines: [14],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y"] }
            ]
        },
        // =============================================
        // Line 16: while choice == 'y':
        // =============================================
        {
            explanation: `<p>Check the <code>while</code> condition: is <code>choice == 'y'</code>?</p><p><code>'y' == 'y'</code> is <code>True</code>, so we enter the loop body.</p>`,
            highlightLines: [16],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": { value: "\"y\"", highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y"] }
            ]
        },
        // =============================================
        // Line 17: length = int(input(...))
        // =============================================
        {
            explanation: `<p>The program asks the user to enter the desired password length.</p>`,
            highlightLines: [17],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: "] }
            ]
        },
        {
            explanation: `<p>The user enters <code>5</code>. The <code>input()</code> function returns the string <code>'5'</code>, which is then converted to the integer <code>5</code> by <code>int()</code> and stored in <code>length</code>.</p>`,
            highlightLines: [17],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 18: new_password = generate_password(length)
        // =============================================
        {
            explanation: `<p>Now we call <code>generate_password(length)</code>, passing in <code>5</code>. Execution jumps into the function body.</p>`,
            highlightLines: [18],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 3: password = ''
        // =============================================
        {
            explanation: `<p>Inside the function, <code>password</code> is initialised as an empty string. This will be built up character by character.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 4: index = 0
        // =============================================
        {
            explanation: `<p>Initialise <code>index</code> to <code>0</code>. This controls how many characters have been added so far.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"\"", highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Iteration 1: index = 0
        // =============================================
        {
            explanation: `<p>Check the <code>while</code> condition: <code>0 < 5</code> is <code>True</code>. Enter the loop.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"\"",
                        "index": { value: 0, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p><code>random.choice(string.ascii_letters)</code> picks a random letter from the alphabet (upper or lowercase). Let's say it picks <code>'X'</code>.</p><p><code>password += 'X'</code> concatenates it onto the password string.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"\"",
                        "index": 0
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"X\"", highlight: true },
                        "index": 0
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Iteration 2: index = 1
        // =============================================
        {
            explanation: `<p>Check: <code>1 < 5</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"X\"",
                        "index": { value: 1, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>This time <code>random.choice()</code> picks <code>'Q'</code>. It is concatenated onto <code>password</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"X\"",
                        "index": 1
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"XQ\"", highlight: true },
                        "index": 1
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Iteration 3: index = 2
        // =============================================
        {
            explanation: `<p>Check: <code>2 < 5</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQ\"",
                        "index": { value: 2, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p><code>random.choice()</code> picks <code>'k'</code>. Concatenated onto <code>password</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQ\"",
                        "index": 2
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"XQk\"", highlight: true },
                        "index": 2
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Iteration 4: index = 3
        // =============================================
        {
            explanation: `<p>Check: <code>3 < 5</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQk\"",
                        "index": { value: 3, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p><code>random.choice()</code> picks <code>'q'</code>. Concatenated onto <code>password</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQk\"",
                        "index": 3
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"XQkq\"", highlight: true },
                        "index": 3
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Iteration 5: index = 4
        // =============================================
        {
            explanation: `<p>Check: <code>4 < 5</code> is <code>True</code>. One more character to go.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQkq\"",
                        "index": { value: 4, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p><code>random.choice()</code> picks <code>'M'</code>. Concatenated onto <code>password</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQkq\"",
                        "index": 4
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": { value: "\"XQkqM\"", highlight: true },
                        "index": 4
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Loop exit
        // =============================================
        {
            explanation: `<p>Check: <code>5 < 5</code> is <code>False</code>. The inner loop ends.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQkqM\"",
                        "index": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 8: return password
        // =============================================
        {
            explanation: `<p>The function returns <code>"XQkqM"</code>. Execution jumps back to line 18, where the return value is stored in <code>new_password</code>.</p>`,
            highlightLines: [8, 18],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "password": "\"XQkqM\"",
                        "index": 5
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 19: print(...)
        // =============================================
        {
            explanation: `<p>The password is printed to the screen.</p>`,
            highlightLines: [19],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "new_password": { value: "\"XQkqM\"", highlight: true }
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5"] }
            ]
        },
        // =============================================
        // Line 20: choice = input(...)
        // =============================================
        {
            explanation: `<p>The user is asked whether they'd like to generate another password.</p>`,
            highlightLines: [20],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "new_password": "\"XQkqM\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5", "", "Your new password is: XQkqM", "", "Generate another password? [y/n] "] }
            ]
        },
        {
            explanation: `<p>This time the user enters <code>'n'</code>. The variable <code>choice</code> is updated.</p>`,
            highlightLines: [20],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"y\"",
                        "length": 5,
                        "new_password": "\"XQkqM\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5", "", "Your new password is: XQkqM", "", "Generate another password? [y/n] n"] }
            ]
        },
        // =============================================
        // Line 16: while choice == 'y': (False)
        // =============================================
        {
            explanation: `<p>Back at the top of the outer loop. Check: <code>choice == 'y'</code>?</p><p><code>'n' == 'y'</code> is <code>False</code>. The loop ends.</p>`,
            highlightLines: [16],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": { value: "\"n\"", highlight: true },
                        "length": 5,
                        "new_password": "\"XQkqM\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5", "", "Your new password is: XQkqM", "", "Generate another password? [y/n] n"] }
            ]
        },
        // =============================================
        // Line 22: print('\nThank you!')
        // =============================================
        {
            explanation: `<p>The farewell message is printed.</p>`,
            highlightLines: [22],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"n\"",
                        "length": 5,
                        "new_password": "\"XQkqM\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5", "", "Your new password is: XQkqM", "", "Generate another password? [y/n] n"] }
            ]
        },
        // =============================================
        // Final step
        // =============================================
        {
            explanation: `<p>The program has finished.</p><p><strong>Key takeaway:</strong> The outer <code>while</code> loop gives the user control over how many times the password generation process repeats. As long as the user enters <code>'y'</code>, the loop continues. The moment they enter anything else, the loop exits and the program ends gracefully.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "choice": "\"n\"",
                        "length": 5,
                        "new_password": "\"XQkqM\""
                    },
                    connections: [
                        { from: "choice", toKey: "choice" },
                        { from: "length", toKey: "length" },
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["==================================", "Welcome to PSP Password Generator", "==================================", "", "Generate a password? [y/n] y", "", "Enter password length: 5", "", "Your new password is: XQkqM", "", "Generate another password? [y/n] n", "", "Thank you!"] }
            ]
        },
    ]
};
