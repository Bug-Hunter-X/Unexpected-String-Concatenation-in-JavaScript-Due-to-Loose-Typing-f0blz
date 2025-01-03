# JavaScript Loose Typing Bug

This repository demonstrates a common JavaScript error caused by the language's loose typing system. The bug involves unexpected string concatenation instead of numerical addition when using the + operator with different data types.

## Bug Description
The `foo` function is intended to add two numbers. However, due to JavaScript's dynamic typing, when one of the inputs is a string, the + operator performs string concatenation instead of numerical addition, leading to unexpected results.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and examine the code.
3. Run `bug.js` using Node.js (or your preferred JavaScript environment).
4. Observe the unexpected output: 55 instead of 10.

## Solution
The solution involves using explicit type checking or conversion to ensure that both inputs are numbers before performing the addition.

See the corrected code in `bugSolution.js` for an example of how to address this issue using the `Number()` function for type conversion.