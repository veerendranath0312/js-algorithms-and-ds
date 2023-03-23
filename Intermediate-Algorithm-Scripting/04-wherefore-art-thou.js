/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

Test cases

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) => should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) => should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) => should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) => should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) => should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) => should return []
whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) => should return []
*/

// function whatIsInAName(collection, source) {
//   const newArray = [];
//   const sourceKeys = Object.keys(source);
//   for (let i = 0; i < collection.length; i++) {
//     let count = 0;
//     for (let j = 0; j < sourceKeys.length; j++) {
//       if (collection[i][sourceKeys[j]] === source[sourceKeys[j]]) {
//         count++;
//         if (count === sourceKeys.length) {
//           newArray.push(collection[i]);
//         }
//       }
//     }
//   }

//   return newArray;
// }

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  const newArray = collection.filter((obj) => {
    return sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    );
  });

  return newArray;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
