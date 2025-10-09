export default {
  code: `my_list = [1, 2, 3, 4, 5, 6, 7]

print(my_list)

my_list.remove(4)
print(my_list)

my_list.remove(7)
print(my_list)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn about the <code>.remove()</code> method, which removes a specific value from a list.</p><p>Like <code>.append()</code>, the <code>.remove()</code> method modifies the list in place.</p>",
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
      explanation: "<p>This line creates a list with seven integers and assigns it to <code>my_list</code>.</p>",
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
      explanation: "<p>Print the current contents of <code>my_list</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 4, 5, 6, 7] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 4, 5, 6, 7] }
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
      explanation: "<p>The <code>.remove(4)</code> method searches for the value <code>4</code> in the list and removes the first occurrence of it.</p><p><strong>Important:</strong> <code>.remove()</code> takes a <em>value</em> as an argument, not an index. If the value appears multiple times in the list, only the <em>first</em> occurrence will be removed.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 4, 5, 6, 7] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 4, 5, 6, 7] }
          ]
        },
        {
          title: "Output",
          values: ["[1, 2, 3, 4, 5, 6, 7]"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print <code>my_list</code> again. Notice that the value <code>4</code> has been removed from the list.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 5, 6, 7] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 5, 6, 7] }
          ]
        },
        {
          title: "Output",
          values: ["[1, 2, 3, 4, 5, 6, 7]"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>Now we remove the value <code>7</code> from the list. Again, <code>.remove()</code> modifies the list directly.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 5, 6, 7] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 5, 6, 7] }
          ]
        },
        {
          title: "Output",
          values: ["[1, 2, 3, 4, 5, 6, 7]", "[1, 2, 3, 5, 6, 7]"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Print <code>my_list</code> one final time. The value <code>7</code> has been removed.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 5, 6] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 5, 6] }
          ]
        },
        {
          title: "Output",
          values: ["[1, 2, 3, 4, 5, 6, 7]", "[1, 2, 3, 5, 6, 7]"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> The <code>.remove()</code> method removes only the <em>first</em> occurrence of a specified value from the list. If you need to remove all occurrences, you would need to call <code>.remove()</code> multiple times. It modifies the list in place and doesn't return anything.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [1, 2, 3, 5, 6] },
          connections: [
            { from: "my_list", toValue: [1, 2, 3, 5, 6] }
          ]
        },
        {
          title: "Output",
          values: ["[1, 2, 3, 4, 5, 6, 7]", "[1, 2, 3, 5, 6, 7]", "[1, 2, 3, 5, 6]"]
        }
      ]
    }
  ]
};
