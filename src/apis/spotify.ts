import { SpotifyAccessTokenOutput } from '@/types/spotifyTypes';
import { postAsync } from './API';

/**
 * Spotify SDK 사용에 필요한 엑세스 토큰을 요청하는 getSpotifyAccessToken
 */
export async function getSpotifyAccessToken() {
  const encodedClientSecret = Buffer.from(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
  ).toString('base64');
  const response = await postAsync<SpotifyAccessTokenOutput, null>(
    '/api/token',
    null,
    {
      baseURL: 'https://accounts.spotify.com',
      headers: {
        Authorization: `Basic ${encodedClientSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        grant_type: 'client_credentials',
      },
    },
  );
  return response.isSuccess ? response.result.access_token : null;
}
