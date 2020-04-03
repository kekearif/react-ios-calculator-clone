import React from 'react';
import "../App.css";

function Button(props) {
  return (
    <button
      className={"Button-default" + (` ${props.type}` || "" )}
      onClick={props.clickHandler}>
      <div className={"Text-default" + (` ${props.text}` || "" )}>
        {props.value}
      </div>
    </button>
  );
}

export default Button;
