import Link from 'next/link';
import utilStyle from '../styles/utils.module.css';

export const Navbar = () => {
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
        <button className=' inline-flex p-3 hover:bg-sky-800/75 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
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
      </nav>
    </>
  );
};