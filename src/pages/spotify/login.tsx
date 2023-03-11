import { useEffect } from 'react';
import { redirectToSpotifyAuth } from '@/apis/spotify';

const SpotifyLogin = () => {
  useEffect(() => {
    redirectToSpotifyAuth();
  }, []);
  return (
    <div>
      <p>Login</p>
    </div>
  );
};

export default SpotifyLogin;
