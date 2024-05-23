import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { AnimeDetailStateType } from '@/modules/AnimeDetail/types';
import useGetAnimeCharacter from '@/repository/Anime/usecase/useGetAnimeCharacter';
import useGetAnimeDetail from '@/repository/Anime/usecase/useGetAnimeDetail';
import useGetAnimeEpisodes from '@/repository/Anime/usecase/useGetAnimeEpisodes';

import useAsyncState from '@/hooks/useAsyncState';
import useMount from '@/hooks/useMount';

import { safeParseToNumber } from '@/utils/parse';

const useFetchAnimeDetail = () => {
  const { animeId } = useParams();
  const navigate = useNavigate();
  const { fetchAPI: getAnimeDetail } = useGetAnimeDetail();
  const { fetchAPI: getAnimeCharacter } = useGetAnimeCharacter();
  const { fetchAPI: getAnimeEpisodes } = useGetAnimeEpisodes();
  const [state, dispatch] = useAsyncState<AnimeDetailStateType>({
    initialLoading: true
  });

  const handleOnGetData = useCallback(async () => {
    const formattedAnimeId = safeParseToNumber(animeId);

    if (!formattedAnimeId) {
      navigate('/404');
      return;
    }

    const [
      { response: animeDetail },
      { response: animeCharacter = [] },
      { response: animeEpisodes = [] }
    ] = await Promise.all([
      getAnimeDetail({ animeId: formattedAnimeId }),
      getAnimeCharacter({ animeId: formattedAnimeId }),
      getAnimeEpisodes({ animeId: formattedAnimeId })
    ]);

    if (!animeDetail) {
      navigate('/404');
      return;
    }

    dispatch.setValue({
      character: animeCharacter,
      detailInformation: animeDetail,
      episodes: animeEpisodes
    });
  }, [
    animeId,
    dispatch,
    getAnimeCharacter,
    getAnimeDetail,
    getAnimeEpisodes,
    navigate
  ]);

  useMount(handleOnGetData);

  return { state };
};

export default useFetchAnimeDetail;
