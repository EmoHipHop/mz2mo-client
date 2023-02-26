import { useMutation } from '@tanstack/react-query';

import { putAsync } from '@/apis/API';
import { VOLUME } from '@/constants/apis/spotify';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

interface UseSetPlaybackVolumeMutationProps {
  volumePercent: number;
  deviceId?: string;
}

/**
 * 재생 위치를 이동하는 Hook
 * @param volumePercent 볼륨 크기 (0 ~ 100)
 * @param deviceId 기기 id
 * @returns useMutation
 */
const useSetPlaybackVolumeMutation = ({
  volumePercent,
  deviceId,
}: UseSetPlaybackVolumeMutationProps) => {
  return useMutation([VOLUME, volumePercent], () =>
    putAsync(`${SPOTIFY_API_URL}${VOLUME}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // TODO: fix get token
      params: {
        volume_percent: volumePercent,
        device_id: deviceId,
      },
    }),
  );
};

export default useSetPlaybackVolumeMutation;
