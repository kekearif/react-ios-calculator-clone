import React from 'react';
import Button from './Button';
import "../App.css";

function LongButton(props) {
  return <Button
          type="Button-long"
          value={props.value}
          clickHandler={props.clickHandler} />;
}

export default LongButton;
