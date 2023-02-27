import { atom } from 'jotai';

import {
  jwtTokenAtom,
  spotifyTokenAtom,
  modalStateAtom,
  AuthTokenType,
  ModalStateType,
} from './atoms';

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
  (get) => {
    return get(spotifyTokenAtom);
  },
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
