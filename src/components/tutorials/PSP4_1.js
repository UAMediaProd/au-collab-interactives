export default {
  code: `str1 = 'this is fun'
str1.upper()
print(str1)

str2 = 'so much fun'
str2 = str2.upper()
print(str2)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll explore an important concept about string methods in Python.</p><p>We'll compare two approaches: calling <code>.upper()</code> without reassignment, and with reassignment.</p><p>This will help us understand that string methods return new strings but don't modify the original.</p>",
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
          values: { "str1": { value: ['t','h','i','s',' ','i','s',' ','f','u','n'], highlight: true } },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] }
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
          values: { "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'] },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] }
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
      explanation: "<p>The output is <code>this is fun</code>—the original string, unchanged.</p><p><strong>This demonstrates that calling a string method without reassignment doesn't change the variable.</strong></p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'] },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] }
          ]
        },
        {
          title: "Output",
          values: ["this is fun"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p><strong>Now let's look at the correct way to change the string.</strong></p><p>We assign <code>'so much fun'</code> to a new variable <code>str2</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'] },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] }
          ]
        },
        {
          title: "Output",
          values: ["this is fun"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Notice the difference on this line: <code>str2 = str2.upper()</code>.</p><p>Here we call <code>.upper()</code> on <code>str2</code> and <strong>assign the result back to <code>str2</code></strong>.</p><p>This is the key: we're reassigning the variable to point to the new uppercase string.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { 
            "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'],
            "str2": { value: ['s','o',' ','m','u','c','h',' ','f','u','n'], highlight: true }
          },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] },
            { from: "str2", toValue: ['s','o',' ','m','u','c','h',' ','f','u','n'] }
          ]
        },
        {
          title: "Output",
          values: ["this is fun"]
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>Now when we print <code>str2</code>, we'll see the uppercase version.</p><p>Because we reassigned <code>str2</code>, it now points to the new uppercase string.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { 
            "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'],
            "str2": { value: ['S','O',' ','M','U','C','H',' ','F','U','N'], highlight: true }
          },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] },
            { from: "str2", toValue: ['S','O',' ','M','U','C','H',' ','F','U','N'] }
          ]
        },
        {
          title: "Output",
          values: ["this is fun"]
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>The output is <code>SO MUCH FUN</code>—the uppercase version!</p><p><strong>Summary:</strong> String methods like <code>.upper()</code> return a new string but don't modify the original. To change a variable, you must reassign it: <code>str2 = str2.upper()</code>.</p><p>Compare lines 2 and 6 (highlighted in yellow) to see the difference.</p>",
      highlightLines: [],
      secondaryHighlightLines: [1, 5],
      boxes: [
        {
          title: "Memory",
          values: { 
            "str1": ['t','h','i','s',' ','i','s',' ','f','u','n'],
            "str2": ['S','O',' ','M','U','C','H',' ','F','U','N']
          },
          connections: [
            { from: "str1", toValue: ['t','h','i','s',' ','i','s',' ','f','u','n'] },
            { from: "str2", toValue: ['S','O',' ','M','U','C','H',' ','F','U','N'] }
          ]
        },
        {
          title: "Output",
          values: ["this is fun", "SO MUCH FUN"]
        }
      ]
    }
  ]
};
