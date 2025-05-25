/*
Description:
Write a function that accepts a string, and returns 
true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of 
the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space
   after the close parentheses)
*/

function validPhoneNumber(phoneNumber) {
  //TODO: Return whether phoneNumber is in the proper form

  if (phoneNumber.length !== 14) return false;

  const splitNumber = phoneNumber.split("");

  const digitCheck =
    [...splitNumber].slice(1, 4).join("") +
    [...splitNumber].slice(6, 9).join("") +
    [...splitNumber].slice(10).join("");

  console.log(isNaN(digitCheck));

  const punctuationCheck =
    [...phoneNumber][0] === "(" &&
    [...phoneNumber][4] === ")" &&
    [...phoneNumber][5] === " " &&
    [...phoneNumber][9] === "-";

  return punctuationCheck && !isNaN(digitCheck) ? true : false;
}

const test = validPhoneNumber("(176)476-7890");

console.log(test);
