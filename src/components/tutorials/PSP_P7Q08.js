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
            <p>Lets revisit the password generator example and use a control loop to allow the user to create as many passwords as they like.</p>
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
    



    

    

password_length = int(input('\\nEnter the desired length: '))



    
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
    



    

    

password_length = int(input('\\nEnter the desired length: '))
new_password = generate_password(password_length)


    
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
    



    

    

password_length = int(input('\\nEnter the desired length: '))
new_password = generate_password(password_length)
print('\\nYour new password is password: ' + new_password,'\\n\\n')

    
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
    



    

    

password_length = int(input('\\nEnter the desired length: '))
new_password = generate_password(password_length)
print('\\nYour new password is password: ' + new_password,'\\n\\n')

    
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
    



    

    
while user_choice == 'y':
    password_length = int(input('\\nEnter the desired length: '))
    new_password = generate_password(password_length)
    print('\\nYour new password is password: ' + new_password,'\\n\\n')

    
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
    



    
user_choice = input('\\nWould you like to generate a password? [y/n] ')
    
while user_choice == 'y':
    password_length = int(input('\\nEnter the desired length: '))
    new_password = generate_password(password_length)
    print('\\nYour new password is password: ' + new_password,'\\n\\n')

    
`,
            highlightChars: [
                {
                    line: 14,
                    match: "user_choice"
                },
                {
                    line: 16,
                    match: "user_choice == 'y':"
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
    



    
user_choice = input('\\nWould you like to generate a password? [y/n] ')
    
while user_choice == 'y':
    password_length = int(input('\\nEnter the desired length: '))
    new_password = generate_password(password_length)
    print('\\nYour new password is password: ' + new_password,'\\n\\n')
    user_choice = input('\\nWould you like to generate another password? [y/n] ')
    
`,
            highlightChars: [
                {
                    line: 16,
                    match: "user_choice == 'y':"
                },
                {
                    line: 20,
                    match: "user_choice"
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
    
user_choice = input('\\nWould you like to generate a password? [y/n] ')
    
while user_choice == 'y':
    password_length = int(input('\\nEnter the desired length: '))
    new_password = generate_password(password_length)
    print('\\nYour new password is password: ' + new_password,'\\n\\n')
    user_choice = input('\\nWould you like to generate another password? [y/n] ')
    
print('\\nThank you for using PSP Password Generator!')`,
            highlightLines: [10,11,12,22]
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] 
            `,
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] y

Enter the desired length: 
            `,
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] y

Enter the desired length: 3

Your new password is password: RMy

Would you like to generate another password? [y/n] 
            `,
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] y

Enter the desired length: 3

Your new password is password: RMy

Would you like to generate another password? [y/n] y

Enter the desired length: 
            `,
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] y

Enter the desired length: 3

Your new password is password: RMy

Would you like to generate another password? [y/n] y

Enter the desired length: 5

Your new password is password: XQkqM

Would you like to generate another password? [y/n] 
            `,
        },
        {
            explanation: `
            <p>In this example, the user chooses to run the loop twice before ending the program.</p>
            <p>The user has complete control over the number of executions via the variable <code>user_choice</code>.</p>
            `,
            language: 'python-repl',
            code: `>>>
==================================
Welcome to PSP Password Generator
==================================

Would you like to generate a password? [y/n] y

Enter the desired length: 3

Your new password is password: RMy

Would you like to generate another password? [y/n] y

Enter the desired length: 5

Your new password is password: XQkqM

Would you like to generate another password? [y/n] n

Thank you for using PSP Password Generator!
>>>`,
        },
    ]
};
