---
description: How to implement a code step-through section in a tutorial JS file using the two-phase update pattern
---

# Code Step-Through Implementation Guide

You are adding an interactive code step-through to a tutorial data file (`.js`) in the `src/components/tutorials/` directory. These tutorials are rendered by the `CodeTutorial.vue` component.

## File Structure

Each tutorial file exports a default object:

```js
export default {
  code: `...python code...`,   // The code shown in the code panel (persists between steps; can be overridden per-step)
  steps: [
    { explanation, highlightLines, boxes, code, info, ... },
    ...
  ]
};
```

### Step Properties

| Property | Description |
|---|---|
| `explanation` | HTML string shown in the explanation panel. If omitted, the previous step's explanation persists. |
| `code` | Python code string. If omitted, the most recent `code` value persists. Set this when the code changes (e.g. building up a solution). |
| `highlightLines` | Array of 0-indexed line numbers to highlight in the code panel. |
| `secondaryHighlightLines` | Array of 0-indexed line numbers for secondary (dimmer) highlighting. |
| `highlightChars` | Array of character-level highlights. |
| `info` | HTML string shown in a separate info panel (used for flowcharts etc.). If omitted, persists from previous step. |
| `boxes` | Array of data boxes (Memory, Output, etc.) shown beside the code. |
| `language` | Override the display language for this step onwards. |

**Do NOT include a `lineNumber` property** — it is not in use.

### Box Structure

Each box in the `boxes` array:

```js
{
  title: "Memory",          // or "Output", or a filename like "data.txt"
  values: { ... },          // For Memory: object of variable names → values
                            // For Output: array of strings (each = one line)
  connections: [ ... ],     // Arrows drawn between boxes
  dataBoxStyle: false       // Set to false for plain-text file content boxes
}
```

#### Memory Box Values

Values can be:
- **Simple**: `"card_number": "\"hello\""` or `"x": 5`
- **Highlighted** (when first added or changed): `"x": { value: 5, highlight: true }`
- **Array values**: `"my_list": [1, 2, 3]` or `"my_list": { value: [1, 2, 3], highlight: true }`
  - For partial array highlights: `highlight` can be a number (single index) or array of numbers

#### Connections

```js
connections: [
  { from: "variable_name", toKey: "variable_name" }
]
```

Always use `toKey` (not `toValue`) to avoid incorrect arrow drawing when values are the same.

#### Output Box Values

An array of strings, one per printed line. Empty string `""` = blank line.

```js
{ title: "Output", values: ["Hello", "World", ""] }
```

## The Two-Phase Update Pattern (CRITICAL)

This is the most important convention. Every line of code execution follows a two-step process:

### Phase 1: Highlight the line, explain what it does, boxes show state BEFORE this line executes

- `highlightLines` points to the current line
- `explanation` describes what this line will do
- `boxes` show the memory/output state from **before** this line runs
- If a new variable was created by the **previous** line, it appears here with `highlight: true`

### Phase 2: Move to the NEXT line, update boxes to reflect the previous line's effect, explain the new line

- `highlightLines` moves to the next line of execution
- `boxes` now show the updated state (the effect of the previous line)
- New/changed values have `highlight: true`
- `explanation` describes what this new line will do

### Example

For this code:
```python
x = 5       # line 0
y = x + 3   # line 1
print(y)    # line 2
```

The steps would be:

```js
// Step: Highlight line 0, explain it, boxes show state BEFORE line 0 executes
{
  explanation: "<p>Assign the value <code>5</code> to <code>x</code>.</p>",
  highlightLines: [0],
  boxes: [
    { title: "Memory", values: {} },          // Empty — line 0 hasn't run yet
    { title: "Output", values: [] }
  ]
},
// Step: Move to line 1, boxes now reflect line 0's effect (x = 5 appears highlighted)
{
  explanation: "<p>Calculate <code>x + 3</code> and store the result in <code>y</code>.</p>",
  highlightLines: [1],
  boxes: [
    {
      title: "Memory",
      values: { "x": { value: 5, highlight: true } },   // x just appeared
      connections: [{ from: "x", toKey: "x" }]
    },
    { title: "Output", values: [] }
  ]
},
// Step: Move to line 2, boxes now reflect line 1's effect (y = 8 appears highlighted)
{
  explanation: "<p>Print the value of <code>y</code>.</p>",
  highlightLines: [2],
  boxes: [
    {
      title: "Memory",
      values: { "x": 5, "y": { value: 8, highlight: true } },   // y just appeared
      connections: [
        { from: "x", toKey: "x" },
        { from: "y", toKey: "y" }
      ]
    },
    { title: "Output", values: [] }                               // print hasn't run yet
  ]
},
// Final step: No highlight, boxes reflect line 2's effect (output appears)
{
  explanation: "<p>The program has finished.</p>",
  boxes: [
    {
      title: "Memory",
      values: { "x": 5, "y": 8 },
      connections: [
        { from: "x", toKey: "x" },
        { from: "y", toKey: "y" }
      ]
    },
    { title: "Output", values: ["8"] }                            // print output now visible
  ]
}
```

### Key Rules for the Two-Phase Pattern

1. **Highlights only appear when values are first added or changed** — not on every step.
2. **Output from `print()` appears on the NEXT step** after the print line is highlighted (because the print hasn't executed yet when we first highlight it).
3. **For `input()` calls**: Show the prompt text in the Output box on the step that highlights the input line. On the next step (still highlighting the same line), show the user's typed input appended to the prompt and the variable stored in Memory.
4. **For loops**: When you loop back to a condition check, the boxes should reflect the updates from the last line of the previous iteration.

## General Conventions

1. **Australian English spelling** (e.g. "initialise" not "initialize", "colour" not "color")
2. **Target audience is first-time programmers** — explanations should be verbose with good paragraph breaks
3. **Use `<p>` tags** for paragraphs, `<code>` for inline code, `<strong>` for emphasis
4. **Don't combine multiple condition checks** (if/elif) into a single step — split them so each condition is its own step
5. **For long loops**, show the first few iterations in full detail, then fast-forward with a summary step showing the final state
6. **`code` property persists** between steps. Only set it on the first step where the code changes.
7. **`info` property persists** between steps. Only set it when it changes.
8. **Intro step**: The first step typically has `highlightLines: []` and provides an overview of the program.
9. **Final step**: Typically has no `highlightLines`, summarises key takeaways, and shows the final state of all boxes.

## Appending Steps to Existing Tutorials

Some tutorials already have design/explanation steps. When adding a step-through section:

1. The step-through steps are appended after the existing steps
2. Include a transition explanation like "Now let's trace through the code step by step"
3. The step-through section follows all the same conventions as above

## Reference Files

Look at these files for well-implemented examples:
- `src/components/tutorials/PSP_TP2.js` — Two-Up game with while loop (good two-phase pattern reference)
- `src/components/tutorials/PSP_TP4.js` — Caesar Cipher with for loop and if/else
- `src/components/tutorials/PSP_TP5.js` — Luhn's algorithm with while loop, nested if/else, and fast-forwarding

## Highlighting list items for emphasis
`src/components/tutorials/PSP_TP5.js` also uses highlighting to show which list item is being processed. This helps avoid confusion as students don't need to count through items in the list to determine which one is being processed by the program.

## Empty lists
Initialise with a space character: `\u00a0`
```javascript
values: {
    "list2": ["\u00a0"],
}
```