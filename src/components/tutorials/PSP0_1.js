// Boolean Operators and Operands
// Common mistake: Incorrect formulation of Boolean expressions​
export default {
  code: `>>> 3 < 5
True
>>> 3 > 5
False
>>> 3 == 5
False
>>> 5 != 5
False`,
  steps: [
    {
      explanation: "<p>Let's look at some examples of both valid and invalid Boolean expressions. This will help to ensure that we construct logically sound conditions for if and while statements.​</p><p>We'll begin with some simple Boolean expressions, as entered directly into the interpreter.<p>",
    },
    {
      explanation: "<p>Notice that in each of these expressions, the result is always either <code>True</code> or <code>False</code>.<p>This is the key characteristic of Boolean expressions.<p>",
      highlightLines: [1,3,5,7],
    },
    {
      explanation: "<p>Boolean expressions can be combined with the two Boolean operators: <code>and</code>, <code>or</code>.</p><p>​When combined correctly in this way, the resulting expression is also a Boolean expression: that is, it will resolve down to <code>True</code> or <code>False</code>.</p>",
      code: `>>> 3 < 5 and 3 > 5
False
>>> 3 < 5 or 3 > 5
True
>>> # or equivalently...
>>> True and False
False
>>> True or False
True`,
      highlightLines: [0, 2, 5, 7],
    },
    {
      explanation: "<p>Now, lets look at what doesn’t work.<p>",
      code:`>>> 'string' and True
True
>>> False or 3
3
>>> 'string' or 3
'string'`,
    },
    {
      explanation: "<p>On either side of a Boolean Operator (<code>and</code>, <code>or</code>) there should only be Boolean Expressions (something which resolves down to <code>True</code> or <code>False</code>)</p><p>If anything but a Boolean Expression is used in conjunction with a Boolean Operator, the result could be undesirable, as in each of the cases shown here.</p>",
    },
    {
      explanation: "<p>Here’s an example of an if statement constructed the wrong way.</p><p>This is a common mistake with novice programmers.</p>",
      code: `>>> a = 0
>>> if a == 1 or 2:
        print('this is bad')`,
    },
    {
      explanation: "<p>In this example:<ul><li><code>a == 1</code> is a Boolean Expression</li><li><code>or</code> is a Boolean operator</li><li>...but <code>2</code> needs to be a Boolean expression for the code to work as intended.</li></ul></p><p>Putting something other than a Boolean expression on either side of a Boolean operator is like trying to evaluate the expression 1 + 🍕 . It makes no sense.</p>",
    },
    {
      explanation: "<p>This is a serious issue, however. The previous if statement will actually execute without any syntax error or exception being thrown by the interpreter. You can check this for yourself!</p><p>Because it still compiles and executes, this kind of mistake can produce erroneous results, and can be quite difficult to debug.</p>",
      code: `>>> a = 0
>>> if a == 1 or 2:
        print('this is bad')

this is bad
>>>`,
    },
    {
      explanation: "<p>Here is the result of the same code being executed again, but with a correctly formulated Boolean expression on the right hand side. ​</p>",
      code: `>>> a = 0
>>> if a == 1 or a == 2:
        print('this is bad')

>>>`,
    },
    {
      explanation: "<p><strong>Key takeaway:</strong></p> <p>When constructing your <code>if</code> and <code>while</code> statements, make sure that you are using Boolean expressions on either side of your Boolean operators.​</p>"
    }
  ]
};
