/*
Define a recursive function `isEven` to determine whether a positive whole number is even or odd without using the remainder operator;
 */

function isEven(num) {
  if (num === 0) {
    return true;
  }

  if (num === 1) {
    return false;
  }

  return num < 0 ? isEven(num * -1) : isEven(num - 2);
}
