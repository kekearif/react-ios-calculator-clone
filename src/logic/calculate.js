import operate from './operate'

// Constants

const DIGIT_LIMIT = 7;

// Globals

let CALCULATE = {};


// Helper functions
//
// Note I should check the other guys github I don't think I need to return an
// entire JSON like I do

function valueIsOperator(value) {
  return ['+', '-', 'x', '÷'].includes(value);
}

function formatString(string, value) {
  if (value==='-') {
    if (string.charAt(0)==='-') {
      return string.substring(1);
    } else if (string.length < DIGIT_LIMIT) {
      return '-' + string;
    }
    return string;
  } else if (value==='.' && string.includes('.')) {
    return string;
  } else if (value==='.') {
    // Can likely remove this case
    return string + value;
  } else if (string==='0') {
    return value;
  } else {
    return string + value;
  }
}


export default function calculate(calculatorObj, value) {

  // Clear button
  if (value==='AC') {
    return {
      total: '0',
      next: null,
      operator: null
    }
  }

  if (value==='+/-') {
    if (calculatorObj.next) {
      return {
        total: calculatorObj.total,
        next: formatString(calculatorObj.next, '-'),
        operator: calculatorObj.operator
      };
    } else {
      return {
        total: formatString(calculatorObj.total, '-'),
        next: calculatorObj.next,
        operator: calculatorObj.operator
      };
    }
  }

  if (value==='%') {
    if (calculatorObj.next) {
      return {
        total: calculatorObj.total,
        next: operate(calculatorObj.next, '100', '÷'),
        operator: calculatorObj.operator
      };
    } else {
      return {
        total: operate(calculatorObj.total, '100', '÷'),
        next: calculatorObj.next,
        operator: calculatorObj.operator
      };
    }
  }

  if (value==='=') {
    if (calculatorObj.next) {
      const total = operate(
        calculatorObj.total,
        calculatorObj.next,
        calculatorObj.operator
      );
      return {
        total,
        next: null,
        operator: null
      };
    } else if (calculatorObj.operator) {
      // Operator will perform on current number twice
      const total = operate(
        calculatorObj.total,
        calculatorObj.total,
        calculatorObj.operator
      );
      return {
        total,
        next: null,
        operator: null
      };
    } else {
      return {
        total: calculatorObj.total,
        next: calculatorObj.next,
        operator: calculatorObj.operator
      }
    }
  }

  // Operator buttons
  if (valueIsOperator(value)) {
    // If has a next value do the calculation and cache new operator
    if (calculatorObj.next) {
      const total = operate(
        calculatorObj.total,
        calculatorObj.next,
        calculatorObj.operator
      );
      return {
        total,
        next: null,
        operator: value
      };
    } else {
      // Else cache the operator (note this also replaces existing operators)
      return {
        total: calculatorObj.total,
        next: calculatorObj.next,
        operator: value
      };
    }
  }

  // Number buttons
  if (calculatorObj.next) {
    if (calculatorObj.next.length === DIGIT_LIMIT) {
      return calculatorObj
    }
    return {
      total: calculatorObj.total,
      next: formatString(calculatorObj.next, value),
      operator: calculatorObj.operator
    };
  } else if (calculatorObj.operator) {
    return {
      total: calculatorObj.total,
      next: formatString('0', value),
      operator: calculatorObj.operator
    };
  } else {
    if (calculatorObj.total.length === DIGIT_LIMIT) {
      return calculatorObj
    }
    return {
      total: formatString(calculatorObj.total, value),
      next: calculatorObj.next,
      operator: calculatorObj.operator
    };
  }

}
