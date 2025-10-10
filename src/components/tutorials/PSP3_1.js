export default {
  code: `# Initialise the loop control variable.
a = 0

# Test the loop control variable.
while a < 10:
  print(a)

  # Update the loop control variable.
  a = a + 1

print('done')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll trace through a <code>while</code> loop to understand how it works.</p><p>A while loop has three key components: <strong>initialisation</strong> of the loop control variable, <strong>testing</strong> the condition, and <strong>updating</strong> the loop control variable. Let's see how these work together.</p>",
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
      lineNumber: 1,
      explanation: "<p><strong>Step 1: Initialise the loop control variable.</strong></p><p>This line assigns the value <code>0</code> to the variable <code>a</code>. This is our loop control variable that will determine when the loop stops.</p>",
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
      lineNumber: 4,
      explanation: "<p><strong>Step 2: Test the loop control variable.</strong></p><p>Now we evaluate the condition <code>a &lt; 10</code>. Since <code>a</code> is <code>0</code>, and 0 is less than 10, this condition is <code>True</code>. We will enter the loop body.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 0, highlight: true } },
          connections: [
            { from: "a", toValue: "0" }
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
      explanation: "<p>This line prints the current value of <code>a</code>, which is <code>0</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 0 },
          connections: [
            { from: "a", toValue: "0" }
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
      explanation: "<p><strong>Step 3: Update the loop control variable.</strong></p><p>This line updates <code>a</code> by adding 1 to its current value. So <code>a</code> becomes <code>1</code>.</p><p>After updating, we go back to test the condition again.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 0 },
          connections: [
            { from: "a", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: [0]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Back to the condition: <code>a &lt; 10</code>. Since <code>a</code> is now <code>1</code>, and 1 is less than 10, the condition is still <code>True</code>. We continue with another iteration.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 1, highlight: true } },
          connections: [
            { from: "a", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: [0]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>1</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 1 },
          connections: [
            { from: "a", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: [0]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>2</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 1 },
          connections: [
            { from: "a", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: [0, 1]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>2</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 2, highlight: true } },
          connections: [
            { from: "a", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: [0, 1]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>2</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 2 },
          connections: [
            { from: "a", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: [0, 1]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>3</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 2 },
          connections: [
            { from: "a", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>3</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 3, highlight: true } },
          connections: [
            { from: "a", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>3</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 3 },
          connections: [
            { from: "a", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>4</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 3 },
          connections: [
            { from: "a", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>4</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 4, highlight: true } },
          connections: [
            { from: "a", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>4</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 4 },
          connections: [
            { from: "a", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>5</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 4 },
          connections: [
            { from: "a", toValue: "4" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>5</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 5, highlight: true } },
          connections: [
            { from: "a", toValue: "5" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>5</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 5 },
          connections: [
            { from: "a", toValue: "5" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>6</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 5 },
          connections: [
            { from: "a", toValue: "5" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>6</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 6, highlight: true } },
          connections: [
            { from: "a", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>6</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 6 },
          connections: [
            { from: "a", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>7</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 6 },
          connections: [
            { from: "a", toValue: "6" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>7</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 7, highlight: true } },
          connections: [
            { from: "a", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>7</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 7 },
          connections: [
            { from: "a", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>8</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 7 },
          connections: [
            { from: "a", toValue: "7" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>8</code>, the condition is <code>True</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 8, highlight: true } },
          connections: [
            { from: "a", toValue: "8" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the current value of <code>a</code>, which is <code>8</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 8 },
          connections: [
            { from: "a", toValue: "8" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>9</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 8 },
          connections: [
            { from: "a", toValue: "8" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition: <code>a &lt; 10</code>. Since <code>a</code> is <code>9</code>, the condition is <code>True</code>, so we enter the loop one more time.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 9, highlight: true } },
          connections: [
            { from: "a", toValue: "9" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print <code>9</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": 9 },
          connections: [
            { from: "a", toValue: "9" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Update <code>a</code> to <code>10</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "a": 9 },
          connections: [
            { from: "a", toValue: "9" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Test the condition again: <code>a &lt; 10</code>. Since <code>a</code> is now <code>10</code>, and 10 is NOT less than 10, the condition is <code>False</code>.</p><p>The loop exits, and we move to the next statement after the loop.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: 10, highlight: true } },
          connections: [
            { from: "a", toValue: "10" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>This line prints <code>'done'</code> to indicate the loop has finished.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Memory",
          values: { "a": 10 },
          connections: [
            { from: "a", toValue: "10" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>The program ends. The loop executed exactly 10 times (when <code>a</code> was 0 through 9), printing each value before incrementing.</p><p><strong>Key takeaway:</strong> Always remember the three steps of a while loop: initialise, test, and update!</p>",
      boxes: [
        {
          title: "Memory",
          values: { "a": 10 },
          connections: [
            { from: "a", toValue: "10" }
          ]
        },
        {
          title: "Output",
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "done"]
        }
      ]
    }
  ]
};
