import ChevronLeftSvg from '@/assets/icons/images/chevronLeft.svg';
import SampleEmojiSvg from '@/assets/icons/images/sampleEmoji.svg';

import SplashEmoji from '@/components/main/Splash/SplashEmoji';
import SplashMatchPlayer from '@/components/main/Splash/SplashMatchPlayer/SplashMatchPlayer';
import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as style from './SplashMatchTemplate.style';

const SplashMatchTemplate = ({
  musicData,
  voteData,
  selectHandler,
  selectedItem,
}: {
  musicData: MusicCommunityResponse | undefined;
  voteData: VoteResponse | undefined;
  selectedItem: string;
  selectHandler: (id: string) => void;
}) => {
  const router = useRouter();

  const goBackHandler = () => {
    router.push('/splash/select');
  };

  return (
    <style.Main>
      <style.TitleWrapper>
        <h2>
          선택한 이모지와
          <br />
          매칭된 음악입니다. <SampleEmojiSvg width={49} height={49} />
        </h2>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span
          onClick={goBackHandler}
          onKeyUp={(e) => e.key === 'backspace' && goBackHandler}
        >
          <ChevronLeftSvg width={6} height={13} className="arrow" />
          다른 이모지 선택하기
        </span>
      </style.TitleWrapper>

      <SplashMatchPlayer />
      <SplashEmoji
        title="이 음악이 다른 이모지와 더 어울리나요?"
        selectHandler={selectHandler}
        selectedItem={selectedItem}
        votes={musicData?.votes}
        list={voteData?.list}
      />
      <style.BottomButton>
        <Link href="/login">회원가입/로그인 하기</Link>
      </style.BottomButton>
    </style.Main>
  );
};

export default SplashMatchTemplate;
