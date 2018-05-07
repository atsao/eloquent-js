/*
Write a function `arrayToList` that builds up a linked list data structure.

Write a function `listToArray` that produces an array from a list.

Also write helper functions:

`prepend` -  takes an element and a list and creates a new list that adds the element to the front of the input list

`nth` - takes a list and a number and returns the element at the given position in the list, or undefined when no element exists.
 */

function arrayToList(arr) {
  const list = {};

  list.value = arr.shift();

  if (arr.length) {
    list.rest = arrayToList(arr);
  } else {
    list.rest = null;
  }

  return list;
}

function listToArray(list) {
  let array = [];

  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }

  // Alternative using for-loop
  // for (var element = list; element; element = element.rest) {
  //   array.push(element.value);
  // }

  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, n) {
  const listAsArray = listToArray(list);

  if (n === 0) {
    return listAsArray[0];
  }

  if (n > listAsArray.length + 1) {
    return undefined;
  }

  return listAsArray[n - 1];
}

function nthRecursive(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, n - 1);
  }
}
