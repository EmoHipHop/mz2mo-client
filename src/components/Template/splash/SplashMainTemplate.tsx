import React from 'react';
import * as style from './SplashMainTemplate.style';

const SplashMainTemplate = () => {
  return (
    <style.Main>
      <style.Logo />
      <style.ExploreButton>체험하기</style.ExploreButton>
      <style.SignButtons>
        <li>
          <button>가입하기</button>
        </li>
        <li>
          <button>로그인하기</button>
        </li>
      </style.SignButtons>
    </style.Main>
  );
};

export default SplashMainTemplate;
