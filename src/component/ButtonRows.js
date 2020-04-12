import React, { useState } from 'react';
import Row from './Row';
import DefaultButton from './DefaultButton';
import LongButton from './LongButton';
import FunctionButton from './FunctionButton';
import SpecialButton from './SpecialButton';
import '../App.css';

function ButtonRows(props) {
  const [selectedOperator, setSelectedOperator] = useState(null);

  function clickHandler(value) {
    setSelectedOperator(value);
    props.clickHandler(value);
  }

  return (
    <div>
      <Row>
        <SpecialButton value="AC"
          clickHandler={() => clickHandler('AC')} />
        <SpecialButton value="+/-"
          clickHandler={() => clickHandler('+/-')} />
        <SpecialButton value="%"
          clickHandler={() => clickHandler('%')} />
        <FunctionButton value="÷"
          selectedOperator={selectedOperator}
          clickHandler={() => clickHandler('÷')} />
      </Row>
      <Row>
        <DefaultButton value="7"
          clickHandler={() => clickHandler('7')} />
        <DefaultButton value="8"
          clickHandler={() => clickHandler('8')} />
        <DefaultButton value="9"
          clickHandler={() => clickHandler('9')} />
        <FunctionButton value="x"
          selectedOperator={selectedOperator}
          clickHandler={() => clickHandler('x')} />
      </Row>
      <Row>
        <DefaultButton value="4"
          clickHandler={() => clickHandler('4')} />
        <DefaultButton value="5"
          clickHandler={() => clickHandler('5')} />
        <DefaultButton value="6"
          clickHandler={() => clickHandler('6')} />
        <FunctionButton value="-"
          selectedOperator={selectedOperator}
          clickHandler={() => clickHandler('-')} />
      </Row>
      <Row>
        <DefaultButton value="1"
          clickHandler={() => clickHandler('1')} />
        <DefaultButton value="2"
          clickHandler={() => clickHandler('2')} />
        <DefaultButton value="3"
          clickHandler={() => clickHandler('3')} />
        <FunctionButton value="+"
          selectedOperator={selectedOperator}
          clickHandler={() => clickHandler('+')} />
      </Row>
      <Row>
        <LongButton value='0'
          clickHandler={() => clickHandler('0')} />
        <DefaultButton value="."
          clickHandler={() => clickHandler('.')} />
        <FunctionButton value="="
          clickHandler={() => clickHandler('=')} />
      </Row>
    </div>
  );
}

export default ButtonRows;
