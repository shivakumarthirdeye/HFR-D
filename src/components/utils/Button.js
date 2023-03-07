import React from 'react';

const Button = ({ className, text }) => {
  return (
    <button
      className={`inline-block h-[52px] leading-[52px]  text-center overflow-hidden animateBtn  hover:shadow-sm rounded-full ${className} transition `}
    >
      <span class='label-up'>{text}</span>
      <span class='label-up'>{text}</span>
    </button>
  );
};

export default Button;
