export interface MusicCommunityVote {
  musicId: string;
  accountId: string;
  emojiId: string;
}
export interface MusicCommunityResponse {
  id: string;
  youtubeId: string;
  votes: MusicCommunityVote[];
}

export interface VoteList {
  musicId: string;
  emojiId: string;
  percentage: number;
}

export interface VoteResponse {
  size: number;
  list: VoteList[];
}
