import SplashMatchedTemplate from 'src/components/templates/splash/match-template';
import { MUSICDATA, VOTEDATA } from '@/pages/splash/select';
import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import { useEffect, useState } from 'react';

const SplashMatch = () => {
  const [musicData, setMusicData] = useState<
    MusicCommunityResponse | undefined
  >();
  const [voteData, setVoteData] = useState<VoteResponse | undefined>();
  const [selectedItem, setSelectedItem] = useState('');
  const selectHandler = (id: string) => {
    setSelectedItem(id);
  };
  useEffect(() => {
    // getMusicCommunityAsync('/onboarding/music/community').then((res) =>
    //   console.log(res),
    // );
    setMusicData(MUSICDATA);
    setVoteData(VOTEDATA);
  }, []);
  return (
    <SplashMatchedTemplate
      selectHandler={selectHandler}
      selectedItem={selectedItem}
      musicData={musicData}
      voteData={voteData}
    />
  );
};

export default SplashMatch;
