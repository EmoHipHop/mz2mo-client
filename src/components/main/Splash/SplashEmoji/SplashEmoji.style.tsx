import styled from 'styled-components';

export const EmojisWrapper = styled.div`
  margin: 52px 0 20px;
`;

export const EmojiList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
  margin: 0;
  border-radius: 36px;
  background-color: #191919;
  border: 1px solid #080809;
  min-width: 516px;
  height: 120px;
`;

export const EmojiItem = styled.li<{ isSelected: boolean; isNext: boolean }>`
  transition: 0.3s;
  padding: ${({ isNext }) => (isNext ? '10px 20px' : '20px')};
  margin: 0 3px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 21px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background-color: #3f3f44;
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: #3f3f44;
    border: 1px solid ${theme.colors.darkMode.default};
  `}
`;

export const EmojiButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const EmojiPercent = styled.p`
  margin: 0;
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.body3};
`;

export const EmojiTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.buttonLarge};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  text-align: center;
  padding: 16px 0;
`;
