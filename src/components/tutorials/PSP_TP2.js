export default {
  code: `import random

# Generate random toss - tails = 0, heads = 1
coin1 = random.randint(0,1)
coin2 = random.randint(0,1)

if coin1 == 0:
    print("Coin 1: Tails")
elif coin1 == 1:
    print("Coin 1: Heads")

if coin2 == 0:
    print("Coin 2: Tails\\n")
elif coin2 == 1:
    print("Coin 2: Heads\\n")

if coin1 == 1 and coin2 == 1:
    print("Spinner wins! Two heads!")
elif coin1 == 0 and coin2 == 0:
    print("Spinner loses! Two tails!") 
else:
    print("Throw again!")

print("\\nThanks for playing!")`,
  steps: [
    // =============================================
    // SOLUTION 2: While loop (keeps tossing until match)
    // =============================================
    // Scenario:
    //   Iteration 1: coin1 = 0 (Tails), coin2 = 1 (Heads) → "Throw again!"
    //   Iteration 2: coin1 = 1 (Heads), coin2 = 1 (Heads) → "Spinner wins!"
    //   Loop exits, print "Thanks for playing!"
    {
      explanation: "This improved version of the two-up game uses a <code>while</code> loop to keep tossing the coins until both coins match (either both Heads or both Tails).</p><p>The key idea: we initialise <code>coin1</code> and <code>coin2</code> to <em>different</em> values so the loop is guaranteed to run at least once.</p><p>Let's trace through this version step by step.</p>",
      highlightLines: [],
      code: `import random

coin1 = 0 # Stores coin 1 toss
coin2 = 1 # Stores coin 2 toss

while coin1 != coin2:
    coin1 = random.randint(0,1)
    coin2 = random.randint(0,1)

    if coin1 == 0:
        print("Coin 1: Tails")
    elif coin1 == 1:
        print("Coin 1: Heads")

    if coin2 == 0:
        print("Coin 2: Tails\\n")
    elif coin2 == 1:
        print("Coin 2: Heads\\n")

    if coin1 == 1 and coin2 == 1:
        print("Spinner wins! Two heads!\\n")
    elif coin1 == 0 and coin2 == 0:
        print("Spinner loses! Two tails!\\n")
    else:
        print("Throw again!\\n")

print("\\nThanks for playing!")`,
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
      explanation: "<p>Import the <code>random</code> module.</p>",
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
      explanation: "<p>Initialise <code>coin1</code> to <code>0</code>.</p><p>This is a deliberate choice — we need <code>coin1</code> and <code>coin2</code> to start with <em>different</em> values so the <code>while</code> loop condition is <code>True</code> on the first check.</p>",
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
      explanation: "<p>Initialise <code>coin2</code> to <code>1</code>.</p><p>Now <code>coin1</code> is <code>0</code> and <code>coin2</code> is <code>1</code> — they are different, which guarantees the loop will start.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": { value: 0, highlight: true } },
          connections: [
            { from: "coin1", toKey: "coin1" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Test the <code>while</code> loop condition: is <code>coin1 != coin2</code>?</p><p><code>0 != 1</code> is <code>True</code>, so we enter the loop body.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": { value: 1, highlight: true } },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p><strong>Loop iteration 1:</strong> Generate a new random value for <code>coin1</code>.</p><p>Let's say <code>random.randint(0,1)</code> returns <code>0</code> (Tails).</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Generate a new random value for <code>coin2</code>.</p><p>Let's say it returns <code>1</code> (Heads).</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": { value: 0, highlight: true }, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin1 == 0</code>?</p><p>Yes! <code>coin1</code> is <code>0</code>, so this condition is <code>True</code>. We enter this block.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": { value: 1, highlight: true } },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Coin 1: Tails\"</code>.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      explanation: "<p>Now we check <code>coin2</code>.</p><p>Is <code>coin2 == 0</code>?</p><p>No — <code>coin2</code> is <code>1</code>, not <code>0</code>. So we skip this block and move to the <code>elif</code>.</p>",
      highlightLines: [14],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails"]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin2 == 1</code>?</p><p>Yes! This condition is <code>True</code>. We enter this block.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails"]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Coin 2: Heads\"</code> followed by a blank line.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails"]
        }
      ]
    },
    {
      explanation: "<p>Now we determine the result.</p><p>Is <code>coin1 == 1 and coin2 == 1</code>? Both coins need to be <code>1</code> (Heads) for this to be <code>True</code>.</p><p><code>coin1</code> is <code>0</code>, so the condition is <code>False</code>. We skip this block.</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin1 == 0 and coin2 == 0</code>? Both coins need to be <code>0</code> (Tails) for this to be <code>True</code>.</p><p><code>coin2</code> is <code>1</code>, so the condition is <code>False</code>. We skip this block too.</p>",
      highlightLines: [21],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>Neither of the previous conditions was <code>True</code>, so we fall through to the <code>else</code> block.</p><p>The coins didn't match, so the result is undecided.</p>",
      highlightLines: [23],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Throw again!\"</code> followed by a blank line.</p><p>But unlike Solution 1, the program doesn't stop here — we're inside a loop!</p>",
      highlightLines: [24],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>We've reached the end of the loop body, so we jump back up to the <code>while</code> condition.</p><p>Is <code>coin1 != coin2</code>? <code>0 != 1</code> is <code>True</code>, so the loop runs again!</p><p><strong>This is the key difference from Solution 1</strong> — the game automatically tosses again.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p><strong>Loop iteration 2:</strong> Generate a new random value for <code>coin1</code>.</p><p>This time <code>random.randint(0,1)</code> returns <code>1</code> (Heads).</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 0, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p>Generate a new random value for <code>coin2</code>.</p><p>It also returns <code>1</code> (Heads). Both coins are now the same!</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": { value: 1, highlight: true }, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin1 == 0</code>?</p><p>No — <code>coin1</code> is now <code>1</code>, not <code>0</code>. So we skip this block and move to the <code>elif</code>.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": { value: 1, highlight: true } },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin1 == 1</code>?</p><p>Yes! This condition is <code>True</code>. We enter this block.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Coin 1: Heads\"</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", ""]
        }
      ]
    },
    {
      explanation: "<p>Now we check <code>coin2</code>.</p><p>Is <code>coin2 == 0</code>?</p><p>No — <code>coin2</code> is <code>1</code>, not <code>0</code>. So we skip this block and move to the <code>elif</code>.</p>",
      highlightLines: [14],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads"]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin2 == 1</code>?</p><p>Yes! This condition is <code>True</code>. We enter this block.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads"]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Coin 2: Heads\"</code> followed by a blank line.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads"]
        }
      ]
    },
    {
      explanation: "<p>Now we determine the result.</p><p>Is <code>coin1 == 1 and coin2 == 1</code>?</p><p>Yes! Both coins are <code>1</code> (Heads). The condition is <code>True</code>!</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>Print <code>\"Spinner wins! Two heads!\"</code> followed by a blank line.</p><p>The spinner has won the game!</p>",
      highlightLines: [20],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>We've reached the end of the loop body again, so we jump back up to the <code>while</code> condition.</p><p>Is <code>coin1 != coin2</code>? <code>1 != 1</code> is <code>False</code>, so the loop <strong>exits</strong>!</p><p>The coins finally matched — both were Heads — so the game is over.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads", "Coin 2: Heads", "", "Spinner wins! Two heads!", ""]
        }
      ]
    },
    {
      explanation: "<p>Now that we've exited the loop, we reach this line.</p><p>Print the farewell message.</p>",
      highlightLines: [26],
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads", "Coin 2: Heads", "", "Spinner wins! Two heads!", ""]
        }
      ]
    },
    {
      explanation: "<p>The program has finished.</p><p><strong>Key takeaway:</strong> By using a <code>while</code> loop with the condition <code>coin1 != coin2</code>, the game keeps tossing until both coins match.</p><p>Initialising <code>coin1</code> and <code>coin2</code> to different values (<code>0</code> and <code>1</code>) guarantees the loop runs at least once.</p><p>Unlike Solution 1, this version is a <strong>complete game</strong> — it keeps playing until there's a definitive result!</p>",
      boxes: [
        {
          title: "Memory",
          values: { "coin1": 1, "coin2": 1 },
          connections: [
            { from: "coin1", toKey: "coin1" },
            { from: "coin2", toKey: "coin2" }
          ]
        },
        {
          title: "Output",
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Coin 1: Heads", "Coin 2: Heads", "", "Spinner wins! Two heads!", "", "", "Thanks for playing!"]
        }
      ]
    }
  ]
};
