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
    // SOLUTION 1: No loop (single toss)
    // =============================================
    // Scenario: coin1 = 0 (Tails), coin2 = 1 (Heads) → "Throw again!"
    {
      explanation: "<p>In this tutorial, we'll trace through a simple Two-up game program.</p><p>Two-up is a traditional Australian gambling game. Two coins are tossed: if both land heads, the spinner wins; if both land tails, the spinner loses; otherwise, the coins are thrown again.</p><p>This first solution simulates a <strong>single toss</strong> of the two coins.</p>",
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
      explanation: "<p>Import the <code>random</code> module.</p><p>We need this module to generate random numbers, which we'll use to simulate coin tosses.</p>",
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
      explanation: "<p>Call <code>random.randint(0,1)</code> to generate a random integer — either <code>0</code> or <code>1</code> — and store it in <code>coin1</code>.</p><p>We're using <code>0</code> to represent <strong>Tails</strong> and <code>1</code> to represent <strong>Heads</strong>.</p><p>For this walkthrough, let's say it returns <code>0</code>.</p>",
      highlightLines: [3],
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
      explanation: "<p>Generate another random integer for the second coin and store it in <code>coin2</code>.</p><p>Let's say this time it returns <code>1</code>.</p>",
      highlightLines: [4],
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
      explanation: "<p>Now we need to display what each coin landed on.</p><p>We check: is <code>coin1 == 0</code>?</p><p>Yes! <code>coin1</code> is <code>0</code>, so this condition is <code>True</code>. We enter this <code>if</code> block.</p>",
      highlightLines: [6],
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
      explanation: "<p>Print <code>\"Coin 1: Tails\"</code> to the screen.</p><p>Since <code>coin1</code> is <code>0</code>, we know it landed on Tails.</p>",
      highlightLines: [7],
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
      highlightLines: [11],
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
      explanation: "<p>Is <code>coin2 == 1</code>?</p><p>Yes! <code>coin2</code> is <code>1</code>, so this condition is <code>True</code>. We enter this block.</p>",
      highlightLines: [13],
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
      explanation: "<p>Print <code>\"Coin 2: Heads\"</code> to the screen.</p><p>The <code>\\n</code> inside the string adds an extra blank line in the output, to visually separate the coin results from the game result.</p>",
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
      explanation: "<p>Now we determine the result of the game.</p><p>Is <code>coin1 == 1 and coin2 == 1</code>? Both coins need to be <code>1</code> (Heads) for this to be <code>True</code>.</p><p><code>coin1</code> is <code>0</code>, so the condition is <code>False</code>. We skip this block.</p>",
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
          values: ["Coin 1: Tails", "Coin 2: Heads", ""]
        }
      ]
    },
    {
      explanation: "<p>Is <code>coin1 == 0 and coin2 == 0</code>? Both coins need to be <code>0</code> (Tails) for this to be <code>True</code>.</p><p><code>coin2</code> is <code>1</code>, so the condition is <code>False</code>. We skip this block too.</p>",
      highlightLines: [18],
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
      explanation: "<p>Since neither of the previous conditions was <code>True</code>, we fall through to the <code>else</code> block.</p><p>The coins didn't match — one was Heads and the other was Tails — so the result is undecided.</p>",
      highlightLines: [20],
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
      explanation: "<p>Print <code>\"Throw again!\"</code> to tell the player the toss was inconclusive.</p>",
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
      explanation: "<p>Print the farewell message.</p><p>The <code>\\n</code> at the start of the string adds a blank line before it in the output.</p>",
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
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!"]
        }
      ]
    },
    {
      explanation: "<p>The program has finished.</p>",
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
          values: ["Coin 1: Tails", "Coin 2: Heads", "", "Throw again!", "", "Thanks for playing!"]
        }
      ]
    }
  ]
};
