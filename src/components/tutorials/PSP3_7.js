export default {
  code: `for num1 in range(1,5):
  print(num1, end=' ')
  for num2 in range(0,num1):
    print("*", end='')
  print()`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>In this tutorial, we'll learn about <strong>nested loops</strong>—loops inside other loops.</p><p>This code has an outer loop that iterates through <code>range(1, 5)</code> (1, 2, 3, 4), and for each iteration, an inner loop runs a different number of times.</p><p><strong>Note:</strong> <code>end=' '</code> and <code>end=''</code> prevent the print statement from moving to a new line.</p>",
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
      explanation: "<p><strong>Outer loop - First iteration:</strong> <code>num1</code> is assigned <code>1</code>.</p>",
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
      explanation: "<p>Print <code>num1</code> (which is <code>1</code>) followed by a space. The <code>end=' '</code> parameter means we stay on the same line.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": { value: 1, highlight: true } },
          connections: [
            { from: "num1", toValue: "1" }
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
      explanation: "<p><strong>Inner loop starts:</strong> <code>range(0, num1)</code> becomes <code>range(0, 1)</code>, which generates just <code>0</code>.</p><p>First (and only) iteration of inner loop: <code>num2</code> is assigned <code>0</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 1 },
          connections: [
            { from: "num1", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print <code>\"*\"</code> without moving to a new line.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 1, "num2": { value: 0, highlight: true } },
          connections: [
            { from: "num1", toValue: "1" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 "]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>The inner loop has finished. This <code>print()</code> with no arguments moves to a new line.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 1, "num2": 0 },
          connections: [
            { from: "num1", toValue: "1" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Outer loop - Second iteration:</strong> <code>num1</code> is assigned <code>2</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 1, "num2": 0 },
          connections: [
            { from: "num1", toValue: "1" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", ""]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print <code>num1</code> (which is <code>2</code>) followed by a space.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": { value: 2, highlight: true }, "num2": 0 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", ""]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p><strong>Inner loop starts:</strong> <code>range(0, 2)</code> generates <code>0, 1</code>. The inner loop will run twice.</p><p>First iteration: <code>num2</code> is assigned <code>0</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 0 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 0 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Second iteration of inner loop: <code>num2</code> is assigned <code>1</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 0 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 *"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": { value: 1, highlight: true } },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 *"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>The inner loop has finished. Move to a new line.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 1 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Outer loop - Third iteration:</strong> <code>num1</code> is assigned <code>3</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 2, "num2": 1 },
          connections: [
            { from: "num1", toValue: "2" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", ""]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print <code>3</code> followed by a space.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": { value: 3, highlight: true }, "num2": 1 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", ""]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p><strong>Inner loop starts:</strong> <code>range(0, 3)</code> generates <code>0, 1, 2</code>. The inner loop will run three times.</p><p>First iteration: <code>num2</code> is assigned <code>0</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": 1 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": { value: 0, highlight: true } },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Second iteration of inner loop: <code>num2</code> is assigned <code>1</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": 0 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 *"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": { value: 1, highlight: true } },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 *"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Third iteration of inner loop: <code>num2</code> is assigned <code>2</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": 1 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 **"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": { value: 2, highlight: true } },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 **"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>The inner loop has finished. Move to a new line.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": 2 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***"]
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p><strong>Outer loop - Fourth iteration:</strong> <code>num1</code> is assigned <code>4</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 3, "num2": 2 },
          connections: [
            { from: "num1", toValue: "3" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", ""]
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Print <code>4</code> followed by a space.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "num1": { value: 4, highlight: true }, "num2": 2 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", ""]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p><strong>Inner loop starts:</strong> <code>range(0, 4)</code> generates <code>0, 1, 2, 3</code>. The inner loop will run four times.</p><p>First iteration: <code>num2</code> is assigned <code>0</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 2 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 "]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": { value: 0, highlight: true } },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 "]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Second iteration of inner loop: <code>num2</code> is assigned <code>1</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 0 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "0" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 *"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": { value: 1, highlight: true } },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 *"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Third iteration of inner loop: <code>num2</code> is assigned <code>2</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 1 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "1" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 **"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": { value: 2, highlight: true } },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 **"]
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Fourth iteration of inner loop: <code>num2</code> is assigned <code>3</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 2 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "2" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 ***"]
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "<p>Print another <code>\"*\"</code>.</p>",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": { value: 3, highlight: true } },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 ***"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>The inner loop has finished. Move to a new line.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 3 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 ****"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>The outer loop has finished. The program ends.</p><p><strong>Key takeaway:</strong> With nested loops, the inner loop runs <em>completely</em> for each iteration of the outer loop. Notice how the number of asterisks matches the value of <code>num1</code> on each line!</p>",
      boxes: [
        {
          title: "Memory",
          values: { "num1": 4, "num2": 3 },
          connections: [
            { from: "num1", toValue: "4" },
            { from: "num2", toValue: "3" }
          ]
        },
        {
          title: "Output",
          values: ["1 *", "2 **", "3 ***", "4 ****", ""]
        }
      ]
    }
  ]
};
