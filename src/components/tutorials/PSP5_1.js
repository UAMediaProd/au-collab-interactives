export default {
  code: `def sum_numbers(num1, num2):
  total = num1 * num2
  return total


no1 = 5
no2 = 10

result = sum_numbers(no1, no2)
print('Result is: ', result)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn about <strong>functions</strong>—reusable blocks of code that perform specific tasks.</p><p>Functions help us organise code and avoid repetition. We'll see how to define a function and then call it.</p>",
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
      explanation: "<p>This line defines a function named <code>sum_numbers</code>. The <code>def</code> keyword tells Python we're defining a function.</p><p>The function has two <strong>parameters</strong>: <code>num1</code> and <code>num2</code>. Parameters are placeholders for values that will be passed to the function when it's called.</p>",
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
      explanation: "<p>This line is inside the function (notice the indentation). It calculates <code>num1 * num2</code> and stores the result in a variable called <code>total</code>.</p><p><strong>Note:</strong> This code doesn't execute yet—we're just defining what the function will do when it's called.</p>",
      highlightLines: [1],
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
      explanation: "<p>The <code>return</code> statement sends the value of <code>total</code> back to wherever the function was called from.</p><p>The function definition is now complete. Python has stored this function in memory, ready to be used.</p>",
      highlightLines: [2],
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
      explanation: "<p>Now we start executing the main program. This line assigns <code>5</code> to the variable <code>no1</code>.</p>",
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
      lineNumber: 6,
      explanation: "<p>This line assigns <code>10</code> to the variable <code>no2</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "no1": 5 },
          connections: [
            { from: "no1", toValue: "5" }
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
      explanation: "<p>Now we <strong>call</strong> the function <code>sum_numbers</code> with <strong>arguments</strong> <code>no1</code> and <code>no2</code>.</p><p><strong>Important distinction:</strong> <code>num1</code> and <code>num2</code> are <em>parameters</em> (in the function definition). <code>no1</code> and <code>no2</code> are <em>arguments</em> (the actual values we pass when calling).</p><p>The function will execute with <code>num1 = 5</code> and <code>num2 = 10</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "no1": 5, "no2": 10 },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>We jump to the function definition. The parameters <code>num1</code> and <code>num2</code> now have the values <code>5</code> and <code>10</code> respectively.</p>",
      highlightLines: [8, 0],
      boxes: [
        {
          title: "Memory",
          values: { 
            "no1": 5, 
            "no2": 10, 
            "num1": {value: "", valued: false }, 
            "num2": {value: "", valued: false } 
          },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "num1", toValue: "5" },
            { from: "num2", toValue: "10" }
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
      explanation: "<p>Calculate <code>num1 * num2</code>, which is <code>5 * 10 = 50</code>. Store this in <code>total</code>.</p>",
      highlightLines: [8, 1],
      boxes: [
        {
          title: "Memory",
          values: { 
            "no1": 5, 
            "no2": 10, 
            "num1": {value: "", valued: false }, 
            "num2": {value: "", valued: false } 
          },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "num1", toValue: "5" },
            { from: "num2", toValue: "10" }
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
      explanation: "<p>Return the value <code>50</code>. This value goes back to line 8 where the function was called.</p>",
      highlightLines: [8, 2],
      boxes: [
        {
          title: "Memory",
          values: { 
            "no1": 5, 
            "no2": 10, 
            "num1": {value: "", valued: false }, 
            "num2": {value: "", valued: false },
            "total": 50 
          },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "num1", toValue: "5" },
            { from: "num2", toValue: "10" },
            { from: "total", toValue: "50" }
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
      explanation: "<p>The function has returned <code>50</code>, which is now assigned to the variable <code>result</code>.</p><p>The function's local variables (<code>num1</code>, <code>num2</code>, <code>total</code>) are removed from memory after the function finishes.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { 
            "no1": 5, 
            "no2": 10, 
            "num1": {value: "", valued: false }, 
            "num2": {value: "", valued: false },
            "total": 50 ,
            "result": {value: "", valued: false },

          },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "num1", toValue: "5" },
            { from: "num2", toValue: "10" },
            { from: "total", toValue: "50" },
            { from: "result", toValue: "50" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "<p>Print the text <code>'Result is: '</code> followed by the value of <code>result</code>, which is <code>50</code>.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "no1": 5, "no2": 10, "result": 50 },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "result", toValue: "50" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "<p>The program ends.</p><p><strong>Key concepts:</strong></p><ul><li><strong>Parameters</strong> are variables in the function definition (e.g., <code>num1</code>, <code>num2</code>)</li><li><strong>Arguments</strong> are the actual values passed when calling the function (e.g., <code>no1</code>, <code>no2</code>)</li><li>Functions can <code>return</code> values back to the caller</li><li>Local variables inside functions are removed from memory after the function finishes</li></ul>",
      boxes: [
        {
          title: "Memory",
          values: { "no1": 5, "no2": 10, "result": 50 },
          connections: [
            { from: "no1", toValue: "5" },
            { from: "no2", toValue: "10" },
            { from: "result", toValue: "50" }
          ]
        },
        {
          title: "Output",
          values: ["Result is:  50"]
        }
      ]
    }
  ]
};
