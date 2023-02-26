import { useMutation } from '@tanstack/react-query';

import { putAsync } from '@/apis/API';
import { START_AND_RESUME } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseStartAndPausePlaybackMutationProps {
  deviceId: string;
  contextUri?: string;
  uris?: string[];
  offset?: {};
  positionMs?: number;
}

const useStartAndPausePlaybackMutation = ({
  deviceId,
  contextUri,
  uris,
  offset,
  positionMs,
}: UseStartAndPausePlaybackMutationProps) => {
  return useMutation([START_AND_RESUME], () =>
    putAsync(`${SPOTIFY_API_URL}${START_AND_RESUME}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
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

export default useStartAndPausePlaybackMutation;
