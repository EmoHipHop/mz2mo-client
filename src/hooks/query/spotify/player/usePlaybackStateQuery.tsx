import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';
import { PLAYER } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UsePlaybackStateProps {
  additionalTypes?: string;
  market?: string;
}

/**
 * user의 현재 재생 상태를 가져오는 Hook
 * @param additionalTypes track, episode 타입만 지원
 * @param market 국가 코드
 * @returns useQuery
 */
const usePlaybackStateQuery = ({
  additionalTypes,
  market,
}: UsePlaybackStateProps) => {
  return useQuery([PLAYER], () =>
    getAsync(`${SPOTIFY_API_URL}${PLAYER}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        additional_types: additionalTypes,
        market,
      },
    }),
  );
};

export default usePlaybackStateQuery;
