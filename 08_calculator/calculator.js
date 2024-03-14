const add = function(numOne, numbTwo) {
	return numOne + numbTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item);
};

const power = function(num, power) {
  let array = [];
  for (let i = 0; i < power; i++) {
    array.push(num);
  } 
  return array.reduce((total, item) => total * item);
};

const factorial = function(num) {
  let array = [];
  let originalNum = num;
  
for (let i = 0; i < originalNum; i++) {
  let numFactor = num--;
  array.push(numFactor);
}

return array.reduce((total, item) => total * item, 1);
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
