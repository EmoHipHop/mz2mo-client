import SampleSplashAlbumSvg from '@/assets/icons/images/splashAlbum.svg';
import styled from 'styled-components';

export const DiskPlayer = styled.div`
  position: relative;
  padding: 0 100px;
`;
export const Disk = styled(SampleSplashAlbumSvg)`
  border-radius: 50%;
  overflow: hidden;
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
  background-color: ${({ theme }) => theme.colors.darkMode.background};
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
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const SongSinger = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body3};
  color: ${({ theme }) => theme.colors.text.none};
  margin: 0;
`;

export const ProgressBar = styled.div`
  margin-top: 20px;
  min-width: 258px;
  & input {
    width: 100%;
  }

  & input[type="range"] {
    -webkit-appearance: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#fff, #fff);
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
