import React from 'react';
import PlayPauseIconSvg from '@/assets/icons/images/playPauseIcon.svg';
import * as style from './SplashMatchPlayer.style';

const SplashMatchPlayer = () => (
  <style.DiskWrapper>
    <style.DiskList>
      <style.DiskItem>
        <style.DiskPlayer>
          <style.Disk />
          <style.DiskController>
            <style.PlayPause>
              <PlayPauseIconSvg width={12} height={15} />
            </style.PlayPause>
          </style.DiskController>
        </style.DiskPlayer>
        <style.SongInfo>
          <style.SongTitle>LoveDive</style.SongTitle>
          <style.SongSinger>IVE</style.SongSinger>
        </style.SongInfo>
        <style.ProgressBar>
          <input type="range" />
        </style.ProgressBar>
      </style.DiskItem>
      <style.DiskItem>
        <style.DiskPlayer>
          <style.Disk />
          <style.DiskController>
            <style.PlayPause>
              <PlayPauseIconSvg width={12} height={15} />
            </style.PlayPause>
          </style.DiskController>
        </style.DiskPlayer>
        <style.SongInfo>
          <style.SongTitle>LoveDive</style.SongTitle>
          <style.SongSinger>IVE</style.SongSinger>
        </style.SongInfo>
        <style.ProgressBar>
          <input type="range" />
        </style.ProgressBar>
      </style.DiskItem>
      <style.DiskItem>
        <style.DiskPlayer>
          <style.Disk />
          <style.DiskController>
            <style.PlayPause>
              <PlayPauseIconSvg width={12} height={15} />
            </style.PlayPause>
          </style.DiskController>
        </style.DiskPlayer>
        <style.SongInfo>
          <style.SongTitle>LoveDive</style.SongTitle>
          <style.SongSinger>IVE</style.SongSinger>
        </style.SongInfo>
        <style.ProgressBar>
          <input type="range" />
        </style.ProgressBar>
      </style.DiskItem>
      <style.DiskItem>
        <style.DiskPlayer>
          <style.Disk />
          <style.DiskController>
            <style.PlayPause>
              <PlayPauseIconSvg width={12} height={15} />
            </style.PlayPause>
          </style.DiskController>
        </style.DiskPlayer>
        <style.SongInfo>
          <style.SongTitle>LoveDive</style.SongTitle>
          <style.SongSinger>IVE</style.SongSinger>
        </style.SongInfo>
        <style.ProgressBar>
          <input type="range" />
        </style.ProgressBar>
      </style.DiskItem>
    </style.DiskList>
  </style.DiskWrapper>
);

export default SplashMatchPlayer;
