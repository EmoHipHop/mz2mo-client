import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

import { setSpotifyTokenAtom } from '@/stores/actions';

import SplashMainTemplate from '@/components/templates/splash/main-template';

const Home = () => {
  const router = useRouter();
  const setSpotifyToken = useSetAtom(setSpotifyTokenAtom);

  const accessDummyToken = () => {
    const dummyToken =
      'BQDM-BbpG2oZYS6ZcfbxST-VOIlqwLBEA03Y5WDt51c4Cox-3iqiDGcDpjFZhsY0FEWvpLxldJeCQtDm5zxVlCw4sAcKtacx85D4wlwWkZLsRSCq_PKUolGQ_HhTTJ25eZ_5ZGqwzurRYSAGjaGTsIFHDHkxgiqFf47KZ50l_DaD3nMzrhH-VCz21qt_GCdTUgSROeCEP5FEQYNvBxUW0mHvQmH-';
    setSpotifyToken(dummyToken);
    router.push('/splash/select');
  };

  return <SplashMainTemplate accessDummyToken={accessDummyToken} />;
};

export default Home;
