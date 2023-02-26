import styled from "styled-components";

export const NavBody = styled.div`
  width: 100%;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  line-height: 4rem;
  text-align: center;
  justify-content: space-between;
  background-color: black;
`;

export const LogoArea = styled.div`
  width: 12rem;
  justify-content: center;
  padding-left: 3rem;
`;

export const MenuList = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  padding-right: 3rem;
  padding-left: 1rem;
`;

export const MenuLinks = styled.ul`
  width: 100%;
  height: 4rem;
  display: flex;
  list-style: none;
  margin: 0;
`;

export const MenuItem = styled.li`
  width: auto;
  height: 4rem;
  padding: 0;
  padding-right: 3rem;
`;

export const MenuText = styled.a`
  text-decoration: none;
  color: #7e7d85;
  line-height: 4rem;
  font-size: 1.2rem;
`;
export const Hambuger = styled.button`
  padding-top: 0.5rem;
  color: #7e7d85;
  width: 3rem;
  height: 3rem;
`;