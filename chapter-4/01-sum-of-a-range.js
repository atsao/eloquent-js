/*
Write a `range` function that takes two arguments, `start` and `end` and returns an array containing all the numbers from `start` up to (and including) `end`.
 */

function range(start, end) {
  const result = [];

  for (let i = start; i <= end; i += 1) {
    result.push(i);
  }

  return result;
}

/*
Write a `sum` function that takes an array of numbers and returns the sum of these numbers.
 */

function sum(numbers) {
  return numbers.reduce((acc, num) => (acc += num), 0);
}

/*
Modify the `range` function to take an optional argument that indicates the `step` value. If no `step` is given, dfault to 1. Make sure it works with negative values.
 */

function rangeModified(start, end, step = 1) {
  const result = [];

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i);
  }

  return result;
}
