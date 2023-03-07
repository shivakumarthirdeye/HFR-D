import React from 'react';

const Button = ({ className, text }) => {
  return (
    <button
      className={`px-8 py-[18px] text-menuText rounded-full ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
