import React from 'react';
import styled from 'styled-components';
import DiskTemplate from '@/components/Template/splash/matched';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const SplashGenre = () => {
  return (
    <>
      <Header />
      <DiskTemplate />
    </>
  );
};

export default SplashGenre;
