import Image from 'next/image';

import * as style from './Navigation.style';

const Navigation = () => (
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
          <style.MenuText>가입하기</style.MenuText>
        </style.MenuItem>
        <style.MenuItem>
          <style.MenuText>|</style.MenuText>
        </style.MenuItem>
        <style.MenuItem>
          <style.MenuText>로그인</style.MenuText>
        </style.MenuItem>
        <style.Hambuger>
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

export default Navigation;
