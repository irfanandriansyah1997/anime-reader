import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import useGetAnimeList from '@/repository/Anime/usecase/useGetAnimeList';

import useAsyncState from '@/hooks/useAsyncState';
import useMount from '@/hooks/useMount';

import { LIMIT_ANIME_CARDS } from '@/constant/anime';
import type { AnimeListItemType } from '@/model/anime';
import type { PaginationType } from '@/types/pagination';

export const useFetchAnimeList = () => {
  const { fetchAPI } = useGetAnimeList();
  const initialRender = useRef(true);
  const [keyword, setKeyword] = useState('');
  const [pagination, setPagination] = useState<PaginationType>({
    page: 0,
    perPage: 10,
    totalData: 0,
    totalPage: 0
  });
  const [{ loading, result: animeList = [] }, dispatch] = useAsyncState<
    AnimeListItemType[]
  >({
    initialLoading: true,
    initialValue: []
  });

  const handleOnFetchAnimeList = useCallback(
    async (page: number) => {
      dispatch.setLoading(true);

      const { response } = await fetchAPI({
        limit: LIMIT_ANIME_CARDS,
        page,
        query: keyword
      });

      if (response) {
        const { animeList, pagination } = response;

        dispatch.setValue(animeList);
        setPagination({
          page: pagination.page,
          perPage: pagination.perPage,
          totalData: pagination.totalData,
          totalPage: pagination.totalPage
        });
      }
    },
    [dispatch, fetchAPI, keyword]
  );

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    handleOnFetchAnimeList(1);

    // INFO: disable eslint cause prevent unused rerender if handleOnFetchAnimeList changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  /**
   * Fetch Anime List On Did Mount
   */
  useMount(async () => handleOnFetchAnimeList(1));

  const state = useMemo(() => {
    return {
      animeList,
      keyword,
      loading,
      pagination
    };
  }, [animeList, keyword, loading, pagination]);

  const action = useMemo(() => {
    return {
      fetchAnimelist: handleOnFetchAnimeList,
      setKeyword
    };
  }, [handleOnFetchAnimeList]);

  return { action, state };
};
