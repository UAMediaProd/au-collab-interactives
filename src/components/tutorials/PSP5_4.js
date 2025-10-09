export default {
  code: `def sum_list(num_list):
  count = 0

  for num in num_list:
    count = count + num # or count += num

  return count

the_list = [2, 3, 4, 5]

total = sum_list(the_list)

print('The sum of the list', the_list , 'is', total)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates a function that sums all numbers in a list.</p><p><strong>Problem:</strong> Write a function that takes a list of integers as a parameter, sums all the numbers, and returns the total. If the list is empty, return 0.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "sum_list memory",
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
      explanation: "<p>Define a function named <code>sum_list</code> with one parameter: <code>num_list</code>.</p><p>This parameter will hold the list of numbers we want to sum.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "sum_list memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "<p>Create a list with four integers: <code>[2, 3, 4, 5]</code> and assign it to <code>the_list</code>.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Global memory",
          values: {}
        },
        {
          title: "sum_list memory",
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
      explanation: "<p>Call the function <code>sum_list</code> with <code>the_list</code> as the argument.</p><p>The function will execute with <code>num_list</code> containing <code>[2, 3, 4, 5]</code>.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Global memory",
          values: { "the_list": [2, 3, 4, 5] },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
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
      explanation: "<p>Jump to the function definition. The parameter <code>num_list</code> now references the same list as <code>the_list</code>.</p>",
      highlightLines: [0, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false }
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" }
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
      explanation: "<p>Initialize <code>count</code> to <code>0</code>. This variable will accumulate the sum of all numbers in the list.</p>",
      highlightLines: [1, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 0
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "0" }
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
      explanation: "<p>Start a <code>for</code> loop to iterate through each number in <code>num_list</code>.</p><p>First iteration: <code>num</code> is assigned <code>2</code> (the first element).</p>",
      highlightLines: [3, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 0
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "0" }
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
      explanation: "<p>Add <code>num</code> (which is <code>2</code>) to <code>count</code>. So <code>count</code> becomes <code>0 + 2 = 2</code>.</p><p>The comment shows that <code>count += num</code> is an alternative way to write this.</p>",
      highlightLines: [4, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 0,
            "num": 2
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "0" },
            { from: "num", toValue: "2" }
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
      explanation: "<p>Second iteration: <code>num</code> is assigned <code>3</code>.</p>",
      highlightLines: [3, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": "2 ", // The space is here to ensure that the connection arrow does not point to num
            "num": 2
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "2 " },
            { from: "num", toValue: "2" }
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
      explanation: "<p>Add <code>num</code> (which is <code>3</code>) to <code>count</code>. So <code>count</code> becomes <code>2 + 3 = 5</code>.</p>",
      highlightLines: [4, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 2,
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "2" },
            { from: "num", toValue: "3" }
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
      explanation: "<p>Third iteration: <code>num</code> is assigned <code>4</code>.</p>",
      highlightLines: [3, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 5,
            "num": 3
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "5" },
            { from: "num", toValue: "3" }
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
      explanation: "<p>Add <code>num</code> (which is <code>4</code>) to <code>count</code>. So <code>count</code> becomes <code>5 + 4 = 9</code>.</p>",
      highlightLines: [4, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 5,
            "num": 4
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "5" },
            { from: "num", toValue: "4" }
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
      explanation: "<p>Fourth iteration: <code>num</code> is assigned <code>5</code> (the last element).</p>",
      highlightLines: [3, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 9,
            "num": 4
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "9" },
            { from: "num", toValue: "4" }
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
      explanation: "<p>Add <code>num</code> (which is <code>5</code>) to <code>count</code>. So <code>count</code> becomes <code>9 + 5 = 14</code>.</p>",
      highlightLines: [4, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 9,
            "num": 5
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "9" },
            { from: "num", toValue: "5" }
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
      explanation: "<p>The loop has finished (no more elements in the list). Return <code>count</code>, which is <code>14</code>.</p><p>This value goes back to line 10 where the function was called.</p>",
      highlightLines: [6, 10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 14,
            "num": 5
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "14" },
            { from: "num", toValue: "5" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 10,
      explanation: "<p>The function has returned <code>14</code>, which is assigned to <code>total</code>.</p><p>The function's local variables are removed from memory.</p>",
      highlightLines: [10],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5]
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] }
          ]
        },
        {
          title: "sum_list memory",
          values: {
            "num_list": { value: "", valued: false },
            "count": 14,
            "num": 5
          },
          connections: [
            { from: "num_list", toValue: [2, 3, 4, 5], toBox: "Global memory" },
            { from: "count", toValue: "14" },
            { from: "num", toValue: "5" }
          ]
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 12,
      explanation: "<p>Print the message along with <code>the_list</code> and <code>total</code>.</p><p>The output will be: <code>The sum of all numbers in the list [2, 3, 4, 5] is 14</code></p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5],
            "total": { value: "14"}
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] },
            { from: "total", toValue: "14" }
          ]
        },
        {
          title: "sum_list memory",
          values: {}
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 12,
      explanation: "<p>The program ends.</p><p><strong>Key concepts:</strong></p><ul><li>Use a <strong>counter variable</strong> (initialized to 0) to accumulate a sum</li><li>Use a <code>for</code> loop to iterate through each element in the list</li><li>If the list is empty, the loop never executes, and <code>count</code> remains 0—satisfying the requirement!</li></ul>",
      boxes: [
        {
          title: "Global memory",
          values: { 
            "the_list": [2, 3, 4, 5],
            "total": { value: "", valued: false }
          },
          connections: [
            { from: "the_list", toValue: [2, 3, 4, 5] },
            { from: "total", toValue: "14" }
          ]
        },
        {
          title: "sum_list memory",
          values: {}
        },
        {
          title: "Output",
          values: ["The sum of all numbers in the list [2, 3, 4, 5] is 14"]
        }
      ]
    }
  ]
};
