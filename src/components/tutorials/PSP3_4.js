export default {
  code: `for k in [1, 3, 7]:
  print(k)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn about <code>for</code> loops, which provide a different way to repeat code.</p><p>A <code>for</code> loop iterates over a sequence of values. In this example, the sequence is a list: <code>[1, 3, 7]</code>.</p>",
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
      lineNumber: 0,
      explanation: "<p>The <code>for</code> loop will take each value from the list <code>[1, 3, 7]</code> one at a time and assign it to the variable <code>k</code>.</p><p>First iteration: <code>k</code> is assigned the first value from the list, which is <code>1</code>.</p>",
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
      lineNumber: 1,
      explanation: "<p>Now we execute the code block inside the loop. This line prints the value of <code>k</code>, which is <code>1</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "k": { value: 1, highlight: true } },
          connections: [
            { from: "k", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>The loop automatically moves to the next value in the list.</p><p>Second iteration: <code>k</code> is assigned the second value from the list, which is <code>3</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "k": 1 },
          connections: [
            { from: "k", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: [1]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print the value of <code>k</code>, which is now <code>3</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "k": { value: 3, highlight: true } },
          connections: [
            { from: "k", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: [1]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>The loop moves to the next value in the list.</p><p>Third iteration: <code>k</code> is assigned the third value from the list, which is <code>7</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "k": 3 },
          connections: [
            { from: "k", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: [1, 3]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print the value of <code>k</code>, which is now <code>7</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "k": { value: 7, highlight: true } },
          connections: [
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: [1, 3]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>There are no more values in the list, so the loop ends. The program has finished executing.</p><p><strong>Key takeaway:</strong> A <code>for</code> loop automatically iterates through each item in a sequence, assigning each value to the loop variable in turn.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "k": 7 },
          connections: [
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: [1, 3, 7]
        }
      ]
    }
  ]
};
