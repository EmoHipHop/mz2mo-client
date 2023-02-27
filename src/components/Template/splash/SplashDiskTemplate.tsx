import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 85px);
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 6.5rem;
  left: 7.7rem;
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

const DiskPlayer = styled.div`
  position: relative;
  padding: 0 100px;
`;
const Disk = styled.div`
  width: 472px;
  height: 472px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('/assets/images/splashAlbum.svg');
`;
const DiskController = styled.ul`
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

const DiskControllerButtons = styled.li``;
const BackWard = styled(DiskControllerButtons)``;
const PlayPause = styled(DiskControllerButtons)`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
const Forward = styled(DiskControllerButtons)``;

const SongInfo = styled.div`
  margin-top: 33px;
  text-align: center;
`;
const SongTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.body2};
  line-height: 160%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Text.primary};
  margin: 0;
`;

const SongSinger = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body3};
  color: ${({ theme }) => theme.colors.Text.none};
  margin: 0;
`;
const ProgressBar = styled.div`
  margin-top: 20px;
  min-width: 258px;
  input {
    width: 100%;
  }
`;
const EmojisWrapper = styled.div`
  margin: 52px 0 20px;
`;

const EmojiList = styled.ul`
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

const EmojiItem = styled.li`
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

const EmojiButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const EmojiPercent = styled.p`
  margin: 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.Text.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const BottomButton = styled.button`
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

const SplashDiskTemplate = () => {
  return (
    <Main>
      <TitleWrapper>
        <h2>
          노래와 어울리는
          <br /> 이모지를 선택해보세요!
        </h2>
        <p>내가 생각하는 노래와 가장 잘 어울리는 이모지를 선택해보세요</p>
      </TitleWrapper>
      <DiskPlayer>
        <Disk />
        <DiskController>
          <BackWard>
            <button>
              <Image
                src="/assets/images/backwardIcon.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </button>
          </BackWard>
          <PlayPause>
            <button>
              <Image
                src="/assets/images/playPauseIcon.svg"
                alt="logo"
                width={27}
                height={35}
              />
            </button>
          </PlayPause>
          <Forward>
            <button>
              <Image
                src="/assets/images/forwardIcon.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </button>
          </Forward>
        </DiskController>
      </DiskPlayer>
      <SongInfo>
        <SongTitle>LoveDive</SongTitle>
        <SongSinger>IVE</SongSinger>
      </SongInfo>
      <ProgressBar>
        <input type="range" />
      </ProgressBar>
      <EmojisWrapper>
        <EmojiList>
          <EmojiItem className="is-active">
            <EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </EmojiButton>
          </EmojiItem>
          <EmojiItem className="is-active text-active">
            <EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
              <EmojiPercent>asd</EmojiPercent>
            </EmojiButton>
          </EmojiItem>
          <EmojiItem>
            <EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
              <EmojiPercent>asd</EmojiPercent>
            </EmojiButton>
          </EmojiItem>
          <EmojiItem>
            <EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </EmojiButton>
          </EmojiItem>
          <EmojiItem>
            <EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </EmojiButton>
          </EmojiItem>
        </EmojiList>
      </EmojisWrapper>
      <BottomButton>
        내가 선택한 이모지에 맞는 음악 들으러 가기 &gt;&gt;
      </BottomButton>
    </Main>
  );
};

export default SplashDiskTemplate;
