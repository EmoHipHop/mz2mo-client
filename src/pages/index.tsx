import Head from 'next/head';

import ControlPanel from '@/components/common/sound-player/ControlPanel';
import SoundNav from '../components/common/sound-player/SoundNav';

const Home = () => {
  return (
    <>

    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00917C" />
      <link rel="icon" href="/favicon.ico" />
      <title>지식의 요람, KU : AGORA</title>
      </Head>
      <SoundNav />
    </>
  );
};

export default Home;
