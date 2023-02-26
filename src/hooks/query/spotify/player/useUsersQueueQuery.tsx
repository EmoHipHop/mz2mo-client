import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';
import { QUEUE } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

/**
 * user의 음약 대기열을 가져오는 Hook
 * @returns useQuery
 */
const useUsersQueueQuery = () => {
  return useQuery([QUEUE], () =>
    getAsync(`${SPOTIFY_API_URL}${QUEUE}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
    }),
  );
};

export default useUsersQueueQuery;
