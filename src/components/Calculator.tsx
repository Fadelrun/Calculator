import React, { useState } from 'react';
import Button from './Button'; 
import Display from './Display';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('')

  const ButtonClick = (value: string) =>{
    const lastChar = display.charAt(display.length - 1);

    if (
      (value === '+' || value === '-' || value === '*' || value === '/') &&
      (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') 
    ) {
      return; 
    }
    
    if (value === '=' && (lastChar === '=' || lastChar === '')) {
      return; 
    }
    
    if (value === '.' && lastChar === '.') {
      return;
    }

    if (value === '.' && display === '') {
      return;
    }

    if (display === '0' && value === '0') {
      return;
    }

    if (display === '' && value === '0') {
      return;
    }
    
    setDisplay((prev) => prev + value)

  }

  const handleClear = () => {
    setDisplay(''); 
  };

  const handleEvaluate = () => {
    if (display === '') {
      return;
    }
    try {
      const result = eval(display);
      setDisplay(result.toString());  
    } catch (error) {
      setDisplay('Error'); 
    }
  };
  

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return(
    <div className="calculator">
      <Display display={display}/>
      <div className="button-grid">
        {buttons.map((label) => (
          <Button key={label} label={label} onClick={label === 'C' ? handleClear : label === '=' ? handleEvaluate : ButtonClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Calculator