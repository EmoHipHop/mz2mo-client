import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SplashDiskTemplate } from '~/src/components/Template/splash';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const SplashGenre = () => {
  return (
    <>
      <Header />
      <SplashDiskTemplate />
    </>
  );
};

export default SplashGenre;
