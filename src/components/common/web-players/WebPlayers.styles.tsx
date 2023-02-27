import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100vw;

      display: flex;
      flex-direction: column;

      background-color: ${colors.black.opacity30};
    `;
  }}
`;
