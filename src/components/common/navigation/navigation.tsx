import Image from 'next/image';

import { redirectToSpotifyAuth } from '@/apis/spotify';
import * as style from './navigation.style';

const Navigation = () => {
  return (
    <style.NavBody>
      <style.LogoArea>
        <Image
          src="/icons/logo.svg"
          width={153}
          height={40}
          layout="responsive"
        />
      </style.LogoArea>
      <style.MenuList>
        <style.MenuLinks>
          <style.MenuItem>
            <style.MenuText onClick={() => alert('준비 중인 기능입니다.')}>
              가입하기
            </style.MenuText>
          </style.MenuItem>
          <style.MenuItem>
            <style.MenuText>|</style.MenuText>
          </style.MenuItem>
          <style.MenuItem>
            <style.MenuText onClick={() => alert('준비 중인 기능입니다.')}>
              로그인
            </style.MenuText>
          </style.MenuItem>
          <style.Hambuger onClick={() => alert('준비 중인 기능입니다.')}>
            <Image
              src="/icons/menu.svg"
              width={30}
              height={30}
              layout="responsive"
            />
          </style.Hambuger>
        </style.MenuLinks>
      </style.MenuList>
    </style.NavBody>
  );
};

export default Navigation;
