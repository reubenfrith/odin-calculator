/*
ADD
- create add function
- addition takes two numbers and returns result
*/
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

/*
SUBTRACT
- create subtract function
*/
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

/*
MULITPLY
- create multiply function
*/
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

/*
DIVIDE
- create divide function
*/
function divide(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        return "ROOKIE"
    }
    else {
        return firstNumber / secondNumber
    }
}

/*
OPERATE
- takes initial number, operater and second number (in that order) and returns result
*/
function operate(firstNumber, secondNumber, operator) {
    return operator(Number(firstNumber),Number(secondNumber));
}

/*
function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}
*/



/*
User clicks first number = store as first number
Then,
User clicks operator = store as operator
Then,
User clicks second number = store as second number
Then,
Perform operation and retiurn result
*/

/* BUTTONS */

//let operationObject = {numberOne: 'Data', numberTwo: ' ', operation: 'operand'};
let numberOne = [];

let  numbers = document.querySelectorAll('.number');
console.log(typeof numbers)
console.log(numbers)
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation == null) {
        numberOne.push(e.target.innerHTML)
    }
}));

//numberOne is the first number for the function

let operation ;

let  operands = document.querySelectorAll('.operator');
console.log(typeof operands)
console.log(operands)
operands.forEach(operand => operand.addEventListener("click", (e) => operation = e.target.innerHTML));


let numberTwo = [];

console.log(typeof numbers)
console.log(numbers)
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation != null) {
        numberTwo.push(e.target.innerHTML)
    }
}));

// then join sequence of numbers until an operation is clicked this will
// fotm the number One 
//then once operation is clicked , this will be operand , then enter second number and store . Then perform operation -> begina again




//console.log(someObject.aProperty);
