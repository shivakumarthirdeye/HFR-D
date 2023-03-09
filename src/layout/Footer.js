import Logo from '@/components/assets/Logo';
import { navItems } from '@/extra/constants';
import Link from 'next/link';
import { HiLink } from 'react-icons/hi';
import { FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import SocialBtn from '@/components/utils/SocialBtn';

const Footer = () => {
  return (
    <footer className='bg-dark1 py-16 px-4 md:px-0'>
      <div className='container mx-auto border-t px-8 border-light2 border-b py-16'>
        <div className='flex justify-center flex-col lg:flex-row lg:justify-between  items-center lg:items-start'>
          <div>
            <Logo className='mx-auto lg:mx-0' />
            <h2 className='text-tinyText2  mt-2.5'>
              Human Factors Research & Design
            </h2>
          </div>

          <ul className='text-sm md:text-menuText my-6 text-center  grid grid-cols-2 gap-5 md:flex items-center space-x-10  tracking-[1px]'>
            {navItems.map(item => {
              const { id, link, name } = item;

              return (
                <li key={id}>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=' text-center lg:text-left my-6'>
          <h3 className=' text-tinyText3 font-normal text-light3 opacity-60'>
            <span className='md:block hidden'>Have questions? email us</span>
            <span className='md:hidden'>Email Us On</span>
          </h3>
          <a
            href='mailto:contact@hfrnd.com'
            className='text-body2 text-center  md:text-heading4  mx-auto lg:mx-0 flex w-fit items-center space-x-1 hover:text-blue1 transition-colors  duration-300'
          >
            <HiLink /> contact@hfrnd.com
          </a>
        </div>
        <div className='flex flex-col items-center lg:block'>
          <h3 className='text-tinyText3 font-normal text-light3 opacity-60'>
            Follow Us On
          </h3>
          <div className='flex space-x-5 items-center mt-4'>
            <SocialBtn Icon={FaLinkedinIn} link='https://in.linkedin.com/' />
            <SocialBtn Icon={FaYoutube} link='https://youtube.com/' />
          </div>
        </div>
      </div>
      <div>
        <p className='text-center text-xs  md:text-tinyText2 mt-6 '>
          Copyright 2023. Human Factors Research & Design Pvt.Ltd . All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
