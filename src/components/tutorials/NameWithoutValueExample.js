export default {
  code: `# Example showing names without values (e.g., function parameters)
def greet(name, age):
  message = f"Hello {name}, you are {age}"
  return message

result = greet("Alice", 25)
print(result)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "<p>This example demonstrates using <code>valued: false</code> to display variable names without value boxes.</p><p>This is useful for showing function parameters before they're assigned.</p>",
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
      explanation: "<p>We define a function with parameters <code>name</code> and <code>age</code>. The parameters exist but don't have values yet.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: {
            "name": { value: "", valued: false },
            "age": { value: "", valued: false }
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
      explanation: "<p>We call the function with arguments <code>\"Alice\"</code> and <code>25</code>. Now the parameters have values.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: {
            "name": { value: "\"Alice\"" },
            "age": { value: 25 }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "<p>Inside the function, we create a message using the parameter values.</p>",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: {
            "name": { value: "\"Alice\"" },
            "age": { value: 25 }
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
      explanation: "<p>The function returns the message. After the function completes, the local variables are cleared.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: {
            "name": { value: "\"Alice\"" },
            "age": { value: 25 },
            "message": { value: "\"Hello Alice, you are 25\"" }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>Print the result.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: {
            "result": { value: "\"Hello Alice, you are 25\"" }
          }
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "<p>The program ends.</p><p><strong>Usage:</strong> Set <code>valued: false</code> in the metadata object to show a variable name without a value box.</p>",
      boxes: [
        {
          title: "Memory",
          values: {
            "result": { value: "\"Hello Alice, you are 25\"" }
          }
        },
        {
          title: "Output",
          values: ["Hello Alice, you are 25"]
        }
      ]
    }
  ]
};
