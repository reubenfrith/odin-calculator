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
/* function operate(firstNumber, secondNumber, operator) {
    return operator(Number(firstNumber),Number(secondNumber));
}*/





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

let numberOne = [];
let  numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation == null) {
        numberOne.push(Number(e.target.innerHTML))
    }
}));

//numberOne is the first number for the function


let operation ;
let  operands = document.querySelectorAll('.operator');
operands.forEach(operand => operand.addEventListener("click", (e) => operation = e.target.innerHTML));

let numberTwo = [];
numbers.forEach(number => number.addEventListener("click", 
function(e) 
{if (operation != null) {
        numberTwo.push(Number(e.target.innerHTML))
    }
}));

function operate(operation, numberOne, numberTwo) {
    a = numberOne.join('');
    b = numberTwo.join('');
    switch (operation) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case 'x':
        return multiply(a, b)
      case '÷':
        return divide(a, b)
      default:
        return null
    }
  }


let  equals = document.querySelector('.equals');
let ans;
equals.addEventListener("click", function() {
    ans = operate(operation, numberOne, numberTwo)
    console.log(ans)

    // reset values
    numberOne = [ans];
    numberTwo = [];
    operation = null;
}
)
