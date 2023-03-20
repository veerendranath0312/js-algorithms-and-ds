/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

Test cases

- chunkArrayInGroups(["a", "b", "c", "d"], 2) => should return [["a", "b"], ["c", "d"]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) => should return [[0, 1, 2], [3, 4, 5]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) => should return [[0, 1], [2, 3], [4, 5]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) => should return [[0, 1, 2, 3], [4, 5]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) => should return [[0, 1, 2], [3, 4, 5], [6]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) => should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) => should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {
  const noGroups = Math.ceil(arr.length / size);

  const groups = [];
  for (let i = 0; i < noGroups; i++) {
    groups.push(arr.slice(0, size));
    arr.splice(0, size);
  }

  return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
