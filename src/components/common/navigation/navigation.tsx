import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const NavBody = styled.div`
  width: 100%;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  line-height: 65px;
  text-align: center;
  justify-content: space-between;
  background-color: black;
`;

const LogoArea = styled.div`
  width: 200px;
  justify-content: center;
  padding-left: 3rem;
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
  font-size: 1.2rem;
`;
const Hambuger = styled.div`
  padding-top: 8px;
  color: #7e7d85;
  width: 48px;
  height: 48px;
`;
const Navigation = () => {
  return (
    <NavBody>
      <LogoArea>
        <Image
          src="/assets/icons/logo.svg"
          width={153}
          height={40}
          layout="responsive"
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
          <Hambuger>
            <Image
              src="/assets/icons/menu.svg"
              width={30}
              height={30}
              layout="responsive"
            />
          </Hambuger>
        </MenuLinks>
      </MenuList>
    </NavBody>
  );
};

export default Navigation;
