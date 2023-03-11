import MenuSvg from '@/assets/icons/common/menu.svg';

import * as style from './Navigation.style';

const Navigation = () => (
  <style.NavBody>
    <style.StyledLogoSvg />
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
          <MenuSvg />
        </style.Hambuger>
      </style.MenuLinks>
    </style.MenuList>
  </style.NavBody>
);

export default Navigation;
