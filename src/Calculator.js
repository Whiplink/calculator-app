function calculate(expression) {
  let str = expression;
  const ops = ['+', '-', 'x', '/'];
  if (ops.includes(str[0])) return 'Syntax Error';
  if (ops.includes(str[str.length - 1])) return 'Syntax Error';

  let numberCheck = str.split(/[+\-x/]/);
  if (numberCheck.includes('')) return 'Syntax Error';
  // Function to perform a single operation
  function operate(a, operator, b) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case 'x':
        return a * b;
      case '/':
        if (b === 0) {
          return 'Syntax Error';
        }
        return a / b;
      default:
        return 'Syntax Error';
    }
  }

  // Split the expression into numbers and operators
  let numbers = expression.split(/[\+\-\/x]/).map(Number);
  let operators = expression.split(/[0-9\.]+/).filter((op) => op);

  // Perform operations based on PEMDAS rule
  // First, handle multiplication and division
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 'x' || operators[i] === '/') {
      let result = operate(numbers[i], operators[i], numbers[i + 1]);
      if (result === 'Syntax Error') return result;
      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }
  }

  // Then, handle addition and subtraction
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    result = operate(result, operators[i], numbers[i + 1]);
    if (result === 'Syntax Error') return result;
  }

  return result;
}

export default calculate;
