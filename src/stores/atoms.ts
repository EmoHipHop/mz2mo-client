import { atomWithStorage } from 'jotai/utils';

export interface AuthTokenType {
  accessToken: string | null;
  refreshToken: string | null;
}

export const jwtTokenAtom = atomWithStorage<AuthTokenType>('jwt', {
  accessToken: null,
  refreshToken: null,
});

export const spotifyTokenAtom = atomWithStorage<string | null>(
  'spotify_token',
  null,
);
