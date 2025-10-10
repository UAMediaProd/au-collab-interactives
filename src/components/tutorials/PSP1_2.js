export default {
  code: `num1 = 3
num2 = 5
num1 = 7
total = num1 + num2`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates <strong>multiple variables</strong>, <strong>reassignment</strong>, and <strong>calculations</strong>.</p><p>We'll see how variables can point to different values in memory, and how Python evaluates expressions to create new values.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Assign the value <code>3</code> to the variable <code>num1</code>.</p><p>The value <code>3</code> is created in memory, and <code>num1</code> points to it.</p>",
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
      explanation: "<p>The variable <code>num1</code> now points to <code>3</code> in memory.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { "num1": { value: 3, highlight: true } },
          connections: [
            { from: "num1", toValue: "3" }
          ]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Assign the value <code>5</code> to the variable <code>num2</code>.</p><p>A new value <code>5</code> is created in memory, and <code>num2</code> points to it.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3 },
          connections: [
            { from: "num1", toValue: "3" }
          ]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Now we have two variables in memory: <code>num1</code> points to <code>3</code>, and <code>num2</code> points to <code>5</code>.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 3,
            "num2": { value: 5, highlight: true }
          },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "5" }
          ]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Reassign <code>num1</code> to the value <code>7</code>.</p><p>A new value <code>7</code> is created in memory, and <code>num1</code>'s connection is redirected to point to <code>7</code>.</p><p>The old value <code>3</code> remains in memory but is no longer referenced by <code>num1</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 3,
            "num2": 5
          },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "5" }
          ]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>The variable <code>num1</code> now points to <code>7</code>.</p><p>Notice that the value <code>3</code> still exists in memory, but <code>num1</code> no longer references it.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 3,
            "num2": 5,
            "_1": { value: 7, highlight: true }
          },
          connections: [
            { from: "num1", toValue: "7" },
            { from: "num2", toValue: "5" }
          ]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Calculate <code>num1 + num2</code> and assign the result to <code>total</code>.</p><p>Python evaluates the expression: <code>7 + 5 = 12</code>.</p><p>A new value <code>12</code> is created in memory, and <code>total</code> points to it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 3,
            "num2": 5,
            "_1": { value: 7}
          },
          connections: [
            { from: "num1", toValue: "7" },
            { from: "num2", toValue: "5" }
          ]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>The program ends with three variables in memory:</p><ul><li><code>num1</code> points to <code>7</code></li><li><code>num2</code> points to <code>5</code></li><li><code>total</code> points to <code>12</code> (the result of <code>7 + 5</code>)</li></ul><p><strong>Key takeaway:</strong> Calculations create new values in memory. The expression <code>num1 + num2</code> doesn't modify the original values; it creates a new value (<code>12</code>) that <code>total</code> points to.</p>",
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 3,
            "num2": 5,
            "_1": { value: 7},
            "total": { value: 12, highlight: true }
          },
          connections: [
            { from: "num1", toValue: "7" },
            { from: "num2", toValue: "5" },
            { from: "total", toValue: "12" }
          ]
        }
      ]
    }
  ]
};
