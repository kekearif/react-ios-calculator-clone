// Constants

const DIGIT_LIMIT = 7;

// Global Vars

let CALCULATE = {};
CALCULATE.evalString  = '0';
CALCULATE.didTapEquals = false;

// Helper Functions

function hasProceedingOperator() {
  console.log('slice ' + CALCULATE.evalString.slice(-1));
  return ['+', '-', '*', '/'].includes(CALCULATE.evalString.slice(-1));
}

function isNegativeNumber(string) {
  return string.charAt(0) === '-';
}

function convertToExponential(string) {
  // Always convert back to a standard number first
  let normalForm = Number(string).toString()

  if (normalForm.length > DIGIT_LIMIT) {
    return Number(normalForm).toExponential(2).toString();
  }
  return normalForm;
}

// Main Functions

function operate(total, value) {
  // Use new operator
  if (hasProceedingOperator()) {
    CALCULATE.evalString = CALCULATE.evalString.slice(0, -1);
  }

  let evaluate;

  switch (value) {
    case 'AC':
      CALCULATE.didTapEquals = false;
      CALCULATE.evalString  = '0';
      return '0';
    case '+/-':
      evaluate = eval(CALCULATE.evalString ).toString();
      if (isNegativeNumber(evaluate)) {
        evaluate = evaluate.substring(1);
        CALCULATE.evalString  = evaluate;
        return evaluate;
      } else if (evaluate !== '0') {
        CALCULATE.evalString  = '-' + evaluate;
        return '-' + evaluate;
      } else {
        return evaluate;
      }
    case '%':
      evaluate = eval(CALCULATE.evalString ).toString();
      evaluate = eval(evaluate + '/100').toString();
      CALCULATE.evalString  = evaluate;
      return convertToExponential(evaluate);
    case '+':
      CALCULATE.didTapEquals = false;
      evaluate = eval(CALCULATE.evalString ).toString();
      CALCULATE.evalString  = evaluate + value;
      return convertToExponential(evaluate);
    case '-':
      CALCULATE.didTapEquals = false;
      evaluate = eval(CALCULATE.evalString ).toString();
      CALCULATE.evalString  = evaluate + value;
      return convertToExponential(evaluate);
    case 'x':
      CALCULATE.didTapEquals = false;
      evaluate = eval(CALCULATE.evalString ).toString();
      CALCULATE.evalString  = evaluate + '*';
      return convertToExponential(evaluate);
    case '÷':
      CALCULATE.didTapEquals = false;
      evaluate = eval(CALCULATE.evalString ).toString();
      CALCULATE.evalString  = evaluate + '/';
      return convertToExponential(evaluate);
    case '=':
      evaluate = eval(CALCULATE.evalString ).toString();
      CALCULATE.evalString  = evaluate;
      CALCULATE.didTapEquals = true;
      return convertToExponential(evaluate);
    default:
      break;
  }
}

function number(total, value) {
  // Decimal handling
  if (value === '.') {
    if (hasProceedingOperator()) {
      CALCULATE.evalString = CALCULATE.evalString + '0.';
      return '0.';
    } else if (CALCULATE.didTapEquals) {
      CALCULATE.evalString = '0.'
      CALCULATE.didTapEquals = false;
      return CALCULATE.evalString;
    } else if (total.length === DIGIT_LIMIT - 1) {
      return total;
    } else if (total.includes('.')) {
      return total;
    } else {
      CALCULATE.evalString  = CALCULATE.evalString  + value;
      return total + value;
    }
  }

  // Nothing to operate on if it has a proceeding operator
  if (hasProceedingOperator()) {
    CALCULATE.evalString  = CALCULATE.evalString  + value;
    return value;
  }

  // Limit handling
  if (total.length === DIGIT_LIMIT) {
    return total;
  }

  // Clear display if equals was tapped
  if (CALCULATE.didTapEquals) {
    CALCULATE.evalString  = '0';
    CALCULATE.didTapEquals = false;
  }
  // Number handling
  if (CALCULATE.evalString  === '0') {
    CALCULATE.evalString  = value;
    return value;
  } else if (CALCULATE.evalString  === '-0') {
    CALCULATE.evalString  = '-' + value;
    return '-' + value;
  } else {
    CALCULATE.evalString  = CALCULATE.evalString  + value;
    return total + value;
  }
}

export default function calculate(total, isOperator, value) {
  if (isOperator) {
    return operate(total, value);
  }
  return number(total, value);
}
