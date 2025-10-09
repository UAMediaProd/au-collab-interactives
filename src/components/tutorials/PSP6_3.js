export default {
  code: `def example_function():
  global_str = 'local'
  print('String in function is:', global_str)

global_str = 'global'

print('String is:', global_str)
example_function()
print('String is:', global_str)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates how <strong>local variables can override global variables</strong> within a function's scope.</p><p>When a function creates a variable with the same name as a global variable, the local version takes precedence inside the function.</p>",
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
      explanation: "<p>Define a function named <code>example_function</code>.</p><p>This function will create its own local variable called <code>global_str</code>.</p>",
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
      lineNumber: 4,
      explanation: "<p>Create a <strong>global</strong> variable <code>global_str</code> and assign it <code>'global'</code>.</p>",
      highlightLines: [4],
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
      lineNumber: 6,
      explanation: "<p>Print the global variable <code>global_str</code>, which is <code>'global'</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
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
      lineNumber: 7,
      explanation: "<p>Call <code>example_function()</code>. Jump to the function definition.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["String is: global"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Enter <code>example_function</code>.</p>",
      highlightLines: [0, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["String is: global"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Create a <strong>local</strong> variable <code>global_str</code> and assign it <code>'local'</code>.</p><p>This creates a new variable in the function's local scope. It does <strong>not</strong> modify the global <code>global_str</code>.</p><p>The global variable remains <code>'global'</code>.</p>",
      highlightLines: [1, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: { "global_str": "'local'" },
          connections: [
            { from: "global_str", toValue: "'local'" }
          ]
        },
        {
          title: "Output",
          values: ["String is: global"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>global_str</code>.</p><p>Python looks for the variable in the <strong>local scope first</strong>. Since there's a local <code>global_str</code>, it prints <code>'local'</code>.</p><p>The global variable is not accessed because the local one takes precedence.</p>",
      highlightLines: [2, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: { "global_str": "'local'" },
          connections: [
            { from: "global_str", toValue: "'local'" }
          ]
        },
        {
          title: "Output",
          values: ["String is: global"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The function ends. The local variable <code>global_str</code> is removed from memory.</p><p>The global <code>global_str</code> remains unchanged at <code>'global'</code>.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["String is: global", "String in function is: local"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Print the global variable <code>global_str</code> again.</p><p>It's still <code>'global'</code> because the function's local variable didn't affect it.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["String is: global", "String in function is: local"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> When a function assigns to a variable name, Python creates a <strong>local</strong> variable in that function's scope. This local variable <strong>shadows</strong> (hides) any global variable with the same name, but only within the function.</p><p>The global variable remains unchanged. To modify a global variable from inside a function, you need the <code>global</code> keyword.</p>",
      boxes: [
        {
          title: "Global memory",
          values: { "global_str": "'global'" },
          connections: [
            { from: "global_str", toValue: "'global'" }
          ]
        },
        {
          title: "example_function memory",
          values: {}
        },
        {
          title: "Output",
          values: ["String is: global", "String in function is: local", "String is: global"]
        }
      ]
    }
  ]
};
