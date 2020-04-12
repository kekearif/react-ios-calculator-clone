import operate from './operate'

/**
 * The max number of characters that can be displayed on the screen
 * @type {Number}
 */
const DIGIT_LIMIT = 7;

/**
 * Function to check if the button value is an operator
 * @param  {string} value The button value
 * @return {boolean}      Returns true is the buttons value is an operator
 */
function valueIsOperator(value) {
  return ['+', '-', 'x', '÷'].includes(value);
}

/**
 * Performs formatting for special cases such as decimal and +/-
 * @param  {string} string The string to format
 * @param  {string} value  The value tapped
 * @return {string}        The formatted string
 */
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
    return string + value;
  } else if (string==='0') {
    return value;
  } else {
    return string + value;
  }
}

/**
 * Given an existing calculator object and button press value this will
 * calculate and return the new calculator object
 * @param  {object} calculatorObj The calculator object
 * @param  {string} value         The button value
 * @return {object}               The new calculator object
 */
export default function calculate(calculatorObj, value) {

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

  // OPERATORS

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

  // NUMBERS

  // Operator present when number is tapped
  if (calculatorObj.operator) {
    // If a next value exists just append the number
    if (calculatorObj.next) {
      if (calculatorObj.next.length === DIGIT_LIMIT) { return calculatorObj; }
      return {
        total: calculatorObj.total,
        next: formatString(calculatorObj.next, value),
        operator: calculatorObj.operator
      };
    }
    // Otherwise replace the number
    return {
      total: calculatorObj.total,
      next: formatString('0', value),
      operator: calculatorObj.operator
    };
  }

  // Operator is not present when a number is tapped
  if (calculatorObj.next) {
    if (calculatorObj.next.length === DIGIT_LIMIT) { return calculatorObj; }
    return {
      total: null,
      next: formatString(calculatorObj.next, value),
      operator: calculatorObj.operator
    };
  } else {
    return {
      total: null,
      next: formatString('0', value),
      operator: calculatorObj.operator
    };
  }

}
