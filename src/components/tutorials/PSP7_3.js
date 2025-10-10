export default {
  code: `def change_me(number):
  print('Attempting to change the value!')
  number = 0
  print('Now the value is:', number) 

value = 99
print('The value is:', value)
change_me(value)
print('Back from function call, value is still:', value)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates that <strong>changes to parameter values inside a function do not affect the original argument</strong>.</p><p>When you pass a variable to a function, the parameter gets a copy of the value, not a reference to the original variable.</p>",
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
      explanation: "<p>Define a function <code>change_me</code> with one parameter: <code>number</code>.</p><p>This function will attempt to change the value of <code>number</code> to <code>0</code>.</p>",
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
      lineNumber: 5,
      explanation: "<p>Create a global variable <code>value</code> and assign it <code>99</code>.</p>",
      highlightLines: [5],
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
      lineNumber: 6,
      explanation: "<p>Print the global variable <code>value</code>, which is <code>99</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Global memory",
          values: { "value": { value: 99, highlight: true } },
          connections: [
            { from: "value", toValue: "99" }
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
      explanation: "<p>Call <code>change_me(value)</code>, passing the global variable <code>value</code> (which is <code>99</code>) as an argument.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["The value is: 99"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Enter <code>change_me</code>.</p><p>The parameter <code>number</code> receives a <strong>copy</strong> of the value <code>99</code>.</p><p>Notice that <code>number</code> is a <strong>separate variable</strong> in the function's local memory, independent from the global <code>value</code>.</p>",
      highlightLines: [0, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: { "number": { value: 99, highlight: true } },
          connections: [
            { from: "number", toValue: "99" }
          ]
        },
        {
          title: "Output",
          values: ["The value is: 99"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print a message indicating we're attempting to change the value.</p>",
      highlightLines: [1, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: { "number": 99 },
          connections: [
            { from: "number", toValue: "99" }
          ]
        },
        {
          title: "Output",
          values: ["The value is: 99"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Assign <code>0</code> to the <strong>local</strong> parameter <code>number</code>.</p><p>This changes the local <code>number</code> variable, but the global <code>value</code> variable remains <code>99</code>.</p><p>They are completely separate variables in different scopes.</p>",
      highlightLines: [2, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: { "number": 99 },
          connections: [
            { from: "number", toValue: "99" }
          ]
        },
        {
          title: "Output",
          values: ["The value is: 99", "Attempting to change the value!"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print the local <code>number</code> variable, which is now <code>0</code>.</p><p>The global <code>value</code> is still <code>99</code> and remains unaffected.</p>",
      highlightLines: [3, 7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: { "number": { value: 0, highlight: true } },
          connections: [
            { from: "number", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["The value is: 99", "Attempting to change the value!"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The function ends. The local variable <code>number</code> is removed from memory.</p><p>Control returns to line 8.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["The value is: 99", "Attempting to change the value!", "Now the value is: 0"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Print the global <code>value</code> variable.</p><p>It's still <code>99</code>! The changes made to <code>number</code> inside the function had no effect on <code>value</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["The value is: 99", "Attempting to change the value!", "Now the value is: 0"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> When you pass a variable to a function, the parameter receives a <strong>copy of the value</strong>, not a reference to the original variable. This means:</p><ul><li>Changes to parameters inside a function don't affect the original arguments</li><li>Function parameters are local variables with their own memory space</li><li>This behavior applies to simple data types like numbers and strings</li><li>Note: Lists and dictionaries behave differently. We'll cover this in the next interactive.</li></ul>",
      boxes: [
        {
          title: "Global memory",
          values: { "value": 99 },
          connections: [
            { from: "value", toValue: "99" }
          ]
        },
        {
          title: "change_me memory",
          values: {}
        },
        {
          title: "Output",
          values: ["The value is: 99", "Attempting to change the value!", "Now the value is: 0", "Back from function call and the value is still: 99"]
        }
      ]
    }
  ]
};
