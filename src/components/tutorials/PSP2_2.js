export default {
  code: `import random

direction = random.randint(1, 3)
print('Direction is:', direction)

if direction == 1:
  print('Robot moving forward!')
elif direction == 2:
  print('Robot moving backwards!')
elif direction == 3:
  print('Robot standing still!')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll trace through code that uses the <code>random</code> module to generate random numbers and conditional statements to control program flow.</p><p>We'll follow the same systematic approach: process one line at a time, track variable assignments in memory, and record any output generated.</p>",
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
      explanation: "<p>This line imports the <code>random</code> module, which provides functions for generating random numbers. After this line executes, we have access to the <code>random</code> module's functions.</p>",
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
      explanation: "<p>This line calls <code>random.randint(1, 3)</code> which generates a random integer between 1 and 3 (inclusive). The result is assigned to the variable <code>direction</code>.</p><p>For this example, let's say the random number generated is <code>2</code>.</p>",
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
      lineNumber: 3,
      explanation: "<p>This line prints the text <code>'Direction is:'</code> followed by the value of <code>direction</code>. Since <code>direction</code> is <code>2</code>, this will output <code>Direction is: 2</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "direction": 2 },
          connections: [
            { from: "direction", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Now we evaluate the condition <code>direction == 1</code>. Since <code>direction</code> is <code>2</code>, this condition is <code>False</code>. We skip the code block under it and move to the next <code>elif</code> statement.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "direction": 2 },
          connections: [
            { from: "direction", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["Direction is: 2"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>Now we evaluate the condition <code>direction == 2</code>. Since <code>direction</code> is <code>2</code>, this condition is <code>True</code>. We will execute the code block under this condition.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "direction": 2 },
          connections: [
            { from: "direction", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["Direction is: 2"]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Since the condition is <code>True</code>, we execute <code>print('Robot moving backwards!')</code>. This will output the string <code>'Robot moving backwards!'</code>.</p><p>Once this code block finishes, we skip all remaining <code>elif</code> statements and move to the end of the conditional structure.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "direction": 2 },
          connections: [
            { from: "direction", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["Direction is: 2"]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>There are no more statements to execute, so the program ends. The final output shows both print statements that were executed.</p><p><strong>Note:</strong> If you run this code multiple times, you might get different results because <code>random.randint(1, 3)</code> generates a different random number each time!</p>",
      boxes: [
        {
          title: "Memory",
          values: { "direction": 2 },
          connections: [
            { from: "direction", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["Direction is: 2", "Robot moving backwards!"]
        }
      ]
    }
  ]
};
