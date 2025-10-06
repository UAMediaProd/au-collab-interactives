export default {
  code: `myString = 'someString'
for letter in myString:
  print(letter, end=' ')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn that strings can be iterated over using <code>for</code> loops, just like lists.</p><p>Each character in the string will be processed one at a time.</p>",
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
      explanation: "<p>This line assigns the string <code>'someString'</code> to the variable <code>myString</code>.</p>",
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
      explanation: "<p>The <code>for</code> loop will iterate through each character in <code>myString</code>.</p><p>First iteration: <code>letter</code> is assigned the first character, <code>'s'</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'" },
          connections: [
            { from: "myString", toValue: "'someString'" }
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
      explanation: "<p>Print <code>'s'</code> followed by a space. The <code>end=' '</code> parameter keeps us on the same line.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'s'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'s'" }
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
      explanation: "<p>Second iteration: <code>letter</code> is assigned <code>'o'</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'s'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'s'" }
          ]
        },
        {
          title: "Output",
          values: ["s "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'o'</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'o'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'o'" }
          ]
        },
        {
          title: "Output",
          values: ["s "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Third iteration: <code>letter</code> is assigned <code>'m'</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'o'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'o'" }
          ]
        },
        {
          title: "Output",
          values: ["s o "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'m'</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'m'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'m'" }
          ]
        },
        {
          title: "Output",
          values: ["s o "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Fourth iteration: <code>letter</code> is assigned <code>'e'</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'m'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'m'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'e'</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'e'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'e'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Fifth iteration: <code>letter</code> is assigned <code>'S'</code> (uppercase S).</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'e'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'e'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'S'</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'S'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'S'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>The loop continues through the remaining characters: <code>'t'</code>, <code>'r'</code>, <code>'i'</code>, <code>'n'</code>, <code>'g'</code>.</p><p><em>Let's skip ahead to the end...</em></p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'S'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'S'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e S "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>After iterating through all 10 characters, the loop ends.</p><p><strong>Key takeaway:</strong> Strings are sequences of characters, so you can iterate over them with <code>for</code> loops just like lists. Each character becomes the loop variable in turn.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "myString": "'someString'", "letter": "'g'" },
          connections: [
            { from: "myString", toValue: "'someString'" },
            { from: "letter", toValue: "'g'" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e S t r i n g "]
        }
      ]
    }
  ]
};
