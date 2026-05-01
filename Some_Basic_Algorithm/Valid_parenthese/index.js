import Stack from "./stack.js";

// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false

const parenthesesChecker = (str) => {
  const stack = new Stack();
  const pairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === "}" || char === ']') {
      if (stack.isEmpty() || stack.peek() !== pairs[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}
console.log(parenthesesChecker("()[]{}"));

