export default {
  code: `str1 = 'kramer'

index = 0
while index < len(str1):
  print(str1[index], end=' ')
  index = index + 1

print('\\n\\nThe End!')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll see an alternative way to iterate over strings using a <code>while</code> loop with an index variable.</p><p>This approach gives us more control by using the index to access each character.</p>",
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
      explanation: "<p>This line assigns the string <code>'kramer'</code> to the variable <code>str1</code>.</p>",
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
      lineNumber: 2,
      explanation: "<p>We initialize the <code>index</code> variable to <code>0</code>. This will be used to access each character in the string, starting from position 0.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "str1": { value: ['k', 'r', 'a', 'm', 'e', 'r'], highlight: true } },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] }
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
      explanation: "<p>Test the condition: <code>index &lt; len(str1)</code>. The <code>len()</code> function returns the length of the string, which is <code>6</code>.</p><p>Since <code>index</code> is <code>0</code>, and 0 &lt; 6, the condition is <code>True</code>. We enter the loop.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": { value: 0, highlight: true } },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>We use <code>str1[index]</code> to access the character at position <code>0</code>, which is <code>'k'</code>. Print it followed by a space.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 0 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Increment <code>index</code> by 1. Now <code>index</code> is <code>1</code>. Back to testing the condition.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 0 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["k "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Test the condition: <code>1 &lt; 6</code> is <code>True</code>. Continue with the next iteration.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": { value: 1, highlight: true } },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["k "]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Access <code>str1[1]</code>, which is <code>'r'</code>. Print it followed by a space.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 1 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["k "]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Increment <code>index</code> to <code>2</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 1 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["k r "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Test: <code>2 &lt; 6</code> is <code>True</code>. Continue.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": { value: 2, highlight: true } },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["k r "]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Access <code>str1[2]</code>, which is <code>'a'</code>. Print it followed by a space.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 2 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["k r "]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Increment <code>index</code> to <code>3</code>.</p><p><em>The loop continues through the remaining characters: 'm', 'e', 'r'...</em></p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 2 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["k r a "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>After processing all characters, <code>index</code> is now <code>6</code>. Test the condition: <code>6 &lt; 6</code> is <code>False</code>.</p><p>The loop exits, and we move to the next statement.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": { value: 6, highlight: true } },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["k r a m e r "]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>This line prints <code>'\\n\\nThe End!'</code>. The <code>\\n</code> represents a newline character, so this will print two blank lines followed by <code>'The End!'</code>.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 6 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: ["k r a m e r "]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> Using a <code>while</code> loop with an index gives you more control over string iteration. You can access characters by position using <code>str1[index]</code>, and <code>len(str1)</code> tells you when to stop.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "str1": ['k', 'r', 'a', 'm', 'e', 'r'], "index": 6 },
          connections: [
            { from: "str1", toValue: ['k', 'r', 'a', 'm', 'e', 'r'] },
            { from: "index", toValue: "6" }
          ]
        },
        {
          title: "Output",
          // TODO: Print blank lines!
          values: ["k r a m e r ", "", "", "The End!"]
        }
      ]
    }
  ]
};
