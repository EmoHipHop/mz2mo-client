import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';

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
 * @param props
 * @returns useQuery
 */
const useSearchQuery = (props: UseSearchQueryProps) => {
  return useQuery(['search', props.q, props.type], () =>
    getAsync('/search', {
      params: {
        ...props,
      },
    }),
  );
};

export default useSearchQuery;
