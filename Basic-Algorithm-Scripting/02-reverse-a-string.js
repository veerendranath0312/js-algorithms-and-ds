/*
Reverse the provided string and return the reversed string
For example, "hello" should become "olleh"

Test cases

- reverseString("hello") => should return a string.
- reverseString("hello") => should return the string olleh.
- reverseString("Howdy") => should return the string ydwoH.
- reverseString("Greetings from Earth") => should return the string htraE morf sgniteerG.

*/

function reverseString(str) {
  const reverse = str.split("").reverse().join("");
  return reverse;
}

console.log(reverseString("Greetings from Earth"));
