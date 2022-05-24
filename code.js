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


const addition = document.querySelector('.addition');
addition.addEventListener("click", () => add());

const addition = document.querySelector('.seven');
let numberOne = addition.addEventListener("click", (e) => this.value);


