import Link from 'next/link';
import utilStyle from '../styles/utils.module.css';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-sky-500/75 p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4'>
            <img src="/images/tet_ua.png" className={utilStyle.size8px}>

            </img>
            <span className='text-xl text-sky-900 font-medium tracking-wide'>
              &nbsp;tetsuyamin.com
            </span>
          </a>
        </Link>
        <button className=' inline-flex p-3 hover:bg-sky-800/75 rounded md:hidden lg:hidden text-white ml-auto outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${ active ? '' : 'hidden'} w-full md:inline-flex md:flex-grow md:w-auto lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto lg:inline-flex md:inline-flex lg:flex-row md:flex-row lg:ml-auto md:ml-auto lg:w-auto md:w-auto w-full lg:items-center md:items-center items-start  flex flex-col lg:h-auto md:h-auto'>
            <Link href='/'>
              <a className='md:inline-flex lg:inline-flex md:w-auto lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-sky-600 hover:text-white'>
                Home
              </a>
            </Link>

            <Link href='/posts/introduction'>
              <a className='md:inline-flex lg:inline-flex md:w-auto lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-sky-600 hover:text-white'>
                About me
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};