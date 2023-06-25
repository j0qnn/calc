
  var operator = ''; // Variable to store the selected operator
  var firstValue = ''; // Variable to store the first value
  var secondValue = ''; // Variable to store the second value


  function displayValue(value) {
    var display = document.getElementById("calculatorDisplay");
  
    if (operator === '') {
      if (display.innerHTML === "0") {
        display.innerHTML = value;
      } else {
        display.innerHTML += value;
      }
      firstValue = parseFloat(display.innerHTML);
    } else {
      if (display.innerHTML === "0") {
        display.innerHTML = value;
      } else {
        display.innerHTML += value;
      }
      secondValue = parseFloat(display.innerHTML.substring(display.innerHTML.indexOf(operator) + 1));
    }
  }
  

  // Function to reset the calculator display and variables
  function resetDisplay() {
    var display = document.getElementById("calculatorDisplay");
    display.innerHTML = "0";
    operator = '';
    firstValue = '';
    secondValue = '';
  }

  // Function to store the selected operator
  function selectOperator(selectedOperator) {
    operator = selectedOperator;
    var display = document.getElementById("calculatorDisplay");
    display.innerHTML += selectedOperator;
  }

  // Function to perform the operation
  function performOperation() {
    var display = document.getElementById("calculatorDisplay");


    let a = firstValue;
    let b = secondValue;

    if (operator === '+') {
      display.innerHTML = add(a, b);
    } else if (operator === '-') {
      display.innerHTML = sub(a, b);
    } else if (operator === '*') {
      display.innerHTML = mult(a, b);
    } else if (operator === '/') {
      display.innerHTML = divi(a, b);
    } else {
      display.innerHTML = "ERROR";
    }

    // Reset variables
    firstValue = display.innerHTML;
    secondValue = '';
    operator = '';
  }

  // Calculator operation functions (add, sub, mult, divi)

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function divi(a, b) {
    return a / b;
  }

