import { FC } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

import Head from 'next/head';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <div className={styles.wrapper}>
        <div>
          <Heading text="404" />
          <Heading tag="h2" text="Something is going wrong..." />
        </div>
      </div>
    </>
  );
};

export default Error;
