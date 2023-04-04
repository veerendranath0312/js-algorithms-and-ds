/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
    M               1000
    CM	            900
    D	              500
    CD	            400
    C	              100
    XC	            90
    L	              50
    XL	            40
    X	              10
    IX	            9
    V	              5
    IV	            4
    I	              1

All roman numerals answers should be provided in upper-case.

Test cases

- convertToRoman(2) => should return the string II.
- convertToRoman(3) => should return the string III.
- convertToRoman(4) => should return the string IV.
- convertToRoman(5) => should return the string V.
- convertToRoman(9) => should return the string IX.
- convertToRoman(12) => should return the string XII.
- convertToRoman(16) => should return the string XVI.
- convertToRoman(29) => should return the string XXIX.
- convertToRoman(44) => should return the string XLIV.
- convertToRoman(45) => should return the string XLV.
- convertToRoman(68) => should return the string LXVIII
- convertToRoman(83) => should return the string LXXXIII
- convertToRoman(97) => should return the string XCVII
- convertToRoman(99) => should return the string XCIX
- convertToRoman(400) => should return the string CD
- convertToRoman(500) => should return the string D
- convertToRoman(501) => should return the string DI
- convertToRoman(649) => should return the string DCXLIX
- convertToRoman(798) => should return the string DCCXCVIII
- convertToRoman(891) => should return the string DCCCXCI
- convertToRoman(1000) => should return the string M
- convertToRoman(1004) => should return the string MIV
- convertToRoman(1006) => should return the string MVI
- convertToRoman(1023) => should return the string MXXIII
- convertToRoman(2014) => should return the string MMXIV
- convertToRoman(3999) => should return the string MMMCMXCIX
*/

function convertToRoman(num) {
  // Converting the number to string and reversing it.
  // So that we can loop through that and get the decimal places using Math.pow()
  const numRev = num.toString().split("").reverse().join("");

  // If we see the below mapping, four digits are common: 1, 4, 5, 9
  // In the below code I used the common digits and multipled with their
  // respective decimal place to get the roman numerals
  const romanNumerals = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);

  const roman = [];

  // Looping through the reversed string
  for (let i = 0; i < numRev.length; i++) {
    // Get the digit and it's decimal place
    const digit = Number(numRev[i]);
    const digitPlace = Math.pow(10, i);

    if (digit === 0) {
      roman.push("");
    } else if (digit >= 1 && digit <= 3) {
      roman.push(romanNumerals.get(1 * digitPlace).repeat(digit));
    } else if (digit === 4) {
      roman.push(romanNumerals.get(4 * digitPlace));
    } else if (digit === 5) {
      roman.push(romanNumerals.get(5 * digitPlace));
    } else if (digit >= 6 && digit <= 8) {
      roman.push(
        romanNumerals.get(5 * digitPlace) +
          romanNumerals.get(digitPlace).repeat(digit - 5)
      );
    } else if (digit === 9) {
      roman.push(romanNumerals.get(9 * digitPlace));
    }
  }

  return roman.reverse().join("");
}

console.log(convertToRoman(3999));

/*
Understanding the code:
-----------------------

If the digit is 0 => push empty ""

If the digit is 1/2/3
    - multiply it with decimal place and repeat it by digit times
    - Ex: I, II, III, XX, CCC, ...

If the digit is 4
    - simply multiply it with decimal place
    - Ex: IV, XL, CD, ...
    
If the digit is 5
    - simply multiply it with decimal place
    - Ex: V, L, D, ...
    
If the digit is 6/7/8
    - multiply 5 with decimal place + get the roman numeral of decimal place and repeat it by digit - 5 times
    - romanNumerals.get(5 * digitPlace) + romanNumerals.get(digitPlace).repeat(digit - 5)
    - Example:
        - num = 5
          romanNumerals.get(5 * 1) + romanNumerals.get(1).repeat(5 - 5)
          "V"
        - num = 76 => 70 + 6
          romanNumerals.get(5 * 10) + romanNumerals.get(10).repeat(7 - 5)
          romanNumerals.get(50) + romanNumerals.get(10).repeat(2)
          "L" + "XX" => "LXX" => 70
          
If the digit is 9
    - simply multiply it with decimal place
    - Ex: IX, XC, CM, ...
*/
