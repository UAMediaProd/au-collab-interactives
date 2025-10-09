export default {
  code: `j = 1
k = 2

def function1():
  j = 3
  k = 4
  print('j is:', j, 'k is', k)

def function2():
  j = 6
  function1()
  print('j is:', j, 'k is', k)

k = 7
function1()
print('j is:', j, 'k is', k)

j = 8
function2()
print('j is:', j, 'k is', k)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates <strong>variable scope</strong>—how variables defined in different parts of a program are separate from each other.</p><p>We'll see how variables inside functions are <em>local</em> to those functions and don't affect variables outside.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Assign <code>1</code> to the global variable <code>j</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Assign <code>2</code> to the global variable <code>k</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1 },
          connections: [
            { from: "j", toValue: "1" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Define <code>function1</code>. This function creates its own local variables <code>j</code> and <code>k</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 2 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "2" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Define <code>function2</code>. This function creates its own local variable <code>j</code> and calls <code>function1</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 2 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "2" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 13,
      explanation: "<p>Update the global variable <code>k</code> to <code>7</code>.</p>",
      highlightLines: [13],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 2 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "2" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 14,
      explanation: "<p>Call <code>function1()</code>. Jump to the function definition.</p>",
      highlightLines: [14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Enter <code>function1</code>.</p>",
      highlightLines: [3, 14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Create a <strong>local</strong> variable <code>j</code> inside <code>function1</code> and assign it <code>3</code>.</p><p>This is separate from the global <code>j</code>. The global <code>j</code> remains <code>1</code>.</p>",
      highlightLines: [4, 14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Create a <strong>local</strong> variable <code>k</code> inside <code>function1</code> and assign it <code>4</code>.</p><p>This is separate from the global <code>k</code>. The global <code>k</code> remains <code>7</code>.</p>",
      highlightLines: [5, 14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: { "j": 3 },
          connections: [
            { from: "j", toValue: "3" }
          ]
        },
        {
          title: "function2 memory",
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
      explanation: "<p>Print the <strong>local</strong> values of <code>j</code> and <code>k</code> (3 and 4).</p>",
      highlightLines: [6, 14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: { "j": 3, "k": 4 },
          connections: [
            { from: "j", toValue: "3" },
            { from: "k", toValue: "4" }
          ]
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 14,
      explanation: "<p><code>function1</code> ends. The local variables are removed. Control returns to line 14.</p>",
      highlightLines: [14],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4"]
        }
      ]
    },
    {
      lineNumber: 15,
      explanation: "<p>Print the <strong>global</strong> values of <code>j</code> and <code>k</code> (1 and 7).</p><p>Notice they weren't changed by <code>function1</code>!</p>",
      highlightLines: [15],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4"]
        }
      ]
    },
    {
      lineNumber: 17,
      explanation: "<p>Update the global variable <code>j</code> to <code>8</code>.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 1, "k": 7 },
          connections: [
            { from: "j", toValue: "1" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 18,
      explanation: "<p>Call <code>function2()</code>. Jump to the function definition.</p>",
      highlightLines: [18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Enter <code>function2</code>.</p>",
      highlightLines: [8, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "<p>Create a <strong>local</strong> variable <code>j</code> inside <code>function2</code> and assign it <code>6</code>.</p><p>The global <code>j</code> remains <code>8</code>.</p>",
      highlightLines: [9, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>Call <code>function1()</code> from inside <code>function2</code>. Jump to <code>function1</code>.</p>",
      highlightLines: [10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Enter <code>function1</code> (called from <code>function2</code>).</p>",
      highlightLines: [3, 10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Create a <strong>local</strong> variable <code>j</code> inside <code>function1</code> and assign it <code>3</code>.</p>",
      highlightLines: [4, 10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Create a <strong>local</strong> variable <code>k</code> inside <code>function1</code> and assign it <code>4</code>.</p>",
      highlightLines: [5, 10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: { "j": 3 },
          connections: [
            { from: "j", toValue: "3" }
          ]
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>Print the <strong>local</strong> values of <code>j</code> and <code>k</code> from <code>function1</code> (3 and 4).</p>",
      highlightLines: [6, 10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: { "j": 3, "k": 4 },
          connections: [
            { from: "j", toValue: "3" },
            { from: "k", toValue: "4" }
          ]
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7"]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p><code>function1</code> ends. Its local variables are removed. Control returns to <code>function2</code> at line 10.</p>",
      highlightLines: [10, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7", "j is: 3 k is 4"]
        }
      ]
    },
    {
      lineNumber: 11,
      explanation: "<p>Print the local <code>j</code> from <code>function2</code> (6) and the global <code>k</code> (7).</p><p>Note: <code>function2</code> doesn't have its own local <code>k</code>, so it uses the global one.</p>",
      highlightLines: [11, 18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: { "j": 6 },
          connections: [
            { from: "j", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7", "j is: 3 k is 4"]
        }
      ]
    },
    {
      lineNumber: 18,
      explanation: "<p><code>function2</code> ends. Its local variable is removed. Control returns to line 18.</p>",
      highlightLines: [18],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7", "j is: 3 k is 4", "j is: 6 k is 7"]
        }
      ]
    },
    {
      lineNumber: 19,
      explanation: "<p>Print the <strong>global</strong> values of <code>j</code> and <code>k</code> (8 and 7).</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7", "j is: 3 k is 4", "j is: 6 k is 7"]
        }
      ]
    },
    {
      lineNumber: 19,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> Variables created inside functions are <strong>local</strong> to those functions. They don't affect variables with the same name outside the function. Each function has its own separate scope.</p>",
      boxes: [
        {
          title: "Global memory",
          values: { "j": 8, "k": 7 },
          connections: [
            { from: "j", toValue: "8" },
            { from: "k", toValue: "7" }
          ]
        },
        {
          title: "function1 memory",
          values: {}
        },
        {
          title: "function2 memory",
          values: {}
        },
        {
          title: "Output",
          values: ["j is: 3 k is 4", "j is: 1 k is 7", "j is: 3 k is 4", "j is: 6 k is 7", "j is: 8 k is 7"]
        }
      ]
    }
  ]
};
