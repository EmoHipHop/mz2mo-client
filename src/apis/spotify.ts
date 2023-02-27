import { SpotifyAccessTokenOutput } from '@/types/spotifyTypes';
import { postAsync } from './API';

export async function redirectToSpotifyAuth() {
  const authQueryParams = new URLSearchParams({
    response_type: 'code',
    client_id: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
    scope: 'streaming user-read-email user-read-private',
    redirect_uri: 'http://localhost:3000/spotify/callback',
    state: 'randomly',
  });
  window.location.href = `https://accounts.spotify.com/authorize/?${authQueryParams.toString()}`;
}

/**
 * Spotify SDK 사용에 필요한 엑세스 토큰을 요청하는 getSpotifyAccessToken
 */
export async function getSpotifyAccessToken(code: string) {
  const encodedClientSecret = Buffer.from(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
  ).toString('base64');
  const response = await postAsync<SpotifyAccessTokenOutput, any>(
    '/api/token',
    {
      code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/spotify/callback',
    },
    {
      baseURL: 'https://accounts.spotify.com',
      headers: {
        Authorization: `Basic ${encodedClientSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response.isSuccess ? response.result.access_token : null;
}
