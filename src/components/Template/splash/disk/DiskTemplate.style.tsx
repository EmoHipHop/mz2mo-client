import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  position: relative;
  top: 65px;

  min-height: calc(100vh - 85px);
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
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
    color: ${({ theme }) => theme.colors.Text.primary};
    font-family: 'ChangwonDangamAsac';
    letter-spacing: -0.8px;
    margin: 0;
  }
  p {
    margin-top: 35px;
    font-size: ${({ theme }) => theme.fonts.size.body2};
    color: ${({ theme }) => theme.colors.Text.primary};
    opacity: 0.7;
  }
`;

export const DiskPlayer = styled.div`
  position: relative;
  padding: 0 100px;
`;
export const Disk = styled.div`
  width: 472px;
  height: 472px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('/assets/images/splashAlbum.svg');
`;
export const DiskController = styled.ul`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DiskControllerButtons = styled.li``;
export const BackWard = styled(DiskControllerButtons)``;
export const PlayPause = styled(DiskControllerButtons)`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
export const Forward = styled(DiskControllerButtons)``;

export const SongInfo = styled.div`
  margin-top: 33px;
  text-align: center;
`;
export const SongTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.body2};
  line-height: 160%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Text.primary};
  margin: 0;
`;

export const SongSinger = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body3};
  color: ${({ theme }) => theme.colors.Text.none};
  margin: 0;
`;
export const ProgressBar = styled.div`
  margin-top: 20px;
  min-width: 258px;
  input {
    width: 100%;
  }
`;
export const EmojisWrapper = styled.div`
  margin: 52px 0 20px;
`;

export const EmojiList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0;
  display: flex;
  border-radius: 36px;
  background-color: #191919;
  border: 1px solid #080809;
  min-width: 516px;
`;

export const EmojiItem = styled.li`
  padding: 21px;
  cursor: pointer;
  &:hover {
    background-color: #3f3f44;
    border: 1px solid ${({ theme }) => theme.colors.Darkmode.default};
    border-radius: 21px;
  }
  &.is-active {
    background-color: #3f3f44;
    border: 1px solid ${({ theme }) => theme.colors.Darkmode.default};
    border-radius: 21px;
  }
  &.text-active {
    padding: 10px 21px;
  }
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
  color: ${({ theme }) => theme.colors.Text.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const BottomButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 90px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.Accent.main};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.Text.primary};
`;
