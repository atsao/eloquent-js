/*
Write a function `deepEqual` that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to `deepEqual`.
 */

function deepEqual(a, b) {
  if (
    typeof a === 'object' &&
    typeof b === 'object' &&
    a !== null &&
    b !== null
  ) {
    if (Object.keys(a).length === Object.keys(b).length) {
      for (let prop in a) {
        if (b.hasOwnProperty(prop)) {
          return deepEqual(a[prop], b[prop]);
        }
      }
    } else {
      return false;
    }
  } else {
    return a === b;
  }
}
