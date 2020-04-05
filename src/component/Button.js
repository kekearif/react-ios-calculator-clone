import React from 'react';
import "../App.css";

function Button(props) {
  var buttonClassName = "Button-default" + (` ${props.type}` || "" );
  var textClassName = "Text-default" + (` ${props.text}` || "" );
  if (props.selectedOperator === props.value) {
    buttonClassName += " Button-function-selected";
    textClassName += " Text-default-selected"
  }

  return (
    <button
      className={buttonClassName}
      onClick={props.clickHandler}>
      <div className={textClassName}>
        {props.value}
      </div>
    </button>
  );
}

export default Button;
