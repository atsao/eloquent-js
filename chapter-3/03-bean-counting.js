/*
Write a function `countBs` that takes a string and returns the number of uppercase B characters are in the string.
 */

function countBs(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'B') {
      count += 1;
    }
  }

  return count;
}

/*
Write a function `countChar` that behaves like `countBs`, except it takes a seconnd argument that indicates the character to be counted. Rewrite `countBs` to use this new function.
 */

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      count += 1;
    }
  }

  return count;
}

function countBs2(str) {
  return countChar(str, 'B');
}
