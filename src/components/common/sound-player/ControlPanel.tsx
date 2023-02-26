import React from 'react';
import { ControlPanelTypes } from '~/src/types/soundTypes';

const ControlPanel = ({ play, isPlaying }: ControlPanelTypes) => {
  return (
    <button onClick={play} type="button">
      {isPlaying ? '재생중~' : '아닌뒝'}
    </button>
  );
};

export default ControlPanel;
