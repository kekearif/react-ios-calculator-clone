import React, { useState } from 'react';
import Container from './component/Container';
import OutputRow from './component/OutputRow';
import ButtonRows from './component/ButtonRows';
import TopPanel from './component/TopPanel';
import BottomPanel from './component/BottomPanel';
import calculate from './logic/calculate';
import './App.css';

function Calculator() {
  const [caclulatorObj, setCalculatorObj] = useState({
    total: '0',
    next: null,
    operator: null
  });

  // What is the isOperator call for?
  // I can likely remove that

  function clickHandler(isOperator, value) {
    setCalculatorObj(calculate(caclulatorObj, value));
  }

  // If the calculator object has a next value show that, otherwise show the
  // total.
  return (
    <div className="Calculator">
      <TopPanel />
      <OutputRow>
        {caclulatorObj.next ? (caclulatorObj.next) : (caclulatorObj.total)}
      </OutputRow>
      <ButtonRows clickHandler={clickHandler} />
      <BottomPanel />
    </div>
  );
}

function App() {
  return <Container><Calculator /></Container>;
}

export default App;
