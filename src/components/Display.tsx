import React from 'react';


interface DisplayProps {
  display: string;
}

const Display: React.FC<DisplayProps> = ({ display }) => {
  
  const fontSize = display.length > 10 ? '1.5rem' : '2.5rem';  

  return (
    <div className="display" style={{ fontSize }}>
      {display}
    </div>
  );
};

export default Display;
