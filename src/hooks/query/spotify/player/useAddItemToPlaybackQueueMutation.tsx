import { useMutation } from '@tanstack/react-query';

import { postAsync } from '@/apis/API';
import { QUEUE } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseAddItemToPlaybackQueueMutationProps {
  uri: string;
  deviceId?: string;
}

/**
 * 재생을 일시정지하는 Hook
 * @param uri 재생할 음악의 uri
 * @param deviceId 기기 id
 * @returns useMutation
 */
const useAddItemToPlaybackQueueMutation = ({
  uri,
  deviceId,
}: UseAddItemToPlaybackQueueMutationProps) => {
  return useMutation([QUEUE, uri], () =>
    postAsync(`${SPOTIFY_API_URL}${QUEUE}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        uri,
        device_id: deviceId,
      },
    }),
  );
};

export default useAddItemToPlaybackQueueMutation;
