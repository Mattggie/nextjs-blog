import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A really handsome man that is super cool.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="posts/first-post">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}