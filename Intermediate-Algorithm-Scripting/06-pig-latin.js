/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Test cases

- translatePigLatin("california") => should return the string aliforniacay.
- translatePigLatin("paragraphs") => should return the string aragraphspay.
- translatePigLatin("glove") => should return the string oveglay.
- translatePigLatin("algorithm") => should return the string algorithmway.
- translatePigLatin("eight") => should return the string eightway.
- Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") => should return the string artzschway.
- Should handle words without vowels. translatePigLatin("rhythm") => should return the string rhythmay.
*/

// Solution 1
// function translatePigLatin(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   const chars = str.split("");

//   if (vowels.includes(str[0])) {
//     str = str + "way";
//     return str;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       break;
//     } else {
//       const char = chars.shift();
//       chars.push(char);
//     }
//   }

//   console.log(chars.join("") + "ay");
//   return chars.join("") + "ay";
// }

// Solution 2
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;

  // The match() method retrieves the result of matching a string against a regular expression.
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));
