import React from 'react';
import styled from 'styled-components';
import { SplashMatchedTemplate } from '~/src/components/Template/splash';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const match = () => {
  return (
    <>
      <Header>Header</Header>
      <SplashMatchedTemplate />
    </>
  );
};

export default match;
