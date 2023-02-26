import { putAsync } from '@/apis/API';
import { SPOTIFY_API_URL } from '@/constants/apis/server';

export const sdkPlayerSkipTrack = async (
  type: 'previous' | 'next',
  deviceId: string,
  token: string,
): Promise<boolean> => {
  const response = await putAsync<null, null>(`/me/player/${type}`, null, {
    baseURL: SPOTIFY_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: {
      device_id: deviceId,
    },
  });
  return response.isSuccess;
};

export const sdkPlayerPlayTrack = async (
  uris: string[],
  deviceId: string,
  token: string,
): Promise<boolean> => {
  const response = await putAsync<null, any>(
    `/me/player/play`,
    {
      uris,
    },
    {
      baseURL: SPOTIFY_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: {
        device_id: deviceId,
      },
    },
  );
  return response.isSuccess;
};

export const sdkPlayerPauseTrack = async (
  deviceId: string,
  token: string,
): Promise<boolean> => {
  const response = await putAsync<null, null>(`/me/player/pause`, null, {
    baseURL: SPOTIFY_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: {
      device_id: deviceId,
    },
  });
  return response.isSuccess;
};
