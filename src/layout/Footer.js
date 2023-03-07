import Logo from '@/components/assets/Logo';
import { navItems } from '@/extra/constants';
import Link from 'next/link';
import { HiLink } from 'react-icons/hi';
import { FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import SocialBtn from '@/components/utils/SocialBtn';

const Footer = () => {
  return (
    <footer className='bg-dark1 py-16'>
      <div className='container mx-auto border-t px-8 border-light2 border-b py-16'>
        <div className='flex justify-between items-start'>
          <div>
            <Logo />
            <h2 className='text-tinyText2  mt-2.5'>
              Human Factors Research & Design
            </h2>
          </div>

          <ul className='text-menuText flex items-center space-x-10  tracking-[1px]'>
            {navItems.map(item => {
              const { id, link, name } = item;
              return (
                <li key={id} className=''>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=' my-6'>
          <h3 className='text-tinyText3 font-normal text-light3 opacity-60'>
            Have questions? email us
          </h3>
          <a
            href='mailto:contact@hfrnd.com'
            className='text-heading4  flex items-center space-x-1'
          >
            <HiLink /> contact@hfrnd.com
          </a>
        </div>
        <div className=' '>
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
        <p className='text-center text-tinyText2 mt-6 '>
          Copyright 2023. Human Factors Research & Design Pvt.Ltd . All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
