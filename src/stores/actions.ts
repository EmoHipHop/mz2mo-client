import { atom } from 'jotai';

import type { AuthTokenType, ModalStateType } from './atoms';
import { jwtTokenAtom, spotifyTokenAtom, modalStateAtom } from './atoms';

export const setJwtTokenAtom = atom(
  (get) => {
    const curTokenAtom = get(jwtTokenAtom);
    return curTokenAtom.accessToken;
  },
  (get, set, newAccessToken: AuthTokenType) => {
    const prevTokenData = get(jwtTokenAtom);
    set(jwtTokenAtom, { ...prevTokenData, ...newAccessToken });
  },
);

export const setSpotifyTokenAtom = atom(
  (get) => get(spotifyTokenAtom),
  (get, set, newAccessToken: string | null) => {
    set(spotifyTokenAtom, newAccessToken);
  },
);

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);
