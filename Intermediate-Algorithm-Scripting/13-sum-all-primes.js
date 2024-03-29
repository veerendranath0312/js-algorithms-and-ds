/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

Test cases

- sumPrimes(10) => should return a number.
- sumPrimes(10) => should return 17.
- sumPrimes(977) => should return 73156.
*/

function sumPrimes(num) {
  let sum = 0;

  while (num >= 2) {
    let isPrime = true;

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += num;
    }

    num--;
  }

  return sum;
}

console.log(sumPrimes(10));
