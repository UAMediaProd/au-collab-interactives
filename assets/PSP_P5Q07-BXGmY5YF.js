import{_ as e}from"./CodeTutorial-CyR3wzRq.js";import{c as t,o,e as i,d as a}from"./index-D1h9s9Qj.js";const n={code:`>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 
`,steps:[{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,code:`>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 
`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,code:`>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: 
`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,code:`>>>
Pizza Menu:
===========
1. Margherita
2. Hawaiian
3. Pepperoni

Please make a selection: 6
Please make a selection: 8
Please make a selection: one
Please make a selection: 
`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Another common usage of loops is for the validation of user input - we sometimes call these 'Validation loops'.</p>
            <p>Validation loops serve to restrict the set of acceptable user responses. This is achieved by preventing the program from continuing until the user input is 'valid'.</p>
            <p>Let's look at an example of a simple menu system.</p>`,code:`>>>
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
`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<p><strong>Validation Loops</strong></p>
            <p>Notice how the program is trapped until the user entered a number from the menu! This is a Validation loop in action.</p>
            <p>How can we write code to achieve this?</p>
            `,code:`>>>
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

Thank you for your order!`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:"<p><strong>Question:</strong> Write code for the Pizza Menu program to restrict the user input to only options on the menu (1, 2 or 3).</p>",boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>Here we see the pizza menu program <strong>without</strong> a validation loop. In its current form, this code would accept any input from the user - even nonsensical input!</p>
            <p>Let's add a validation loop to recreate the behaviour we saw on the previous slide.</p>`,code:`print("Pizza Menu:")
print("===========")
print("1. Margherita")
print("2. Hawaiian")
print("3. Pepperoni")

user_input = input("\\nPlease make a selection: ")

print("\\nThank you for your order!")
        `,language:"python",boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>How do we construct a validation loop?</p>
            <p><strong>"while the user input is invalid, keep asking them to try again".</strong></p>`,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>This has two parts:</p>
            <ol>
                <li>A <code>while</code> loop with a condition that is true if the user input is <strong>invalid</strong>.</li>
            </ol>`,code:`print("Pizza Menu:")
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
        `,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>This has two parts:</p>
            <ol>
                <li>A <code>while</code> loop with a condition that is true if the user input is <strong>invalid</strong>.</li>
                <li>An input statement to refresh the user input inside that loop.</li>
            </ol>`,code:`print("Pizza Menu:")
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
        `,highlightLines:[13],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>Let's look closely at the Boolean expression in the loop condition, break it down, and see why it works.</p>
            `,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>Let's say the user enters an invalid input – for example, 6.</p>
            `,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<pre class="inline-pre"><code class="language-python">>>> user_input = 6
>>> user_input != 1
True
>>> user_input != 2
True
>>> user_input != 3
True</code></pre>
            <p><code>user_input</code> is 6, so each of the conditions resolve to <code>True</code>. Because of the <code>and</code> operators joining the conditions together, the overall expression is also <code>True</code> - and therefore, the loop will continue, prompting for a new input.</p>
            <p>This is exactly what we want when the input is invalid.</p>
            `,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`<pre class="inline-pre"><code class="language-python">>>> user_input = 2
>>> user_input != 1
True
>>> user_input != 2
True
>>> user_input != 3
True</code></pre>
            <p>Now let's say that <code>user_input</code> is 2, a valid value. The middle condition is now <code>False</code>; the others remain <code>True</code>. But because of the <code>and</code> operators joining the conditions together, the overall expression is now <code>False</code>! </p>
            <p>Therefore, the validation loop ends and the program can continue. This is exactly what we want when the input is valid.</p>
            `,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:`
            <p>All validation loops can be constructed in this way.</p>
            <p><strong>Remember: while the user input is invalid, keep asking them to try again.</strong></p>
            `,boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:"<p>Let's trace through the code step by step. We'll see what happens when the user first enters an invalid input, and then a valid one.</p>",highlightLines:[],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:'<p>Print <code>"Pizza Menu:"</code> to the screen.</p>',highlightLines:[0],boxes:[{title:"Memory",values:{}},{title:"Output",values:[]}]},{explanation:'<p>Print <code>"==========="</code> — a decorative separator line under the title.</p>',highlightLines:[1],boxes:[{title:"Memory",values:{}},{title:"Output",values:["Pizza Menu:"]}]},{explanation:"<p>Print the first menu option.</p>",highlightLines:[2],boxes:[{title:"Memory",values:{}},{title:"Output",values:["Pizza Menu:","==========="]}]},{explanation:"<p>Print the second menu option.</p>",highlightLines:[3],boxes:[{title:"Memory",values:{}},{title:"Output",values:["Pizza Menu:","===========","1. Margherita"]}]},{explanation:"<p>Print the third menu option.</p>",highlightLines:[4],boxes:[{title:"Memory",values:{}},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian"]}]},{explanation:'<p>The <code>input()</code> function displays the prompt <code>"Please make a selection: "</code> and waits for the user to type something.</p><p>Note the <code>\\n</code> at the start of the string — this adds a blank line before the prompt, separating it from the menu.</p>',highlightLines:[6],boxes:[{title:"Memory",values:{}},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: "]}]},{explanation:`<p>Let's say the user enters <code>6</code> — an invalid choice, since it's not on the menu. The string <code>"6"</code> is stored in <code>user_input</code>.</p>`,highlightLines:[6],boxes:[{title:"Memory",values:{user_input:{value:"'6'",highlight:!0}},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6"]}]},{explanation:`<p>Check the <code>while</code> loop condition. We need <strong>all three</strong> comparisons to be <code>True</code> (because of the <code>and</code> operators) for the loop to continue.</p>
            <p><code>user_input != '1'</code> → <code>'6' != '1'</code> → <code>True</code></p>
            <p><code>user_input != '2'</code> → <code>'6' != '2'</code> → <code>True</code></p>
            <p><code>user_input != '3'</code> → <code>'6' != '3'</code> → <code>True</code></p>
            <p><code>True and True and True</code> → <code>True</code>. The input is invalid, so the loop body executes.</p>`,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{user_input:"'6'"},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6"]}]},{explanation:'<p>Inside the loop, the program asks the user to try again with a different prompt: <code>"Invalid input, try again: "</code>.</p>',highlightLines:[13],boxes:[{title:"Memory",values:{user_input:"'6'"},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6","","Invalid input, try again: "]}]},{explanation:'<p>This time, the user enters <code>2</code> — a valid menu option. The string <code>"2"</code> is stored in <code>user_input</code>, replacing the old value of <code>"6"</code>.</p>',highlightLines:[13],boxes:[{title:"Memory",values:{user_input:{value:"'2'",highlight:!0}},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6","","Invalid input, try again: 2"]}]},{explanation:`<p>Back to the top of the loop. Check the condition again:</p>
            <p><code>user_input != '1'</code> → <code>'2' != '1'</code> → <code>True</code></p>
            <p><code>user_input != '2'</code> → <code>'2' != '2'</code> → <code>False</code></p>
            <p>Because we're using <code>and</code>, as soon as one comparison is <code>False</code>, the whole expression is <code>False</code>. The loop exits!</p>
            <p>The user entered a valid option, so the program can continue.</p>`,highlightLines:[8,9,10,11,12],boxes:[{title:"Memory",values:{user_input:"'2'"},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6","","Invalid input, try again: 2"]}]},{explanation:'<p>Print <code>"Thank you for your order!"</code>. The <code>\\n</code> adds a blank line before the message.</p>',highlightLines:[15],boxes:[{title:"Memory",values:{user_input:"'2'"},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6","","Invalid input, try again: 2"]}]},{explanation:`<p>The program has finished.</p>
            <p><strong>Key takeaways:</strong></p>
            <p>A <strong>validation loop</strong> keeps the program trapped until the user provides acceptable input. The pattern is simple: <em>while the input is invalid, keep asking them to try again</em>.</p>
            <p>The <code>while</code> condition uses <code>and</code> to check that the input does <strong>not</strong> match <strong>any</strong> of the valid options. If the input matches even one valid option, one of the <code>!=</code> comparisons becomes <code>False</code>, making the whole expression <code>False</code>, and the loop exits.</p>
            <p>All validation loops can be constructed in this way.</p>`,boxes:[{title:"Memory",values:{user_input:"'2'"},connections:[{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Pizza Menu:","===========","1. Margherita","2. Hawaiian","3. Pepperoni","","Please make a selection: 6","","Invalid input, try again: 2","","Thank you for your order!"]}]}]},s={class:"container mx-auto p-4 max-w-[1024px]"},h={__name:"PSP_P5Q07",setup(p){return(r,l)=>(o(),t("div",s,[i(e,{tutorial:a(n),language:"python-repl"},null,8,["tutorial"])]))}};export{h as default};
