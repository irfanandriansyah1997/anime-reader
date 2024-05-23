import { useCallback } from 'react';

import type { GetAnimeEpisodesAPIResponseType } from '@/repository/Anime/contract/getAnimeEpisodes.contract';
import type { GetAnimeEpisodesFetchAPIFnType } from '@/repository/Anime/types';

import { castingError, throwError } from '@/utils/error';
import { fetchAPI } from '@/utils/fetcher';
import { constructURL } from '@/utils/url';
import { MAXIMUM_EPISODES_ANIME } from '@/constant/anime';
import type { AnimeEpisodesType } from '@/model/anime';

const useGetAnimeEpisodes = () => {
  const handleOnFetchAPI: GetAnimeEpisodesFetchAPIFnType = useCallback(
    async (args) => {
      const { animeId } = args;

      try {
        const url = constructURL(
          `https://api.jikan.moe/v4/anime/${animeId}/videos/episodes`
        );

        const { error, response } =
          await fetchAPI<GetAnimeEpisodesAPIResponseType>(url, {
            method: 'GET'
          });

        if (error) throw error;

        if (!response || !response.data) {
          return throwError('Unknown response');
        }

        const { data } = response;

        const animeEpisodes = data
          .slice(0, 50)
          .reduce<AnimeEpisodesType[]>((result, item) => {
            if (result.length >= MAXIMUM_EPISODES_ANIME) return result;

            if (item && item.episode && item.url && item.mal_id && item.title) {
              const { images, mal_id, title, url } = item;

              let imageUrl = '';
              if (images && images.jpg && images.jpg.image_url) {
                imageUrl = constructURL(images.jpg.image_url).toString();
              }

              result.push({
                id: String(mal_id),
                image: imageUrl,
                title,
                url
              });
            }

            return result;
          }, []);

        return { response: animeEpisodes };
      } catch (e) {
        return { error: castingError(e) };
      }
    },
    []
  );

  return { fetchAPI: handleOnFetchAPI };
};

export default useGetAnimeEpisodes;
