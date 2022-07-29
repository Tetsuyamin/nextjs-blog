import Link from 'next/link';
import utilStyle from '../styles/utils.module.css';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick =() => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-sky-500/75 p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4'>
            <img src="https://lh5.googleusercontent.com/fP97YzE1RSMHTCnmpl8exyCiBnPpSaoujCDKS_pFMupoLOhqhGeRbwKdasbyUYFZmHEqx302IbPz2CLv_ECwC10=w16383" className={utilStyle.size8px} role="img" aria-label="Site home" jsname="SwcDWb">

            </img>
            <span className='text-xl text-sky-600 font-bold tracking-wide'>
              &nbsp;Tetsuyamin.com
            </span>
          </a>
        </Link>
        <button className=' inline-flex p-3 hover:bg-sky-800/75 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
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
        <div className={`${ active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-sky-600 hover:text-white '>
                Home
              </a>
            </Link>

            <Link href='/posts/introduction'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-sky-600 hover:text-white'>
                About me
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};