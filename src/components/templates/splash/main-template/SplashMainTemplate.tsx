import * as style from './SplashMainTemplate.style';

interface SplashMainTemplateProps {
  accessDummyToken: () => void;
}

const SplashMainTemplate = ({ accessDummyToken }: SplashMainTemplateProps) => (
  <style.Main>
    <style.Logo />
    <style.ExploreButton onClick={accessDummyToken}>
      체험하기
    </style.ExploreButton>
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

export default SplashMainTemplate;
