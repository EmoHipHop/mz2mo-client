import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 85px);
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 267px;
  height: 245px;
  overflow: hidden;
  background-image: url('/assets/images/splashLogo.svg');
`;

const ExploreButton = styled.button`
  margin-top: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 7rem;
  font-size: ${({ theme }) => theme.fonts.size.body2};
  color: ${({ theme }) => theme.colors.Text.primary};
  background-color: ${({ theme }) => theme.colors.Darkmode.boxcolor};
  border-radius: 60px;
  border: 1px solid #2e2e30;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SignButtons = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 2.8rem;
  li {
    &:first-child {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: #fafafa;
      }
    }
    button {
      color: #fafafa;
      text-align: center;
      padding: 0 18px;
      opacity: 0.5;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const SplashMainTemplate = () => {
  return (
    <Main>
      <Logo />
      <ExploreButton>체험하기</ExploreButton>
      <SignButtons>
        <li>
          <button>가입하기</button>
        </li>
        <li>
          <button>로그인하기</button>
        </li>
      </SignButtons>
    </Main>
  );
};

export default SplashMainTemplate;
