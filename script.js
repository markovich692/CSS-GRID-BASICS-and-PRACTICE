/*
Description:
The main idea is to count all the occurring characters in a string.
 If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// function count(string) {
//   const stringSplit = string.split("");

//   stringSplit.reduce((acc, el, i, arr) => {
//     if (!acc.el) acc.el;

//     acc.el += 1;

//     console.log(acc);
//   }, {});

//   // TODO
//   return {};
// }

/*
const test1 = function (s) {
  if (!s.length) return {};
  return s.split("").reduce((acc, el, i, arr) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;

    return acc;
  }, {});
};

const test = test1("ababbah");
console.log(test);
*/
