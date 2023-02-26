import React, { useRef, useState } from 'react';
import Sample from '@/assets/media/Hypeboy.mp3';
import ControlPanel from './ControlPanel';

const SoundControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentage, sePercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Play Audio
  const play = () => {
    const audio = audioRef.current;

    if (audio !== null) {
      audio.volume = 0.1;

      if (!isPlaying) {
        setIsPlaying(true);
        audio.play();
      } else {
        setIsPlaying(false);
        audio.pause();
      }
    }
  };

    const loadedData = (e:any) => {
      setDuration(e.currentTarget.duration.toFixed(2));
    };

  return (
    <>
      <ControlPanel play={play} isPlaying={isPlaying} />

      {/* 소리 재생하게 해주는 태그 */}
      <audio src={Sample} ref={audioRef} preload="metadata">
        <track
          src="captions_es.vtt"
          kind="captions"
          srcLang="es"
          label="spanish_captions"
          onLoadedData={loadedData}
        />
      </audio>
    </>
  );
};

export default SoundControl;
