const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numberArray) {
	let sum = 0;

  for (const value of numberArray) {
    sum += value;
  }

  return sum;
};

const multiply = function(numberArray) {
  let product = 1;

  for (const value of numberArray) {
    product *= value;
  }

  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  if (number < 0) return "ERROR";

	if (number === 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
