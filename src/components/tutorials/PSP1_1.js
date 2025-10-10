export default {
  code: `num = 3
num = 7`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates <strong>variable reassignment</strong> in Python.</p><p>We'll see that when a variable is reassigned, a <strong>new value is created in memory</strong>, and the variable's connection is redirected to point to the new value.</p><p>The old value remains in memory (until garbage collection), but the variable no longer points to it.</p>",
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
      explanation: "<p>Assign the value <code>3</code> to the variable <code>num</code>.</p><p>In memory, the value <code>3</code> is created, and <code>num</code> points to it.</p>",
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
      explanation: "<p>The variable <code>num</code> now points to the value <code>3</code> in memory.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { "num": { value: 3, highlight: true } },
          connections: [
            { from: "num", toValue: "3" }
          ]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Now we reassign <code>num</code> to the value <code>7</code>.</p><p><strong>Important:</strong> This doesn't change the value <code>3</code> in memory. Instead, a <strong>new value</strong> <code>7</code> is created, and <code>num</code> is updated to point to it.</p><p>The value <code>3</code> still exists in memory but is no longer referenced by <code>num</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num": 3
          },
          connections: [
            { from: "num", toValue: "3" }
          ]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>The variable <code>num</code> now points to the <strong>new value</strong> <code>7</code>.</p><p>The old value <code>3</code> is no longer referenced by any variable. Python's garbage collector will eventually clean it up.</p><p><strong>Key takeaway:</strong> In Python, reassignment creates a new value in memory and redirects the variable's pointer. The original value is not modified.</p>",
      boxes: [
        {
          title: "Memory",
          values: { 
            "num": 3,
            "_1": { value: "7", highlight: true }
          },
          connections: [
            { from: "num", toValue: "7" }
          ]
        }
      ]
    }
  ]
};
