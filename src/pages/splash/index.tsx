import React from 'react';
import styled from 'styled-components';
import MainTemplate from '@/components/Template/splash/main/MainTemplate';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const Splash = () => {
  return (
    <>
      <Header>Header</Header>
      <MainTemplate />
    </>
  );
};

export default Splash;
