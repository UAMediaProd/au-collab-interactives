// 11 Prac 6 Question 10 Solution
export default {
    code: `asdfasdf`,
    steps: [
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>This problem is the most complex we have addressed in the series thus far. But if we stick to our process, we will find a solution. Let's begin.</p>
            `,
             
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p><span class="line-highlight">Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</span></p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li><strong>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</strong></li>
            </ol>
            `,
             
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>We can show these possible choices in a table:</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Player 1 choice</th>
                        <th scope="col">Player 2 choice</th>
                        <th scope="col">Player 1 score</th>
                        <th scope="col">Player 2 score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Share</td>
                        <td>Share</td>
                        <td>+2</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>Share</td>
                        <td>Steal</td>
                        <td>-1</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Share</td>
                        <td>+3</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Steal</td>
                        <td>+0</td>
                        <td>+0</td>
                    </tr>
                </tbody>
            </table>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. <span class="span-highlight">On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn.</span> The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li><strong>The second paragraph stipulates the order in which things happen each turn.</strong></li>
            </ol>
            `,
             
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. <span class="span-highlight">On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn.</span> The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li><strong>The second paragraph stipulates the order in which things happen each turn.</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Get choice of both players</div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. <span class="span-highlight">On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn.</span> The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li><strong>The second paragraph stipulates the order in which things happen each turn.</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Get choice of both players</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display each player's choice</div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. <span class="span-highlight">On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn.</span> The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li><strong>The second paragraph stipulates the order in which things happen each turn.</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Get choice of both players</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display each player's choice</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Evaluate and display the result</div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. <span class="span-highlight">On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn.</span> The game will last for 5 turns, after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li><strong>The second paragraph stipulates the order in which things happen each turn.</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-solid">Get choice of both players</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display each player's choice</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Evaluate and display the result</div>
            <div class="flowchart-connection">🡇</div>
            <div class="flowchart-solid">Display the coin totals</div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. <span class="span-highlight">The game will last for 5 turns,</span> after which a winner is declared and the user can choose whether or not to start a new game.</p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li>The second paragraph stipulates the order in which things happen each turn.</li>
                <li><strong>There are 5 turns in a game.</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Game loop</p>
                <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                <div class="flowchart-solid">Get choice of both players</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display each player's choice</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Evaluate and display the result</div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the coin totals</div>
            </div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. The game will last for 5 turns, after which a <span class="span-highlight">winner is declared and the user can choose whether or not to start a new game.</span></p>
            `,
            explanation: `
            <p>Notice that:</p>
            <ol>
                <li>The entire first paragraph is describing possible player choices and how to evaluate the results of each turn.</li>
                <li>The second paragraph stipulates the order in which things happen each turn.</li>
                <li>There are 5 turns in a game.</li>
                <li><strong>The user can choose to play more than one game!</strong></li>
            </ol>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            info2: `<p><strong>Question:</strong></p>
            <p>Two players compete in a simple game of choice. On each turn, both parties must decide whether to cooperate or betray one another. If they both cooperate (share), they each receive 2 coins. If they both betray (steal), nobody wins anything. But if one betrays and the other cooperates, the betrayer receives 3 coins, and their opponent will lose 1.</p>
            <p>Write a program to simulate this game. The user will compete against the computer, with the computer choosing to share or steal at random. On each turn, confirm each player's choice by displaying them to the screen; then evaluate and display the resulting outcome. Also display the current coin total of both user and computer at the end of each turn. The game will last for 5 turns, after which a <span class="span-highlight">winner is declared and the user can choose whether or not to start a new game.</span></p>
            `,
            explanation: `
            <p>Let's write some code to implement our process in the diagram.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>We'll start by implementing a single turn, and add the loops around them later.</p>
            <p>First, we need to get the choices (share or steal) of each player. For the user, this is a simple input prompt. For the computer, we need to generate a choice randomly as specified in the problem description.</p>
            `,
            code: `import random
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])`,
            highlightLines: [0,1,2],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid flowchart-highlight">Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>The next step in a turn is to display those choices to the screen. Nothing fancy here, just printing. Using <code>\\t</code> in the string is an easy way to align the values nicely.</p>
            `,
            code: `import random
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)`,
            highlightLines: [4],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Now for the main part of the game: evaluating and displaying what happens based on the choices.</p>
            <p>Each outcome will affect the player's scores. These have not yet been instantiated, so we'll need to create variables to store them before we begin.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)`,
            highlightLines: [2,3],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Recall the table of outcomes from our original analysis of the question. This will form the basis of an if-elif-else block.</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Player 1 choice</th>
                        <th scope="col">Player 2 choice</th>
                        <th scope="col">Player 1 score</th>
                        <th scope="col">Player 2 score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tr-highlight">
                        <td>Share</td>
                        <td>Share</td>
                        <td>+2</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>Share</td>
                        <td>Steal</td>
                        <td>-1</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Share</td>
                        <td>+3</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Steal</td>
                        <td>+0</td>
                        <td>+0</td>
                    </tr>
                </tbody>
            </table>
            <p>Taking one row at a time, we capture all possible outcomes as follows, including updating the score and displaying the result.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

if user_choice == 'share' and comp_choice == 'share':
    comp_score += 2
    user_score += 2
    print("\\nYou both gain 2 coins.")`,
            highlightLines: [10, 11, 12, 13],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Recall the table of outcomes from our original analysis of the question. This will form the basis of an if-elif-else block.</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Player 1 choice</th>
                        <th scope="col">Player 2 choice</th>
                        <th scope="col">Player 1 score</th>
                        <th scope="col">Player 2 score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Share</td>
                        <td>Share</td>
                        <td>+2</td>
                        <td>+2</td>
                    </tr>
                    <tr class="tr-highlight">
                        <td>Share</td>
                        <td>Steal</td>
                        <td>-1</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Share</td>
                        <td>+3</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Steal</td>
                        <td>+0</td>
                        <td>+0</td>
                    </tr>
                </tbody>
            </table>
            <p>Taking one row at a time, we capture all possible outcomes as follows, including updating the score and displaying the result.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

if user_choice == 'share' and comp_choice == 'share':
    comp_score += 2
    user_score += 2
    print("\\nYou both gain 2 coins.")
elif user_choice == 'share' and comp_choice == 'steal':
    comp_score += 3
    user_score -=1
    print("\\nComputer gains 3 coins, you lose 1!")`,
            highlightLines: [14,15,16,17],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Recall the table of outcomes from our original analysis of the question. This will form the basis of an if-elif-else block.</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Player 1 choice</th>
                        <th scope="col">Player 2 choice</th>
                        <th scope="col">Player 1 score</th>
                        <th scope="col">Player 2 score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Share</td>
                        <td>Share</td>
                        <td>+2</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>Share</td>
                        <td>Steal</td>
                        <td>-1</td>
                        <td>+3</td>
                    </tr>
                    <tr class="tr-highlight">
                        <td>Steal</td>
                        <td>Share</td>
                        <td>+3</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Steal</td>
                        <td>+0</td>
                        <td>+0</td>
                    </tr>
                </tbody>
            </table>
            <p>Taking one row at a time, we capture all possible outcomes as follows, including updating the score and displaying the result.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

if user_choice == 'share' and comp_choice == 'share':
    comp_score += 2
    user_score += 2
    print("\\nYou both gain 2 coins.")
elif user_choice == 'share' and comp_choice == 'steal':
    comp_score += 3
    user_score -=1
    print("\\nComputer gains 3 coins, you lose 1!")
elif user_choice == 'steal' and comp_choice == 'share':
    comp_score -=1
    user_score += 3
    print("\\nYou gain 3 coins, computer loses 1!")`,
            highlightLines: [18,19,20,21],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Recall the table of outcomes from our original analysis of the question. This will form the basis of an if-elif-else block.</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Player 1 choice</th>
                        <th scope="col">Player 2 choice</th>
                        <th scope="col">Player 1 score</th>
                        <th scope="col">Player 2 score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Share</td>
                        <td>Share</td>
                        <td>+2</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>Share</td>
                        <td>Steal</td>
                        <td>-1</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Steal</td>
                        <td>Share</td>
                        <td>+3</td>
                        <td>-1</td>
                    </tr>
                    <tr class="tr-highlight">
                        <td>Steal</td>
                        <td>Steal</td>
                        <td>+0</td>
                        <td>+0</td>
                    </tr>
                </tbody>
            </table>
            <p>Taking one row at a time, we capture all possible outcomes as follows, including updating the score and displaying the result.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

if user_choice == 'share' and comp_choice == 'share':
    comp_score += 2
    user_score += 2
    print("\\nYou both gain 2 coins.")
elif user_choice == 'share' and comp_choice == 'steal':
    comp_score += 3
    user_score -=1
    print("\\nComputer gains 3 coins, you lose 1!")
elif user_choice == 'steal' and comp_choice == 'share':
    comp_score -=1
    user_score += 3
    print("\\nYou gain 3 coins, computer loses 1!")
else:
    print("\\nYou both chose to steal! Nobody gets anything.")`,
            highlightLines: [22,23],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>The next stage is very simple. Display the current values of <code>user_score</code> and <code>comp_score</code>.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0
            
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

if user_choice == 'share' and comp_choice == 'share':
    comp_score += 2
    user_score += 2
    print("\\nYou both gain 2 coins.")
elif user_choice == 'share' and comp_choice == 'steal':
    comp_score += 3
    user_score -=1
    print("\\nComputer gains 3 coins, you lose 1!")
elif user_choice == 'steal' and comp_choice == 'share':
    comp_score -=1
    user_score += 3
    print("\\nYou gain 3 coins, computer loses 1!")
else:
    print("\\nYou both chose to steal! Nobody gets anything.")
print("\\nYour Score:", user_score)
print("\\nComp Score:", comp_score)`,
            highlightLines: [24,25],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid flowchart-highlight">Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>At this point we have code which constitutes a single 'turn'. Since there are 5 turns in one game, we must create a simple iterative loop around the code that executes 5 times.</p>
            <p>Note that the variable declarations for <code>user_score</code> and <code>comp_score</code> do not belong inside the loop - if they did, the coin totals would reset to 0 after every turn!</p>
            `,
            code: `import random

user_score = 0
comp_score = 0

turn_counter = 0
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

while turn_counter < 5:
    if user_choice == 'share' and comp_choice == 'share':
        comp_score += 2
        user_score += 2
        print("\\nYou both gain 2 coins.")
    elif user_choice == 'share' and comp_choice == 'steal':
        comp_score += 3
        user_score -=1
        print("\\nComputer gains 3 coins, you lose 1!")
    elif user_choice == 'steal' and comp_choice == 'share':
        comp_score -=1
        user_score += 3
        print("\\nYou gain 3 coins, computer loses 1!")
    else:
        print("\\nYou both chose to steal! Nobody gets anything.")
    print("\\nYour Score:", user_score)
    print("\\nComp Score:", comp_score)
    
turn_counter += 1`,
            highlightLines: [5, 11, 29],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p class="span-highlight">Game loop</p>
                    <p style="font-size:0.8rem" class="span-highlight">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>With 5 turns concluded, it is the end of 1 game. Time to display the winner!</p>
            <p>There are only 3 possibilities: Computer wins, User wins, and Draw. A simple if-elif-else block will suffice.</p>
            `,
            code: `import random

user_score = 0
comp_score = 0

turn_counter = 0
user_choice = input('\\nEnter your choice, "share" or "steal": ')
comp_choice = random.choice(['share', 'steal'])

print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

while turn_counter < 5:
    if user_choice == 'share' and comp_choice == 'share':
        comp_score += 2
        user_score += 2
        print("\\nYou both gain 2 coins.")
    elif user_choice == 'share' and comp_choice == 'steal':
        comp_score += 3
        user_score -=1
        print("\\nComputer gains 3 coins, you lose 1!")
    elif user_choice == 'steal' and comp_choice == 'share':
        comp_score -=1
        user_score += 3
        print("\\nYou gain 3 coins, computer loses 1!")
    else:
        print("\\nYou both chose to steal! Nobody gets anything.")
    print("\\nYour Score:", user_score)
    print("\\nComp Score:", comp_score)
    
turn_counter += 1

if comp_score > user_score:
    print("\\nComputer Wins!")
elif user_score > comp_score:
    print("\\nYou Win!")
else:
    print("\\nDraw - No Winner!")`,
            highlightLines: [31,32,33,34,35,36],
            info: `
            <div class="flowchart-outline">
                <p>Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid flowchart-highlight">Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>With a full game cycle completed, it is time to implement the outer loop, allowing the user to decide whether to play again.</p>
            <p>To do this, we'll use a control loop structure governed by an input statement. Note that the placement of the while statements causes the values of <code>turn_counter</code>, <code>comp_score</code> and <code>user_score</code> to reset to 0 at the start of each <em>game</em> (outer loop) but not each <em>turn</em> (inner loop).</p>
            `,
            code: `import random

play_again = 'y'
while play_again == 'y':
    user_score = 0
    comp_score = 0

    turn_counter = 0
    user_choice = input('\\nEnter your choice, "share" or "steal": ')
    comp_choice = random.choice(['share', 'steal'])

    print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

    while turn_counter < 5:
        if user_choice == 'share' and comp_choice == 'share':
            comp_score += 2
            user_score += 2
            print("\\nYou both gain 2 coins.")
        elif user_choice == 'share' and comp_choice == 'steal':
            comp_score += 3
            user_score -=1
            print("\\nComputer gains 3 coins, you lose 1!")
        elif user_choice == 'steal' and comp_choice == 'share':
            comp_score -=1
            user_score += 3
            print("\\nYou gain 3 coins, computer loses 1!")
        else:
            print("\\nYou both chose to steal! Nobody gets anything.")
        print("\\nYour Score:", user_score)
        print("\\nComp Score:", comp_score)
        
    turn_counter += 1

    if comp_score > user_score:
        print("\\nComputer Wins!")
    elif user_score > comp_score:
        print("\\nYou Win!")
    else:
        print("\\nDraw - No Winner!")
        
    play_again = input("\\nWould you like to play again? [y/n]: ")`,
            highlightLines: [2,3,40],
            info: `
            <div class="flowchart-outline">
                <p class="span-highlight">Control loop</p>
                <p style="font-size:0.8rem" class="span-highlight">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Also note that the control variable <code>play_again</code> is initially set to value 'y'. This allows the outer loop to begin immediately upon running the program without any need for user input. For each following cycle, this variable is controlled by the user via the input statement at the bottom of the program.</p>
            `,
            highlightLines: [2],
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>This program now matches the behaviour of the diagram and meets all the requirements in the original problem statement.</p>
            <p>One final touch - let's add a validation loop for the users 'share or steal' choice. This will stop the program from behaving erroneously if the user enters something unexpected.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `import random

play_again = 'y'
while play_again == 'y':
    user_score = 0
    comp_score = 0

    turn_counter = 0
    user_choice = input('\\nEnter your choice, "share" or "steal": ')
    comp_choice = random.choice(['share', 'steal'])

    while user_choice != 'share' and user_choice != 'steal':
        user_choice = input('\\nInvalid choice. Enter "share" or "steal": ')

    print("You chose:\\t", user_choice, "\\nComputer chose:\\t", comp_choice)

    while turn_counter < 5:
        if user_choice == 'share' and comp_choice == 'share':
            comp_score += 2
            user_score += 2
            print("\\nYou both gain 2 coins.")
        elif user_choice == 'share' and comp_choice == 'steal':
            comp_score += 3
            user_score -=1
            print("\\nComputer gains 3 coins, you lose 1!")
        elif user_choice == 'steal' and comp_choice == 'share':
            comp_score -=1
            user_score += 3
            print("\\nYou gain 3 coins, computer loses 1!")
        else:
            print("\\nYou both chose to steal! Nobody gets anything.")
        print("\\nYour Score:", user_score)
        print("\\nComp Score:", comp_score)
        
    turn_counter += 1

    if comp_score > user_score:
        print("\\nComputer Wins!")
    elif user_score > comp_score:
        print("\\nYou Win!")
    else:
        print("\\nDraw - No Winner!")
        
    play_again = input("\\nWould you like to play again? [y/n]: ")`,
            highlightLines: [11,12],
        },
        {
            explanation: `
            <p>All finished! Now let's see how it executes.</p>
            `,
            language: 'python-repl',
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
        },
        {
            explanation: `
            <p>Let's start by sharing.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": `,
        },
        {
            explanation: `
            <p>Both players get 2 points when they both share.</p>
            <p>Next let's try stealing.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": share

You chose:       share
Computer chose:  share

You both gain 2 coins.
Your Score: 2
Comp Score: 2

Enter your choice, "share" or "steal": `,
        },
        {
            explanation: `
            <p>It looks like this condition is working as expected.</p>
            <p>Next let's try stealing again.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": steal

You chose:       steal
Computer chose:  share

You gain 3 coins, computer loses 1!
Your Score: 6
Comp Score: 0

Enter your choice, "share" or "steal": `,
        },
        {
            explanation: `
            <p>It looks like this condition is also working as expected.</p>
            <p>Let's share next.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": steal

You chose:       steal
Computer chose:  steal

You both chose to steal! Nobody gets anything.
Your Score: 6
Comp Score: 0

Enter your choice, "share" or "steal": `,
        },
        {
            explanation: `
            <p>This is the same as the first result, so unsurprisingly we can see that it's working.</p>
            <p>Let's share one more time...</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": share

You chose:       share
Computer chose:  share

You both gain 2 coins.
Your Score: 8
Comp Score: 2

Enter your choice, "share" or "steal": `,
        },
        {
            explanation: `
            <p>Perfect, the computer chose to steal, meaning we can verify that all four share/steal scenarios are working.</p>
            <p>This was also our fifth round and our program correctly displayed the winner.</p>
            <p>Now let's test that the control loop works.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": share

You chose:       share
Computer chose:  steal

Computer gains 3 coins, you lose 1!
Your Score: 7
Comp Score: 5

User Wins!

Would you like to play again? [y/n] `,
        },
        {
            explanation: `
            <p>A new game begins, as expected.</p>
            <p>Now let's test out our input validation.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Would you like to play again? [y/n] y

Enter your choice, "share" or "steal": 
`,
        },
        {
            explanation: `
            <p>Perfect, we are seeing the 'Invalid choice' message.</p>
            <p>From here, we could keep testing with more games to check that the correct message is shown in the case of a draw or the computer winning.</p>
            <p>Let's instead skip ahead to the end of this game so we can test the control loop again.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Would you like to play again? [y/n] y

Enter your choice, "share" or "steal": asdfasd

Invalid choice. Enter "share" or "steal": 
`,
        },
        {
            explanation: `
            <p>Perfect, we are seeing the 'Invalid choice' message.</p>
            <p>From here, we could keep testing with more games to check that the correct message is shown in the case of a draw or the computer winning.</p>
            <p>Let's instead skip ahead to the end of this game so we can test the control loop.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": share

You chose:       share
Computer chose:  steal

Computer gains 3 coins, you lose 1!
Your Score: 4
Comp Score: 12

Computer Wins!

Would you like to play again? [y/n] n
`,
        },
        {
            explanation: `
            <p>The program ends, as expected.</p>
            <p>Here we've demonstrated that our same problem solving approach works for a more complex program.</p>
            `,
            info: `
            <div class="flowchart-outline">
                <p>✅ Control loop</p>
                <p style="font-size:0.8rem">Play again [y/n]</p>
                <div class="flowchart-outline">
                    <p>✅ Game loop</p>
                    <p style="font-size:0.8rem">Number of iterations = 5 (one game)</p>
                    <div class="flowchart-solid">✅ Get choice of both players</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display each player's choice</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Evaluate and display the result</div>
                    <div class="flowchart-connection">🡇</div>
                    <div class="flowchart-solid">✅ Display the coin totals</div>
                    </div>
                <div class="flowchart-connection">🡇</div>
                <div class="flowchart-solid">✅ Display the winner</div>
            </div>
            `,
            code: `>>>
Enter your choice, "share" or "steal": share

You chose:       share
Computer chose:  steal

Computer gains 3 coins, you lose 1!
Your Score: 4
Comp Score: 12

Computer Wins!

Would you like to play again? [y/n] n
>>>`,
        },
    ]
};
