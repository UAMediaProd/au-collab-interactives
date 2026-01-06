// How to lay out your code properly
export default {
    code: `# Program 1 (Immutable objects)
def string_function(input_string):
    input_string = input_string + "test"
    print(input_string)
    
initial_string = 'immutable'
string_function(initial_string)
print(initial_string)

# Program 2 (Mutable objects)
def list_function(input_list):
    input_list.append('test')
    print(input_list)
    
initial_list = ['mutable']
list_function(initial_list)
print(initial_list)`,
    steps: [
        {
            explanation: "<p>Let's take a closer look at an issue that often catches students unaware.</p><p>There is a subtle behavioural difference between Immutable and Mutable objects when passed as parameters to a function.</p><p>Consider the above two programs as an example.</p>",
            boxes: [
                {
                    title: "Program 1 Memory",
                },
                {
                    title: "string_function Memory",
                },
                {
                    title: "Program 1 Output"
                },
                {
                    title: "Program 2 Memory"
                },
                {
                    title: "list_function Memory"
                },
                {
                    title: "Program 2 Output"
                },
            ]
        },
        {
            explanation: "<p>Both programs here are very similar; in each, there is a function with a parameter passed. In the upper program, the parameter is immutable (a string), in the lower program it is mutable (a list).</p><p>Let's step through both at the same time and highlight the differences.</p>",
            secondaryHighlightLines: [5, 14],
            boxes: [
                {
                    title: "Program 1 Memory",
                },
                {
                    title: "string_function Memory",
                },
                {
                    title: "Program 1 Output"
                },
                {
                    title: "Program 2 Memory"
                },
                {
                    title: "list_function Memory"
                },
                {
                    title: "Program 2 Output"
                },
            ]
        },
        {
            explanation: "<p>In the first line of each program, the 'initial' string and list objects are created and bound to their respective names. </p>",
            secondaryHighlightLines: [5, 14],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'", highlight: true },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'"], highlight: true }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'"] }
                        ]
                    },
                    {
                        title: "list_function Memory"
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "<p>Next, function calls are made. The initial objects previously created are passed as parameters.</p>",
            secondaryHighlightLines: [6, 15],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'"] }
                        ]
                    },
                    {
                        title: "list_function Memory"
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "<p>Next the local namespaces are set up for the functions. In both cases, local names (<code>input_string</code> / <code>input_list</code>) are bound to the objects that were passed as parameters. </p>",
            secondaryHighlightLines: [1, 10],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'"] }
                        ]
                    },
                    {
                        title: "list_function Memory"
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "This is where the difference occurs. In the upper program, the name <code>input_string</code> is rebound to a new string object – the specific string object which is the result of the concatenation.</p><p> The Global frame variable <code>initial_string</code> is unaffected by this. ",
            secondaryHighlightLines: [2, 11],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                        values: {
                            "input_string": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_string", toValue: "'immutable'", toBox: "Program 1 Memory" }
                        ]
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'"] }
                        ]
                    },
                    {
                        title: "list_function Memory",
                        values: {
                            "input_list": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_list", toValue: ["'mutable'"], toBox: "Program 2 Memory" }
                        ]
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "<p>In the lower program, <code>input_list</code> is operated on by the mutator method <code>append()</code>. </p><p><strong>There is no new list object created;</strong> the existing list object – which <code>initial_list</code> and the local name <code>input_list</code> have been bound to – is transformed.</p>",
            secondaryHighlightLines: [2, 11],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                        values: {
                            "input_string": { value: "'test'", highlight: true }
                        },
                        connections: [
                            { from: "input_string", toValue: "'test'" }
                        ]
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'", "'test'"], highlight: true }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'", "'test'"] }
                        ]
                    },
                    {
                        title: "list_function Memory",
                        values: {
                            "input_list": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_list", toValue: ["'mutable'", "'test'"], toBox: "Program 2 Memory" }
                        ]
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "<p>Now, the variables in the local namespace are printed.</p>",
            secondaryHighlightLines: [3, 12],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                        values: {
                            "input_string": { value: "'test'" }
                        },
                        connections: [
                            { from: "input_string", toValue: "'test'" }
                        ]
                    },
                    {
                        title: "Program 1 Output"
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'", "'test'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'", "'test'"] }
                        ]
                    },
                    {
                        title: "list_function Memory",
                        values: {
                            "input_list": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_list", toValue: ["'mutable'", "'test'"], toBox: "Program 2 Memory" }
                        ]
                    },
                    {
                        title: "Program 2 Output"
                    }
                ]
        },
        {
            explanation: "<p>Finally, the variables in the Global namespace are printed. In the upper program, 'immutable' is printed, because the object that <code>initial_string</code> is bound to was never altered by the function. </p><p>In the lower program, the output provides evidence of what was discussed previously – that the mutable list object that the name <code>initial_list</code> is bound to has been transformed by the function.</p>",
            secondaryHighlightLines: [7, 16],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                        values: {
                            "input_string": { value: "'test'" }
                        },
                        connections: [
                            { from: "input_string", toValue: "'test'" }
                        ]
                    },
                    {
                        title: "Program 1 Output",
                        values: {
                            "test": { value: "", valued: false }
                        }
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'", "'test'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'", "'test'"] }
                        ]
                    },
                    {
                        title: "list_function Memory",
                        values: {
                            "input_list": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_list", toValue: ["'mutable'", "'test'"], toBox: "Program 2 Memory" }
                        ]
                    },
                    {
                        title: "Program 2 Output",
                        values: {
                            "['mutable', 'test']": { value: "", valued: false }
                        }
                    }
                ]
        },
        {
            explanation: "<p>...</p>",
            secondaryHighlightLines: [7, 16],
            boxes:
                [
                    {
                        title: "Program 1 Memory",
                        values: {
                            "initial_string": { value: "'immutable'" },
                        },
                        connections: [
                            { from: "initial_string", toValue: "'immutable'" }
                        ]
                    },
                    {
                        title: "string_function Memory",
                        values: {
                            "input_string": { value: "'test'" }
                        },
                        connections: [
                            { from: "input_string", toValue: "'test'" }
                        ]
                    },
                    {
                        title: "Program 1 Output",
                        values: {
                            "test": { value: "", valued: false },
                            "immutable": { value: "", valued: false }
                        }
                    },
                    {
                        title: "Program 2 Memory",
                        values: {
                            "initial_list": { value: ["'mutable'", "'test'"] }
                        },
                        connections: [
                            { from: "initial_list", toValue: ["'mutable'", "'test'"] }
                        ]
                    },
                    {
                        title: "list_function Memory",
                        values: {
                            "input_list": { value: "", valued: false }
                        },
                        connections: [
                            { from: "input_list", toValue: ["'mutable'", "'test'"], toBox: "Program 2 Memory" }
                        ]
                    },
                    {
                        title: "Program 2 Output",
                        values: {
                            "['mutable', 'test']": { value: "", valued: false },
                            "['mutable', 'test'] ": { value: "", valued: false }
                        }
                    }
                ]
        },
    ]
};
