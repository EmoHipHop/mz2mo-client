import { getAsync } from '@/apis/API';
import type { ApiResult } from '@/types/apiTypes';
import { MusicCommunityResponse } from '@/types/splashTypes';

/**
 * 음악 커뮤니티 조회
 * @param url 음악 커뮤니티 조회 URL
 * @returns 서버로부터 받은 리턴값
 */
export const getMusicCommunityAsync = async (
  url: string,
): ApiResult<MusicCommunityResponse> => getAsync<MusicCommunityResponse>(url);
