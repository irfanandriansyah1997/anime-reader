import { useCallback } from 'react';

import type { GetAnimeDetailAPIResponseType } from '@/repository/Anime/contract/getAnimeDetail.contract';
import type { GetAnimeDetailFetchAPIFnType } from '@/repository/Anime/types';

import { castingError, throwError } from '@/utils/error';
import { fetchAPI } from '@/utils/fetcher';
import { constructURL } from '@/utils/url';

import { normalizeAnimeList } from './normalizer';

const useGetAnimeDetail = () => {
  const handleOnFetchAPI: GetAnimeDetailFetchAPIFnType = useCallback(
    async (args) => {
      const { animeId } = args;

      try {
        const url = constructURL(
          `https://api.jikan.moe/v4/anime/${animeId}/full`
        );

        const { error, response } =
          await fetchAPI<GetAnimeDetailAPIResponseType>(url, { method: 'GET' });

        if (error) throw error;

        if (!response || !response.data) {
          return throwError('Unknown response');
        }

        return normalizeAnimeList(response);
      } catch (e) {
        return { error: castingError(e) };
      }
    },
    []
  );

  return { fetchAPI: handleOnFetchAPI };
};

export default useGetAnimeDetail;
