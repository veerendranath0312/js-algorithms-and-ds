/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Test cases

- fearNotLetter("abce") => should return the string d.
- fearNotLetter("abcdefghjklmno") => should return the string i.
- fearNotLetter("stvwx") => should return the string u.
- fearNotLetter("bcdf") => should return the string e.
- fearNotLetter("abcdefghijklmnopqrstuvwxyz") => should return undefined.
*/

function fearNotLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  // 1. Get the substring from alphabets using the first and last chars index of input str
  const firstCharIndex = alphabets.indexOf(str[0]);
  const lastCharIndex = alphabets.indexOf(str[str.length - 1]);

  const subString = alphabets.substring(firstCharIndex, lastCharIndex + 1);

  // 2. Create a regex that neglets a set using the input string
  const pattern = `[^${str}]`;
  const regex = new RegExp(pattern);

  // 3. Use the regex to get the missing char
  const missing = subString.match(regex);

  return missing ? missing[0] : undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
