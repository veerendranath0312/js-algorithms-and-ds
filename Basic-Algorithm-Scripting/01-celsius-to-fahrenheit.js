/*
The formula to convert from Celsius to Fahrenheit is the temparature in Celsius time 9/5, plus 32

Test cases

- convertCtoF(0)   => should return a number   
- convertCtoF(-30) => should return a value of -22
- convertCtoF(-10) => should return a value of 14
- convertCtoF(0)   => should return a value of 32
- convertCtoF(20)  => should return a value of 68
- convertCtoF(30)  => should return a value of 86

*/

function convertCtoF(celsius) {
  let fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}

console.log(convertCtoF(-30));

/*



*/
