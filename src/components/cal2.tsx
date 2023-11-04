import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handleClick = (value: string) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="bg-dark">
      <div className='bg-dark'>
          <div className="column w-50"style={{margin: "auto"}}>
            <input className="form-control p-3" aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" value={display} readOnly />
          </div>
        <div className="body text-center bg-dark">
          <div className="column">
            <button className='m-3 btn-large ps-5 pe-5 p-3 btn btn-outline-warning' onClick={() => handleClick('7')}><h1>7</h1></button>
            <button className='m-3 btn-large  ps-5 pe-5 p-3 btn btn-outline-warning' onClick={() => handleClick('8')}><h1>8</h1></button>
            <button className='m-3 btn-large p-3 btn ps-5 pe-5 btn-outline-warning' onClick={() => handleClick('9')}><h1>9</h1></button>
            <button className='m-3 btn-large p-3 btn ps-5 pe-5 btn-outline-warning' onClick={() => handleClick('+')}><h1>+</h1></button>
          </div>
          <div className="column">
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('4')}><h1>4</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('5')}><h1>5</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('6')}><h1>6</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('-')}><h1>-</h1></button>
          </div>
          <div className="column">
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('1')}><h1>1</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('2')}><h1>2</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('3')}><h1>3</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('*')}><h1>*</h1></button>
          </div>
          <div className="column">
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={clearDisplay}><h1>C</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('0')}><h1>0</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={calculateResult}><h1>=</h1></button>
            <button className='m-3 btn-large p-3 ps-5 pe-5 btn btn-outline-warning' onClick={() => handleClick('/')}><h1>/</h1></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
