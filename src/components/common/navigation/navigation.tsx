import React, { useRef } from 'react';
import styled from 'styled-components';
import { theme } from '@/constants/styles/theme';
import Image from 'next/image';
import Menu from 'public/assets/icons/menu.svg';
import Logo from 'public/assets/icons/logo.svg';

const NavBody = styled.div`
  width: 100%;
  height: 65px;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 65px;
  text-align: center;
  background-color: black;
`;

const Container = styled.div`
  /* @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
  } */
`;

const LogoArea = styled.div`
  border: red solid 1px;
`;

const MenuList = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  padding-right: 3rem;
  padding-left: 1rem;
`;

const MenuLinks = styled.ul`
  width: 100%;
  height: 65px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const MenuItem = styled.li`
  width: auto;
  height: 65px;
  padding: 0;
  padding-right: 3rem;
`;

const MenuText = styled.a`
  text-decoration: none;
  color: #7e7d85;
  line-height: 65px;
  font-size: 2.4rem;
`;

const NavTrigger = styled.div`
  cursor: pointer;
  width: 30px;
  height: 25px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  bottom: 0;
`;

const Navigation = () => {
  const menuToggle = useRef<HTMLButtonElement>(null);

  const toggleClick = () => {
    menuToggle.current?.classList.toggle('active');
  };

  return (
    <NavBody>
      <Container>
        <LogoArea>
          <Image
            src="/assets/icons/logo.svg"
            width={159}
            height={25}
            layout="fill"
          />
        </LogoArea>
        <MenuList>
          <MenuLinks>
            <MenuItem>
              <MenuText>가입하기</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>|</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>로그인</MenuText>
            </MenuItem>
          </MenuLinks>
          <span>
            <Image
              src="/assets/icons/menu.svg"
              width={40}
              height={40}
              layout="fill"
            />
          </span>
        </MenuList>
      </Container>
    </NavBody>
  );
};

export default Navigation;
