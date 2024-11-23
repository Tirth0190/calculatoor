$(document).ready(function () {
  let currentNumber = '';
  let previousNumber = '';
  let operator = '';

  // Append a number to the display
  function appendNumber(number) {
      currentNumber += number;
      $('#display').val(currentNumber);
  }

  // Set the operator
  function setOperator(op) {
      if (currentNumber === '') return; // Do nothing if no number is entered
      if (operator !== '') calculate(); // Calculate if an operator is already set

      operator = op;
      previousNumber = currentNumber;
      currentNumber = '';
  }

  // Clear the display
  function clearDisplay() {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      $('#display').val('');
  }

  // Perform the calculation
  function calculate() {
      if (previousNumber === '' || currentNumber === '' || operator === '') return;

      let result;
      const num1 = parseFloat(previousNumber);
      const num2 = parseFloat(currentNumber);

      switch (operator) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case '*':
              result = num1 * num2;
              break;
          case '/':
              result = num2 === 0 ? 'Error' : num1 / num2; // Handle division by zero
              break;
          default:
              return;
      }

      currentNumber = result.toString();
      $('#display').val(currentNumber);

      // Reset for next calculation
      previousNumber = '';
      operator = '';
  }

  // Bind button clicks to functions
  $('.button').on('click', function () {
      const value = $(this).text();

      if ($.isNumeric(value)) {
          appendNumber(value);
      } else if (['+', '-', '*', '/'].includes(value)) {
          setOperator(value);
      } else if (value === 'C') {
          clearDisplay();
      } else if (value === '=') {
          calculate();
      }
  });
});
