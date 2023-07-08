import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNumber1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = Number(num1) * Number(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = Number(num1) / Number(num2);
    setResult(quotient);
  };

  return (
    <div className="calculator-container">
     <div className='calculator-line'> <h1>Calculator</h1><br/><h2>Instruction</h2><p>First Provide The Two Input And Then Click The Buttton For The Operation To Perform </p></div>
      <div className="calculator-inputs">
      <input type="number" value={num1} onChange={handleNumber1Change} />
      <input type="number" value={num2} onChange={handleNumber2Change} />
      </div>
      <div className="calculator-buttons">
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      </div>
      <h2>Result:{result}</h2>
    </div>
  );
}

export default Calculator;
