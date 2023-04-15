import { MusicCommunityResponse, VoteResponse } from '@/types/splashTypes';
import { useEffect, useState } from 'react';
import SplashSelectTemplate from 'src/components/templates/splash/select-template';

const MUSICDATA = {
  id: '667896fb-f147-4e68-8470-a2d3d61e6a24',
  youtubeId: 'E7gg5sjEWd0',
  votes: [
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a21',
      accountId: '6c8db601-ac00-4a31-a5ec-e728a8225f85',
      emojiId: '1',
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      accountId: '6c8db601-ac00-4a31-a5ec-e728a8225f85',
      emojiId: '2',
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      accountId: '6c8db601-ac00-4a31-a5ec-e728a8225f84',
      emojiId: '3',
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      accountId: '6c8db601-ac00-4a31-a5ec-e728a8225f84',
      emojiId: '4',
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      accountId: '6c8db601-ac00-4a31-a5ec-e728a8225f84',
      emojiId: '5',
    },
  ],
};

const VOTEDATA = {
  size: 5,
  list: [
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      emojiId: '1',
      percentage: 40,
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      emojiId: '2',
      percentage: 20,
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      emojiId: '3',
      percentage: 20,
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      emojiId: '4',
      percentage: 20,
    },
    {
      musicId: '667896fb-f147-4e68-8470-a2d3d61e6a24',
      emojiId: '5',
      percentage: 0,
    },
  ],
};

const SplashSelect = () => {
  const [musicData, setMusicData] = useState<
    MusicCommunityResponse | undefined
  >();
  const [voteData, setVoteData] = useState<VoteResponse | undefined>();
  const [selectedItem, setSelectedItem] = useState('');
  const selectHandler = (id: string) => {
    setSelectedItem(id);
  };
  useEffect(() => {
    // const res =  getMusicCommunityAsync('/onboarding/music/community')
    // setData(res)
    setMusicData(() => MUSICDATA);
    setVoteData(() => VOTEDATA);
  }, []);
  return (
    <SplashSelectTemplate
      selectHandler={selectHandler}
      selectedItem={selectedItem}
      musicData={musicData}
      voteData={voteData}
    />
  );
};

export default SplashSelect;
