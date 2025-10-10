export default {
  code: `a = 3
while a >= 0:
  print('In while loop', a)
  a -= 1

print('The end!')`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>Let's trace through this code to determine its output.</p><p>This while loop is slightly different from previous examples—it counts <em>down</em> instead of up. Pay attention to the condition and how the variable is updated.</p>",
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
      explanation: "<p>First, we initialise the loop control variable <code>a</code> to <code>3</code>.</p>",
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
      explanation: "<p>Now we test the condition: <code>a &gt;= 0</code>. Since <code>a</code> is <code>3</code>, and 3 is greater than or equal to 0, the condition is <code>True</code>. We enter the loop body.</p>",
      highlightLines: [1],
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
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>This line prints <code>'In while loop'</code> followed by the value of <code>a</code>, which is <code>3</code>. The output will be <code>In while loop 3</code>.</p>",
      highlightLines: [2],
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
          values: []
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>This line uses the <code>-=</code> operator, which subtracts 1 from <code>a</code>. So <code>a -= 1</code> is equivalent to <code>a = a - 1</code>. Now <code>a</code> is <code>2</code>. We go back to test the condition.</p>",
      highlightLines: [3],
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
          values: ["In while loop 3"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Test the condition: <code>a &gt;= 0</code>. Since <code>a</code> is <code>2</code>, and 2 is greater than or equal to 0, the condition is <code>True</code>. We continue with another iteration.</p>",
      highlightLines: [1],
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
          values: ["In while loop 3"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'In while loop'</code> and the current value of <code>a</code>, which is <code>2</code>. The output will be <code>In while loop 2</code>.</p>",
      highlightLines: [2],
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
          values: ["In while loop 3"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Subtract 1 from <code>a</code>. Now <code>a</code> is <code>1</code>. Back to testing the condition.</p>",
      highlightLines: [3],
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
          values: ["In while loop 3", "In while loop 2"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Test the condition: <code>a &gt;= 0</code>. Since <code>a</code> is <code>1</code>, and 1 is greater than or equal to 0, the condition is <code>True</code>. We continue.</p>",
      highlightLines: [1],
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
          values: ["In while loop 3", "In while loop 2"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'In while loop'</code> and <code>a</code>, which is <code>1</code>. The output will be <code>In while loop 1</code>.</p>",
      highlightLines: [2],
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
          values: ["In while loop 3", "In while loop 2"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Subtract 1 from <code>a</code>. Now <code>a</code> is <code>0</code>. Back to testing the condition.</p>",
      highlightLines: [3],
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
          values: ["In while loop 3", "In while loop 2", "In while loop 1"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Test the condition: <code>a &gt;= 0</code>. Since <code>a</code> is <code>0</code>, and 0 is equal to 0, the condition is <code>True</code>. The loop continues one more time.</p><p><strong>Important:</strong> The condition is <code>&gt;=</code> (greater than <em>or equal to</em>), so 0 satisfies the condition!</p>",
      highlightLines: [1],
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
          values: ["In while loop 3", "In while loop 2", "In while loop 1"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Print <code>'In while loop'</code> and <code>a</code>, which is <code>0</code>. The output will be <code>In while loop 0</code>.</p>",
      highlightLines: [2],
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
          values: ["In while loop 3", "In while loop 2", "In while loop 1"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Subtract 1 from <code>a</code>. Now <code>a</code> is <code>-1</code>. Back to testing the condition.</p>",
      highlightLines: [3],
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
          values: ["In while loop 3", "In while loop 2", "In while loop 1", "In while loop 0"]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Test the condition: <code>a &gt;= 0</code>. Since <code>a</code> is now <code>-1</code>, and -1 is NOT greater than or equal to 0, the condition is <code>False</code>.</p><p>The loop exits, and we move to the next statement after the loop.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "a": { value: -1, highlight: true } },
          connections: [
            { from: "a", toValue: "-1" }
          ]
        },
        {
          title: "Output",
          values: ["In while loop 3", "In while loop 2", "In while loop 1", "In while loop 0"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>This line prints <code>'The end!'</code>. This statement is outside the loop, so it executes once after the loop finishes.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "a": -1 },
          connections: [
            { from: "a", toValue: "-1" }
          ]
        },
        {
          title: "Output",
          values: ["In while loop 3", "In while loop 2", "In while loop 1", "In while loop 0"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>The program ends. The loop executed 4 times (when <code>a</code> was 3, 2, 1, and 0), counting down until <code>a</code> became negative.</p><p>The complete output is shown in the Output box.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "a": -1 },
          connections: [
            { from: "a", toValue: "-1" }
          ]
        },
        {
          title: "Output",
          values: ["In while loop 3", "In while loop 2", "In while loop 1", "In while loop 0", "The end!"]
        }
      ]
    }
  ]
};
