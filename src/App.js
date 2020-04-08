import React, { useState } from 'react';
import Container from './component/Container';
import OutputRow from './component/OutputRow';
import ButtonRows from './component/ButtonRows';
import TopPanel from './component/TopPanel';
import BottomPanel from './component/BottomPanel';
import calculate from './logic/calculate';
import './App.css';

function Calculator() {
  const [total, setTotal] = useState('0');

  function clickHandler(isOperator, value) {
    setTotal(calculate(total, isOperator, value));
  }

  return (
    <div className="Calculator">
      <TopPanel />
      <OutputRow>{total}</OutputRow>
      <ButtonRows clickHandler={clickHandler} />
      <BottomPanel />
    </div>
  );
}

function App() {
  return <Container><Calculator /></Container>;
}

export default App;
