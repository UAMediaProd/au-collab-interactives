export default {
  code: `my_list = [7, 8, 9, 10]

print(my_list)

my_list.append(11)
print(my_list)

my_list.append('twelve')
print(my_list)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn about list methods, specifically the <code>.append()</code> method.</p><p>Unlike string methods, list methods like <code>.append()</code> <strong>do modify</strong> the original list.</p>",
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
      explanation: "<p>This line creates a list with four integers and assigns it to <code>my_list</code>.</p>",
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
          values: { "my_list": [7, 8, 9, 10] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10] }
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
      explanation: "<p>The <code>.append()</code> method adds an item to the end of the list. Here, we're adding <code>11</code> to <code>my_list</code>.</p><p><strong>Important:</strong> Unlike string methods, <code>.append()</code> modifies the list directly. We don't need to reassign it!</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [7, 8, 9, 10] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10] }
          ]
        },
        {
          title: "Output",
          values: ["[7, 8, 9, 10]"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print <code>my_list</code> again to see the change. Notice that <code>11</code> has been added to the end.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [7, 8, 9, 10, 11] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10, 11] }
          ]
        },
        {
          title: "Output",
          values: ["[7, 8, 9, 10]"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>We can append any type of data to a list. Here, we're adding the string <code>'twelve'</code> to the list.</p><p>Lists can contain mixed data types—numbers, strings, and other objects can all coexist in the same list.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [7, 8, 9, 10, 11] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10, 11] }
          ]
        },
        {
          title: "Output",
          values: ["[7, 8, 9, 10]", "[7, 8, 9, 10, 11]"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Print <code>my_list</code> one more time. Now it contains five integers and one string.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [7, 8, 9, 10, 11, "'twelve'"] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10, 11, "'twelve'"] }
          ]
        },
        {
          title: "Output",
          values: ["[7, 8, 9, 10]", "[7, 8, 9, 10, 11]"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> List methods like <code>.append()</code> modify the list in place. This is different from string methods, which return new strings without changing the original.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "my_list": [7, 8, 9, 10, 11, "'twelve'"] },
          connections: [
            { from: "my_list", toValue: [7, 8, 9, 10, 11, "'twelve'"] }
          ]
        },
        {
          title: "Output",
          values: ["[7, 8, 9, 10]", "[7, 8, 9, 10, 11]", "[7, 8, 9, 10, 11, 'twelve']"]
        }
      ]
    }
  ]
};
