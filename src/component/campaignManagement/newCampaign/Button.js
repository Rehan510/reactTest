import React from 'react';

const Button = ({ label, className, handleClick, keyData }) => {
  return (
    <>
      <button className={className} onClick={() => handleClick(keyData)}>
        {label}
      </button>
    </>
  );
};
export default Button;
