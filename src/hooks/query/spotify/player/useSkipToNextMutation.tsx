import { useMutation } from '@tanstack/react-query';

import { postAsync } from '@/apis/API';
import { SKIP_TO_NEXT } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseSkipToNextMutationProps {
  deviceId: string;
}

/**
 * 다음 트랙으로 넘어가는 Hook
 * @param deviceId 기기 id
 * @returns useMutation
 */
const useSkipToNextMutation = ({ deviceId }: UseSkipToNextMutationProps) => {
  return useMutation([SKIP_TO_NEXT, deviceId], () =>
    postAsync(`${SPOTIFY_API_URL}${SKIP_TO_NEXT}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        device_id: deviceId,
      },
    }),
  );
};

export default useSkipToNextMutation;
