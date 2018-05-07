/*
Write two functions `reverseArray` and `reverseArrayInPlace`.

`reverseArray` - takes an array as an argument and returns a new array that has the same elements in inverse order

`reverseArrayInPlace` - modifies the given array in order to reverse its elements
 */

function reverseArray(arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }

  return result;
}

function reverseArrayInPlace(arr) {
  for (let i = arr.length - 1; i >= Math.floor(arr.length / 2); i -= 1) {
    let temp = arr[arr.length - i - 1];

    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

/*
`reverseArray` is more useful since it doesn't modify the original input
`reverseArrayInPlace` is more efficient since it iterates only through half
 */
