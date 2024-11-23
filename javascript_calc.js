let currentInput = "";
let operator = null;
let firstValue = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (currentInput === "") return;
  if (firstValue === null) {
    firstValue = parseFloat(currentInput);
  }
  operator = op;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  firstValue = null;
  operator = null;
  updateDisplay("0");
}

function calculate() {
  if (firstValue === null || currentInput === "") return;

  let secondValue = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      if (secondValue === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = firstValue / secondValue;
      break;
  }

  currentInput = result.toString();
  operator = null;
  firstValue = null;
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}
