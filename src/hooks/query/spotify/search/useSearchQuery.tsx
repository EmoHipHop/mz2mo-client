import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';
import { SEARCH } from '@/constants/apis/spotify';

interface UseSearchQueryProps {
  q: string;
  type: string;
  includeExternal?: string;
  limit?: number;
  market?: string;
  offset?: number;
}

/**
 * Spotify Search API를 사용하여 검색 결과를 가져오는 Hook
 * @param q 검색어
 * @param type 검색 타입
 * @param includeExternal external content를 포함할지 여부, 'audio'만 지원
 * @param limit return할 수 있는 최대 item 개수, 최대 50개까지 지정 가능
 * @param market 국가 코드
 * @param offset 검색 결과의 시작 위치
 * @returns useQuery
 */
const useSearchQuery = ({
  q,
  type,
  includeExternal,
  limit,
  market,
  offset,
}: UseSearchQueryProps) => {
  return useQuery([SEARCH, q, type], () =>
    getAsync(
      `${SEARCH}${includeExternal && `?include_external=${includeExternal}`}`,
      {
        params: {
          q,
          type,
          limit,
          market,
          offset,
        },
      },
    ),
  );
};

export default useSearchQuery;
