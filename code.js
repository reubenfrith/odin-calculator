/*
ADD
*/
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

/*
SUBTRACT
*/
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

/*
MULITPLY
*/
function multiply(firstNumber, secondNumber) {
    return firstNumber*secondNumber
}

/*
DIVIDE
*/
function divide(firstNumber, secondNumber) {
  if (secondNumber == 0) {
      return NaN
  }
  else {
      return firstNumber / secondNumber
  }
}

/* 
OPERATE 
-takes user inputted numbers and function and determines the answer
-if numberOne or numberTwo are not inputted then NaN is returned , ensures user enters numbers.
*/
function operate(operation, numberOne, numberTwo) {
  if (numberOne.length == 0 || numberTwo.length == 0) {
    return NaN
  }
  a = Number(numberOne.join(''));
  b = Number(numberTwo.join(''));
  switch (operation) {
    case '+':
      return add(a, b)
    case '−':
      return subtract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      return divide(a, b)
    default:
      return a
  }
}

/*
Function to display answers nicely
*/

function displayAnswer(x) {
  let convertToString = x.toString()
  if (convertToString.length > 9 && x < 999999999 ){
    x = x.toFixed(4)
  }
  else if (convertToString.length > 9 && x > 999999999 ) {
    x = x.toExponential(3)
  }
  return x
}

// select the div where answer is to be displayed

let answer = document.querySelector('.answer');

/* BUTTONS */

/* NUMBERONE
- This is the first number entered by the user
- only works if operation is null i.e. no operand has been selected yet
- accpets list of numbers which are placed in an array in the order in which they were clicked
*/

let numberOne = [];
let  numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation == null) {
        numberOne.push(e.target.innerHTML)
        answer.textContent += e.target.innerHTML;
    }
}));

/* OPERATION
- the user selects the operation they want to perform this is stored in operation
- however if user selects operation more than once then 'Use Numbers ROOKIE' is returned
- if user does not use equals and continues to select operations to perform calculations then the calculator is reset with numberOne being assigned value of answer, this allows calcutions to continue
*/

let operation ;
let operands = document.querySelectorAll('.operator');
operands.forEach(operand => operand.addEventListener("click", function(e) {
  if (operation == null) {
  operation = e.target.innerHTML
  answer.textContent += e.target.innerHTML}
  else if (operation != null) {
    ans = operate(operation, numberOne, numberTwo)
    if (isNaN(ans)) {
      ans = 'UsE NuMbErS'
    }
    answer.textContent = displayAnswer(ans)

  // reset values to continue calculations
  numberOne = [ans];
  numberTwo = [];
  operation = e.target.innerHTML
  answer.textContent += e.target.innerHTML
  }
}));

/* NUMBERTWO
- this can only be performed if an operation has been selected, otherwise similar to numberOne logic.
*/

let numberTwo = [];
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation != null) {
        numberTwo.push(e.target.innerHTML)
        answer.textContent += e.target.innerHTML;
    }
}));

/* EQUALS
- ensures that a numberOne , operation and numberTwo are inputted otherwise 'Use Numbers ROOKIE' is returned.
- once equals is selected numberOne is assigned as answer similar to if an operation is selected after a calculation.
*/

let equals = document.querySelector('.equals');
let ans;
equals.addEventListener("click", function() {
    ans = operate(operation, numberOne, numberTwo)
    if (isNaN(ans)) {
      ans = 'UsE NuMbErS'
    }
    answer.textContent = displayAnswer(ans)

  // reset values to continue calculations
  numberOne = [ans];
  numberTwo = [];
  operation = null;
})

/* CLEAR
- resets all variables and answer is cleared i.e. numberOne(0), numberTwo(0) and operation(null). 
*/

let  clear = document.querySelector('.clear');
clear.addEventListener("click", function() {
  answer.textContent = ''
  numberOne = [];
  numberTwo = [];
  operation = null;
})