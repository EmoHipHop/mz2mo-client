import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { getSpotifyAccessToken } from '@/apis/spotify';
import { setSpotifyTokenAtom } from '@/stores/actions';

const SpotifyCallback = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const setSpotifyToken = useSetAtom(setSpotifyTokenAtom);

  useEffect(() => {
    if (!code) return;

    const getSpotifyToken = async () => {
      const spotifyToken = await getSpotifyAccessToken(code);
      setSpotifyToken(spotifyToken);
      router.push('/');
    };

    getSpotifyToken();
  }, [code]);
};

export default SpotifyCallback;
