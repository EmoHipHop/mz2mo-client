import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';
import { TRACKS } from '@/constants/apis/spotify';

interface UseGetTrackQueryProps {
  id: string;
  market?: string;
}

/**
 * spotify id로 트랙 정보를 가져오는 Hook
 * @param id 검색어
 * @param market 국가 코드
 * @returns useQuery
 */
const useGetTrackQuery = ({ id, market }: UseGetTrackQueryProps) => {
  return useQuery([TRACKS, id], () =>
    getAsync(`${TRACKS}/${id}`, {
      params: {
        market,
      },
    }),
  );
};

export default useGetTrackQuery;
