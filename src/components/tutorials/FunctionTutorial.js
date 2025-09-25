export default {
  code: `def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    result = a + b
    return result

def main():
    x = 5
    y = 7
    total = calculate_sum(x, y)
    print(f"The sum of {x} and {y} is {total}")

# Call the main function
main()`,
  steps: [
    {
      lineNumber: 0,
      explanation: "We define a function named <code>calculate_sum</code> that takes two parameters: <code>a</code> and <code>b</code>. This function will add these two values together.",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory (calculate_sum)",
          values: {}
        },
        {
          title: "Memory (main)",
          values: {}
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "This is a docstring - a special comment that describes what the function does. It helps other programmers understand the purpose of our function.",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "Inside our function, we create a variable called <code>result</code> and assign it the value of <code>a + b</code>.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "We <code>return</code> the result value to whatever code called this function.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "Now we define another function called <code>main</code>. This will be the primary function that drives our program.",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "Inside the main function, we create a variable <code>x</code> with the value <code>5</code>.",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5 }
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "We create another variable <code>y</code> with the value <code>7</code>.",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "We call our <code>calculate_sum</code> function, passing <code>x</code> and <code>y</code> as arguments, and store the result in a variable called <code>total</code>.",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 0,
      explanation: "Execution jumps to the <code>calculate_sum</code> function. Now <code>a</code> equals <code>5</code> (the value of <code>x</code>) and <code>b</code> equals <code>7</code> (the value of <code>y</code>).",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "a": 5, "b": 7, "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We calculate <code>a + b</code>, which is <code>5 + 7 = 12</code>, and store it in the variable <code>result</code>.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "a": 5, "b": 7, "result": 12, "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "We <code>return</code> the result (<code>12</code>) back to where the function was called.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "a": 5, "b": 7, "result": 12, "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "Back in the <code>main</code> function, the call to <code>calculate_sum(x, y)</code> completes and returns <code>12</code>, which is assigned to the <code>total</code> variable.",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7, "total": 12 }
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "We <code>print</code> out a message showing the sum of our two numbers.",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7, "total": 12 }
        },
        {
          title: "Output",
          values: ["The sum of 5 and 7 is 12"]
        }
      ]
    },
    {
      lineNumber: 12,
      explanation: "Finally, we call the <code>main</code> function to execute our program.",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 5,
      explanation: "Execution jumps to the <code>main</code> function.",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: {}
        }
      ]
    },
    {
      lineNumber: 6,
      explanation: "Inside <code>main</code>, we set <code>x</code> to <code>5</code>.",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5 }
        }
      ]
    },
    {
      lineNumber: 7,
      explanation: "We set <code>y</code> to <code>7</code>.",
      highlightLines: [7],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 8,
      explanation: "We call <code>calculate_sum(x, y)</code> as we saw before.",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7 }
        }
      ]
    },
    {
      lineNumber: 9,
      explanation: "We print the result: <code>The sum of 5 and 7 is 12</code>.",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "x": 5, "y": 7, "total": 12 }
        },
        {
          title: "Output",
          values: ["The sum of 5 and 7 is 12"]
        }
      ]
    }
  ]
};
