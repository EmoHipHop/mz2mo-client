import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > .content {
    padding-top: 85px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
`;
