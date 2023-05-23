import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/dist/client/image';
import youtubeImg from '../public/youtube.png';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>

    <Image src={youtubeImg} width={500} height={350} alt="preview" placeholder="blur" />
  </Layout>
);

export default MyApp;

// placeholder="blur"  - с помощью данного пропска запускается механизм размытой картинки до загрузки полной верссии изоброжения
