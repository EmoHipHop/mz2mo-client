import ChevronLeftSvg from '@/assets/icons/images/chevronLeft.svg';

import SplashEmoji from '@/components/main/Splash/SplashEmoji';
import SplashMatchPlayer from '@/components/main/Splash/SplashMatchPlayer/SplashMatchPlayer';
import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as style from './SplashMatchedTemplate.style';

const SplashMatchedTemplate = ({
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
  const [next, setNext] = useState(false);
  return (
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

export default SplashMatchedTemplate;
