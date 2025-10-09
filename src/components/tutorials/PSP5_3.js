export default {
  code: `def display_info():
  print('This is an example of a function that')
  print('just prints some text and that\\'s about it...')


display_info()`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates a function that doesn't return a value—it simply performs an action (printing text).</p><p>Not all functions need to return something; some just execute code and finish.</p>",
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
      explanation: "<p>This line defines a function named <code>display_info</code> with no parameters.</p><p>The function definition is stored in memory, ready to be called.</p>",
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
      lineNumber: 5,
      explanation: "<p>Call the function <code>display_info()</code>. Since it has no parameters, we don't pass any arguments.</p>",
      highlightLines: [5],
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
      explanation: "<p>Jump to the function definition and begin executing the function body.</p>",
      highlightLines: [0, 5],
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
      explanation: "<p>Print the first line of text: <code>'This is an example of a function that'</code>.</p>",
      highlightLines: [1, 5],
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
      explanation: "<p>Print the second line of text: <code>'just prints some text and that's about it...'</code>.</p><p>Note the escaped apostrophe (<code>\\'</code>) in the string.</p>",
      highlightLines: [2, 5],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: ["This is an example of a function that"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>The function has finished executing. Since there's no <code>return</code> statement, the function doesn't return a value.</p><p>Control returns to where the function was called.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: ["This is an example of a function that", "just prints some text and that's about it..."]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> Functions don't always need to return a value. Some functions are designed to perform actions (like printing, writing to files, or updating data) without returning anything.</p>",
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: ["This is an example of a function that", "just prints some text and that's about it..."]
        }
      ]
    }
  ]
};
