const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  if (numbers.length === 0) return 0;
	let sum = 0;
  for (const number of numbers) {
    sum += number
  }
  return sum;
};

const multiply = function(numbers) {
  let product = numbers[0];
  numbers.splice(0,1);
  for (const number of numbers) {
    product *= number;
  }
  return product;
};

const power = function(base, exponent) {
	let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
  if (number === 0) return 1;
	let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result
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
