# 🚀 JS Algorithms and Data Structures

Solutions to the [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) from [freeCodeCamp](https://www.freecodecamp.org/learn).

### New Things I Learned
- RegEx to find all the capital letters and special characters - `/\s|_|(?=[A-Z])/`
- RegEx to find all the starting consecutive consonants in a string - `/^[^aeiou]+/`
- [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
    - The replace method also takes a callback function as a second parameter that iterates through the matched characters based on a RegEx pattern.
    ```js
    const regex = /[&<>"']/g;
    str.replace(regex, (char) => { ... });
    ```
- [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) - The `findIndex()` method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, `-1` is returned.
- [parseInt(str, 2)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) - Convert a birnary string to decimal
- [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
