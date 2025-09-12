export default {
  code: `# Initial code example
x = 5
y = 10
print(x + y)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This is our first code example. It's a simple addition of two variables.</p>",
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
      explanation: "<p>We set variable <code>x</code> to <code>5</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5 }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>We set variable <code>y</code> to <code>10</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 10 }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>We print the sum of <code>x</code> and <code>y</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 10 }
        },
        {
          title: "Output",
          values: ["15"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Now let's look at a different example.</strong> This one demonstrates a simple multiplication.</p>",
      highlightLines: [0],
      code: `# Second code example
a = 7
b = 3
print(a * b)`,
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>We set variable <code>a</code> to <code>7</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "a": 7 }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>We set variable <code>b</code> to <code>3</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "a": 7, "b": 3 }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>We print the product of <code>a</code> and <code>b</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "a": 7, "b": 3 }
        },
        {
          title: "Output",
          values: ["21"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Let's try one more example.</strong> This one shows string concatenation.</p>",
      highlightLines: [0],
      code: `# Third code example
first_name = "Jane"
last_name = "Doe"
print(first_name + " " + last_name)`,
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>We set <code>first_name</code> to <code>\"Jane\"</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "first_name": "\"Jane\"" }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>We set <code>last_name</code> to <code>\"Doe\"</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "first_name": "\"Jane\"", "last_name": "\"Doe\"" }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>We print the concatenated full name.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "first_name": "\"Jane\"", "last_name": "\"Doe\"" }
        },
        {
          title: "Output",
          values: ["Jane Doe"]
        }
      ]
    }
  ]
};
