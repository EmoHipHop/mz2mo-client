import React from 'react';
import styled from 'styled-components';
import MatchedTemplate from '@/components/Template/splash/matched';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const Match = () => {
  return (
    <>
      <Header>Header</Header>
      <MatchedTemplate />
    </>
  );
};

export default Match;
