import React from 'react';

const SocialBtn = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='w-[34px] h-[34px] bg-light1 text-dark1  text-[22px] rounded-full   flex items-center justify-center'
    >
      <Icon />
    </a>
  );
};

export default SocialBtn;
