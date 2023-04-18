import { getAsync, postAsync } from '@/apis/API';
import type { ApiResult } from '@/types/apiTypes';
import {
  MusicCommunityResponse,
  PostVoteData,
  VoteResponse,
} from '@/types/splashTypes';

/**
 * 음악 커뮤니티 조회
 * @param url 음악 커뮤니티 조회 URL
 * @returns 서버로부터 받은 리턴값
 */
export const getMusicCommunityAsync = async (
  url: string,
): ApiResult<MusicCommunityResponse> => getAsync<MusicCommunityResponse>(url);

export const getMusicCommunityVoteRateAsync = async (
  url: string,
): ApiResult<VoteResponse> => getAsync<VoteResponse>(url);

export const postMusicCommunityVoteAsync = async (
  url: string,
  data: PostVoteData,
): ApiResult<VoteResponse> => postAsync<VoteResponse, PostVoteData>(url, data);
