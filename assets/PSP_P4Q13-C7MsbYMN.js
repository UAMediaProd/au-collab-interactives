import{_ as t}from"./CodeTutorial-CyR3wzRq.js";import{c as e,o as i,e as o,d as n}from"./index-D1h9s9Qj.js";const u={code:`index = 0
output_string = ''

user_input = input("Enter a string: ")

while index < len(user_input):
    char = user_input[index]
    if (
        char != 'a'
        and char != 'e'
        and char != 'i'
        and char != 'o'
        and char != 'u'
    ):
        output_string += char
    index += 1

print(output_string)
`,steps:[{explanation:"<p><strong>Question:</strong> What is the following program intended to do?</p>"},{explanation:`
            <p><strong>Step 1:</strong> Examine each line in order of execution and identify its function. This is how the computer thinks!</p>`},{explanation:`
            <p>These first lines are simply variable initialisations, typically found at the beginning of a program.</p>
            <p>We should refer back to these starting values when we next encounter the variables in the code to better understand the algorithm.</p>
            `,highlightLines:[0,1]},{explanation:`
            <p>Getting input from the user.</p>
            <p>Remember, the input function returns whatever the user types <em>as a string!</em></p>
            `,highlightLines:[3],info:`
            <div class="flowchart-solid down">Obtain a string as input from the user (user_input)</div>`},{explanation:`
            <p>Next we have the beginning of a loop.</p>
            <p>When trying to figure out the purpose of a loop, we should begin by checking when the loop will break.</em></p>
            `,highlightLines:[5,6,7,8,9,10,11,12,13,14,15],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline"><p>Begin loop</p></div>
            `},{explanation:`
            <p>Recall that the variable <code>index</code> was originally set to 0. This loop will end when the value of <code>index</code> exceeds the length of the variable <code>user_input</code>.</p>
            <p>Checking further down the loop, we can see that the value of <code>index</code> increases by 1 each cycle. Therefore, the loop will eventually terminate, having executed a number of times equal to the length of <code>user_input</code>.</p>
            `,highlightLines:[15],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline"><p>Begin loop</p><p style="font-size:0.8rem">Number of iterations = length of user input</p></div>
            `},{explanation:`
            <p>This line takes the string <code>user_input</code> and accesses the character stored at a position specified by the value of <code>index</code>.</p>
            <p>Because this line is inside a loop in which <code>index</code> increases by 1 each cycle, it is clear that the program is simply accessing each character of the string in turn.</p>
            `,highlightLines:[6],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
            </div>

            `},{explanation:`
            <p>Here, the character from the previous stage (<code>char</code>) is conditionally concatenated with another string, <code>output_string</code>.</p>
            <p><code>output_string</code> is initially blank, but will grow in size each cycle provided that the current value of <code>char</code> is not any of the 5 vowels.</p>
            `,highlightLines:[7,8,9,10,11,12,13,14],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If <code>char</code> is not a vowel, add it to <code>output_string</code></div>
            </div>

            `},{explanation:`
            <p>The loop ends here, as this is the last line indented directly following the while statement.</p>
            `,highlightLines:[15],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If <code>char</code> is not a vowel, add it to <code>output_string</code></div>
                <p>End loop</p>
            </div>

            `},{explanation:`
            <p>Finally, we display the result.</p>
            `,highlightLines:[17],info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If <code>char</code> is not a vowel, add it to <code>output_string</code></div>
                <p>End loop</p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result (<code>output_string</code>)</div>
            `},{explanation:`
            <p><strong>Step 2:</strong> Determine the original intention of the program by considering the contribution of each stage and how they fit together!</p>
            `,info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If <code>char</code> is not a vowel, add it to <code>output_string</code></div>
                <p>End loop</p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result (<code>output_string</code>)</div>
            `},{explanation:`
            <p>This program prompts for a string from the user, and adds all consonants from that string to a new string which is then displayed to the screen.</p>
            `,info:`
            <div class="flowchart-solid">Obtain a string as input from the user (user_input)</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = length of user input</p>
                <div class="flowchart-solid">Obtain the next character from <code>user_input</code> as <code>char</code></div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If <code>char</code> is not a vowel, add it to <code>output_string</code></div>
                <p>End loop</p>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the result (<code>output_string</code>)</div>
            `},{explanation:`
            <p><strong>Step 3:</strong> Execute the code to verify what happens.</p>
            `,boxes:[{title:"Memory"},{title:"Output"}]},{explanation:`
            <p>Let's trace through the program execution. We'll use "beautiful" as our test input.</p>
            `,boxes:[{title:"Memory"},{title:"Output"}]},{explanation:`
            <p>Initialise variables <code>index</code> to <code>0</code> and <code>output_string</code> to an empty string.</p>
            `,highlightLines:[0,1],boxes:[{title:"Memory"},{title:"Output"}]},{explanation:`
            <p>Prompt the user for a string and assign it to <code>user_input</code>.</p>
            <p>User enters: <code>"beautiful"</code></p>
            `,highlightLines:[3],boxes:[{title:"Memory",values:{index:{value:"0",highlight:!0},output_string:{value:"''",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"}]},{title:"Output"}]},{explanation:`
            <p><strong>Iteration 1:</strong> Check loop condition <code>index < len(user_input)</code> (0 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"0"},output_string:{value:"''"},user_input:{value:"'beautiful'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 1:</strong> Get character at index 0: <code>char = 'b'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"0"},output_string:{value:"''"},user_input:{value:"'beautiful'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 1:</strong> Check if <code>char</code> is not a vowel. 'b' is not a vowel (True), so add it to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13,14],boxes:[{title:"Memory",values:{index:{value:"0"},output_string:{value:"''"},user_input:{value:"'beautiful'"},char:{value:"'b'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 1:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"0"},output_string:{value:"'b'",highlight:!0},user_input:{value:"'beautiful'"},char:{value:"'b'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 2:</strong> Check loop condition <code>index < len(user_input)</code> (1 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"1",highlight:!0},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'b'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 2:</strong> Get character at index 1: <code>char = 'e'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"1"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'b'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 2:</strong> Check if <code>char</code> is not a vowel. 'e' is a vowel (False), so skip adding to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13],boxes:[{title:"Memory",values:{index:{value:"1"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'e'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 2:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"1"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'e'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 3:</strong> Check loop condition (2 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"2",highlight:!0},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'e'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 3:</strong> Get character at index 2: <code>char = 'a'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"2"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'e'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 3:</strong> Check if <code>char</code> is not a vowel. 'a' is a vowel (False), so skip adding to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13],boxes:[{title:"Memory",values:{index:{value:"2"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'a'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 3:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"2"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'a'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 4:</strong> Check loop condition (3 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"3",highlight:!0},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'a'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 4:</strong> Get character at index 3: <code>char = 'u'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"3"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'a'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 4:</strong> Check if <code>char</code> is not a vowel. 'u' is a vowel (False), so skip adding to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13],boxes:[{title:"Memory",values:{index:{value:"3"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'u'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 4:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"3"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 5:</strong> Check loop condition (4 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"4",highlight:!0},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 5:</strong> Get character at index 4: <code>char = 't'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"4"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 5:</strong> Check if <code>char</code> is not a vowel. 't' is not a vowel (True), so add it to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13,14],boxes:[{title:"Memory",values:{index:{value:"4"},output_string:{value:"'b'"},user_input:{value:"'beautiful'"},char:{value:"'t'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 5:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"4"},output_string:{value:"'bt'",highlight:!0},user_input:{value:"'beautiful'"},char:{value:"'t'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 6:</strong> Check loop condition (5 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"5",highlight:!0},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'t'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 6:</strong> Get character at index 5: <code>char = 'i'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"5"},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'t'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 6:</strong> Check if <code>char</code> is not a vowel. 'i' is a vowel (False), so skip adding to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13],boxes:[{title:"Memory",values:{index:{value:"5"},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'i'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 6:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"5"},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'i'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 7:</strong> Check loop condition (6 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"6",highlight:!0},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'i'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 7:</strong> Get character at index 6: <code>char = 'f'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"6"},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'i'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 7:</strong> Check if <code>char</code> is not a vowel. 'f' is not a vowel (True), so add it to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13,14],boxes:[{title:"Memory",values:{index:{value:"6"},output_string:{value:"'bt'"},user_input:{value:"'beautiful'"},char:{value:"'f'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 7:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"6"},output_string:{value:"'btf'",highlight:!0},user_input:{value:"'beautiful'"},char:{value:"'f'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 8:</strong> Check loop condition (7 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"7",highlight:!0},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'f'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 8:</strong> Get character at index 7: <code>char = 'u'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"7"},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'f'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 8:</strong> Check if <code>char</code> is not a vowel. 'u' is a vowel (False), so skip adding to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13],boxes:[{title:"Memory",values:{index:{value:"7"},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'u'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 8:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"7"},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 9:</strong> Check loop condition (8 < 9 is True), enter loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"8",highlight:!0},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 9:</strong> Get character at index 8: <code>char = 'l'</code></p>
            `,highlightLines:[6],boxes:[{title:"Memory",values:{index:{value:"8"},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'u'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 9:</strong> Check if <code>char</code> is not a vowel. 'l' is not a vowel (True), so add it to <code>output_string</code>.</p>
            `,highlightLines:[7,8,9,10,11,12,13,14],boxes:[{title:"Memory",values:{index:{value:"8"},output_string:{value:"'btf'"},user_input:{value:"'beautiful'"},char:{value:"'l'",highlight:!0}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p><strong>Iteration 9:</strong> Increment <code>index</code> by 1.</p>
            `,highlightLines:[15],boxes:[{title:"Memory",values:{index:{value:"8"},output_string:{value:"'btfl'",highlight:!0},user_input:{value:"'beautiful'"},char:{value:"'l'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p>Check loop condition <code>index < len(user_input)</code> (9 < 9 is False). Exit the loop.</p>
            `,highlightLines:[5],boxes:[{title:"Memory",values:{index:{value:"9",highlight:!0},output_string:{value:"'btfl'"},user_input:{value:"'beautiful'"},char:{value:"'l'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p>Display the result to the screen.</p>
            `,highlightLines:[17],boxes:[{title:"Memory",values:{index:{value:"9"},output_string:{value:"'btfl'"},user_input:{value:"'beautiful'"},char:{value:"'l'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful"]}]},{explanation:`
            <p>Program execution complete!</p>
            <p>The program successfully removed all vowels from "beautiful" and displayed "btfl" to the user.</p>
            `,boxes:[{title:"Memory",values:{index:{value:"9"},output_string:{value:"'btfl'"},user_input:{value:"'beautiful'"},char:{value:"'l'"}},connections:[{from:"index",toKey:"index"},{from:"output_string",toKey:"output_string"},{from:"user_input",toKey:"user_input"},{from:"char",toKey:"char"}]},{title:"Output",values:["Enter a string: beautiful","btfl"]}]}]},r={class:"container mx-auto p-4 max-w-[1024px]"},h={__name:"PSP_P4Q13",setup(a){return(s,l)=>(i(),e("div",r,[o(t,{tutorial:n(u),language:"python"},null,8,["tutorial"])]))}};export{h as default};
