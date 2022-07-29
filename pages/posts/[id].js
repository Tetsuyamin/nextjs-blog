import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

import Layout from '../../components/layout';

export default function Post({ postData }) {
    return (
      <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
        <article>
          <div class='rounded-md border-2 border-b-8 border-slate-300 bg-slate-100'>
          <div class='m-2 bg-teal-200 rounded border-2 border-teal-600'>
            <h1 className='text-gray-900 text-3xl font-bold p-2'>{postData.title}</h1>
            <div className='pl-3 text-teal-50 bg-teal-600 font-medium'>
            <Date dateString={postData.date} />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className='m-2 p-3 text-slate-100 bg-slate-800 mt-2 border-2 rounded border-slate-400 font-medium'/>       
          </div>
        </article>
      </Layout>
    );
  }