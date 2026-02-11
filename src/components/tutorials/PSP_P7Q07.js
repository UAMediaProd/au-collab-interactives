// 12 Prac 7 Question 7 Solution
export default {
    code: ``,
    steps: [
        {
            info2: `<p><strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.</p>`,
            explanation: `
            <p><strong>Step 1:</strong> Break the problem down into manageable stages</p>
            `,
        },
        {
            info2: `<p><strong>Question:</strong> <span class="span-highlight">Write a function called <code>generate_password()</code></span> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.</p>`,
            explanation: `
            <p>First, we must be aware that we are being asked to write a function. You can think of a function like any other program, except that the input and output of that program are explicitly defined from an external perspective.</p>
            <p>The input to a function is its parameter(s); The output is the return value. Together, these comprise the 'interface' of the function.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: </p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password()</code></p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: </p>
            `,
        },
        {
            info2: `<p><strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. <span class="span-highlight">The function should accept the desired length of the password as an integer parameter.</span></p>`,
            explanation: `
            <p>Look at the parameter(s) first.</p>
            <p>In this case, we have a single integer parameter. When defining our function, we can name the parameter whatever we like - the name is only used internally. Let's call it length, to reflect that it is the specified length of the password.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: </p>
            `,
        },
        {
            info2: `<p><strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and <span class="span-highlight">returns a random password</span> consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.</p>`,
            explanation: `
            <p>Next, consider the return value.</p>
            <p>The problem specifies that the function should return a password, so let's call the return value <code>password</code> (again, the naming is arbitrary; <code>password</code> only has meaning within the scope of the function).</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<p><strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.</p>`,
            explanation: `
            <p>Now that the interface of the function has been specified, it is time to turn our attention to its internal structure - that is, the code that will produce appropriate values of <code>password</code> for any given value of length.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that <span class="span-highlight">creates and returns a random password</span> consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.`,
            explanation: `
            <p>First our function needs a variable to store the randomly generated letters. This can simply be <code>password</code>, an initially empty string.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a <span class="span-highlight">random password consisting of ASCIl letters. The function should accept the desired length</span> of the password as an integer parameter.`,
            explanation: `
            <p>We know how many letters need to be generated. This will be a number of letters equal to <code>length</code>, the input parameter.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Generate a number of random letters equal to <code>length</code></div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a <span class="span-highlight">random password consisting of ASCIl letters. The function should accept the desired length</span> of the password as an integer parameter.`,
            explanation: `
            <p>Lastly we need to add the generated letters to the <code>password</code> string. It is now ready to be returned as the function output.</p>
            <p>However, we may still be able to simplify the process by implementing a loop. Let's look at that next.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Generate a number of random letters equal to <code>length</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Add the letters to <code>password</code></div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.`,
            explanation: `
            <p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Generate a number of random letters equal to <code>length</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Add the letters to <code>password</code></div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.`,
            explanation: `
            <p>Here's some repeating behaviour!</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid flowchart-highlight">Generate a number of random letters equal to <code>length</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid flowchart-highlight">Add the letters to <code>password</code></div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.`,
            explanation: `
            <p>Now we have finished simplifying the internal algorithm of our function.</p>
            <p>It's time to move on to writing code based on our design.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            info2: `<strong>Question:</strong> Write a function called <code>generate_password()</code> that creates and returns a random password consisting of ASCIl letters. The function should accept the desired length of the password as an integer parameter.`,
            explanation: `
            <p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string`,
            highlightLines: [0],
            explanation: `
            <p>This line provides later utility. We will need to use the random module to select letters at random. The string module allows us easy access to the full set of ASCIl letters.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
            `,
            highlightLines: [2],
            explanation: `
            <p>Next we need to complete the function definition. This includes specifying the input parameter length.</p>
            <p>Any code indented after this line will be executed when the function is called.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;" class="span-highlight"><code>generate_password(length)</code></p>
                <div class="flowchart-solid">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
    password = ''




    return password
            `,
            highlightLines: [3, 8],
            explanation: `
            <p>The input has been defined so now it is time to properly define the output. Remember, the variable to be returned (<code>password</code>) needs to be instantiated within the function!</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid flowchart-highlight">Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;" class="span-highlight">return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        
        index += 1
    return password
            `,
            highlightLines: [4, 5, 7],
            explanation: `
            <p>Now it's time to set up the loop. This is a simple loop with a number of iterations equal to <code>length</code>.</p>
            <p>As usual, we will need a loop counter, a way to increment it, and an appropriate condition to guarantee the right number of iterations.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline flowchart-highlight">
                    <p class="span-highlight">Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
            `,
            highlightLines: [6],
            explanation: `
            <p>Finally we fill in the contents of the loop. The set of all ASCIl letters is conveniently represented within the string <code>string.ascii_letters</code>. </p>
            <p>Choosing a single letter from that string at random can be done with the <code>random.choice()</code> function. The next letter chosen is concatenated with <code>password</code> on each cycle of the loop.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid flowchart-highlight">Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password
            `,
            explanation: `
            <p><strong>Step 4:</strong> Execute the code to verify what happens.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">✅ Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            code: `import random, string
            
def generate_password(length):
    password = ''
    index = 0
    while index < length:        
        password += random.choice(string.ascii_letters)
        index += 1
    return password

new_password = generate_password(5)
print ('Your new password is:', new_password)

new_password = generate_password(8)
print ('Your new password is:', new_password)
            `,
            explanation: `
            <p>Here we have our function along with some additional code to call it. Let's explore the details of how this external code interacts with the input and output of the function.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">✅ Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            highlightChars: [
                { line: 2, match: "length" },
                { line: 10, match: "5" },
            ],
            explanation: `
            <p>To call the function, we use its name along with a set of parentheses that contains values specifying the input parameters. In this first call, the input to the function is the integer value 5, effectively setting <code>length = 5</code> inside the function on execution.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">✅ Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            highlightChars: [
                { line: 8, match: "password" },
                { line: 10, match: "5" },
            ],
            explanation: `
            <p>On the output side, the expression <code>generate_password(5)</code> will resolve to the output value (<code>password</code>) - which is then stored in variable <code>new_password</code>.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">✅ Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        {
            highlightLines: [11],
            explanation: `
            <p>The <code>new_password</code> is then displayed to the screen.</p>
            <p>Note that in our example, there is also a second function call - this time with a parameter of value 8. Let's take a look at what happens when we run this program a few times.</p>
            `,
            info: `
            <p style="text-align: center; padding:0.5rem;">params: <code>length</code></p>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-light">
                <p style="text-align: center;">✅ <code>generate_password(length)</code></p>
                <div class="flowchart-solid">✅ Create an empty string (<code>password</code>)</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-outline">
                    <p>✅ Loop: iterations = <code>length</code></p>
                    <div class="flowchart-solid">✅ Generate a random letter</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Add the letter to <code>password</code></div>
                </div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <p style="text-align: center; padding:0.5rem;">✅ return: <code>password</code></p>
            `,
        },
        // =============================================
        // Code step-through: generate_password(5)
        // =============================================
        {
            explanation: `<p>Now let's trace through the code step by step to see exactly how the function builds a password.</p><p>We'll follow the first function call: <code>generate_password(5)</code>.</p>`,
            highlightLines: [],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 10: new_password = generate_password(5)
        // =============================================
        {
            explanation: `<p>This line calls <code>generate_password(5)</code>. The value <code>5</code> is passed as the argument, so inside the function, <code>length</code> will be set to <code>5</code>.</p><p>Execution now jumps into the function body.</p>`,
            highlightLines: [10],
            boxes: [
                { title: "Memory", values: {} },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 3: password = ''
        // =============================================
        {
            explanation: `<p>Inside the function, create an empty string called <code>password</code>.</p><p>This variable will be built up one character at a time as the loop runs.</p>`,
            highlightLines: [3],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 4: index = 0
        // =============================================
        {
            explanation: `<p>Initialise the loop counter <code>index</code> to <code>0</code>.</p><p>This will keep track of how many characters have been added so far.</p>`,
            highlightLines: [4],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"\"", highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 1
        // =============================================
        {
            explanation: `<p>Check the <code>while</code> condition: is <code>index < length</code>?</p><p><code>0 < 5</code> is <code>True</code>, so we enter the loop.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"\"",
                        "index": { value: 0, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p><strong>Iteration 1:</strong> Pick a random letter from <code>string.ascii_letters</code> and append it to <code>password</code>.</p><p>Let's say <code>random.choice()</code> returns <code>'R'</code>. So <code>password</code> becomes <code>\"\" + \"R\" = \"R\"</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"\"",
                        "index": 0
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"R\"", highlight: true },
                        "index": 0
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 2
        // =============================================
        {
            explanation: `<p>Check the condition again: is <code>index < length</code>?</p><p><code>1 < 5</code> is <code>True</code>, so we continue.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"R\"",
                        "index": { value: 1, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p><strong>Iteration 2:</strong> Pick another random letter. This time <code>random.choice()</code> returns <code>'M'</code>.</p><p><code>password</code> becomes <code>\"R\" + \"M\" = \"RM\"</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"R\"",
                        "index": 1
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"RM\"", highlight: true },
                        "index": 1
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 3
        // =============================================
        {
            explanation: `<p>Check the condition: <code>2 < 5</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RM\"",
                        "index": { value: 2, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p><strong>Iteration 3:</strong> <code>random.choice()</code> returns <code>'y'</code>.</p><p><code>password</code> becomes <code>\"RM\" + \"y\" = \"RMy\"</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RM\"",
                        "index": 2
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"RMy\"", highlight: true },
                        "index": 2
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 4
        // =============================================
        {
            explanation: `<p>Check the condition: <code>3 < 5</code> is <code>True</code>.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMy\"",
                        "index": { value: 3, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p><strong>Iteration 4:</strong> <code>random.choice()</code> returns <code>'y'</code> again.</p><p><code>password</code> becomes <code>\"RMy\" + \"y\" = \"RMyy\"</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMy\"",
                        "index": 3
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"RMyy\"", highlight: true },
                        "index": 3
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // while loop — iteration 5
        // =============================================
        {
            explanation: `<p>Check the condition: <code>4 < 5</code> is <code>True</code>. One more character to go!</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMyy\"",
                        "index": { value: 4, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p><strong>Iteration 5:</strong> <code>random.choice()</code> returns <code>'Y'</code>.</p><p><code>password</code> becomes <code>\"RMyy\" + \"Y\" = \"RMyyY\"</code>.</p>`,
            highlightLines: [6],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMyy\"",
                        "index": 4
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        {
            explanation: `<p>Increment <code>index</code> by <code>1</code>.</p>`,
            highlightLines: [7],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": { value: "\"RMyyY\"", highlight: true },
                        "index": 4
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
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
            explanation: `<p>Check the condition: <code>5 < 5</code> is <code>False</code>. The loop ends.</p><p>We've generated all 5 characters.</p>`,
            highlightLines: [5],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMyyY\"",
                        "index": { value: 5, highlight: true }
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 8: return password
        // =============================================
        {
            explanation: `<p>Return <code>password</code>, which is <code>\"RMyyY\"</code>.</p><p>Execution jumps back to line 10, where the return value is stored in <code>new_password</code>.</p>`,
            highlightLines: [8],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "length": 5,
                        "password": "\"RMyyY\"",
                        "index": 5
                    },
                    connections: [
                        { from: "length", toKey: "length" },
                        { from: "password", toKey: "password" },
                        { from: "index", toKey: "index" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 11: print('Your new password is:', new_password)
        // =============================================
        {
            explanation: `<p>Back outside the function. The return value <code>\"RMyyY\"</code> is now stored in <code>new_password</code>.</p><p>Print the password to the screen.</p>`,
            highlightLines: [11],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": { value: "\"RMyyY\"", highlight: true }
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: [] }
            ]
        },
        // =============================================
        // Line 13: new_password = generate_password(8)
        // =============================================
        {
            explanation: `<p>Now the second function call: <code>generate_password(8)</code>. This time <code>length</code> is <code>8</code>, so the loop will run 8 times and produce an 8-character password.</p><p>The process is exactly the same as before — the function creates an empty <code>password</code>, picks 8 random letters one at a time, and returns the result.</p>`,
            highlightLines: [13],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": "\"RMyyY\""
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["Your new password is: RMyyY"] }
            ]
        },
        // =============================================
        // Line 14: print('Your new password is:', new_password) — second call
        // =============================================
        {
            explanation: `<p>The function returns an 8-character password — let's say <code>\"XQkqMZRT\"</code>. This is stored in <code>new_password</code> (replacing the previous value) and printed to the screen.</p>`,
            highlightLines: [14],
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": { value: "\"XQkqMZRT\"", highlight: true }
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["Your new password is: RMyyY"] }
            ]
        },
        {
            explanation: `<p>The program has finished. Both passwords have been generated and displayed.</p><p>Because <code>random.choice()</code> picks letters randomly, the passwords will be different every time the program runs. Let's take a look at what happens when we run this program a few more times.</p>`,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": "\"XQkqMZRT\""
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                { title: "Output", values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT"] }
            ]
        },
        // =============================================
        // Demonstrating randomness — additional runs
        // =============================================
        {
            explanation: `
            <p>Running the program again produces completely different passwords, demonstrating the randomness.</p>
            `,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": "\"XQkqMZRT\""
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT", "Your new password is: bAIPR", "Your new password is: cDvTEzmK"],
                }
            ]
        },
        {
            explanation: `
            <p>As we can see, a random password is generated each time the function is called, with the length being specified by the input parameter.</p>
            `,
            boxes: [
                {
                    title: "Memory",
                    values: {
                        "new_password": "\"XQkqMZRT\""
                    },
                    connections: [
                        { from: "new_password", toKey: "new_password" }
                    ]
                },
                {
                    title: "Output",
                    values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT", "Your new password is: bAIPR", "Your new password is: cDvTEzmK", "Your new password is: lRaYJ", "Your new password is: yRrUFkjg"],
                }
            ]
        },
    ]
};
