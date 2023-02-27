import { ReactNode } from 'react';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface AuthTokenType {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface ModalStateType {
  isOpen: boolean;
  content?: ReactNode;
}

export const jwtTokenAtom = atomWithStorage<AuthTokenType>('jwt', {
  accessToken: null,
  refreshToken: null,
});

export const spotifyTokenAtom = atomWithStorage<string | null>(
  'spotify_token',
  null,
);

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: null,
});
