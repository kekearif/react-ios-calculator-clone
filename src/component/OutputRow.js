import React from 'react';
import "../App.css";

function OutputRow(props) {
  return <div className="Calculator-row Output-row">{props.children}</div>;
}

export default OutputRow;
