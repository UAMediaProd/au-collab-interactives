export default {
  code: `new_variable = 25
another_variable = 30
new_variable = 10
print(new_variable)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this interactive, we will outline a systematic approach for solving problems of the sort where a block of code is given and you are asked to figure out what output it will generate.</p><p>First, lets specify the approach. Then, we’ll go through a few examples and apply it properly. Lets begin. ​</p>",
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
      explanation: "<p><strong>Process one line at a time.</strong></p><p>You have to think like the computer – one line at a time, and in logical order. Make sure that you always understand which line will be executed next. Do not get lost or forget where you are up to. If this happens, you might have to start over, so keep track with a pencil.</p> ",
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
      explanation: `<p><strong>Take note of any variable assignments in the current line. Write them down.</strong></p><p>Keep a piece of scrap paper handy. Each time you process a line of code, write down any new variables introduced in that line, or any changes to an existing variable. This is to keep an account of the current state of computer memory.</p><p><em>The highlighted line of code represents the next line to be executed.</em></p>`,
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
      lineNumber: 0,
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 25 },
          connections: [
            { from: "new_variable", toValue: "25" }
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
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 25, "another_variable": 30 },
          connections: [
            { from: "new_variable", toValue: "25" },
            { from: "another_variable", toValue: "30" }
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
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "_0": { value: 10, named: false }, "new_variable": 25, "another_variable": 30 },
          connections: [
            { from: "new_variable", toValue: "10" },
            { from: "another_variable", toValue: "30" }
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
      explanation: "<p><strong>If there is a print statement, write down in a separate area any output generated.</strong></p><p>Whenever you encounter a print statement, write down what will be displayed in an output area, just like the computer does. When the program ends, this area contains the final answer to the question.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "_0": { value: 10, named: false }, "new_variable": 25, "another_variable": 30 },
          connections: [
            { from: "new_variable", toValue: "10" },
            { from: "another_variable", toValue: "30" }
          ]
        },
        {
          title: "Output",
          values: ["10"]
        }
      ]
    }
  ]
};
