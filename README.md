# 🚀 JS Algorithms and Data Structures

Solutions to the [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) from [freeCodeCamp](https://www.freecodecamp.org/learn).

### New Things I Learned
- RegEx to find all the capital letters and special characters - `/\s|_|(?=[A-Z])/`

- RegEx to find all the starting consecutive consonants in a string - `/^[^aeiou]+/`

- [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) - The `findIndex()` method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, `-1` is returned.

- [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) - Returns the ASCII code of a character at a given index.

- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
    - The replace method also takes a callback function as a second parameter that iterates through the matched characters based on a RegEx pattern.
        ```js
        const regex = /[&<>"']/g
        str.replace(regex, (char) => { ... })
        ```
    
- [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
    - It returns a string created from the specified sequence of UTF-16 code units.
        
        ```js
        const helloStr = String.fromCharCode(104, 101, 108, 108, 111)
        console.log(helloStr)   // "hello"
        ```
            


- [parseInt(str, 2)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) - Convert a birnary string to decimal


- GCD of two numbers - [Euclid's Algorithm](https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm)
    
    ```js
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    ```
- LCM of two numbers - [Using GCD](https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor)
    
    ```js
    const lcm = (a, b) => (a * b) / gcd(a, b)
    ```
- LCM of multiple numbers => https://en.wikipedia.org/wiki/Least_common_multiple#Other
  
  ```js
  [1, 2, 3, 4, 5].reduce((multiple, curr) => lcm(multiple, curr))
  ```
  
- Regular Expression Explanation
    
    ```js
    /^1?[- ]?(\d{3}|\(\d{3}\))[- ]?(\d{3})[- ]?(\d{4})$/
    ```
    - `^1?` - The number may start with digit 1
    
    - `[- ]?` - The number may optionally contain a hyphen or space. It should be placed after digit 1
    
    - `(\d{3}|\(\d{3}\))` - An OR condition. Then the number must contain three digits or three digits that are surrounded by paranthesis
        
        - `\d{3}` - Three numbers with no paranthesis. For example, 555
        
        - `\(\d{3}\)` - Three numbers with paranthesis. For example, (555)
    
    - `[- ]?` - The number may optionally contain a hyphen or space. It can be placed either after the paranthesis or following the first three digits. For example, (555)- or 555-
    
    - `(\d{3})` - Then the number must contain another three digits. For example, it can look like this: (555)-555, 555-555, 555555
    
    - `[- ]?` - It allows you to include an optional hyphen in the end, like this: (555)-555-, -555- or 555555-
    
    - `(\d{4})$` - Finally, the sequence must end with four digits. For example, (555)-555-5555, 555-555-5555, or 555555-5555.
    
![Regular Expression](image.png)
