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


function operate() {
    let a = parseFloat(prompt("number 1:"));
    let o = prompt("+ - * or /");
    let b = parseFloat(prompt("number 2:"));
  
    if (o === "+") {
      return add(a, b);
    } else if (o === "-") {
      return sub(a, b);
    } else if (o === "*") {
      return mult(a, b);
    } else if (o === "/") {
      return divi(a, b);
    } else {
      return "ERROR";
    }
  }

  