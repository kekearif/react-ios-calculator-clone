import React from 'react';
import Button from './Button';
import "../App.css";

function SpecialButton(props) {
  return <Button
          type="Button-special"
          text="Text-special"
          value={props.value}
          clickHandler={props.clickHandler} />;
}

export default SpecialButton;
