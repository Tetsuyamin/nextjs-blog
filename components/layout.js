import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {Navbar} from '../components/Navbar';
import {motion} from 'framer-motion';

const name = 'Ryo Hattori';
export const siteTitle = 'Tetsuyamin Blog';

export default function Layout({ children, home }) {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/tet_ua.png" />
        <meta
          name="description"
          content="Tetsuyamin's First Web Creation"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {home ? (
          <motion.div align="center" initial={{scale:0.75}} animate={{scale:1}}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className='font-bold text-5xl text-cyan-700 p-5'>{name}</h1>
            <div class='p-5'>

            </div>
          </motion.div>
        ) : (
          <motion.div align="center" initial={{scale:1}} animate={{scale:0.75}}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </a>
            </Link>
            <h1 className='font-bold text-5xl text-cyan-700 p-5'>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h1>
          </motion.div>
        )}
      </header>
      {home ? (
      <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:0}}
      >
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      </motion.div>) : (
      <motion.div
      initial={{opacity:0, x:100}}
      animate={{opacity:1, x:0}}
      transition={{delay:0}}
    >
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
    </motion.div>
      )}

    </div>
    </>
  );
}