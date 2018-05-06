/*
Write a program that uses `console.log` to print all numbers from 1 to 100, with three exceptions.

1. For numbers divisible by 3, print "Fizz"
2. For numbers divisible by 5, print "Buzz"
3. For numbers divisible by both 3 and 5, print "FizzBuzz"
 */

for (let i = 1; i <= 100; i += 1) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
