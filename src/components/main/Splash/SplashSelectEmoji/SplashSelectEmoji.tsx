import SampleEmojiSvg from '@/assets/icons/images/sampleEmoji.svg';
import { MusicCommunityVote, VoteList } from '@/types/splashTypes';
import React from 'react';
import * as style from './SplashSelectEmoji.style';

const MyComponent = ({
  votes,
  list,
  selectHandler,
  selectedItem,
  next,
}: {
  votes: MusicCommunityVote[] | undefined;
  list: VoteList[] | undefined;
  selectHandler: (id: string) => void;
  selectedItem: string;
  next: boolean;
}) => (
  <style.EmojisWrapper>
    <style.EmojiList>
      {votes?.map((item, idx) => (
        <style.EmojiItem
          key={item.emojiId}
          onClick={() => selectHandler(item.emojiId)}
          isSelected={selectedItem === item.emojiId}
        >
          <style.EmojiButton>
            <SampleEmojiSvg width={34} height={34} />
          </style.EmojiButton>
          {next && list && (
            <style.EmojiPercent>{list[idx].percentage} %</style.EmojiPercent>
          )}
        </style.EmojiItem>
      ))}
    </style.EmojiList>
  </style.EmojisWrapper>
);

export default MyComponent;
