/*
Implement `every` as a function that takes an array and a predicate function as parameters.

Write two versions, one using a loop and one using the `some` method.
 */

function everyLoop(array, test) {
  for (let i = 0; i < array.length; i += 1) {
    if (!test(array[i])) {
      return false;
    }

    continue;
  }

  return true;
}

function everySome(array, test) {
  return !array.some(a => !test(a));
}
