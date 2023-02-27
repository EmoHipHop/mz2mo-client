import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import { setSpotifyTokenAtom } from '@/stores/actions';
import { SdkStatusTypes } from '@/types/spotifyTypes';
import {
  sdkPlayerPlayTrack,
  sdkPlayerPauseTrack,
  sdkPlayerSetRepeat,
} from '@/utils/spotify';

const WebPlayers = () => {
  const [deviceId, setDeviceId] = useState('');
  const [sdkPlayer, setSdkPlayer] = useState<Spotify.Player | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Spotify.Track | null>(null);
  const [sdkStatus, setSdkStatus] = useState<SdkStatusTypes>({
    paused: false,
    actived: false,
    repeated: 'off',
    position: 0,
  });
  const spotifyToken = useAtomValue(setSpotifyTokenAtom);

  const onPlay = () => {
    if (spotifyToken)
      sdkPlayerPlayTrack(
        ['spotify:track:7eBpUuPnDTfbeP1P4P93CS'],
        deviceId,
        spotifyToken,
        sdkStatus.position,
      );
  };

  const onPause = () => {
    if (spotifyToken) sdkPlayerPauseTrack(deviceId, spotifyToken);
  };

  const onRepeat = () => {
    if (spotifyToken) {
      const changedRepeated = sdkStatus.repeated === 'off' ? 'track' : 'off';
      sdkPlayerSetRepeat(deviceId, spotifyToken, changedRepeated);
      setSdkStatus((prevStatus) => ({
        ...prevStatus,
        repeated: changedRepeated,
      }));
    }
  };

  useEffect(() => {
    // SpotifyToken 이 존재하지 않는다면, SDK 연결이 불가하므로 script 로드 미진행.
    if (spotifyToken !== null) {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;
      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        // Spotify 로부터 새로운 SDK Player 객체 생성
        const initPlayer = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: (callback) => {
            callback(spotifyToken);
          },
          volume: 0.5,
        });

        // Spotify.Player 객체를 ref 로 저장
        setSdkPlayer(initPlayer);

        // SDK 세팅이 완료되었다면 인계 받은 deviceId 저장
        initPlayer.addListener('ready', (data) => {
          setDeviceId(data.device_id);
          console.log(`Ready with Device ID : ${data.device_id}`);
        });

        initPlayer.addListener('not_ready', (data) => {
          console.log(`Device ID : ${data.device_id} has gone Offline.`);
        });

        initPlayer.addListener('player_state_changed', (state) => {
          if (!state) return;

          // 현재 재생된 음악의 트랙 정보에 대한 정보를 받아옴.
          setCurrentTrack(state.track_window.current_track);

          // Player 재생 중지 시 중지된 position 을 저장하여 resume에 사용
          setSdkStatus((prevStatus) => ({
            ...prevStatus,
            paused: state.paused,
            position: state.paused ? state.position : 0,
          }));

          initPlayer.getCurrentState().then((curState) => {
            setSdkStatus((prevStatus) => ({
              ...prevStatus,
              active: !(curState === null),
            }));
          });
        });

        // 사용자의 기본 볼륨을 50%로 설정한 후 SDK 연결 진행
        initPlayer.setVolume(0.5);
        initPlayer.connect();
      };
    }
  }, []);

  return (
    <div>
      <p>SDK Player</p>
      {sdkPlayer && (
        <div>
          {currentTrack && (
            <div>
              <p>{`${currentTrack.name}`}</p>
              <p>{`${currentTrack.artists[0].name}`}</p>
            </div>
          )}
          <button onClick={onPlay}>play Song</button>
          <button onClick={onPause}>pause Song</button>
          <button onClick={onRepeat}>Repear Song</button>
        </div>
      )}
    </div>
  );
};

export default WebPlayers;
