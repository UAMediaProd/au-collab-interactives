// 08 Prac 5 Question 7 Solution
export default {
                code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 
`,
    steps: [
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,
        },
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,
            code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 
`
        },
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,
            code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: 
`
        },
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,
            code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: one
Please make a selection: 
`
        },
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,
            code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: one
Please make a selection: asdfhkljdhaslf
Please make a selection: 
`
        },
        {
            explanation: `<p><strong>Validation Loops</strong></p>
            <p>Notice how the program is trapped until the user entered a number from the menu! This is a Validation loop in action.</p>
            <p>How can we write code to achieve this?</p>
            `,
            code: `>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: one
Please make a selection: asdfhkljdhaslf
Please make a selection: 2

Thank you for your order!`
        },
        {
            explanation: `<p><strong>Question:</strong> Write code for the Pizza Menu program to restrict the user input to only options on the menu (1, 2 or 3).</p>`,
        },
        {
            explanation: `
            <p>Here we see the pizza menu program <strong>without</strong> a validation loop. In its current form, this code would accept any input from the user - even nonsensical input!</p>
            <p>Let's add a validation loop to recreate the behaviour we saw on the previous slide.</p>`,
            code: `print("Pizza Menu:")
print("===========")
print("1. Margherita")
print("2. Hawaiian")
print("3. Pepperoni")

user_input = input("\\nPlease make a selection: ")

print("\\nThank you for your order!")
        `,
        language: 'python',
        },
        {
            explanation: `
            <p>How do we construct a validation loop?</p>
            <p><strong>"while the user input is invalid, keep asking them to try again".</strong></p>`,
        },
        {
            explanation: `
            <p>This has two parts:</p>
            <ol>
                <li>A <code>while</code> loop with a condition that is true if the user input is <strong>invalid</strong>.</li>
            </ol>`,
            code: `print("Pizza Menu:")
print("===========")
print("1. Margherita")
print("2. Hawaiian")
print("3. Pepperoni")

user_input = input("\\nPlease make a selection: ")

while (
    user_input != '1' and 
    user_input != '2' and 
    user_input != '3'
):

print("\\nThank you for your order!")
        `,
        highlightLines: [8, 9, 10, 11, 12],
        },
        {
            explanation: `
            <p>This has two parts:</p>
            <ol>
                <li>A <code>while</code> loop with a condition that is true if the user input is <strong>invalid</strong>.</li>
                <li>An input statement to refresh the user input inside that loop.</li>
            </ol>`,
            code: `print("Pizza Menu:")
print("===========")
print("1. Margherita")
print("2. Hawaiian")
print("3. Pepperoni")

user_input = input("\\nPlease make a selection: ")

while (
    user_input != '1' and 
    user_input != '2' and 
    user_input != '3'
):
    user_input = input("\\nInvalid input, try again: ")

print("\\nThank you for your order!")
        `,
        highlightLines: [13],
        },
        {
            explanation: `
            <p>Let's look closely at the Boolean expression in the loop condition, break it down, and see why it works.</p>
            `,
            highlightLines: [8, 9, 10, 11, 12],
        },
        {
            explanation: `
            <p>Let's say the user enters an invalid input – for example, 6.</p>
            `,
            highlightLines: [8, 9, 10, 11, 12],
        },
        {
            explanation: `<pre class="inline-pre"><code class="language-python">>>> user_input = 6
>>> user_input != 1
True
>>> user_input != 2
True
>>> user_input != 3
True</code></pre>
            <p><code>user_input</code> is 6, so each of the conditions resolve to <code>True</code>. Because of the <code>and</code> operators joining the conditions together, the overall expression is also <code>True</code> - and therefore, the loop will continue, prompting for a new input.</p>
            <p>This is exactly what we want when the input is invalid.</p>
            `,
            highlightLines: [8, 9, 10, 11, 12],
        },
        {
            explanation: `<pre class="inline-pre"><code class="language-python">>>> user_input = 2
>>> user_input != 1
True
>>> user_input != 2
True
>>> user_input != 3
True</code></pre>
            <p>Now let's say that <code>user_input</code> is 2, a valid value. The middle condition is now <code>False</code>; the others remain <code>True</code>. But because of the <code>and</code> operators joining the conditions together, the overall expression is now <code>False</code>! </p>
            <p>Therefore, the validation loop ends and the program can continue. This is exactly what we want when the input is valid.</p>
            `,
            highlightLines: [8, 9, 10, 11, 12],
        },
        {
            explanation: `
            <p>All validation loops can be constructed in this way.</p>
            <p><strong>Remember: while the user input is invalid, keep asking them to try again.</strong></p>
            `,
        },
    ]
};
