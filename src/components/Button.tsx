import React from 'react'

type ButtonProps = {
  label: string;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <button className='button' onClick={() => onClick(label)}>
      {label}
    </button>
  )
}

export default Button