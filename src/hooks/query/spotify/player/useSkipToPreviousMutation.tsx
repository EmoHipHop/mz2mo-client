import { useMutation } from '@tanstack/react-query';

import { postAsync } from '@/apis/API';
import { SKIP_TO_PREVIOUS } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseSkipToPreviousMutationProps {
  deviceId: string;
}

/**
 * 이전 트랙으로 넘어가는 Hook
 * @param deviceId 기기 id
 * @returns useMutation
 */
const useSkipToPreviousMutation = ({
  deviceId,
}: UseSkipToPreviousMutationProps) => {
  return useMutation([SKIP_TO_PREVIOUS, deviceId], () =>
    postAsync(`${SPOTIFY_API_URL}${SKIP_TO_PREVIOUS}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        device_id: deviceId,
      },
    }),
  );
};

export default useSkipToPreviousMutation;
