/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 */

function flatten(array) {
  return array.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flatten(item));
    }

    return result.concat(item);
  }, []);
}
