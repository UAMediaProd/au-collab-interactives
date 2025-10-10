export default {
  code: `def example_function():
  local_str = 'local'

example_function()
print(local_str)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates what happens when you try to access a <strong>local variable</strong> outside of its function.</p><p>This is a common error that helps us understand variable scope.</p>",
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
      explanation: "<p>Define a function named <code>example_function</code>.</p><p>Inside this function, we'll create a local variable.</p>",
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
      explanation: "<p>Call <code>example_function()</code>. Jump to the function definition.</p>",
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
      explanation: "<p>Enter <code>example_function</code>.</p>",
      highlightLines: [0, 3],
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
      lineNumber: 1,
      explanation: "<p>Create a <strong>local</strong> variable <code>local_str</code> and assign it the value <code>'local'</code>.</p><p>This variable only exists inside <code>example_function</code>.</p>",
      highlightLines: [1, 3],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "example_function memory",
          values: {
            "local_str": { value: "'local'", highlight: true }
          },
          connections: [
            { from: "local_str", toValue: "'local'" }
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
      explanation: "<p>The function ends. The local variable <code>local_str</code> is <strong>removed from memory</strong>.</p><p>Control returns to line 3.</p>",
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
      lineNumber: 4,
      explanation: "<p>Try to print <code>local_str</code>.</p><p><strong>Error!</strong> <code>local_str</code> doesn't exist in this scope. It was a local variable inside <code>example_function</code> and was removed when the function ended.</p><p>Python will raise a <code>NameError: name 'local_str' is not defined</code>.</p>",
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
      lineNumber: 4,
      explanation: "<p>The program crashes with an error.</p><p><strong>Key takeaway:</strong> Local variables only exist inside their function. Once the function finishes, those variables are destroyed. You cannot access them from outside the function.</p><p>If you need to use a value outside the function, the function should <code>return</code> it, or you should use a global variable.</p>",
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
          values: ["NameError: name 'local_str' is not defined"]
        }
      ]
    }
  ]
};
