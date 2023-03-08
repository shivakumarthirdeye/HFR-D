import React from 'react';

const Button = ({ className, text, animate }) => {
  return (
    <button
      className={`${
        animate &&
        'transition duration-300 hover:bg-blue1 hover:text-light1 animateBtn'
      } inline-block h-[44px] leading-[44px] lg:h-[52px] lg:leading-[52px]  text-center overflow-hidden px-7 md:px-9   rounded-full ${className}  font-medium  `}
    >
      {animate ? (
        <>
          <span className='label-up'>{text}</span>
          <span className='label-up'>{text}</span>
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;
