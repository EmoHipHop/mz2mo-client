import { useMutation } from '@tanstack/react-query';

import { putAsync } from '@/apis/API';
import { PAUSE } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UsePausePlaybackMutationProps {
  deviceId: string;
}

/**
 * 재생을 일시정지하는 Hook
 * @param deviceId 기기 id
 * @returns useMutation
 */
const usePausePlaybackMutation = ({
  deviceId,
}: UsePausePlaybackMutationProps) => {
  return useMutation([PAUSE, deviceId], () =>
    putAsync(`${SPOTIFY_API_URL}${PAUSE}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        device_id: deviceId,
      },
    }),
  );
};

export default usePausePlaybackMutation;
