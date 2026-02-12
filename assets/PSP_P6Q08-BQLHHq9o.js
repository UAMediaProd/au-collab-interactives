import{_ as o}from"./CodeTutorial-CyR3wzRq.js";import{c as e,o as t,e as s,d as i}from"./index-D1h9s9Qj.js";const a={code:`menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]`,steps:[{explanation:"<p><strong>Question</strong>: Given a list of menu items such as that above, write a program that creates a new list comprised of only the soups. Use this new list to randomly select and display a 'Soup of the day'.</p>"},{explanation:`<p><strong>Question</strong>: Given a list of menu items such as that above, write a program that <strong>creates a new list</strong> comprised of only the soups. Use this new list to randomly select and display a 'Soup of the day'.</p>
            <p><strong>Step 1</strong>: Break the problem down into manageable stages.</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div>`},{explanation:`<p><strong>Question</strong>: Given a list of menu items such as that above, write a program that creates a new list <strong>comprised of only the soups</strong>. Use this new list to randomly select and display a 'Soup of the day'.</p>
            <p><strong>Step 1</strong>: Break the problem down into manageable stages.</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Populate the new list using the soups from <code>menu</code></div>`},{explanation:`<p><strong>Question</strong>: Given a list of menu items such as that above, write a program that creates a new list comprised of only the soups. Use this new list to <strong>randomly select and display a 'Soup of the day'</strong>.</p>
            <p><strong>Step 1</strong>: Break the problem down into manageable stages.</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Populate the new list using the soups from <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>At this point we have a complete process that satisfies the requirements of the program.</p>
            <p>Is it possible to decompose any of the sub-processes further?</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Populate the new list using the soups from <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>Populating the new list can be broken down further:</p>
            <ol>
                <li>Identify all items ending with 'soup' in <code>menu</code></li>
                <li>Add each item ending with 'soup' to the new list</li>
            </ol>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Populate the new list using the soups from <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>This makes the task of populating the new list a little more manageable. But what if the size of the original <code>menu</code> list is unknown, or very large? We want our code to be robust enough to handle these cases.</p>
            <p>In situations like this, a loop that iterates over the list one item at a time is the correct approach.</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Identify all items ending with 'soup' in <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add each item ending with 'soup' to the new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p><strong>Step 2:</strong> Look for tasks with repetitive behaviour to simplify the problem using loops.</p>
            `,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Identify all items ending with 'soup' in <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add each item ending with 'soup' to the new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>Identifying the soups contains repetitive behaviour! Let's use a loop to simplify the problem.</p>
            `,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Identify all items ending with 'soup' in <code>menu</code></div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Add each item ending with 'soup' to the new list</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>This loop iterates a number of times equal to the length of the <code>menu</code> list - i.e. once for each menu item.</p>
            <p>In this way, every menu item will be checked to see if it should be added to the new list of soups - regardless of how many there are.</p>`,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline flowchart-highlight">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
                <div class="flowchart-solid flowchart-highlight">Check if the next item from <code>menu</code> ends with 'soup'</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid flowchart-highlight">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:"<p><strong>Step 3:</strong> Implement the finished algorithm using Python code!</p>",info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
                <p>Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
                <div class="flowchart-solid">Check if the next item from <code>menu</code> ends with 'soup'</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`},{explanation:`<p>These lines provide later utility. We will need to use the random module to select a soup.</p>
            <p>The <code>menu</code> list also needs to be instantiated before we can proceed with the algorithm.</p>            
            `,info:`
            <div class="flowchart-solid">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid">Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]`,highlightLines:[0,1,2,3,4,5,6,7]},{explanation:`<p>We declare the list <code>soups</code> (initially empty) to store all the items determined to be soups.</p>
            `,info:`
            <div class="flowchart-solid flowchart-highlight">Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid">Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []`,highlightLines:[8]},{explanation:`<p>Now the main loop begins.</p>
            <p>It is often easiest to use a for loop when we are iterating over a list object.</p>
            <p>This is because the variable <code>food</code> gives us direct access to the current element in the iteration without worrying about the list length or an indexing variable. The chosen alias <code>food</code> is arbitrary; any descriptive name will do.</p>
            `,info:`
            <div class="flowchart-solid">✅ Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline flowchart-highlight">
                <p class="span-highlight">Begin loop</p>
                <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
                <div class="flowchart-solid">Check if the next item from <code>menu</code> ends with 'soup'</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []

for food in menu:`,highlightLines:[10]},{explanation:`<p>In this step we identify whether the current <code>food</code> ends with the string 'soup'.</p>
            <p>To do this, we use a slice expression <code>food[-4:]</code> to check only the last 4 characters.</p>
            `,info:`
            <div class="flowchart-solid">✅ Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>✅ Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid flowchart-highlight">Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []

for food in menu:
    if food[-4:] == 'soup':
`,highlightLines:[11]},{explanation:`<p>If the condition was true, we have identified a soup, so add it to the list <code>soups</code> using the <code>append()</code> function.</p>
            `,info:`
            <div class="flowchart-solid">✅ Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>✅ Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid">✅ Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []

for food in menu:
    if food[-4:] == 'soup':
        soups.append(food)
`,highlightLines:[12]},{explanation:`
            <p>The main loop has now ended, and so <code>soups</code> is now properly populated.</p>
            <p>To randomly select a soup, let's first generate a random integer <code>soup_selector</code> that falls within the list boundaries. This can be used to look inside <code>soups</code> at a given index and get a random soup.</p>
            `,info:`
            <div class="flowchart-solid">✅ Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>✅ Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid">✅ Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []

for food in menu:
    if food[-4:] == 'soup':
        soups.append(food)

soup_selector = random.randint(0,len(soups)-1)
`,highlightLines:[14]},{explanation:`
            <p>Now that we have a random index, we can inspect <code>soups</code> at that location and display the result as 'Soup of the day'.</p>
            <p>The program is now complete!</p>
            `,info:`
            <div class="flowchart-solid">✅ Create a new empty list</div> 
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-outline">
            <p>✅ Begin loop</p>
            <p style="font-size:0.8rem">Number of iterations = <code>len(menu)</code></p>
            <div class="flowchart-solid">✅ Check if the next item from <code>menu</code> ends with 'soup'</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">✅ If it does, add it to the new list</div>
            </div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid flowchart-highlight">Randomly select and display a 'Soup of the day'</div>`,code:`import random
menu = [
    'Lamb steak', 
    'Tomato soup', 
    'Fried rice', 
    'Pumpkin soup', 
    'Pea soup'
]
soups = []

for food in menu:
    if food[-4:] == 'soup':
        soups.append(food)

soup_selector = random.randint(0,len(soups)-1)
print("Soup of the day: " + soups[soup_selector])
`,highlightLines:[15]},{explanation:"<p><strong>Step 4:</strong> Let's trace through the code step by step to verify it works.</p>",highlightLines:[],boxes:[{title:"Memory",stacked:!0,values:{}},{title:"Output",values:[]}]},{explanation:"<p>Import the <code>random</code> module. We'll need it later to randomly select a soup.</p>",highlightLines:[0],boxes:[{title:"Memory",stacked:!0,values:{}},{title:"Output",values:[]}]},{explanation:"<p>Create the <code>menu</code> list with 5 items. This is the list we'll be searching through for soups.</p>",highlightLines:[1,2,3,4,5,6,7],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:!0}},connections:[{from:"menu",toKey:"menu"}],stacked:!0},{title:"Output",values:[]}]},{explanation:"<p>Create an empty list called <code>soups</code>. This is where we'll store any menu items that are soups.</p>",highlightLines:[8],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"]}},connections:[{from:"menu",toKey:"menu"}]},{title:"Output",values:[]}]},{explanation:"<p>The <code>for</code> loop begins. On the first iteration, <code>food</code> is set to the first item in <code>menu</code>: <code>'Lamb steak'</code>.</p>",highlightLines:[10],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:0},soups:{value:[" "],highlight:!0},food:{value:"'Lamb steak'",highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p><strong>Iteration 1:</strong> Check if <code>food[-4:]</code> equals <code>'soup'</code>.</p><p>The last 4 characters of <code>'Lamb steak'</code> are <code>'teak'</code>. <code>'teak' == 'soup'</code> is <code>False</code>, so we skip the <code>append</code>.</p>",highlightLines:[11],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:0},soups:{value:[" "]},food:"'Lamb steak'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p><strong>Iteration 2:</strong> <code>food</code> is now <code>'Tomato soup'</code>.</p><p>Check: <code>food[-4:]</code> is <code>'soup'</code>. <code>'soup' == 'soup'</code> is <code>True</code>!</p>",highlightLines:[10,11],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:1},soups:{value:[" "]},food:{value:"'Tomato soup'",highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>The condition was <code>True</code>, so we append <code>'Tomato soup'</code> to the <code>soups</code> list.</p>",highlightLines:[12],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:1},soups:{value:[" "]},food:"'Tomato soup'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p><strong>Iteration 3:</strong> <code>food</code> is now <code>'Fried rice'</code>.</p><p>Check: <code>food[-4:]</code> is <code>'rice'</code>. <code>'rice' == 'soup'</code> is <code>False</code>, so we skip the <code>append</code>.</p>",highlightLines:[10,11],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:2},soups:{value:["'Tomato soup'"],highlight:0},food:{value:"'Fried rice'",highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p><strong>Iteration 4:</strong> <code>food</code> is now <code>'Pumpkin soup'</code>.</p><p>Check: <code>food[-4:]</code> is <code>'soup'</code>. <code>'soup' == 'soup'</code> is <code>True</code>!</p>",highlightLines:[10,11],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:3},soups:{value:["'Tomato soup'"]},food:{value:"'Pumpkin soup'",highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>Append <code>'Pumpkin soup'</code> to the <code>soups</code> list.</p>",highlightLines:[12],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:3},soups:{value:["'Tomato soup'"]},food:"'Pumpkin soup'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p><strong>Iteration 5:</strong> <code>food</code> is now <code>'Pea soup'</code>.</p><p>Check: <code>food[-4:]</code> is <code>'soup'</code>. <code>'soup' == 'soup'</code> is <code>True</code>!</p>",highlightLines:[10,11],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:4},soups:{value:["'Tomato soup'","'Pumpkin soup'"],highlight:1},food:{value:"'Pea soup'",highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>Append <code>'Pea soup'</code> to the <code>soups</code> list.</p>",highlightLines:[12],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"],highlight:4},soups:{value:["'Tomato soup'","'Pumpkin soup'"]},food:"'Pea soup'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>The loop has finished — we've checked every item in <code>menu</code>. The <code>soups</code> list now contains all three soups: <code>'Tomato soup'</code>, <code>'Pumpkin soup'</code>, and <code>'Pea soup'</code>.</p>",highlightLines:[10],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"]},soups:{value:["'Tomato soup'","'Pumpkin soup'","'Pea soup'"],highlight:2},food:"'Pea soup'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>Generate a random integer between <code>0</code> and <code>len(soups) - 1</code>, which is <code>0</code> to <code>2</code>.</p><p>Let's say <code>random.randint(0, 2)</code> returns <code>1</code>.</p>",highlightLines:[14],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"]},soups:{value:["'Tomato soup'","'Pumpkin soup'","'Pea soup'"]},food:"'Pea soup'"},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"}]},{title:"Output",values:[]}]},{explanation:"<p>Print the soup of the day. <code>soups[soup_selector]</code> is <code>soups[1]</code>, which is <code>'Pumpkin soup'</code>.</p>",highlightLines:[15],boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"]},soups:{value:["'Tomato soup'","'Pumpkin soup'","'Pea soup'"],highlight:1},food:"'Pea soup'",soup_selector:{value:1,highlight:!0}},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"},{from:"soup_selector",toKey:"soup_selector"}]},{title:"Output",values:[]}]},{explanation:`<p>The program has finished.</p>
            <p><strong>Key takeaways:</strong></p>
            <p>This program uses a <code>for</code> loop to iterate over a list, checking each item against a condition. Items that match are added to a new list using <code>append()</code>. This is a very common pattern known as <strong>filtering</strong>.</p>
            <p>The <code>random.randint()</code> function then picks a random index within the filtered list, giving us a random soup each time the program runs.</p>`,boxes:[{title:"Memory",stacked:!0,values:{menu:{value:["'Lamb steak'","'Tomato soup'","'Fried rice'","'Pumpkin soup'","'Pea soup'"]},soups:{value:["'Tomato soup'","'Pumpkin soup'","'Pea soup'"]},food:"'Pea soup'",soup_selector:1},connections:[{from:"menu",toKey:"menu"},{from:"soups",toKey:"soups"},{from:"food",toKey:"food"},{from:"soup_selector",toKey:"soup_selector"}]},{title:"Output",values:["Soup of the day: Pumpkin soup"]}]}]},n={class:"container mx-auto p-4 max-w-[1024px]"},r={__name:"PSP_P6Q08",setup(d){return(l,c)=>(t(),e("div",n,[s(o,{tutorial:i(a),language:"python","code-width":"w-[60%]","data-boxes-width":"w-[40%]"},null,8,["tutorial"])]))}};export{r as default};
