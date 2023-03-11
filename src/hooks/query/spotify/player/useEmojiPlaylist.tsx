import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';

interface UseEmojiPlaylistProps {
  deviceId: string;
  emojiId: string;
}

/**
 * 현재 유저가 담은 이모지 별 플리 중 하나를 가져오는 Hook
 * @returns useQuery
 */
export const useEmojiPlaylist = ({
  deviceId,
  emojiId,
}: UseEmojiPlaylistProps) => {
  return useQuery([deviceId, emojiId], () => getAsync(`/emoji/playlist`));
};
