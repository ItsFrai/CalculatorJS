let deletet = document.querySelector('.delete');
deletet.addEventListener('click', deleteVal);

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearButton);

let equals = document.querySelector('.equal');
equals.addEventListener('click', calculate);

let screen = document.querySelector('.display');
let mainbuttons = document.querySelectorAll(".mainbuttons button");

mainbuttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent !== "=") {
        appendNumber(button.textContent);
      }
    });
  });
  

function appendNumber(number) {
    if (screen.textContent.trim() === '0') {
        screen.textContent = '';
    } 
    screen.textContent += number;
}

function deleteVal() {
    if (screen.textContent === null) {
        return;
    } else {
        screen.textContent = screen.textContent.trim().slice(0, -1);
    }
}

function clearButton() {
    screen.textContent = '0';
}

let fullSum = 0;
let hasCalculated = false;

function calculate() {
    let expression = screen.textContent;
    if (expression === '') {
        return;
    }

    let result = evaluateExpression(expression);
    screen.textContent = result;
}

function evaluateExpression(expression) {
    expression = expression.replace(/\s/g, '');
  
    const operators = ['+', '-', '\u00D7', '\u00F7'];
    let operator;
    let numbers;
  
    for (const op of operators) {
      const index = expression.indexOf(op);
      if (index !== -1) {
        operator = op;
        numbers = expression.split(op);
        break;
      }
    }
  
    if (!operator || numbers.length !== 2) {
      return 'Error: Invalid expression';
    }
  
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
  
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '\u00D7':
        return multiply(num1, num2);
      case '\u00F7':
        return divide(num1, num2);
      default:
        return 'Error: Invalid operator';
    }
  }
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}
  