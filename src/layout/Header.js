import Logo from '@/components/assets/Logo';
import Button from '@/components/utils/Button';
import { navItems } from '@/extra/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className='fixed top-0 backdrop-blur-lg w-full py-6'
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
        <ul className='flex items-center space-x-12  text-light1'>
          {navItems.map(item => {
            const { id, link, name } = item;
            return (
              <li key={id} className='text-body2 font-normal'>
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
          <li>
            <Button className='bg-dark1' text='Let’s Talk' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
