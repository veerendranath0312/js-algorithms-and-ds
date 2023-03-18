/**
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Test cases

- confirmEnding("Bastian", "n") => should return true.
- confirmEnding("Congratulation", "on") => should return true.
- confirmEnding("Connor", "n") => should return false.
- confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") => should return false.
- confirmEnding("He has to give me a new name", "name") => should return true.
- confirmEnding("Open sesame", "same") => should return true.
- confirmEnding("Open sesame", "sage") => should return false.
- confirmEnding("Open sesame", "game") => should return false.
- confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") => should return false.
- confirmEnding("Abstraction", "action") => should return true.
- Your code should not use the built-in method .endsWith() to solve the challenge.
*/

// Solution 1
// function confirmEnding(str, target) {
//   const strLength = str.length;
//   const targetLength = target.length;
//   const subString = str.substring(strLength - targetLength);

//   return subString === target;
// }

// Solution 2
function confirmEnding(str, target) {
  const subString = str.slice(-target.length);

  return subString === target;
}

confirmEnding("Bastian", "n");
confirmEnding("Bastian", "n");
