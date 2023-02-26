import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.black.default};
  width: 100%;
`;

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 85px);
  background-color: black;
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
    font-size: 6.2rem;
    color: #fafafa;
    letter-spacing: -0.8px;
    margin: 0;
  }
  p {
    margin-top: 35px;
    font-size: 2rem;
    color: #fafafa;
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
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const Forward = styled(DiskControllerButtons)``;

const SongInfo = styled.div`
  margin-top: 33px;
  text-align: center;
`;
const SongTitle = styled.h3`
  font-size: 2rem;
  line-height: 160%;
  font-weight: 600;
  color: #fafafa;
  margin: 0;
`;

const SongSinger = styled.p`
  font-size: 1.8rem;
  color: #7d7c81;
  margin: 0;
`;
const ProgressBar = styled.div``;
const Emojis = styled.div``;

const SplashGenre = () => {
  return (
    <>
      <Header />
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
        <Emojis>
          <div>asdasd</div>
        </Emojis>
      </Main>
    </>
  );
};

export default SplashGenre;
