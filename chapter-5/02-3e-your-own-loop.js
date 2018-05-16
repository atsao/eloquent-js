/*
Write a higher-order function `loop` that provides something like a `for` loop statement.

It takes a value, a predicate, an update function, and a body function.
 */

function loop(value, predicate, update, body) {
  for (let i = value; predicate(i); i = update(i)) {
    body(i);
  }
}
