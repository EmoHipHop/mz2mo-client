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
  top: 65px;
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
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fonts.size.body2};
    color: ${({ theme }) => theme.colors.Text.primary};
    opacity: 0.7;
    cursor: pointer;
    .arrow {
      margin-right: 5px;
    }
  }
`;

const DiskWrapper = styled.div``;
const DiskPlayer = styled.div`
  position: relative;
`;
const Disk = styled.div`
  width: 197px;
  height: 197px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('/assets/images/splashAlbum.svg');
  background-size: cover;
`;
const DiskController = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DiskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 71px;
  width: 100%;
`;
const DiskItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 341px;
  max-width: 341px;
  padding: 51px 0;
  border-radius: 90px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #0e0e0f;
`;

const PlayPause = styled.li`
  width: 67px;
  height: 67px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

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
  word-break: break-all;
`;

const SongSinger = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body3};
  color: ${({ theme }) => theme.colors.Text.none};
  margin: 0;
`;
const ProgressBar = styled.div`
  margin-top: 20px;
  min-width: 190px;
  input {
    width: 100%;
  }
`;

const EmojisWrapper = styled.div`
  margin: 42px 0 20px;
  border-radius: 36px;
  background-color: #191919;
  border: 1px solid #080809;
  min-width: 516px;
`;

const EmojiList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0;
  display: flex;
`;

const EmojiTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.buttonLarge};
  color: ${({ theme }) => theme.colors.Text.primary};
  margin: 0;
  padding: 0;
  text-align: center;
  padding: 16px 0;
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

const SplashMatchedTemplate = () => {
  return (
    <Main>
      <TitleWrapper>
        <h2>
          선택한 이모지와
          <br />
          매칭된 음악입니다.
        </h2>
        <p>
          <span className="arrow">
            <Image
              src="/assets/images/chevronLeft.svg"
              alt="back"
              width={6}
              height={12}
            />
          </span>
          다른 이모지 선택하기
        </p>
      </TitleWrapper>
      <DiskWrapper>
        <DiskList>
          <DiskItem>
            <DiskPlayer>
              <Disk />
              <DiskController>
                <PlayPause>
                  <button>
                    <Image
                      src="/assets/images/playPauseIcon.svg"
                      alt="logo"
                      width={12}
                      height={15}
                    />
                  </button>
                </PlayPause>
              </DiskController>
            </DiskPlayer>
            <SongInfo>
              <SongTitle>LoveDive</SongTitle>
              <SongSinger>IVE</SongSinger>
            </SongInfo>
            <ProgressBar>
              <input type="range" />
            </ProgressBar>
          </DiskItem>
          <DiskItem>
            <DiskPlayer>
              <Disk />
              <DiskController>
                <PlayPause>
                  <button>
                    <Image
                      src="/assets/images/playPauseIcon.svg"
                      alt="logo"
                      width={12}
                      height={15}
                    />
                  </button>
                </PlayPause>
              </DiskController>
            </DiskPlayer>
            <SongInfo>
              <SongTitle>LoveDiveLoveDiveLoveDiveLoveDiveLoveDive</SongTitle>
              <SongSinger>IVEIVEIVEIVEIVEIVE</SongSinger>
            </SongInfo>
            <ProgressBar>
              <input type="range" />
            </ProgressBar>
          </DiskItem>
          <DiskItem>
            <DiskPlayer>
              <Disk />
              <DiskController>
                <PlayPause>
                  <button>
                    <Image
                      src="/assets/images/playPauseIcon.svg"
                      alt="logo"
                      width={12}
                      height={15}
                    />
                  </button>
                </PlayPause>
              </DiskController>
            </DiskPlayer>
            <SongInfo>
              <SongTitle>LoveDive</SongTitle>
              <SongSinger>IVE</SongSinger>
            </SongInfo>
            <ProgressBar>
              <input type="range" />
            </ProgressBar>
          </DiskItem>
          <DiskItem>
            <DiskPlayer>
              <Disk />
              <DiskController>
                <PlayPause>
                  <button>
                    <Image
                      src="/assets/images/playPauseIcon.svg"
                      alt="logo"
                      width={12}
                      height={15}
                    />
                  </button>
                </PlayPause>
              </DiskController>
            </DiskPlayer>
            <SongInfo>
              <SongTitle>LoveDive</SongTitle>
              <SongSinger>IVE</SongSinger>
            </SongInfo>
            <ProgressBar>
              <input type="range" />
            </ProgressBar>
          </DiskItem>
        </DiskList>
      </DiskWrapper>
      <EmojisWrapper>
        <EmojiTitle>이 음악이 다른 이모지와 더 어울리나요?</EmojiTitle>
        <EmojiList>
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
              />{' '}
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
      <BottomButton>회원가입/로그인 하기</BottomButton>
    </Main>
  );
};

export default SplashMatchedTemplate;
