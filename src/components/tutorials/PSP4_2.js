export default {
  code: `my_string = 'some_string'
for letter in my_string:
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
      explanation: "<p>This line assigns the string <code>'some_string'</code> to the variable <code>my_string</code>.</p>",
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
      explanation: "<p>The <code>for</code> loop will iterate through each character in <code>my_string</code>.</p><p>First iteration: <code>letter</code> is assigned the first character, <code>s</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": { value: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] }
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
      explanation: "<p>Print <code>s</code> followed by a space. The <code>end=' '</code> parameter keeps us on the same line.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "s", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "s" }
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
      explanation: "<p>Second iteration: <code>letter</code> is assigned <code>o</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "s" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "s" }
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
      explanation: "<p>Print <code>o</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "o", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "o" }
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
      explanation: "<p>Third iteration: <code>letter</code> is assigned <code>m</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "o" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "o" }
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
      explanation: "<p>Print <code>m</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "m", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "m" }
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
      explanation: "<p>Fourth iteration: <code>letter</code> is assigned <code>e</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "m" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "m" }
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
      explanation: "<p>Print <code>e</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "e", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "e" }
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
      explanation: "<p>Fifth iteration: <code>letter</code> is assigned <code>_</code> (underscore).</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "e" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "e" }
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
      explanation: "<p>Print <code>_</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "_", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "_" }
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
      explanation: "<p>Sixth iteration: <code>letter</code> is assigned <code>s</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "_" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "_" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>s</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "s", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "s" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Seventh iteration: <code>letter</code> is assigned <code>t</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "s" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "s" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>t</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "t", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "t" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Eighth iteration: <code>letter</code> is assigned <code>r</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "t" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "t" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>r</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "r", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "r" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Ninth iteration: <code>letter</code> is assigned <code>i</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "r" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "r" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>i</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "i", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "i" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Tenth iteration: <code>letter</code> is assigned <code>n</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "i" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "i" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r i "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>n</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "n", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "n" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r i "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Eleventh iteration: <code>letter</code> is assigned <code>g</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "n" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "n" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r i n "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>g</code> followed by a space.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": { value: "g", highlight: true } },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "g" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r i n "]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>After iterating through all 11 characters, the loop ends.</p><p><strong>Key takeaway:</strong> Strings are sequences of characters, so you can iterate over them with <code>for</code> loops just like lists. Each character becomes the loop variable in turn.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "my_string": ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'], "letter": "g" },
          connections: [
            { from: "my_string", toValue: ['s', 'o', 'm', 'e', '_', 's', 't', 'r', 'i', 'n', 'g'] },
            { from: "letter", toValue: "g" }
          ]
        },
        {
          title: "Output",
          values: ["s o m e _ s t r i n g "]
        }
      ]
    }
  ]
};
