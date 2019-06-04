import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionButton buttonClass="clear" text="clear" />
      <NumberButton buttonStyle="red" text="&divide;"/>
      <NumberButton buttonStyle="white" text="7"/>
      <NumberButton buttonStyle="white" text="8"/>
      <NumberButton buttonStyle="white" text="9"/>
      <NumberButton buttonStyle="red" text="&times;"/>
      <NumberButton buttonStyle="white" text="4"/>
      <NumberButton buttonStyle="white" text="5"/>
      <NumberButton buttonStyle="white" text="6"/>
      <NumberButton buttonStyle="red" text="&minus;"/>
      <NumberButton buttonStyle="white" text="1"/>
      <NumberButton buttonStyle="white" text="2"/>
      <NumberButton buttonStyle="white" text="3"/>
      <NumberButton buttonStyle="red" text="&#61;"/>
    </div>
  );
};

export default App;
