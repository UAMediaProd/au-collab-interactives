export default {
  code: `str1 = 'this is fun'
str1.upper()
print(str1)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll explore an important concept about string methods in Python.</p><p>We'll see what happens when we call <code>.upper()</code> on a string and whether it changes the original string.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
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
      explanation: "<p>This line assigns the string <code>'this is fun'</code> to the variable <code>str1</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
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
      explanation: "<p>This line calls the <code>.upper()</code> method on <code>str1</code>. This method returns a new string with all letters converted to uppercase.</p><p><strong>Important:</strong> The <code>.upper()</code> method returns a new string, but we're not storing it anywhere. We're not assigning it to any variable.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'this is fun'" },
          connections: [
            { from: "str1", toValue: "'this is fun'" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Now we print <code>str1</code>. What will be printed?</p><p>Since we didn't assign the result of <code>.upper()</code> to anything, <code>str1</code> still contains the original value: <code>'this is fun'</code>.</p><p><strong>Key point:</strong> String methods like <code>.upper()</code> don't modify the original string—they return a new string!</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'this is fun'" },
          connections: [
            { from: "str1", toValue: "'this is fun'" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>The output is <code>this is fun</code>—the original string, unchanged.</p><p>If we want to actually change <code>str1</code> to uppercase, we need to reassign it. Let's see how to do that...</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'this is fun'" },
          connections: [
            { from: "str1", toValue: "'this is fun'" }
          ]
        },
        {
          title: "Output",
          values: ["this is fun"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Now let's look at the correct way to modify the string.</strong></p><p>This time, we'll reassign <code>str1</code> to the result of <code>str1.upper()</code>.</p>",
      highlightLines: [],
      code: `str1 = 'this is fun'
str1 = str1.upper()
print(str1)`,
      boxes: [
        {
          title: "Memory",
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
      explanation: "<p>Again, we assign the string <code>'this is fun'</code> to <code>str1</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
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
      explanation: "<p>This time, we call <code>str1.upper()</code> and <strong>assign the result back to <code>str1</code></strong>.</p><p>Now <code>str1</code> will contain the uppercase version: <code>'THIS IS FUN'</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'this is fun'" },
          connections: [
            { from: "str1", toValue: "'this is fun'" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Now when we print <code>str1</code>, we'll see the uppercase version.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'THIS IS FUN'" },
          connections: [
            { from: "str1", toValue: "'THIS IS FUN'" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>The output is <code>THIS IS FUN</code>—the uppercase version!</p><p><strong>Summary:</strong> String methods like <code>.upper()</code> return a new string but don't modify the original. To change a variable, you must reassign it: <code>str1 = str1.upper()</code>.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "str1": "'THIS IS FUN'" },
          connections: [
            { from: "str1", toValue: "'THIS IS FUN'" }
          ]
        },
        {
          title: "Output",
          values: ["THIS IS FUN"]
        }
      ]
    }
  ]
};
