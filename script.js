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

/*
Description:
Greed is a dice game played with five six-sided dice. Your mission, should 
you choose to accept it, is to score a throw according to these rules. You 
will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 A single die can only be counted once in each roll. 
 For example, a given "5" can only count as part of 
 a triplet (contributing to the 500 points) or as 
 a single 50 points, but not both in the same roll.

Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
 */

function score(dice) {
  // Fill me in!
  let scoreArr = [];
  let scoreObj = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
  };

  dice.forEach((num, i, arr) => {
    if (num === 1) scoreObj.one += 1;
    if (num === 2) scoreObj.two += 1;
    if (num === 3) scoreObj.three += 1;
    if (num === 4) scoreObj.four += 1;
    if (num === 5) scoreObj.five += 1;
    if (num === 6) scoreObj.six += 1;
  });

  const scoreObjCopy = { ...scoreObj };

  console.log(scoreObjCopy);

  Array.from(Object.entries(scoreObjCopy), (entry) => console.log(entry));
}

score([2, 4, 5, 5, 5, 6]);
