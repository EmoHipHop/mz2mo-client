import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.black.default};
  width: 100%;
`;

const Main = styled.main`
  min-height: calc(100vh - 85px);
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ExploreButton = styled.button`
  margin-top: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1.5rem 7rem;
  color: ${({ theme }) => theme.colors.mono.white};
  background-color: #1c1c1e;
  border-radius: 60px;
  border: 1px solid #2e2e30;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SignButtons = styled.div`
  margin-top: 2.8rem;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
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
  }
`;

const Splash = () => {
  return (
    <>
      <Header>Header</Header>
      <Main>
        <Image
          src="/assets/images/splashLogo.svg"
          alt="logo"
          width={267}
          height={245}
        />
        <ExploreButton>체험하기</ExploreButton>
        <SignButtons>
          <ul>
            <li>
              <button>가입하기</button>
            </li>
            <li>
              <button>로그인하기</button>
            </li>
          </ul>
        </SignButtons>
      </Main>
    </>
  );
};

export default Splash;
