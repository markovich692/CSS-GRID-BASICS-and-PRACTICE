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
  console.log(phoneNumber.length);
  if (phoneNumber.length !== 14) return;

  const splitNumber = phoneNumber.split("");

  console.log(splitNumber);
}

validPhoneNumber("(123) 456-7890");
