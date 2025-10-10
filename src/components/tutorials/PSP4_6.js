export default {
  code: `name_list = ['kramer', 'jerry', 'elaine']
index = 0
while (index < len(name_list)):
  print(name_list[index])
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
      explanation: "<p>This line creates a list of three strings (names) and assigns it to <code>name_list</code>.</p>",
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
          values: { "name_list": { value: ["'kramer'", "'jerry'", "'elaine'"], highlight: true } },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] }
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
      explanation: "<p>Test the condition: <code>index &lt; len(name_list)</code>. The <code>len()</code> function returns the length of the list, which is <code>3</code>.</p><p>Since <code>index</code> is <code>0</code>, and 0 &lt; 3, the condition is <code>True</code>. We enter the loop.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": { value: 0, highlight: true } },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>We use <code>name_list[index]</code> to access the item at position <code>0</code>, which is <code>'kramer'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 0 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 0 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>Test the condition: <code>1 &lt; 3</code> is <code>True</code>. Continue with the next iteration.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": { value: 1, highlight: true } },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>Access <code>name_list[1]</code>, which is <code>'jerry'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 1 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 1 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>Test: <code>2 &lt; 3</code> is <code>True</code>. Continue.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": { value: 2, highlight: true } },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>Access <code>name_list[2]</code>, which is <code>'elaine'</code>. Print it.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 2 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": 2 },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
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
      explanation: "<p>Test the condition: <code>3 &lt; 3</code> is <code>False</code>. The loop exits.</p><p><strong>Key takeaway:</strong> Using a <code>while</code> loop with an index lets you iterate over a list by position. You access items using <code>list[index]</code>, and <code>len(list)</code> tells you when to stop.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "name_list": ["'kramer'", "'jerry'", "'elaine'"], "index": { value: 3, highlight: true } },
          connections: [
            { from: "name_list", toValue: ["'kramer'", "'jerry'", "'elaine'"] },
            { from: "index", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["kramer", "jerry", "elaine"]
        }
      ]
    }
  ]
};
