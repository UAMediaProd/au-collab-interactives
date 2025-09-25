export default {
  code: `# Example showing multiple unnamed values
a = 10
b = 20
c = 30
result = [a, b, c]`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This example demonstrates using metadata to display multiple unnamed values in memory.</p>",
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
      explanation: "<p>We assign <code>10</code> to variable <code>a</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { 
            "a": { value: 10 } 
          }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>We assign <code>20</code> to variable <code>b</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { 
            "a": { value: 10 },
            "b": { value: 20 }
          }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>We assign <code>30</code> to variable <code>c</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { 
            "a": { value: 10 },
            "b": { value: 20 },
            "c": { value: 30 }
          }
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>We create a list containing the values of <code>a</code>, <code>b</code>, and <code>c</code>. In memory, the list appears as multiple unnamed values.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { 
            "a": { value: 10 },
            "b": { value: 20 },
            "c": { value: 30 },
            "result": { value: "list" },
            "_0": { value: 10, named: false },
            "_1": { value: 20, named: false },
            "_2": { value: 30, named: false }
          },
          connections: [
            { from: "result", toKey: "_0" },
            { from: "a", toKey: "_0" },
            { from: "b", toKey: "_1" },
            { from: "c", toKey: "_2" }
          ]
        }
      ]
    }
  ]
};
