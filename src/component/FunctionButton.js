import React from 'react';
import Button from './Button';
import "../App.css";

function FunctionButton(props) {
  return <Button
          type="Button-function"
          value={props.value}
          selectedOperator = {props.selectedOperator}
          clickHandler={props.clickHandler} />;
}

export default FunctionButton;
