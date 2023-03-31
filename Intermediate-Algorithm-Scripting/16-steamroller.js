/*
Flatten a nested array. You must account for varying levels of nesting.

Test cases

- steamrollArray([[["a"]], [["b"]]]) => should return ["a", "b"].
- steamrollArray([1, [2], [3, [[4]]]]) => should return [1, 2, 3, 4].
- steamrollArray([1, [], [3, [[4]]]]) => should return [1, 3, 4].
- steamrollArray([1, {}, [3, [[4]]]]) => should return [1, {}, 3, 4].
- Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
- Global variables should not be used.
*/

function steamrollArray(arr) {
  let flatten = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten.push(...steamrollArray(arr[i]));
    } else {
      flatten.push(arr[i]);
    }
  }

  return flatten;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
