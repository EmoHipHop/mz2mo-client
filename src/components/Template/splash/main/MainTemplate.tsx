import React from 'react';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

import { setSpotifyTokenAtom } from '@/stores/actions';

import * as style from './MainTemplate.style';

const MainTemplate = () => {
  const router = useRouter();
  const setSpotifyToken = useSetAtom(setSpotifyTokenAtom);
  const accessDummyToken = () => {
    const dummyToken =
      'BQDM-BbpG2oZYS6ZcfbxST-VOIlqwLBEA03Y5WDt51c4Cox-3iqiDGcDpjFZhsY0FEWvpLxldJeCQtDm5zxVlCw4sAcKtacx85D4wlwWkZLsRSCq_PKUolGQ_HhTTJ25eZ_5ZGqwzurRYSAGjaGTsIFHDHkxgiqFf47KZ50l_DaD3nMzrhH-VCz21qt_GCdTUgSROeCEP5FEQYNvBxUW0mHvQmH-';
    setSpotifyToken(dummyToken);
    router.push('/splash/genre');
  };

  return (
    <style.Main>
      <style.Logo />
      <style.ExploreButton onClick={accessDummyToken}>
        체험하기
      </style.ExploreButton>
      <style.SignButtons>
        <li>
          <button onClick={() => alert('준비 중인 기능입니다.')}>
            가입하기
          </button>
        </li>
        <li>
          <button onClick={() => alert('준비 중인 기능입니다.')}>
            로그인하기
          </button>
        </li>
      </style.SignButtons>
    </style.Main>
  );
};

export default MainTemplate;
