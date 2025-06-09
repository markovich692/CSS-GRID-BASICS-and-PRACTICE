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
/*
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
*/

/*
You will be given an array of objects (associative arrays in PHP) 
representing data about developers who have signed up to attend the
next coding meetup that you are organising. The list is ordered
according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who
 has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:





function getFirstPython(list) {
  // Thank you for checking out my kata :)

  const hasPython = list.find((obj) => {
    return obj.language === "Python";
  });

  if (!hasPython) return "There will be no Python developers";

  return `${hasPython.firstName}, ${hasPython.country}`;
}

let list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
];

console.log(getFirstPython(list1));
*/

/*
There is an array with some numbers. All numbers are equal except
for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:


function findUniq(arr) {
  // do magic

  const [a, b, c] = arr;

  console.log(a, b, c);

  const similar = a === b ? a : a === c ? a : b;

  return arr.find((el) => el !== similar);
}

console.log(findUniq([0, 0, 0, 0, 6]));
*/

/*
Implement a function that computes the difference between two lists.
The function should remove all occurrences of elements from the first 
list (a) that are present in the second list (b). The order of elements
 in the first list should be preserved in the result.
Examples

If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


function arrayDiff(a, b) {
  let arr = [];

  if (!b.length) return a;

  a.forEach((num) => {
    b.includes(num) ? arr : arr.push(num);
  });
  return arr;
}

arrayDiff([1, 2, 3], [1, 2]);
*/

/*
Description:

A child is playing with a ball on the nth floor of a tall building. 
The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example),
 to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of
 her window (including when it's falling and bouncing)?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive
integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball 
is strictly greater than the window parameter.


function bouncingBall(h, bounce, window) {
  // your code here
  let pass = -1;
  //Initial condition

  while (h > 0 && bounce > 0 && bounce < 1 && h > window) {
    pass = pass === -1 ? 1 : pass + 2;

    h = bounce * h;
  }

  return pass;
}

bouncingBall(3.0, 0.66, 1.5);
*/

/*
The cockroach is one of the fastest insects. Write a function which 
takes its speed in km per hour and returns it in cm per second, rounded
down to the integer (= floored).

function cockroachSpeed(s) {
  //Good Luck!
  if (s < 0) return;
  const newSpeed = Math.ceil((s * 100000) / (1 * 60 * 60));
  return newSpeed;
}

cockroachSpeed(1.05);
*/

/*
Write a function that removes the spaces from the string,
then return the resultant string.

Examples (Input -> Output):
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

/*
function noSpace(x) {
  return x.split(" ").join("");
}
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
*/

/*
Description:
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only 
once in the original string, or ")" if that character appears more than
once in the original string. Ignore capitalization when determining if
a character is a duplicate.

EXAMPLES

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not
the input!
*/

function duplicateEncode(word) {
  const wordSplit = [...word.toLowerCase()];

  console.log(wordSplit);
}

duplicateEncode("Success");
