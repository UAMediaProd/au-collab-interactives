export default {
  code: `def example_function(no1=7, no2=2):
  print(no1, no2)

example_function()`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates <strong>default arguments</strong> in Python.</p><p>Parameters can have default values that are used when no argument is provided for that parameter.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
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
      explanation: "<p>Define a function <code>example_function</code> with two parameters that have <strong>default values</strong>:</p><ul><li><code>no1=7</code> (defaults to 7)</li><li><code>no2=2</code> (defaults to 2)</li></ul><p>If no arguments are provided when calling the function, these default values will be used.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Call <code>example_function()</code> with <strong>no arguments</strong>.</p><p>Since we didn't provide any arguments, the function will use the default values defined in the function signature.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
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
      explanation: "<p>Enter <code>example_function</code>.</p><p>Since no arguments were provided, the parameters use their default values:</p><ul><li><code>no1</code> gets the default value <code>7</code></li><li><code>no2</code> gets the default value <code>2</code></li></ul>",
      highlightLines: [0, 3],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: { "no1": { value: 7, highlight: true }, "no2": { value: 2, highlight: true } },
          connections: [
            { from: "no1", toValue: "7" },
            { from: "no2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print <code>no1</code> and <code>no2</code>.</p><p>The output is <code>7 2</code> because both parameters are using their default values.</p>",
      highlightLines: [1, 3],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: { "no1": 7, "no2": 2 },
          connections: [
            { from: "no1", toValue: "7" },
            { from: "no2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>The function ends and returns to line 4.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["7 2"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> Default arguments allow you to define default values for parameters. This means:</p><ul><li>Functions can be called with fewer arguments than parameters</li><li>You can make some parameters optional</li><li>Default values are used when no argument is provided</li><li>You can still override defaults by providing arguments</li></ul>",
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["7 2"]
        }
      ]
    }
  ]
};
