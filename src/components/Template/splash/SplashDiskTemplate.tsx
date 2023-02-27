import Image from 'next/image';
import React from 'react';
import * as style from './SplashDiskTemplate.style';

const SplashDiskTemplate = () => {
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
            <button>
              <Image
                src="/assets/images/backwardIcon.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </button>
          </style.BackWard>
          <style.PlayPause>
            <button>
              <Image
                src="/assets/images/playPauseIcon.svg"
                alt="logo"
                width={27}
                height={35}
              />
            </button>
          </style.PlayPause>
          <style.Forward>
            <button>
              <Image
                src="/assets/images/forwardIcon.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </button>
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
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </style.EmojiButton>
          </style.EmojiItem>
          <style.EmojiItem>
            <style.EmojiButton>
              <Image
                src="/assets/images/sampleEmoji.svg"
                alt="emoji"
                width={34}
                height={34}
              />
            </style.EmojiButton>
          </style.EmojiItem>
        </style.EmojiList>
      </style.EmojisWrapper>
      <style.BottomButton>
        내가 선택한 이모지에 맞는 음악 들으러 가기 &gt;&gt;
      </style.BottomButton>
    </style.Main>
  );
};

export default SplashDiskTemplate;
