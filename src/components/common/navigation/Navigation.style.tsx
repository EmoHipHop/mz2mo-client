import LogoSvg from '@/assets/icons/common/logo.svg';
import styled from 'styled-components';

export const NavBody = styled.nav`
  width: 100%;
  height: 85px;

  left: 0;
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: black;
  text-align: center;
`;

export const StyledLogoSvg = styled(LogoSvg)`
  width: 159px;
  height: 25px;
  padding-left: 80px;
`;

export const MenuList = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0rem 3rem 0rem 1rem;
`;

export const MenuLinks = styled.ul`
  width: 100%;
  height: 65px;
  display: flex;
  list-style: none;
  margin: 0;
`;

export const MenuItem = styled.li`
  width: auto;
  height: 65px;
  padding: 0;
  padding-right: 3rem;
`;

export const MenuText = styled.a`
  text-decoration: none;
  color: #7e7d85;
  line-height: 65px;
  font-size: 1.2rem;
`;
export const Hamburger = styled.div`
  padding-top: 8px;
  color: #7e7d85;
  width: 48px;
  height: 48px;
`;
