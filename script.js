/*
Description:
ATM machines allow 4 or 6 digit PIN codes and PIN codes 
cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN(pin) {
  //return true or false

  const digitCheck = pin
    .split("")
    .map((digit) => {
      return isNaN(parseFloat(digit));
    })
    .some((bool) => bool === true)
    ? false
    : true;

  const checkSize = pin.trim().length === 4 || pin.trim().length === 6;
  return digitCheck && checkSize;
}

const test = validatePIN("12350 ");
console.log(test);
