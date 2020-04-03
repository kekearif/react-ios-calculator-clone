import React from 'react';
import Button from './Button';
import "../App.css";

function DefaultButton(props) {
  return <Button
          value={props.value}
          clickHandler={props.clickHandler} />;
}

export default DefaultButton;
