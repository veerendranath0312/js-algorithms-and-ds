/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Test cases

- sumAll([1, 4]) => should return a number.
- sumAll([1, 4]) => should return 10.
- sumAll([4, 1]) => should return 10.
- sumAll([5, 10]) => should return 45.
- sumAll([10, 5]) => should return 45.
*/

// Solution 3
function sumOfnNumbers(n) {
  return (n * (n + 1)) / 2;
}

function sumAll(arr) {
  let [first, second] = arr;

  if (first > second) {
    [first, second] = [second, first];
  }

  let sum = sumOfnNumbers(second) - sumOfnNumbers(first - 1);

  return sum;
}

console.log(sumAll([4, 1]));

// =========================================================
// Solution 2
// function sumAll(arr) {
//   let [first, second] = arr;

//   if (first > second) {
//     [first, second] = [second, first];
//   }

//   let sum = (second * (second + 1)) / 2 - (first * (first + 1)) / 2 + first;

//   return sum;
// }

// =========================================================
// Solution 1
// function sumAll(arr) {
//   let [first, second] = arr;

//   if (first > second) {
//     [first, second] = [second, first];
//   }

//   let sum = 0;

//   for (let i = first; i <= second; i++) {
//     sum += i;
//   }

//   return sum;
// }
// =========================================================
