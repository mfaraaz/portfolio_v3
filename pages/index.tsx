import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button className="btn">Button</button>
        <div className="w-full text-center">GETTING SETUP READY</div>
      </main>
    </div>
  );
};

export default Home;
