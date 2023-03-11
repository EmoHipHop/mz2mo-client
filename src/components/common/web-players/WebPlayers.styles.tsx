import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 78px;

  padding: 0px 80px;

  position: sticky;
  bottom: 0px;

  display: flex;
  justify-content: space-between;

  background-color: #191919;
`;

export const SongInfoBox = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      height: 40px;
      margin: 18px 0px 16px 0px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        margin: 0;

        color: #ffffff;
        font-size: ${fonts.size.body3};
        font-weight: ${fonts.weight.semiBold};
      }

      .singers {
        margin: 0;
        color: ${colors.Darkmode.default};
        font-size: ${fonts.size.buttonLarge};
      }
    `;
  }}
`;

export const EmojiListBox = styled.div`
  height: 36px;
  margin: auto 0px;
  padding: 4px 0px;

  display: flex;
  gap: 0px 34px;
  justify-content: space-between;
  align-items: center;

  p {
    margin: auto 0px;
    font-size: 24px;
    line-height: 0.8;
  }
`;

export const PlayerButtonBox = styled.div`
  width: 99px;
  height: 40px;
  margin: 18px 0px 16px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .playCircle {
    width: 48px;
    height: 48px;

    padding-left: 4px;

    display: flex;
    justify-content: center;

    border-radius: 48px;
    border: 1px solid #3f3f44;
    cursor: pointer;
  }
`;
