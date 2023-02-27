import React from 'react';

import useModal from '@/hooks/useModal';
import { dummyEmoji } from '@/data/dummyEmoji';
import * as style from './EmojiPicker.style';

interface EmojiPickerProps {
  x: number;
  y: number;
}

const EmojiPicker = ({ x, y }: EmojiPickerProps) => {
  const { closeModal } = useModal();
  return (
    <style.Container x={x} y={y}>
      <style.Close type="button" onClick={closeModal}>
        x
      </style.Close>
      <style.EmojiContainer>
        {dummyEmoji.map((emoji, index) => {
          return (
            // FIXME: get emoji data
            <style.Emoji key={emoji.id} type="button" isChecked={!!(index % 2)}>
              {emoji.name}
            </style.Emoji>
          );
        })}
      </style.EmojiContainer>
    </style.Container>
  );
};

export default EmojiPicker;
