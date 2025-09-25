export default {
  code: `# Example showing variable references
x = 42
y = x
z = y`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This example demonstrates using <code>toKey</code> to show variable references.</p>",
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
      explanation: "<p>We assign <code>42</code> to variable <code>x</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "x": 42 },
          connections: [
            { from: "x", toKey: "x" }
          ]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>We assign the value of <code>x</code> to <code>y</code>. This creates a reference where <code>y</code> points to the same value as <code>x</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "x": 42, "y": 42 },
          connections: [
            { from: "x", toKey: "x" },
            { from: "y", toKey: "x" }
          ]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Now we assign <code>y</code> to <code>z</code>. Since <code>y</code> is 42, <code>z</code> gets 42 as well.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "x": 42, "y": 42, "z": 42 },
          connections: [
            { from: "x", toKey: "x" },
            { from: "y", toKey: "x" },
            { from: "z", toKey: "x" }
          ]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>We can also demonstrate the new <code>toKey</code> connection type. This directly shows that <code>z</code> refers to <code>y</code>'s value.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "x": 42, "y": 42, "z": 42 },
          connections: [
            { from: "x", toValue: "42" },
            { from: "y", toKey: "x" }, // y points to x's value
            { from: "z", toKey: "y" }  // z points to y's value
          ]
        }
      ]
    }
  ]
};
