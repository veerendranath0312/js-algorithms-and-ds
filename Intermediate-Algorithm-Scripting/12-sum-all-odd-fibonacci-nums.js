/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Test cases

- sumFibs(1) => should return a number.
- sumFibs(1000) => should return 1785.
- sumFibs(4000000) => should return 4613732.
- sumFibs(4) => should return 5.
- sumFibs(75024) => should return 60696.
- sumFibs(75025) => should return 135721.
*/

function sumFibs(num) {
  let next = 0,
    fibSum = 1,
    a = 0,
    b = 1;

  while (next <= num) {
    if (next % 2 === 1) {
      fibSum += next;
    }

    next = a + b;
    a = b;
    b = next;
  }

  return fibSum;
}

console.log(sumFibs(4));
