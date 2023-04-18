import SampleSplashAlbumSvg from '@/assets/icons/images/splashAlbum.svg';
import styled from 'styled-components';

export const DiskWrapper = styled.div``;
export const DiskPlayer = styled.div`
  position: relative;
`;
export const Disk = styled(SampleSplashAlbumSvg)`
  width: 197px;
  height: 197px;
  border-radius: 50%;
  overflow: hidden;
`;
export const DiskController = styled.ul`
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

export const DiskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 71px;
  width: 100%;
`;
export const DiskItem = styled.li`
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

export const PlayPause = styled.div`
  width: 67px;
  height: 67px;
  background-color: ${({ theme }) => theme.colors.darkMode.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const SongInfo = styled.div`
  margin-top: 33px;
  text-align: center;
`;
export const SongTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.body2};
  line-height: 160%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  word-break: break-all;
`;

export const SongSinger = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body3};
  color: ${({ theme }) => theme.colors.text.none};
  margin: 0;
`;
export const ProgressBar = styled.div`
  margin-top: 20px;
  min-width: 190px;
  & input {
    width: 100%;
  }

  & input[type="range"] {
    -webkit-appearance: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#fff, #fff);
    //background-size width값을 조절해야함
    background-size: 70% 100%;
    background-repeat: no-repeat;
  }

  & input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #fff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  & input[type=range]::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
