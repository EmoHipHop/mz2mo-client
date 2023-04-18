import SampleEmojiSvg from '@/assets/icons/images/sampleEmoji.svg';
import { MusicCommunityVote, VoteList } from '@/types/splashTypes';
import React from 'react';
import * as style from './SplashEmoji.style';

const SplashEmoji = ({
  votes,
  list,
  selectHandler,
  selectedItem,
  isNext,
  title,
}: {
  votes: MusicCommunityVote[] | undefined;
  list: VoteList[] | undefined;
  selectHandler: (id: string) => void;
  selectedItem: string;
  isNext?: boolean;
  title?: string;
}) => (
  <style.EmojisWrapper>
    {title && <style.EmojiTitle>{title}</style.EmojiTitle>}
    <style.EmojiList>
      {votes?.map((item, idx) => (
        <style.EmojiItem
          key={item.emojiId}
          onClick={() => selectHandler(item.emojiId)}
          isSelected={selectedItem === item.emojiId}
          isNext={isNext ?? false}
        >
          <style.EmojiButton>
            <SampleEmojiSvg width={34} height={34} />
          </style.EmojiButton>
          {isNext && list && (
            <style.EmojiPercent>{list[idx].percentage} %</style.EmojiPercent>
          )}
        </style.EmojiItem>
      ))}
    </style.EmojiList>
  </style.EmojisWrapper>
);

export default SplashEmoji;
