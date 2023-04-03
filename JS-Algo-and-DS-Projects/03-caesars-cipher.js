/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Test cases

- rot13("SERR PBQR PNZC") => should decode to the string FREE CODE CAMP
- rot13("SERR CVMMN!") => should decode to the string FREE PIZZA!
- rot13("SERR YBIR?") => should decode to the string FREE LOVE?
- rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") => should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    // Get the ascii code of a character
    let ascii = str.charCodeAt(i);

    // Check if the ascii value in the capital letters range: 65 - 90
    // If yes, then shift the char by 13 places
    if (ascii >= 65 && ascii <= 90) {
      ascii += 13;

      ascii = ascii > 90 ? ascii - 90 + 64 : ascii;

      cipher += String.fromCharCode(ascii);

      // else, add the char as it is
    } else {
      cipher += String.fromCharCode(ascii);
    }
  }

  return cipher;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
