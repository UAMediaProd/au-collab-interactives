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
            highlightLines: [4,5,7],
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
            highlightLines: [2,10],
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
            highlightLines: [8,10],
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
        {
            highlightLines: [11],
            explanation: `
            <p>The <code>new_password</code> is then displayed to the screen.</p>
            <p>Note that in our example, there is also a second function call - this time with a parameter of value 8. Let's take a look at what happens when we run this program a few times.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT"],
                }
            ]
        },
        {
            highlightLines: [11],
            explanation: `
            <p>The <code>new_password</code> is then displayed to the screen.</p>
            <p>Note that in our example, there is also a second function call - this time with a parameter of value 8. Let's take a look at what happens when we run this program a few times.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT", "Your new password is: bAIPR", "Your new password is: cDvTEzmK"],
                }
            ]
        },
        {
            highlightLines: [11],
            explanation: `
            <p>As we can see, a random password is generated each time the function is called, with the length being specified by the input parameter.</p>
            `,
            boxes: [
                {
                    title: "Output",
                    values: ["Your new password is: RMyyY", "Your new password is: XQkqMZRT", "Your new password is: bAIPR", "Your new password is: cDvTEzmK", "Your new password is: lRaYJ", "Your new password is: yRrUFkjg"],
                }
            ]
        },
    ]
};
