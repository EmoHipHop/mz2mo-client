import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkMode.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 80px;
  z-index: 10;
  h2 {
    font-size: ${({ theme }) => theme.fonts.size.Heading1};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: 'ChangwonDangamAsac', sans-serif;
    letter-spacing: -0.8px;
    margin: 0;
  }
  span {
    display: inline-block;
    padding-top: 35px;
    font-size: ${({ theme }) => theme.fonts.size.body2};
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.7;
  }
`;

export const BottomButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 90px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.accent.main};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
