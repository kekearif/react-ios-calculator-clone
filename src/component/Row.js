import React from 'react';
import "../App.css";

function Row(props) {
  return <div className="Calculator-row">{props.children}</div>;
}

export default Row;
