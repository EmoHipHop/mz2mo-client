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
  position: number,
): Promise<boolean> => {
  const response = await putAsync<null, any>(
    `/me/player/play`,
    {
      uris,
      position_ms: position,
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

/**
 * SDK Player의 반복 모드를 설정하는 함수
 * @param deviceId SDK Device ID
 * @param token Spotify Access Token
 * @param state 'track' : 트랙 반복 재생, 'context' : 한 곡 재생, 'off' : 미반복
 * @returns
 */
export const sdkPlayerSetRepeat = async (
  deviceId: string,
  token: string,
  state: 'track' | 'context' | 'off',
): Promise<boolean> => {
  const response = await putAsync<null, null>(`/me/player/repeat`, null, {
    baseURL: SPOTIFY_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: {
      state,
      device_id: deviceId,
    },
  });
  return response.isSuccess;
};
