import { menu } from '@/constants/menu';
import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from '../../assets/images/logo.png';

const NavBar = () => {
  return (
    <section className='bg-black border-b border-b-yellow-500 py-4 opacity-90'>
      <nav className='container flex items-center justify-between'>
        <Image src={BrandLogo} alt='Brand Logo' />

        <ul className='flex gap-x-8'>
          {menu.map((item) => (
            <li key={item.id}>
              <Link
                className='text-white hover:text-yellow-500'
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
