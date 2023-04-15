import MainImage from '@/assets/icons/images/splashLogo.svg';
import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkMode.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainLogo = styled(MainImage)``;

export const ExploreButton = styled.button`
  margin-top: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 7rem;
  font-size: ${({ theme }) => theme.fonts.size.body2};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.darkMode.boxcolor};
  border-radius: 60px;
  border: 1px solid #2e2e30;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SignButtons = styled.ul`
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
