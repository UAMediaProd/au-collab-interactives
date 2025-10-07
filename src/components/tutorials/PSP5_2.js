export default {
  code: `def get_maximum(no1, no2, no3):
  maxValue = no1
  if no2 > maxValue:
    maxValue = no2
  if no3 > maxValue:
    maxValue = no3
  return maxValue

num1 = 4
num2 = 7
num3 = 1

result = get_maximum(num1, num2, num3)
print('Maximum is: ', result)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates a function that finds the maximum value among three numbers.</p><p>We'll trace through the function execution step by step, seeing how parameters receive values and how the function logic works.</p>",
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
      explanation: "<p>This line defines a function named <code>get_maximum</code> with three parameters: <code>no1</code>, <code>no2</code>, and <code>no3</code>.</p><p>The function definition is stored in memory, ready to be called later.</p>",
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
      lineNumber: 9,
      explanation: "<p>Now we start executing the main program. Assign <code>4</code> to <code>num1</code>.</p>",
      highlightLines: [8],
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
      lineNumber: 10,
      explanation: "<p>Assign <code>7</code> to <code>num2</code>.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4 },
          connections: [
            { from: "num1", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 11,
      explanation: "<p>Assign <code>1</code> to <code>num3</code>.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 7 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 13,
      explanation: "<p>Call the function <code>get_maximum</code> with arguments <code>num1</code>, <code>num2</code>, and <code>num3</code>.</p><p>The function will execute with <code>no1 = 4</code>, <code>no2 = 7</code>, and <code>no3 = 1</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 7, "num3": 1 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" }
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
      explanation: "<p>Jump to the function definition. The parameters <code>no1</code>, <code>no2</code>, and <code>no3</code> now have the values <code>4</code>, <code>7</code>, and <code>1</code> respectively.</p>",
      highlightLines: [12, 0],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" }
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
      explanation: "<p>Initialize <code>maxValue</code> with the value of <code>no1</code>, which is <code>4</code>. This is our starting assumption for the maximum value.</p>",
      highlightLines: [12, 1],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" }
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
      explanation: "<p>Test the condition: <code>no2 > maxValue</code>. Since <code>no2</code> is <code>7</code> and <code>maxValue</code> is <code>4</code>, the condition is <code>True</code> (7 > 4).</p>",
      highlightLines: [12, 2],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false },
            "maxValue": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" },
            { from: "maxValue", toValue: "4" }
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
      explanation: "<p>Since the condition is <code>True</code>, update <code>maxValue</code> to <code>7</code> (the value of <code>no2</code>).</p>",
      highlightLines: [12, 3],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false },
            "maxValue": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" },
            { from: "maxValue", toValue: "4" }
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
      explanation: "<p>Test the condition: <code>no3 > maxValue</code>. Since <code>no3</code> is <code>1</code> and <code>maxValue</code> is now <code>7</code>, the condition is <code>False</code> (1 is not greater than 7).</p>",
      highlightLines: [12, 4],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false },
            "maxValue": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" },
            { from: "maxValue", toValue: "7" }
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
      explanation: "<p>Since the condition was <code>False</code>, we skip the code block and move to the return statement.</p><p>Return <code>maxValue</code>, which is <code>7</code>. This value goes back to line 13 where the function was called.</p>",
      highlightLines: [12, 6],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false },
            "maxValue": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" },
            { from: "maxValue", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 13,
      explanation: "<p>The function has returned <code>7</code>, which is now assigned to <code>result</code>.</p><p>The function's local variables (<code>no1</code>, <code>no2</code>, <code>no3</code>, <code>maxValue</code>) are removed from memory.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "no1": { value: "", valued: false },
            "no2": { value: "", valued: false },
            "no3": { value: "", valued: false },
            "maxValue": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "no1", toValue: "4" },
            { from: "no2", toValue: "7" },
            { from: "no3", toValue: "1" },
            { from: "maxValue", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 14,
      explanation: "<p>Print the text <code>'Maximum is: '</code> followed by the value of <code>result</code>, which is <code>7</code>.</p>",
      highlightLines: [13],
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "result": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "result", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 14,
      explanation: "<p>The program ends.</p><p><strong>Key takeaway:</strong> This function demonstrates a common pattern for finding the maximum value—start with one value as the assumed maximum, then compare each other value and update if a larger one is found.</p>",
      boxes: [
        {
          title: "Memory",
          values: { 
            "num1": 4, 
            "num2": 7, 
            "num3": 1,
            "result": { value: "", valued: false }
          },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "7" },
            { from: "num3", toValue: "1" },
            { from: "result", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: ["Maximum is:  7"]
        }
      ]
    }
  ]
};
