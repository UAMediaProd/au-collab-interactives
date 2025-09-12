export default {
  code: `# A simple for loop example
total = 0
for i in range(1, 4):
    print(f"Adding {i}")
    total = total + i
print(f"Final total: {total}")`,
  steps: [
    {
      lineNumber: 0,
      explanation: "This is a comment explaining our code. Comments start with <code>#</code> and are ignored by Python.",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "We initialize a variable called <code>total</code> with a value of <code>0</code>. This will be used to accumulate a sum.",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "total": 0 }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We start a <code>for</code> loop that will iterate through the values <code>1</code>, <code>2</code>, and <code>3</code>. The variable <code>i</code> will take each value one at a time.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "total": 0 }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "First iteration: <code>i = 1</code>. We <code>print</code> the value of <code>i</code> that we're adding.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "total": 0, "i": 1 }
        },
        {
          title: "Output",
          values: ["Adding 1"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "First iteration: <code>i = 1</code>. We add <code>i</code> to our <code>total</code>: <code>0 + 1 = 1</code>.",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "total": 1, "i": 1 }
        },
        {
          title: "Output",
          values: ["Adding 1"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We return to the <code>for</code> loop condition. Since <code>i = 1</code> is not the end of our range, we continue to the next iteration with <code>i = 2</code>.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "total": 1, "i": 1 }
        },
        {
          title: "Output",
          values: ["Adding 1"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "Second iteration: <code>i = 2</code>. We <code>print</code> the value of <code>i</code> that we're adding.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "total": 1, "i": 2 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "Second iteration: <code>i = 2</code>. We add <code>i</code> to our <code>total</code>: <code>1 + 2 = 3</code>.",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "total": 3, "i": 2 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We return to the <code>for</code> loop condition again. Since <code>i = 2</code> is not the end of our range, we continue to the next iteration with <code>i = 3</code>.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "total": 3, "i": 2 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "Third iteration: <code>i = 3</code>. We <code>print</code> the value of <code>i</code> that we're adding.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "total": 3, "i": 3 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2", "Adding 3"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "Third iteration: <code>i = 3</code>. We add <code>i</code> to our <code>total</code>: <code>3 + 3 = 6</code>.",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "total": 6, "i": 3 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2", "Adding 3"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We return to the <code>for</code> loop condition. Now <code>i = 3</code> is the end of our range, so we exit the loop.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "total": 6, "i": 3 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2", "Adding 3"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "We <code>print</code> the final value of our <code>total</code>, which is <code>6</code>.",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "total": 6, "i": 3 }
        },
        {
          title: "Output",
          values: ["Adding 1", "Adding 2", "Adding 3", "Final total: 6"]
        }
      ]
    }
  ]
};
