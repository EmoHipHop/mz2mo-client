import ChevronLeftSvg from '@/assets/icons/images/chevronLeft.svg';
import PlayPauseIconSvg from '@/assets/icons/images/playPauseIcon.svg';
import SampleEmojiSvg from '@/assets/icons/images/sampleEmoji.svg';

import * as style from './SplashMatchedTemplate.style';

const SplashMatchedTemplate = () => (
  <style.Main>
    <style.TitleWrapper>
      <h2>
        선택한 이모지와
        <br />
        매칭된 음악입니다.
      </h2>
      <p>
        <span className="arrow">
          <ChevronLeftSvg width={6} height={13} />
        </span>
        다른 이모지 선택하기
      </p>
    </style.TitleWrapper>
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
    <style.EmojisWrapper>
      <style.EmojiTitle>
        이 음악이 다른 이모지와 더 어울리나요?
      </style.EmojiTitle>
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
    <style.BottomButton>회원가입/로그인 하기</style.BottomButton>
  </style.Main>
);

export default SplashMatchedTemplate;
