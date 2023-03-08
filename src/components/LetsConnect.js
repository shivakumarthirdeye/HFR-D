import React from 'react';
import Button from './utils/Button';
import connectPng from '/public/assets/images/letsconnect.png';

const LetsConnect = () => {
  return (
    <section className='bg-dark1  relative overflow-hidden'>
      <div className='container flex'>
        <div>
          <h2 className='text-body1 sm:text-heading4 md:text-heading3 xl:text-heading2   max-w-[941px]'>
            Create Experiences that matter! Let’s Talk
          </h2>
          <div className='mt-6 lg:mt-16'>
            <Button
              animate
              text={`Let's Connect`}
              className='bg-light1 text-dark1'
            />
          </div>
        </div>
        <div className='absolute right-0 bottom-[-1s0px] sm:bottom-[-5vw] 2xl:top-0'>
          <img src={connectPng.src} alt='' className='w-[80vw] sm:w-[55vw]' />
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
