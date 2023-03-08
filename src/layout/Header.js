import Logo from '@/components/assets/Logo';
import Button from '@/components/utils/Button';
import { navItems } from '@/extra/constants';
import Link from 'next/link';
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header
      className='fixed top-0 backdrop-blur-[20px] w-full py-7  left-0 right-0 z-20 px-[18px] sm:px-1'
      style={{
        background: `radial-gradient(113.15% 113.94% at -1.09% 16.83%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)`,
        boxShadow: `inset -5px -5px 250px rgba(255, 255, 255, 0.02)`,
      }}
    >
      <nav className='container mx-auto flex justify-between'>
        <div>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <ul className=' items-center space-x-12 hidden lg:flex  '>
          {navItems.map(item => {
            const { id, link, name } = item;
            return (
              <li
                key={id}
                className='text-body2 nav-item relative  hover:text-[25px]  transition-all '
              >
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
          <li>
            <Button className='bg-dark1' animate text='Let’s Talk' />
          </li>
        </ul>
        <div className='block lg:hidden '>
          <button className='text-[30px]'>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
