import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { motion } from "framer-motion"

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className='items-center flex-wrap font-bold bg-cyan-700 text-yellow-200 p-3 text-2xl border-b-4 border-cyan-500'>Blog</h2>
        <div class='p-1'></div>
        <motion.ul className={utilStyles.list} variants={list} initial="hidden" animate="visible">
          {allPostsData.map(({ id, date, title }) => (
            <>
            <Link href={`/posts/${id}`}>
              <motion.li variants={item} className='ml-4 mr-2 items-center flex-wrap text-teal-900 font-medium bg-teal-400 hover:bg-teal-300 p-3 cursor-pointer border-solid border-teal-500 border-2 border-b-8 hover:border-b-4 hover:mt-1 rounded-md' key={id}>
                  <a>{title}</a>
                <br/>
                <small className={`text-slate-700`}>
                  <Date dateString={date} />
                </small>
              </motion.li>
            </Link>
            <li className='p-1'>
            </li>
            </>
          ))}
        </motion.ul>
      </section>
    </Layout>
  );
}