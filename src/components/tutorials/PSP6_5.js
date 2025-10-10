export default {
  code: `infile = open("input.txt", "r")

string_list = infile.readlines()

for line in string_list:
  print(line, end='')

infile.close()`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This tutorial demonstrates how to <strong>read from a file</strong> in Python.</p><p>We'll open a file, read its contents into a list, and print each line.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: {}
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "<p>Open the file <code>input.txt</code> in read mode (<code>\"r\"</code>).</p><p>This creates a file object that we can use to read the file's contents. The file object is assigned to the variable <code>infile</code>.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: {}
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "<p>Call <code>infile.readlines()</code> to read all lines from the file.</p><p>This method returns a <strong>list</strong> where each element is one line from the file (including the newline character <code>\\n</code> at the end of each line).</p><p>The list is assigned to <code>string_list</code>.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { "infile": { value: "file object", highlight: true } },
          connections: [
            { from: "infile", toValue: "file object" }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Start a <code>for</code> loop to iterate through each line in <code>string_list</code>.</p><p>First iteration: <code>line</code> is assigned <code>'this is line 1\\n'</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": { value: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the first line.</p><p>The <code>end=''</code> parameter prevents Python from adding an extra newline (since the line already has <code>\\n</code> at the end).</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": { value: ["'this is line 1\\n'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 1\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Second iteration: <code>line</code> is assigned <code>'this is line 2\\n'</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 1\\n'"]
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 1\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the second line.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": { value: ["'this is line 2\\n'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 2\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Third iteration: <code>line</code> is assigned <code>'this is line 3\\n'</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 2\\n'"]
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 2\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the third line.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": { value: ["'this is line 3\\n'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 3\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Fourth iteration: <code>line</code> is assigned <code>'this is line 4\\n'</code>.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 3\\n'"]
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 3\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2", "this is line 3"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the fourth line.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": { value: ["'this is line 4\\n'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 4\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2", "this is line 3"]
        }
      ]
    },
    {
      lineNumber: 4,
      explanation: "<p>Fifth iteration: <code>line</code> is assigned <code>'this is line 5'</code>.</p><p>Note: The last line doesn't have a newline character at the end.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 4\\n'"]
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 4\\n'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2", "this is line 3", "this is line 4"]
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "<p>Print the fifth line.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": { value: ["'this is line 5'"], highlight: true }
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 5'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: ["this is line 1", "this is line 2", "this is line 3", "this is line 4"]
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The loop has finished. Close the file using <code>infile.close()</code>.</p><p>It's important to close files when you're done with them to free up system resources.</p>",
      highlightLines: [7],
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": "file object",
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 5'"]
          },
          connections: [
            { from: "infile", toValue: "file object" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 5'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "<p>The program ends.</p><p><strong>Key takeaways:</strong></p><ul><li><code>open(filename, \"r\")</code> opens a file for reading</li><li><code>readlines()</code> reads all lines into a list</li><li>Each line includes the newline character <code>\\n</code> (except possibly the last line)</li><li><code>print(line, end='')</code> prevents adding extra newlines</li><li>Always <code>close()</code> files when done</li></ul>",
      boxes: [
        {
          title: "Global memory",
          stacked: true,
          values: { 
            "infile": { value: "file object (closed)", highlight: true },
            "string_list": ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"],
            "line": ["'this is line 5'"]
          },
          connections: [
            { from: "infile", toValue: "file object (closed)" },
            { from: "string_list", toValue: ["'this is line 1\\n'", "'this is line 2\\n'", "'this is line 3\\n'", "'this is line 4\\n'", "'this is line 5'"] },
            { from: "line", toValue: ["'this is line 5'"] }
          ]
        },
        {
          title: "input.txt",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        },
        {
          title: "Output",
          values: { 
            "this is line 1": { value: "", valued: false }, 
            "this is line 2": { value: "", valued: false }, 
            "this is line 3": { value: "", valued: false }, 
            "this is line 4": { value: "", valued: false }, 
            "this is line 5": { value: "", valued: false }
          }
        }
      ]
    }
  ]
};
