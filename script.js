const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.display');

let calculation = [];
let accumulativeCalculation;

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

function calculate(button) {
  const value = button.textContent;

  if (value === 'C') {
    calculation = [];
    screenDisplay.textContent = '0';
  } else if (value === '=') {
    const result = eval(accumulativeCalculation);
    screenDisplay.textContent = result.toFixed(2); // Round result to 2 decimal places
  } else if (isOperator(value)) {
    const lastCharacter = calculation[calculation.length - 1];

    if (!isOperator(lastCharacter)) {
      calculation.push(value);
      accumulativeCalculation = calculation.join('');
      screenDisplay.textContent = accumulativeCalculation;
    }
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener('click', () => calculate(button))
);
