import React, { useState } from 'react';
import Row from './Row';
import DefaultButton from './DefaultButton';
import LongButton from './LongButton';
import FunctionButton from './FunctionButton';
import SpecialButton from './SpecialButton';
import '../App.css';

function ButtonRows(props) {
  const [clearValue, setClearValue] = useState('AC');

  function clickHandler(isOperator, value) {
    // Clear button handler
    if (!isOperator) {
      setClearValue('C');
    } else if (value === 'AC') {
      setClearValue('AC');
    }
    // Need to add a handler to highlight the function buttons
    // Handle display in calculator
    props.clickHandler(isOperator, value);
  }

  return (
    <div>
      <Row>
        <SpecialButton value={clearValue}
          clickHandler={() => clickHandler(true, 'AC')} />
        <SpecialButton value="+/-"
          clickHandler={() => clickHandler(true, '+/-')} />
        <SpecialButton value="%"
          clickHandler={() => clickHandler(true, '%')} />
        <FunctionButton value="÷"
          clickHandler={() => clickHandler(true, '÷')} />
      </Row>
      <Row>
        <DefaultButton value="7"
          clickHandler={() => clickHandler(false, '7')} />
        <DefaultButton value="8"
          clickHandler={() => clickHandler(false, '8')} />
        <DefaultButton value="9"
          clickHandler={() => clickHandler(false, '9')} />
        <FunctionButton value="x"
          clickHandler={() => clickHandler(true, 'x')} />
      </Row>
      <Row>
        <DefaultButton value="4"
          clickHandler={() => clickHandler(false, '4')} />
        <DefaultButton value="5"
          clickHandler={() => clickHandler(false, '5')} />
        <DefaultButton value="6"
          clickHandler={() => clickHandler(false, '6')} />
        <FunctionButton value="-"
          clickHandler={() => clickHandler(true, '-')} />
      </Row>
      <Row>
        <DefaultButton value="1"
          clickHandler={() => clickHandler(false, '1')} />
        <DefaultButton value="2"
          clickHandler={() => clickHandler(false, '2')} />
        <DefaultButton value="3"
          clickHandler={() => clickHandler(false, '3')} />
        <FunctionButton value="+"
          clickHandler={() => clickHandler(true, '+')} />
      </Row>
      <Row>
        <LongButton value='0'
          clickHandler={() => clickHandler(false, '0')} />
        <DefaultButton value="."
          clickHandler={() => clickHandler(false, '.')} />
        <FunctionButton value="="
          clickHandler={() => clickHandler(true, '=')} />
      </Row>
    </div>
  );
}

export default ButtonRows;
