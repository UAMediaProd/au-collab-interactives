export default {
  code: `new_variable = 25
another_variable = 30
new_variable = 10
print(new_variable)`,
  steps: [
    {
      lineNumber: 0,
      explanation: "We initialise <code>new_variable</code> with the value <code>25</code>.",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 25 }
        }
      ]
    },
    {
      lineNumber: 1,
      explanation: "We create <code>another_variable</code> with value <code>30</code>. Note that <code>new_variable</code> still holds the value <code>25</code>.",
      highlightLines: [1],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 25, "another_variable": 30 }
        }
      ]
    },
    {
      lineNumber: 2,
      explanation: "We reassign <code>new_variable</code> with value <code>10</code>. This overwrites its previous value of <code>25</code>.",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 10, "another_variable": 30 }
        }
      ]
    },
    {
      lineNumber: 3,
      explanation: "We <code>print</code> the current value of <code>new_variable</code>, which is <code>10</code>. The previous value of <code>25</code> is completely gone.",
      highlightLines: [3],
      boxes: [
        {
          title: "Memory",
          values: { "new_variable": 10, "another_variable": 30 }
        },
        {
          title: "Output",
          values: ["10"]
        }
      ]
    }
  ]
};
