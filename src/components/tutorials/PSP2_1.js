export default {
  code: `num1 = 2
num2 = 4
if num1 == num2:
  print ('Jake')
elif num2 < num1:
  print ('Peralta')
elif num2 > num1:
  print ('Captain')
  print ('Holt')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this interactive, we will outline a systematic approach for solving problems of the sort where a block of code is given and you are asked to figure out what output it will generate.</p><p>First, let's specify the approach. Then, we'll go through an example with conditional statements and apply it properly. Let's begin.</p>",
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
      explanation: "<p><strong>Process one line at a time.</strong></p><p>You have to think like the computer – one line at a time, and in logical order. Make sure that you always understand which line will be executed next. Do not get lost or forget where you are up to. If this happens, you might have to start over, so keep track with a pencil.</p>",
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
      explanation: "<p>This line will assign the value <code>2</code> to the variable <code>num1</code>.</p>",
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
      explanation: "<p>This line will assign the value <code>4</code> to the variable <code>num2</code>.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2 },
          connections: [
            { from: "num1", toValue: "2" }
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
      explanation: "<p><strong>For conditional statements, evaluate the condition first.</strong></p><p>This line is an <code>if</code> statement. We need to check if <code>num1 == num2</code>. Since <code>num1</code> is <code>2</code> and <code>num2</code> is <code>4</code>, this condition is <code>False</code>. We skip the code block under it and move to the next <code>elif</code> statement.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
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
      explanation: "<p>Now we evaluate the condition <code>num2 &lt; num1</code>. Since <code>num2</code> is <code>4</code> and <code>num1</code> is <code>2</code>, this condition is <code>False</code> (4 is not less than 2). We skip this code block too and move to the next <code>elif</code> statement.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>Now we evaluate the condition <code>num2 > num1</code>. Since <code>num2</code> is <code>4</code> and <code>num1</code> is <code>2</code>, this condition is <code>True</code> (4 is greater than 2).</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>Since the condition is <code>True</code>, we will execute the code block under this condition.</p><p><strong>If there is a print statement, write down in a separate area any output generated.</strong></p><p>The next line is <code>print('Captain')</code>. This will output the string <code>'Captain'</code>.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>The next line is <code>print('Holt')</code>. This will output the string <code>'Holt'</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: ["Captain"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>There are no more statements in the code, so the program ends. The final output contains both lines that were printed.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 4 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: ["Captain", "Holt"]
        }
      ]
    }
  ]
};
