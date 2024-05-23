import { useCallback } from 'react';

import type { GetAnimeListAPIResponseType } from '@/repository/Anime/contract/getAnimeList.contract';
import type { GetAnimeListFetchAPIFnType } from '@/repository/Anime/types';

import { castingError, throwError } from '@/utils/error';
import { fetchAPI } from '@/utils/fetcher';
import { constructURL } from '@/utils/url';

import { normalizeAnimeList } from './normalizer';

const useGetAnimeList = () => {
  const handleOnFetchAPI: GetAnimeListFetchAPIFnType = useCallback(
    async (args) => {
      const { limit, page, query } = args;

      try {
        const url = constructURL(`https://api.jikan.moe/v4/anime`, {
          limit,
          page,
          q: query
        });

        const { error, response } = await fetchAPI<GetAnimeListAPIResponseType>(
          url,
          { method: 'GET' }
        );

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

export default useGetAnimeList;
