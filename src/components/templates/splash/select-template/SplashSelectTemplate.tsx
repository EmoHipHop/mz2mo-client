import SplashEmoji from '@/components/main/Splash/SplashEmoji';
import SplashPlayer from '@/components/main/Splash/SplashPlayer';
import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import { useRouter } from 'next/router';

import { useState } from 'react';

import * as style from './SplashSelectTemplate.style';

const SplashSelectTemplate = ({
  musicData,
  voteData,
  selectHandler,
  selectedItem,
  postMusicCommunityAsync,
}: {
  musicData: MusicCommunityResponse | undefined;
  voteData: VoteResponse | undefined;
  selectedItem: string;
  selectHandler: (id: string) => void;
  postMusicCommunityAsync: any;
}) => {
  const [isNext, setIsNext] = useState(false);
  const router = useRouter();

  const postData = async () => {
    await postMusicCommunityAsync();
    return router.push('/splash/match');
  };
  return (
    <style.Main>
      <style.TitleWrapper>
        {!isNext ? (
          <>
            <h2>
              노래와 어울리는
              <br /> 이모지를 선택해보세요!
            </h2>
            <span>
              내가 생각하는 노래와 가장 잘 어울리는 이모지를 선택해보세요
            </span>
          </>
        ) : (
          <>
            <h2>
              이 곡을 표현하는
              <br /> 이모지는요!
            </h2>
            <span>다른분들이 선택한 이모지 랭킹입니다.</span>
          </>
        )}
      </style.TitleWrapper>
      <SplashPlayer />
      <SplashEmoji
        isNext={isNext}
        selectHandler={selectHandler}
        selectedItem={selectedItem}
        votes={musicData?.votes}
        list={voteData?.list}
      />
      {selectedItem &&
        (!isNext ? (
          <style.BottomButton onClick={() => setIsNext(true)}>
            다음으로!
          </style.BottomButton>
        ) : (
          <style.BottomButton onClick={postData}>
            내가 선택한 이모지에 맞는 음악 들으러 가기 &gt;&gt;
          </style.BottomButton>
        ))}
    </style.Main>
  );
};

export default SplashSelectTemplate;
