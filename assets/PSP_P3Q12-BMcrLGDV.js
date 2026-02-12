import{_ as e}from"./CodeTutorial-CyR3wzRq.js";import{c as t,o,e as i,d as n}from"./index-D1h9s9Qj.js";const s={code:`x = int(input("Enter a number: "))
display = x * "-"
print(display)`,steps:[{explanation:"<p><strong>Question:</strong> What is the following program intended to do?</p>"},{explanation:"<p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>"},{explanation:`<p>Getting input from the user.</p>
            <p>Remember, the input function returns whatever the user types <em>as a string!</em> We need to convert it to an integer using <code>int()</code>.</p>`,highlightLines:[0],info:`
            <div class="flowchart-solid down">Obtain an integer as input from the user (<code>x</code>)</div>`},{explanation:`<p>This line creates a new string by repeating the dash character <code>"-"</code> a number of times equal to the value of <code>x</code>.</p>
            <p>For example, if <code>x = 5</code>, then <code>x * "-"</code> would produce <code>"-----"</code>.</p>`,highlightLines:[1],info:`
            <div class="flowchart-solid">Obtain an integer as input from the user (<code>x</code>)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid down">Create a string (<code>display</code>) consisting of <code>x</code> dashes</div>`},{explanation:"<p>Finally, we display the result to the screen.</p>",highlightLines:[2],info:`
            <div class="flowchart-solid">Obtain an integer as input from the user (<code>x</code>)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Create a string (<code>display</code>) consisting of <code>x</code> dashes</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid down">Display the result (<code>display</code>)</div>`},{explanation:"<p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>",info:`
            <div class="flowchart-solid">Obtain an integer as input from the user (<code>x</code>)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Create a string (<code>display</code>) consisting of <code>x</code> dashes</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid down">Display the result (<code>display</code>)</div>`},{explanation:'<p>This program prompts for an integer from the user, and displays that number of dashes "-" to the screen.</p>',info:`
            <div class="flowchart-solid">Obtain an integer as input from the user (<code>x</code>)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Create a string (<code>display</code>) consisting of <code>x</code> dashes</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid down">Display the result (<code>display</code>)</div>`},{explanation:"<p><strong>Step 3:</strong> Execute the code to verify what happens.</p>",boxes:[{title:"Memory"},{title:"Output"}]},{explanation:"<p>Let's trace through the program execution. We'll use 8 as our test input.</p>",boxes:[{title:"Memory"},{title:"Output"}]},{explanation:`<p>Prompt the user for a number and assign it to <code>x</code>.</p>
            <p>User enters: <code>8</code></p>`,highlightLines:[0],boxes:[{title:"Memory"},{title:"Output",values:["Enter a number:"]}]},{explanation:`<p>Create a string by repeating the dash character <code>x</code> times.</p>
            <p>Calculation: <code>x * "-" = 8 * "-" = "--------"</code></p>
            <p>Assign the result to <code>display</code>.</p>`,highlightLines:[1],boxes:[{title:"Memory",values:{x:{value:"8",highlight:!0}},connections:[{from:"x",toKey:"x"}]},{title:"Output",values:["Enter a number: 8"]}]},{explanation:"<p>Display the value of <code>display</code> to the screen.</p>",highlightLines:[2],boxes:[{title:"Memory",values:{x:{value:"8"},display:{value:"'--------'",highlight:!0}},connections:[{from:"x",toKey:"x"},{from:"display",toKey:"display"}]},{title:"Output",values:["Enter a number: 8"]}]},{explanation:`<p>Program execution complete!</p>
            <p>The program displayed 8 dashes to the screen, confirming our understanding of its purpose. This style of string repetition is particularly useful for creating and controlling the width of decorative borders/spacing in your program output.</p>`,boxes:[{title:"Memory",values:{x:{value:"8"},display:{value:"'--------'"}},connections:[{from:"x",toKey:"x"},{from:"display",toKey:"display"}]},{title:"Output",values:["Enter a number: 8","--------"]}]}]},a={class:"container mx-auto p-4 max-w-[1024px]"},h={__name:"PSP_P3Q12",setup(r){return(c,d)=>(o(),t("div",a,[i(e,{tutorial:n(s),language:"python"},null,8,["tutorial"])]))}};export{h as default};
