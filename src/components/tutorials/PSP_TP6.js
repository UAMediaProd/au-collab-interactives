export default {
  code: `card_number = input("Please enter card number:")

length = len(card_number)

number_list = []
for number in card_number:
    number_list.append(int(number))

double_digit_sum = 0
index = length - 2

while index >= 0:
    product = number_list[index] * 2
    if product > 9:
        number_list[index] = product//10 + product%10
    else:
        number_list[index] = product
    index -= 2

total_sum = 0
for number in number_list:
    total_sum = total_sum + number

if total_sum % 10 == 0:
    print("Card number:",card_number, "is valid")
else:
    print("Card number:",card_number, "is invalid")`,
  steps: [
    {
      explanation: "<p><strong>Credit Card Validation (Luhn's Algorithm)</strong></p><p>This program checks whether a credit card number is valid using <strong>Luhn's algorithm</strong>. The algorithm works by doubling every second digit from the right, summing the digits of any result greater than 9, and then adding all the digits together. If the total is divisible by 10, the card number is valid.</p><p>Let's trace through the program step by step using the card number <code>79927398713</code>.</p>",
      highlightLines: [],
      boxes: [
        {
          title: "Memory",
        },
        {
          title: "Output",
          values: []
        }
      ]
    },
    // --- Input ---
    {
      explanation: "<p>The <code>input()</code> function displays a prompt and waits for the user to type something. The prompt text <code>\"Please enter card number:\"</code> appears in the output.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: {}
        },
        {
          title: "Output",
          values: ["Please enter card number:"]
        }
      ]
    },
    {
      explanation: "<p>The user types in <code>79927398713</code>. This value is returned by <code>input()</code> as a <strong>string</strong> and stored in <code>card_number</code>.</p><p>It's important to remember that <code>input()</code> always returns a string, even if the user types numbers. So <code>card_number</code> is the string <code>\"79927398713\"</code>, not a number.</p>",
      highlightLines: [0],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": { value: "\"79927398713\"", highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- Length ---
    {
      explanation: "<p>The <code>len()</code> function returns the number of characters in the string. Our card number <code>\"79927398713\"</code> has 11 digits, so <code>length</code> will be <code>11</code>.</p><p>We'll use this value later to figure out where to start doubling digits.</p>",
      highlightLines: [2],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"" },
          connections: [
            { from: "card_number", toKey: "card_number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- Build number_list ---
    {
      explanation: "<p>Create an empty list called <code>number_list</code>. We're going to fill this list with the individual digits of the card number, converted from characters to integers.</p>",
      highlightLines: [4],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": { value: 11, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- for number in card_number: iteration 1 ---
    {
      explanation: "<p>Start the <code>for</code> loop. When you loop over a string, Python gives you one character at a time.</p><p><strong>Iteration 1:</strong> <code>number</code> is <code>\"7\"</code> (the first character of <code>\"79927398713\"</code>).</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: ["\u00a0"], highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Convert the character <code>\"7\"</code> to the integer <code>7</code> using <code>int()</code>, then append it to <code>number_list</code>.</p><p>The list now contains <code>[7]</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": ["\u00a0"], "number": { value: "\"7\"", highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- for number in card_number: iteration 2 ---
    {
      explanation: "<p><strong>Iteration 2:</strong> <code>number</code> is <code>\"9\"</code>.</p>",
      highlightLines: [5],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7], highlight: true }, "number": "\"7\"" },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Convert <code>\"9\"</code> to <code>9</code> and append it to <code>number_list</code>.</p>",
      highlightLines: [6],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7], "number": { value: "\"9\"", highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- for number in card_number: iteration 3 ---
    {
      explanation: "<p><strong>Iteration 3:</strong> <code>number</code> is <code>\"9\"</code>. Convert to <code>9</code> and append.</p>",
      highlightLines: [5, 6],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9], highlight: true }, "number": "\"9\"" },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- Fast-forward remaining iterations ---
    {
      explanation: "<p>The loop continues for the remaining characters. Each character is converted to an integer and appended to the list:</p><p><code>\"2\"</code> → <code>2</code>, <code>\"7\"</code> → <code>7</code>, <code>\"3\"</code> → <code>3</code>, <code>\"9\"</code> → <code>9</code>, <code>\"8\"</code> → <code>8</code>, <code>\"7\"</code> → <code>7</code>, <code>\"1\"</code> → <code>1</code>, <code>\"3\"</code> → <code>3</code>.</p><p>After all 11 iterations, <code>number_list</code> contains every digit of the card number as an integer.</p>",
      highlightLines: [5, 6],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], highlight: true }, "number": { value: "\"3\"", highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- double_digit_sum ---
    {
      explanation: "<p>Initialise <code>double_digit_sum</code> to <code>0</code>. This variable is created but actually never used in the rest of the program — it appears to be left over from an earlier version of the code.</p>",
      highlightLines: [8],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"" },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- index ---
    {
      explanation: "<p>Set <code>index</code> to <code>length - 2</code>, which is <code>11 - 2 = 9</code>.</p><p>This is the starting position for the doubling phase. We begin at the <strong>second-to-last digit</strong> (index 9) and work our way left, doubling every second digit. This is a key part of Luhn's algorithm.</p>",
      highlightLines: [9],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"", "double_digit_sum": { value: 0, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // While loop — iteration 1: index = 9
    // number_list[9] = 1, product = 2, 2 <= 9 → number_list[9] = 2
    // =============================================
    {
      explanation: "<p>Check the <code>while</code> loop condition: is <code>index >= 0</code>? Since <code>9 >= 0</code> is <code>True</code>, we enter the loop.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: 9, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Calculate <code>product = number_list[9] * 2</code>. The digit at index 9 is <code>1</code>, so <code>product = 1 * 2 = 2</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 9 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Check: is <code>product > 9</code>? Since <code>2 > 9</code> is <code>False</code>, we skip to the <code>else</code> branch.</p>",
      highlightLines: [13],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 9, "product": { value: 2, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Since the product is not greater than 9, we simply store the doubled value directly: <code>number_list[9] = 2</code>.</p><p>The digit at index 9 changes from <code>1</code> to <code>2</code>.</p>",
      highlightLines: [16],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 9, "product": 2 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Decrease <code>index</code> by 2: <code>index = 9 - 2 = 7</code>. We move two positions to the left, skipping every other digit.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9, 9, 2, 7, 3, 9, 8, 7, 2, 3], highlight: true }, "number": "\"3\"", "double_digit_sum": 0, "index": 9, "product": 2 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // While loop — iteration 2: index = 7
    // number_list[7] = 8, product = 16, 16 > 9 → 16//10 + 16%10 = 1+6 = 7
    // =============================================
    {
      explanation: "<p>Check: <code>7 >= 0</code> is <code>True</code>, so we continue the loop.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: 7, highlight: true }, "product": 2 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Calculate <code>product = number_list[7] * 2 = 8 * 2 = 16</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 7, "product": 2 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Check: is <code>product > 9</code>? Since <code>16 > 9</code> is <code>True</code>, we enter the <code>if</code> branch.</p><p>This is where Luhn's algorithm handles two-digit products. Instead of keeping <code>16</code>, we sum its digits: <code>product//10 + product%10 = 16//10 + 16%10 = 1 + 6 = 7</code>.</p><p>The <code>//</code> operator performs integer division (giving us the tens digit), and <code>%</code> gives us the remainder (the ones digit).</p>",
      highlightLines: [13, 14],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 8, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 7, "product": { value: 16, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Decrease <code>index</code> by 2: <code>index = 7 - 2 = 5</code>.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9, 9, 2, 7, 3, 9, 7, 7, 2, 3], highlight: true }, "number": "\"3\"", "double_digit_sum": 0, "index": 7, "product": 16 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // While loop — iteration 3: index = 5
    // number_list[5] = 3, product = 6, 6 <= 9 → number_list[5] = 6
    // =============================================
    {
      explanation: "<p>Check: <code>5 >= 0</code> is <code>True</code>.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: 5, highlight: true }, "product": 16 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p><code>product = number_list[5] * 2 = 3 * 2 = 6</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 5, "product": 16 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Check: is <code>product > 9</code>? Since <code>6 > 9</code> is <code>False</code>, we take the <code>else</code> branch and store the product directly.</p>",
      highlightLines: [13, 15, 16],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 3, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 5, "product": { value: 6, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Decrease <code>index</code> by 2: <code>index = 5 - 2 = 3</code>.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9, 9, 2, 7, 6, 9, 7, 7, 2, 3], highlight: true }, "number": "\"3\"", "double_digit_sum": 0, "index": 5, "product": 6 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // While loop — iteration 4: index = 3
    // number_list[3] = 2, product = 4, 4 <= 9 → number_list[3] = 4
    // =============================================
    {
      explanation: "<p>Check: <code>3 >= 0</code> is <code>True</code>.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: 3, highlight: true }, "product": 6 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p><code>product = number_list[3] * 2 = 2 * 2 = 4</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 3, "product": 6 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Check: is <code>product > 9</code>? Since <code>4 > 9</code> is <code>False</code>, we store the product directly: <code>number_list[3] = 4</code>.</p>",
      highlightLines: [13, 15, 16],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 2, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 3, "product": { value: 4, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Decrease <code>index</code> by 2: <code>index = 3 - 2 = 1</code>.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": { value: [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], highlight: true }, "number": "\"3\"", "double_digit_sum": 0, "index": 3, "product": 4 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // While loop — iteration 5: index = 1
    // number_list[1] = 9, product = 18, 18 > 9 → 18//10 + 18%10 = 1+8 = 9
    // =============================================
    {
      explanation: "<p>Check: <code>1 >= 0</code> is <code>True</code>.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: 1, highlight: true }, "product": 4 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p><code>product = number_list[1] * 2 = 9 * 2 = 18</code>.</p>",
      highlightLines: [12],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 1, "product": 4 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Check: is <code>product > 9</code>? Since <code>18 > 9</code> is <code>True</code>, we sum the digits: <code>18//10 + 18%10 = 1 + 8 = 9</code>.</p><p>So <code>number_list[1]</code> stays as <code>9</code> — in this case, the doubled and digit-summed value happens to be the same as the original!</p>",
      highlightLines: [13, 14],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 1, "product": { value: 18, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Decrease <code>index</code> by 2: <code>index = 1 - 2 = -1</code>.</p>",
      highlightLines: [17],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": 1, "product": 18 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- While loop exits ---
    {
      explanation: "<p>Check: <code>-1 >= 0</code> is <code>False</code>, so the <code>while</code> loop ends.</p><p>The doubling phase is complete. Every second digit from the right has been doubled, and any product greater than 9 has had its digits summed. The modified list is now: <code>[7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3]</code>.</p>",
      highlightLines: [11],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": { value: -1, highlight: true }, "product": 18 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // Sum loop
    // =============================================
    {
      explanation: "<p>Initialise <code>total_sum</code> to <code>0</code>. We're now going to add up all the digits in the modified list to get the final checksum.</p>",
      highlightLines: [19],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": -1, "product": 18 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Start the <code>for</code> loop to sum all the digits.</p><p><strong>Iteration 1:</strong> <code>number</code> is <code>7</code> (the first element of the list).</p>",
      highlightLines: [20],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": "\"3\"", "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": { value: 0, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>Add <code>number</code> to <code>total_sum</code>: <code>total_sum = 0 + 7 = 7</code>.</p>",
      highlightLines: [21],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": { value: 7, highlight: true }, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": 0 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p><strong>Iteration 2:</strong> <code>number</code> is <code>9</code>. <code>total_sum = 7 + 9 = 16</code>.</p>",
      highlightLines: [20, 21],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": { value: 9, highlight: true }, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": { value: 16, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- Fast-forward remaining sum iterations ---
    {
      explanation: "<p>The loop continues adding each remaining digit:</p><p><code>16 + 9 = 25</code>, <code>25 + 4 = 29</code>, <code>29 + 7 = 36</code>, <code>36 + 6 = 42</code>, <code>42 + 9 = 51</code>, <code>51 + 7 = 58</code>, <code>58 + 7 = 65</code>, <code>65 + 2 = 67</code>, <code>67 + 3 = 70</code>.</p><p>After all 11 iterations, <code>total_sum</code> is <code>70</code>.</p>",
      highlightLines: [20, 21],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": { value: 3, highlight: true }, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": { value: 70, highlight: true } },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // =============================================
    // Final check
    // =============================================
    {
      explanation: "<p>Now for the final check: is <code>total_sum % 10 == 0</code>?</p><p><code>70 % 10 = 0</code>, and <code>0 == 0</code> is <code>True</code>!</p><p>According to Luhn's formula, if the total modulo 10 equals zero, the card number is valid. This means <code>79927398713</code> passes the Luhn check.</p>",
      highlightLines: [23],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": 3, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": 70 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    {
      explanation: "<p>The condition is <code>True</code>, so we enter the <code>if</code> branch and print the result: the card number is valid!</p>",
      highlightLines: [24],
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": 3, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": 70 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713"]
        }
      ]
    },
    // --- End ---
    {
      explanation: "<p>The program has finished.</p><p><strong>Key takeaways:</strong></p><p>This program implements <strong>Luhn's algorithm</strong>, a checksum formula used to validate credit card numbers, IMEI numbers, and other identification numbers.</p><p>The algorithm has three main phases: first, it converts the card number string into a list of individual digits. Second, starting from the rightmost digit and moving left, it doubles every second digit — if the result is greater than 9, it sums the two digits of the product using integer division (<code>//</code>) and modulo (<code>%</code>). Finally, it adds all the digits together and checks if the total is divisible by 10.</p><p>Notice how the program uses a <code>while</code> loop with <code>index -= 2</code> to skip every other digit, rather than a <code>for</code> loop. This gives us precise control over which indices we visit.</p>",
      boxes: [
        {
          title: "Memory",
          values: { "card_number": "\"79927398713\"", "length": 11, "number_list": [7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3], "number": 3, "double_digit_sum": 0, "index": -1, "product": 18, "total_sum": 70 },
          connections: [
            { from: "card_number", toKey: "card_number" },
            { from: "length", toKey: "length" },
            { from: "number_list", toKey: "number_list" },
            { from: "number", toKey: "number" },
            { from: "double_digit_sum", toKey: "double_digit_sum" },
            { from: "index", toKey: "index" },
            { from: "product", toKey: "product" },
            { from: "total_sum", toKey: "total_sum" }
          ]
        },
        {
          title: "Output",
          values: ["Please enter card number:79927398713", "Card number: 79927398713 is valid"]
        }
      ]
    }
  ]
};
