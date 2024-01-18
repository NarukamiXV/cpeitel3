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
        <p>An Aspiring System Administrator learning different fields that can help in my future career.</p>
        <ul>
            <li>Learn backend programming.</li>
            <li>Learn to use nextjs.</li>
            <li>Able to apply it in my on-the-job training, projects and future career.</li>
        </ul>
        <p>10 things that requires 0 talent.</p>
        <ul>
            <li>1. Eagerness to learn</li>
            <li>2. Hardwork</li>
            <li>3. Effort</li>
            <li>4. Responbile</li>
            <li>5. Work Ethic</li>
            <li>6. Etiquette</li>
            <li>7. Passion</li>
            <li>8. Attitude</li>
            <li>9. Personality</li>
            <li>10. Dedication</li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}