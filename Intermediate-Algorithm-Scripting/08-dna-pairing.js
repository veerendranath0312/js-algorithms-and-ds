/*
Pairs of DNA strands consist of nucleobase pairs. 
Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. 
Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Test cases

- pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
- pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
- pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
  return str.split("").map((char) => {
    switch (char) {
      case "A":
        return [char, "T"];
      case "T":
        return [char, "A"];
      case "C":
        return [char, "G"];
      case "G":
        return [char, "C"];
    }
  });
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
