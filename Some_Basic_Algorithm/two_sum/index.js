// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)

const twoSum = (arr, target) => {
  const numbersMap = new Map();
  for (let i = 0; i < arr.length; i++){
    const currentNumber = arr[i];
    const complement = target - currentNumber;
    if (numbersMap.has(complement)) {
      return [numbersMap.get(complement), i];
    }
    numbersMap.set(currentNumber, i);
  }
  return undefined;
}
console.log(twoSum([2, 11, 7, 34, 32], 9));