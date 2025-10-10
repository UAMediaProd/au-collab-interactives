export default {
  code: `def change_me(the_list, the_num):
  the_list.append(the_num)
  the_num = the_num + 1

num_list = [1, 2]
num = 3
print(num, num_list)
change_me(num_list, num)
print(num, num_list)
change_me(num_list, num)
print(num, num_list)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates <strong>pass by reference</strong> with mutable objects.</p><p>While simple values (numbers, strings) are passed by value, <strong>mutable objects like lists</strong> are passed by reference. This means changes to the list inside the function <strong>will affect</strong> the original list.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "change_me memory",
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
      explanation: "<p>Define a function <code>change_me</code> with two parameters: <code>the_list</code> and <code>the_num</code>.</p><p>This function will append <code>the_num</code> to <code>the_list</code> and increment <code>the_num</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "change_me memory",
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
      explanation: "<p>Create a global list <code>num_list</code> with values <code>[1, 2]</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "change_me memory",
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
      explanation: "<p>Create a global variable <code>num</code> with value <code>3</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          values: { "num_list": { value: [1, 2], highlight: true } },
          connections: [
            { from: "num_list", toValue: [1, 2] }
          ]
        },
        {
          title: "change_me memory",
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
      explanation: "<p>Print <code>num</code> and <code>num_list</code>: <code>3 [1, 2]</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2],
            "num": { value: 3, highlight: true }
          },
          connections: [
            { from: "num_list", toValue: [1, 2] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
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
      explanation: "<p>Call <code>change_me(num_list, num)</code>.</p><p><strong>Important:</strong> <code>num_list</code> is passed by reference (the function gets access to the same list), while <code>num</code> is passed by value (the function gets a copy).</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Enter <code>change_me</code>.</p><p><code>the_list</code> references the <strong>same list</strong> as <code>num_list</code> (pass by reference).</p><p><code>the_num</code> gets a <strong>copy</strong> of the value <code>3</code> (pass by value).</p>",
      highlightLines: [0, 7],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": { value: 3, highlight: true }
          },
          connections: [
            { from: "the_list", toValue: [1, 2], toBox: "Global memory" },
            { from: "the_num", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Append <code>the_num</code> (which is <code>3</code>) to <code>the_list</code>.</p><p>Since <code>the_list</code> references the same list as <code>num_list</code>, this change <strong>affects the original list</strong>.</p><p>Both <code>the_list</code> and <code>num_list</code> now contain <code>[1, 2, 3]</code>.</p>",
      highlightLines: [1, 7],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": 3
          },
          connections: [
            { from: "the_list", toValue: [1, 2], toBox: "Global memory" },
            { from: "the_num", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Increment <code>the_num</code> by 1, making it <code>4</code>.</p><p>This only changes the <strong>local</strong> variable <code>the_num</code>. The global <code>num</code> remains <code>3</code>.</p>",
      highlightLines: [2, 7],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": { value: [1, 2, 3], highlight: 2 },
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": { value: 4, highlight: true }
          },
          connections: [
            { from: "the_list", toValue: [1, 2, 3], toBox: "Global memory" },
            { from: "the_num", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The function ends. Local variables are removed.</p><p>Notice: <code>num_list</code> was changed to <code>[1, 2, 3]</code>, but <code>num</code> is still <code>3</code>.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Print <code>num</code> and <code>num_list</code>.</p><p><code>num</code> is still <code>3</code> (unchanged), but <code>num_list</code> is now <code>[1, 2, 3]</code> (modified by the function).</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]"]
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "<p>Call <code>change_me(num_list, num)</code> again.</p><p>This time <code>num_list</code> is <code>[1, 2, 3]</code>.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Enter <code>change_me</code> again.</p>",
      highlightLines: [0, 9],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": { value: 3, highlight: true }
          },
          connections: [
            { from: "the_list", toValue: [1, 2, 3], toBox: "Global memory" },
            { from: "the_num", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Append <code>3</code> to the list again.</p><p>The list becomes <code>[1, 2, 3, 3]</code>.</p>",
      highlightLines: [1, 9],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": 3
          },
          connections: [
            { from: "the_list", toValue: [1, 2, 3], toBox: "Global memory" },
            { from: "the_num", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Increment <code>the_num</code> to <code>4</code> (local change only).</p>",
      highlightLines: [2, 9],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": { value: [1, 2, 3, 3], highlight: 3 },
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {
            "the_list": { value: "", valued: false },
            "the_num": 3
          },
          connections: [
            { from: "the_list", toValue: [1, 2, 3, 3], toBox: "Global memory" },
            { from: "the_num", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "<p>The function ends.</p><p><code>num_list</code> is now <code>[1, 2, 3, 3]</code>.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>Print <code>num</code> and <code>num_list</code> one final time.</p><p><code>num</code> is still <code>3</code>, but <code>num_list</code> is now <code>[1, 2, 3, 3]</code>.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]"]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> Python uses different passing mechanisms for different types:</p><ul><li><strong>Immutable types</strong> (numbers, strings): Passed by value. Changes inside the function don't affect the original.</li><li><strong>Mutable types</strong> (lists, dictionaries): Passed by reference. Changes to the object's contents <strong>do affect</strong> the original.</li><li>Reassigning a parameter (like <code>the_num = the_num + 1</code>) creates a new local variable and doesn't affect the original.</li><li>Modifying a mutable object (like <code>the_list.append()</code>) changes the original object.</li></ul>",
      boxes: [
        {
          title: "Global memory",
          values: { 
            "num_list": [1, 2, 3, 3],
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [1, 2, 3, 3] },
            { from: "num", toValue: "3" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["3 [1, 2]", "3 [1, 2, 3]", "3 [1, 2, 3, 3]"]
        }
      ]
    }
  ]
};
