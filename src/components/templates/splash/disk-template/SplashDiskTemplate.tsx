import { useRouter } from 'next/router';

import PlayPauseIconSvg from '@/assets/icons/images/playPauseIcon.svg';
import BackWardSvg from '@/assets/icons/images/backwardIcon.svg';
import ForWardSvg from '@/assets/icons/images/forwardIcon.svg';
import SampleEmojiSvg from '@/assets/icons/images/sampleEmoji.svg';

import * as style from './SplashDiskTemplate.style';

const SplashDiskTemplate = () => {
  const router = useRouter();
  return (
    <style.Main>
      <style.TitleWrapper>
        <h2>
          노래와 어울리는
          <br /> 이모지를 선택해보세요!
        </h2>
        <p>내가 생각하는 노래와 가장 잘 어울리는 이모지를 선택해보세요</p>
      </style.TitleWrapper>
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
      <style.EmojisWrapper>
        <style.EmojiList>
          <style.EmojiItem>
            <style.EmojiButton>
              <SampleEmojiSvg width={34} height={34} />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <SampleEmojiSvg width={34} height={34} />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <SampleEmojiSvg width={34} height={34} />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <SampleEmojiSvg width={34} height={34} />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <SampleEmojiSvg width={34} height={34} />
            </style.EmojiButton>
          </style.EmojiItem>
        </style.EmojiList>
      </style.EmojisWrapper>
      <style.BottomButton onClick={() => router.push('/splash/match')}>
        내가 선택한 이모지에 맞는 음악 들으러 가기 &gt;&gt;
      </style.BottomButton>
    </style.Main>
  );
};

export default SplashDiskTemplate;
