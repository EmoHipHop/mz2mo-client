import BackWardSvg from '@/assets/icons/images/backwardIcon.svg';
import ForWardSvg from '@/assets/icons/images/forwardIcon.svg';
import PlayPauseIconSvg from '@/assets/icons/images/playPauseIcon.svg';
import * as style from './SplashPlayer.style';

export default function SplashPlayer() {
  return (
    <>
      <style.DiskPlayer>
        <style.Disk />
        <style.DiskController>
          <style.BackWard>
            <BackWardSvg width={20} height={20} />
          </style.BackWard>
          <style.PlayPause>
            <PlayPauseIconSvg width={27} height={35} />
          </style.PlayPause>
          <style.Forward>
            <ForWardSvg width={20} height={20} />
          </style.Forward>
        </style.DiskController>
      </style.DiskPlayer>
      <style.SongInfo>
        <style.SongTitle>LoveDive</style.SongTitle>
        <style.SongSinger>IVE</style.SongSinger>
      </style.SongInfo>
      <style.ProgressBar>
        <input type="range" />
      </style.ProgressBar>
    </>
  );
}
