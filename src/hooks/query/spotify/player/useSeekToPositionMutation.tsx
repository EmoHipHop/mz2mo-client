import { useMutation } from '@tanstack/react-query';

import { putAsync } from '@/apis/API';
import { SEEK_TO_POSITION } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseSeekToPositionMutationProps {
  positionMs: number;
  deviceId?: string;
}

/**
 * 재생 위치를 이동하는 Hook
 * @param positionMs 이동할 위치
 * @param deviceId 기기 id
 * @returns useMutation
 */
const useSeekToPositionMutation = ({
  positionMs,
  deviceId,
}: UseSeekToPositionMutationProps) => {
  return useMutation([SEEK_TO_POSITION, positionMs], () =>
    putAsync(`${SPOTIFY_API_URL}${SEEK_TO_POSITION}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        position_ms: positionMs,
        device_id: deviceId,
      },
    }),
  );
};

export default useSeekToPositionMutation;
