import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import { play, pause } from '@/apis/spotify';
import { setSpotifyTokenAtom } from '@/stores/actions';

interface WebPlaybackPlayer {
  device_id: string;
}

const WebPlayers = () => {
  const [spotifyPlayer, setSpotifyPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState('');
  const spotifyToken = useAtomValue(setSpotifyTokenAtom);

  const onPlay = (uri: string) => {
    play({
      spotifyUri: uri,
      deviceId,
      position: 0,
      playerInstance: spotifyPlayer,
    });
  };

  const onPause = () => {
    pause({ deviceId, playerInstance: spotifyPlayer });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    const connectToSpotify = async (token: string) => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: (callback: (t: string) => void) => {
            callback(token);
          },
          volume: 0.5,
        });
        setSpotifyPlayer(player);
        player.addListener('ready', (webPlaybackPlayer: WebPlaybackPlayer) => {
          setDeviceId(webPlaybackPlayer.device_id);
        });

        player.setVolume(0.5);
        player.connect();
      };
    };

    if (spotifyToken !== null) connectToSpotify(spotifyToken);
  }, [spotifyToken]);

  return (
    <div>
      <p>SDK Player</p>
      <button onClick={() => onPlay('spotify:track:7eBpUuPnDTfbeP1P4P93CS')}>
        play Song
      </button>
      <button onClick={onPause}>pause Song</button>
    </div>
  );
};

export default WebPlayers;
