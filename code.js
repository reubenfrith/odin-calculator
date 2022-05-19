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
    return operator(firstNumber,secondNumber);
}


/*
User clicks first number = store as first number
Then,
User clicks operator = store as operator
Then,
User clicks second number = store as second number
Then,
Perform operation and retiurn result
*/