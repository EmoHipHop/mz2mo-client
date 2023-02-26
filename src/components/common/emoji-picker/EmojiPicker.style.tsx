import styled from 'styled-components';

// FIXME
export const Container = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: ${({ y }) => y - 180}px;
  left: ${({ x }) => x - 100}px;
  width: 30rem;
  height: 16rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 2rem;
`;

export const Close = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Emoji = styled.button<{ isChecked: boolean }>`
  width: 3.2rem;
  height: 3.2rem;
  font-size: 2rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 0.8rem;
  ${({ isChecked }) => isChecked && 'border: 1px solid red;'}
  &:hover {
    background-color: #e1e1e1;
  }
`;
