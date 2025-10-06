export default {
  code: `nameList = ['kramer', 'jerry', 'elaine', 'george']
index = 0
while (index < len(nameList)):
  print(nameList[index])
  index = index + 1`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll see how to iterate over a list using a <code>while</code> loop with an index variable.</p><p>This approach is similar to iterating over strings, but now we're working with a list of items.</p>",
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
      explanation: "<p>This line creates a list of four strings (names) and assigns it to <code>nameList</code>.</p>",
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
      explanation: "<p>We initialize the <code>index</code> variable to <code>0</code>. This will be used to access each item in the list, starting from position 0.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']" },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" }
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
      explanation: "<p>Test the condition: <code>index &lt; len(nameList)</code>. The <code>len()</code> function returns the length of the list, which is <code>4</code>.</p><p>Since <code>index</code> is <code>0</code>, and 0 &lt; 4, the condition is <code>True</code>. We enter the loop.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 0 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
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
      lineNumber: 3,
      explanation: "<p>We use <code>nameList[index]</code> to access the item at position <code>0</code>, which is <code>'kramer'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 0 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
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
      explanation: "<p>Increment <code>index</code> by 1. Now <code>index</code> is <code>1</code>. Back to testing the condition.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 0 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["kramer"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Test the condition: <code>1 &lt; 4</code> is <code>True</code>. Continue with the next iteration.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 1 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["kramer"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Access <code>nameList[1]</code>, which is <code>'jerry'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 1 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["kramer"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Increment <code>index</code> to <code>2</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 1 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Test: <code>2 &lt; 4</code> is <code>True</code>. Continue.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 2 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Access <code>nameList[2]</code>, which is <code>'elaine'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 2 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Increment <code>index</code> to <code>3</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 2 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Test: <code>3 &lt; 4</code> is <code>True</code>. One more iteration.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 3 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Access <code>nameList[3]</code>, which is <code>'george'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 3 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Increment <code>index</code> to <code>4</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 3 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine", "george"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Test the condition: <code>4 &lt; 4</code> is <code>False</code>. The loop exits.</p><p><strong>Key takeaway:</strong> Using a <code>while</code> loop with an index lets you iterate over a list by position. You access items using <code>list[index]</code>, and <code>len(list)</code> tells you when to stop.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "nameList": "['kramer', 'jerry', 'elaine', 'george']", "index": 4 },
          connections: [
            { from: "nameList", toValue: "['kramer', 'jerry', 'elaine', 'george']" },
            { from: "index", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine", "george"]
        }
      ]
    }
  ]
};
