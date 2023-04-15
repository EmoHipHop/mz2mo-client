import SplashPlayer from '@/components/main/Splash/SplashPlayer';
import SplashSelectEmoji from '@/components/main/Splash/SplashSelectEmoji';
import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import { useRouter } from 'next/router';

import { useState } from 'react';

import * as style from './SplashSelectTemplate.style';

const SplashSelectTemplate = ({
  musicData,
  voteData,
  selectHandler,
  selectedItem,
}: {
  musicData: MusicCommunityResponse | undefined;
  voteData: VoteResponse | undefined;
  selectedItem: string;
  selectHandler: () => void;
}) => {
  const [next, setNext] = useState(false);
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
      <SplashPlayer />
      <SplashSelectEmoji
        next={next}
        selectHandler={selectHandler}
        selectedItem={selectedItem}
        votes={musicData?.votes}
        list={voteData?.list}
      />
      {selectedItem &&
        (!next ? (
          <style.BottomButton onClick={() => setNext(true)}>
            다음으로!
          </style.BottomButton>
        ) : (
          <style.BottomButton onClick={() => router.push('/splash/match')}>
            내가 선택한 이모지에 맞는 음악 들으러 가기 &gt;&gt;
          </style.BottomButton>
        ))}
    </style.Main>
  );
};

export default SplashSelectTemplate;
