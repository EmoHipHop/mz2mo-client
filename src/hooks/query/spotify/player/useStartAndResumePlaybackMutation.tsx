import { useMutation } from '@tanstack/react-query';

import { putAsync } from '@/apis/API';
import { START_AND_RESUME } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseStartAndResumePlaybackMutationProps {
  deviceId: string;
  contextUri?: string;
  uris?: string[];
  offset?: {};
  positionMs?: number;
}

/**
 * 재생을 시작하거나 재개하는 Hook
 * @param deviceId 기기 id
 * @param contextUri 재생할 컨텍스트 uri
 * @param uris 재생할 트랙 uri
 * @param offset 재생할 트랙의 오프셋
 * @param positionMs 재생할 트랙의 시작 위치
 * @returns useMutation
 */
const useStartAndResumePlaybackMutation = ({
  deviceId,
  contextUri,
  uris,
  offset,
  positionMs,
}: UseStartAndResumePlaybackMutationProps) => {
  return useMutation([START_AND_RESUME], () =>
    putAsync(`${SPOTIFY_API_URL}${START_AND_RESUME}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      query: {
        device_id: deviceId,
      },
      body: {
        context_uri: contextUri,
        uris,
        offset,
        position_ms: positionMs,
      },
    }),
  );
};

export default useStartAndResumePlaybackMutation;
