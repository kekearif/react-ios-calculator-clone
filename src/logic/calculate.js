const defaults = {
  limit: 7
};

var evalString = '0';
var didTapEquals = false;

function hasProceedingOperator() {
  return ['+', '-', '*', '/'].includes(evalString.slice(-1));
}

function isNegativeNumber(string) {
  return string.charAt(0) === '-';
}

function convertToExponential(string) {
  // Always convert back to a standard number first
  let normalForm = Number(string).toString()

  if (normalForm.length > defaults.limit) {
    return Number(normalForm).toExponential(2).toString();
  }
  return normalForm;
}

function operate(total, value) {
  // Only evaluate if there isn't a preceeding operator or AC/C is pressed
  if (!['AC', 'C', '+/-'].includes(value) && hasProceedingOperator()) {
    return total;
  }
  var evaluate;

  switch (value) {
    case 'AC':
      didTapEquals = false;
      evalString = '0';
      return '0';
    case 'C':
      didTapEquals = false;
      evalString = '0';
      return '0';
    case '+/-':
      evaluate = eval(evalString).toString();
      if (isNegativeNumber(evaluate)) {
        evaluate = evaluate.substring(1);
        evalString = evaluate;
        return evaluate;
      } else if (evaluate !== '0') {
        evalString = '-' + evaluate;
        return '-' + evaluate;
      } else {
        return evaluate;
      }
    case '%':
      evaluate = eval(evalString).toString();
      evaluate = eval(evaluate + '/100').toString();
      evalString = evaluate;
      return convertToExponential(evaluate);
    case '+':
      didTapEquals = false;
      evaluate = eval(evalString).toString();
      evalString = evaluate + value;
      return convertToExponential(evaluate);
    case '-':
      didTapEquals = false;
      evaluate = eval(evalString).toString();
      evalString = evaluate + value;
      return convertToExponential(evaluate);
    case 'x':
      didTapEquals = false;
      evaluate = eval(evalString).toString();
      evalString = evaluate + '*';
      return convertToExponential(evaluate);
    case '÷':
      didTapEquals = false;
      evaluate = eval(evalString).toString();
      evalString = evaluate + '/';
      return convertToExponential(evaluate);
    case '=':
      evaluate = eval(evalString).toString();
      evalString = evaluate;
      didTapEquals = true;
      return convertToExponential(evaluate);
    default:
      break;
  }
}

function number(total, value) {
  // Decimal handling
  if (value === '.') {
    // Block . as the last character
    if (total.length === defaults.limit - 1) {
      return total;
    }

    if (total.includes('.')) {
      return total;
    } else {
      evalString = evalString + value;
      return total + value;
    }
  }

  // Nothing to operate on if it has a proceeding operator
  if (hasProceedingOperator(evalString)) {
    evalString = evalString + value;
    return value;
  }

  // Limit handling
  if (total.length === defaults.limit) {
    return total;
  }


  // Clear display if equals was tapped
  if (didTapEquals) {
    evalString = '0';
    didTapEquals = false;
  }
  // Number handling
  if (evalString === '0') {
    evalString = value;
    return value;
  } else if (evalString === '-0') {
    evalString = '-' + value;
    return '-' + value;
  } else {
    evalString = evalString + value;
    return total + value;
  }
}

export default function calculate(total, isOperator, value) {
  if (isOperator) {
    return operate(total, value);
  } else {
    return number(total, value);
  }
}
