document.addEventListener("DOMContentLoaded", function() {
  let clear = document.querySelector('.clear');
  let deletet = document.querySelector('.delete');
  let equals = document.querySelector('.equal');
  let decimal = document.querySelector('.decimal');

  let numbers = document.querySelectorAll('.btn-number');
  let operators = document.querySelectorAll('.btn-operator');

  let previousScreen = document.querySelector('.previous');
  let currentScreen = document.querySelector('.current');

  numbers.forEach((number) => number.addEventListener('click', function(e){
      handleNumber(e.target.textContent)
      currentScreen.textContent = currentValue;
  }))

  operators.forEach((op) => op.addEventListener('click', function(e) { 
    handleOperation(e.target.textContent)
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  }))

  clear.addEventListener('click', function() { 
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = previousValue;
    currentScreen.textContent = currentValue;
  });
  equals.addEventListener('click', function() { 
    calculate()
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
  })
  deletet.addEventListener('click', function() { 
    if (currentValue == null) { 
      return
    } else { 
      currentValue = currentValue.slice(0,-1);
      currentScreen.textContent = currentValue;
    }
  })
  decimal.addEventListener('click', function() { 
    currentValue += '.';
    currentScreen.textContent = currentValue;
  })
})

function handleNumber(num) { 
  if (currentValue.length <= 10){
  currentValue += num;
  }
}
function handleOperation(op) { 
  if (operator && currentValue) {
    calculate();
  }
    operator = op;
    previousValue = currentValue;
    currentValue = ''
}

function calculate() { 
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === '+') {
    previousValue += currentValue;
  } else if (operator === "-") { 
    previousValue -= currentValue;
  } else if (operator === "\u00D7") {
    previousValue *= currentValue;
  } else { 
    previousValue /= currentValue;
  }
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

let operator = '';
let previousValue = '';
let currentValue = '';
