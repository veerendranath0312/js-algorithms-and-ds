/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Test cases

- getIndexToIns([10, 20, 30, 40, 50], 35) => should return 3.
- getIndexToIns([10, 20, 30, 40, 50], 35) => should return a number.
- getIndexToIns([10, 20, 30, 40, 50], 30) => should return 2.
- getIndexToIns([10, 20, 30, 40, 50], 30) => should return a number.
- getIndexToIns([40, 60], 50) => should return 1.
- getIndexToIns([40, 60], 50) => should return a number.
- getIndexToIns([3, 10, 5], 3) => should return 0.
- getIndexToIns([3, 10, 5], 3) => should return a number.
- getIndexToIns([5, 3, 20, 3], 5) => should return 2.
- getIndexToIns([5, 3, 20, 3], 5) => should return a number.
- getIndexToIns([2, 20, 10], 19) => should return 2.
- getIndexToIns([2, 20, 10], 19) => should return a number.
- getIndexToIns([2, 5, 10], 15) => should return 3.
- getIndexToIns([2, 5, 10], 15) => should return a number.
- getIndexToIns([], 1) => should return 0.
- getIndexToIns([], 1) => should return a number.
*/

// Using .slice()
// function getIndexToIns(arr, num) {
//   if (arr.length === 0) return 0;

//   const sortedArray = arr.sort((a, b) => a - b);

//   let newArray = [];

//   for (let i = sortedArray.length - 1; i >= 0; i--) {
//     if (num >= sortedArray[i]) {
//       newArray =
//         sortedArray[i] === num
//           ? [...sortedArray]
//           : [...sortedArray.slice(0, i + 1), num, ...sortedArray.slice(i + 1)];

//       break;
//     }
//   }

//   return newArray.indexOf(num);
// }

// Using .splice() - this method mutates the original array
// Syntax: splice(startIndex, deleteCount, item1, item2, itemN)

function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;

  // sort() modifies the original array
  arr.sort((a, b) => a - b);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (num >= arr[i]) {
      arr.splice(i + 1, 0, num);
      break;
    }
  }

  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
