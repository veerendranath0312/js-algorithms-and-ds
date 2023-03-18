/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.

Test cases

- findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) => should return 8.
- findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) => should return undefined.
*/

function findElement(arr, func) {
  // The find method returns the first element that satisfies the given condition.
  // Otherwise, returns undefined
  let num = arr.find(func);

  console.log(num);
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
