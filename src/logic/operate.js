import Big from 'big.js';
// Info about big.js library at https://mikemcl.github.io/big.js/#times

// Constants

const DIGIT_LIMIT = 7;

/**
 * Converts a value to exp if the number of digits is too long
 * @param  {string} value The value to check
 * @return {string}       The new value
 */
function toExponential(value) {
  if (value.toString().length > DIGIT_LIMIT) {
    return value.toExponential(1);
  }
  return value;
}

/**
 * Applies an operation to two numbers and returns the new total
 * @param  {string} valueOne The first value
 * @param  {string} valueTwo The second value
 * @param  {string} operator The operator
 * @return {string}          The total value
 */
function operate(valueOne, valueTwo, operator) {
  const one = Big(valueOne);
  const two = Big(valueTwo);

  switch (operator) {
    case '+':
      return toExponential(one.plus(two)).toString();
    case '-':
      return toExponential(one.minus(two)).toString();
    case 'x':
      return toExponential(one.times(two)).toString();
    case '÷':
      return toExponential(one.div(two)).toString();
    default:
      break;
  }
}

export default operate;
