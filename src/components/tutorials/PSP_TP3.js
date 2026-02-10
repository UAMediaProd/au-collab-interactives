export default {
  code: `import random

die1 = random.randint(1,6)
die2 = random.randint(1,6)

total = die1 + die2
print('Player rolled', die1, '+', die2, '=', total)

if total == 7 or total == 11:
    print('You win!')
elif total == 2 or total == 3 or total == 12:
    print('You lose!')
else:
    point = 0
    print('Point to make is', total)

    while point != 7 and total != point:

        die1 = random.randint(1,6)
        die2 = random.randint(1,6)

        point = die1 + die2
        print('Player rolled', die1, '+', die2, '=', point)


    if point == 7:
        print('You lose!')
    else:
        print('You win!')`,
  steps: [
    // =============================================
    // Scenario: die1=3, die2=5, total=8 → else branch (point game)
    //   Loop iter 1: die1=2, die2=4, point=6 → loop again
    //   Loop iter 2: die1=4, die2=4, point=8 → matches total → exit loop → "You win!"
    // =============================================
    {
      explanation: "<p><strong>Craps</strong> is a popular dice game.</p><p>The player rolls two dice. If the total is <strong>7</strong> or <strong>11</strong>, they win immediately. If the total is <strong>2</strong>, <strong>3</strong>, or <strong>12</strong>, they lose immediately.</p><p>Any other total becomes the <strong>\"point\"</strong>. The player then keeps rolling until they either match the point (win) or roll a 7 (lose).</p><p>Let's trace through this program step by step.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Import the <code>random</code> module.</p><p>We need this to generate random numbers that simulate dice rolls.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Roll the first die by calling <code>random.randint(1,6)</code>.</p><p>This generates a random integer between <code>1</code> and <code>6</code> (inclusive), just like a real six-sided die.</p><p>For this walkthrough, let's say it returns <code>3</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Roll the second die.</p><p>Let's say it returns <code>5</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "die1": { value: 3, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Calculate the total of both dice: <code>3 + 5 = 8</code>.</p><p>Store the result in <code>total</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": { value: 5, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Print the result of the roll.</p><p>Python's <code>print</code> function automatically adds spaces between each argument, so this outputs: <code>Player rolled 3 + 5 = 8</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": { value: 8, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    // --- First condition: total == 7 or total == 11 ---
    {
      explanation: "<p>Now we check the result.</p><p>Is <code>total == 7 or total == 11</code>?</p><p><code>total</code> is <code>8</code>. It's not <code>7</code> and it's not <code>11</code>, so this condition is <code>False</code>.</p><p>We skip this block and move to the <code>elif</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8"]
        }
      ]
    },
    // --- Second condition: total == 2 or total == 3 or total == 12 ---
    {
      explanation: "<p>Is <code>total == 2 or total == 3 or total == 12</code>?</p><p><code>total</code> is <code>8</code>. It's not <code>2</code>, not <code>3</code>, and not <code>12</code>, so this condition is also <code>False</code>.</p><p>We skip this block too and move to the <code>else</code>.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8"]
        }
      ]
    },
    // --- else branch ---
    {
      explanation: "<p>Since neither of the previous conditions was <code>True</code>, we enter the <code>else</code> block.</p><p>This means the player didn't win or lose on the first roll. The game continues!</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8"]
        }
      ]
    },
    {
      explanation: "<p>Create a variable called <code>point</code> and set it to <code>0</code>.</p><p>This variable will store the total of each subsequent roll. We initialise it to <code>0</code> so the <code>while</code> loop condition will be <code>True</code> on the first check.</p>",
      highlightLines: [13],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8"]
        }
      ]
    },
    {
      explanation: "<p>Print the point the player needs to match: <code>Point to make is 8</code>.</p><p>The player must now keep rolling until they roll an <code>8</code> (win) or a <code>7</code> (lose).</p>",
      highlightLines: [14],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8, "point": { value: 0, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8"]
        }
      ]
    },
    // --- while loop condition (first check) ---
    {
      explanation: "<p>Check the <code>while</code> loop condition: <code>point != 7 and total != point</code>.</p><p><code>point</code> is <code>0</code> and <code>total</code> is <code>8</code>.</p><p>Is <code>0 != 7</code>? Yes. Is <code>8 != 0</code>? Yes. Both parts are <code>True</code>, so the overall condition is <code>True</code>.</p><p>We enter the loop body.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8, "point": 0 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8"]
        }
      ]
    },
    // =============================================
    // Loop iteration 1: die1=2, die2=4, point=6
    // =============================================
    {
      explanation: "<p><strong>Loop iteration 1:</strong> Roll the first die again.</p><p>Let's say it returns <code>2</code>.</p>",
      highlightLines: [18],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 3, "die2": 5, "total": 8, "point": 0 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8"]
        }
      ]
    },
    {
      explanation: "<p>Roll the second die.</p><p>Let's say it returns <code>4</code>.</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Memory",
          values: { "die1": { value: 2, highlight: true }, "die2": 5, "total": 8, "point": 0 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8"]
        }
      ]
    },
    {
      explanation: "<p>Calculate the new roll total: <code>2 + 4 = 6</code>.</p><p>Store this in <code>point</code>.</p>",
      highlightLines: [21],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 2, "die2": { value: 4, highlight: true }, "total": 8, "point": 0 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8"]
        }
      ]
    },
    {
      explanation: "<p>Print the result of this roll: <code>Player rolled 2 + 4 = 6</code>.</p>",
      highlightLines: [22],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 2, "die2": 4, "total": 8, "point": { value: 6, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8"]
        }
      ]
    },
    // --- while loop condition (second check) ---
    {
      explanation: "<p>We've reached the end of the loop body, so we jump back up to the <code>while</code> condition.</p><p>Is <code>point != 7 and total != point</code>?</p><p><code>point</code> is <code>6</code> and <code>total</code> is <code>8</code>.</p><p>Is <code>6 != 7</code>? Yes. Is <code>8 != 6</code>? Yes. Both parts are <code>True</code>, so the loop runs again.</p><p>The player didn't roll a <code>7</code> or match their point of <code>8</code>, so they must keep rolling.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 2, "die2": 4, "total": 8, "point": 6 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6"]
        }
      ]
    },
    // =============================================
    // Loop iteration 2: die1=4, die2=4, point=8
    // =============================================
    {
      explanation: "<p><strong>Loop iteration 2:</strong> Roll the first die again.</p><p>This time it returns <code>4</code>.</p>",
      highlightLines: [18],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 2, "die2": 4, "total": 8, "point": 6 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6"]
        }
      ]
    },
    {
      explanation: "<p>Roll the second die.</p><p>It also returns <code>4</code>.</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Memory",
          values: { "die1": { value: 4, highlight: true }, "die2": 4, "total": 8, "point": 6 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6"]
        }
      ]
    },
    {
      explanation: "<p>Calculate the new roll total: <code>4 + 4 = 8</code>.</p><p>Store this in <code>point</code>. Notice that <code>point</code> is now <code>8</code> — the same as <code>total</code>!</p>",
      highlightLines: [21],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": { value: 4, highlight: true }, "total": 8, "point": 6 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6"]
        }
      ]
    },
    {
      explanation: "<p>Print the result of this roll: <code>Player rolled 4 + 4 = 8</code>.</p>",
      highlightLines: [22],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": { value: 8, highlight: true } },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6"]
        }
      ]
    },
    // --- while loop condition (third check — exits) ---
    {
      explanation: "<p>Back to the <code>while</code> condition: <code>point != 7 and total != point</code>.</p><p><code>point</code> is <code>8</code> and <code>total</code> is <code>8</code>.</p><p>Is <code>8 != 7</code>? Yes. But is <code>8 != 8</code>? No! This part is <code>False</code>.</p><p>Because we're using <code>and</code>, both parts must be <code>True</code> for the whole condition to be <code>True</code>. Since one part is <code>False</code>, the condition is <code>False</code> and the loop <strong>exits</strong>.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6", "Player rolled 4 + 4 = 8"]
        }
      ]
    },
    // --- Post-loop: if point == 7 ---
    {
      explanation: "<p>Now that the loop has finished, we check why it ended.</p><p>Is <code>point == 7</code>?</p><p><code>point</code> is <code>8</code>, not <code>7</code>, so this condition is <code>False</code>. We skip this block.</p>",
      highlightLines: [25],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6", "Player rolled 4 + 4 = 8"]
        }
      ]
    },
    // --- else: print You win ---
    {
      explanation: "<p>Since <code>point</code> is not <code>7</code>, we enter the <code>else</code> block.</p><p>The only other reason the loop could have ended is that <code>point</code> matched <code>total</code> — and it did! The player rolled their point of <code>8</code>.</p>",
      highlightLines: [27],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6", "Player rolled 4 + 4 = 8"]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"You win!\"</code>.</p><p>The player successfully matched their point!</p>",
      highlightLines: [28],
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6", "Player rolled 4 + 4 = 8"]
        }
      ]
    },
    // --- End ---
    {
      explanation: "<p>The program has finished.</p><p><strong>Key takeaway:</strong> This program uses a combination of <code>if</code>/<code>elif</code>/<code>else</code> and a <code>while</code> loop to implement the full rules of Craps.</p><p>The first roll determines whether the player wins or loses immediately, or enters the \"point\" phase. The <code>while</code> loop keeps the player rolling until they either match their point (win) or roll a <code>7</code> (lose).</p><p>The loop condition <code>point != 7 and total != point</code> ensures the loop exits in either case. After the loop, a simple <code>if</code>/<code>else</code> checks which outcome occurred.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "die1": 4, "die2": 4, "total": 8, "point": 8 },
          connections: [
            { from: "die1", toKey: "die1" },
            { from: "die2", toKey: "die2" },
            { from: "total", toKey: "total" },
            { from: "point", toKey: "point" }
          ]
        },
        {
          title: "Output",
          values: ["Player rolled 3 + 5 = 8", "Point to make is 8", "Player rolled 2 + 4 = 6", "Player rolled 4 + 4 = 8", "You win!"]
        }
      ]
    }
  ]
};
