import { useCallback } from 'react';

import type { GetAnimeCharacterAPIResponseType } from '@/repository/Anime/contract/getAnimeCharacter.contract';
import type { GetAnimeCharacterFetchAPIFnType } from '@/repository/Anime/types';

import { castingError, throwError } from '@/utils/error';
import { fetchAPI } from '@/utils/fetcher';
import { safeParseToNumber, safeParseToString } from '@/utils/parse';
import { constructURL } from '@/utils/url';
import { MAXIMUM_CHARACTER_ANIME } from '@/constant/anime';
import type { AnimeCharacterType } from '@/model/anime';

const useGetAnimeCharacter = () => {
  const handleOnFetchAPI: GetAnimeCharacterFetchAPIFnType = useCallback(
    async (args) => {
      const { animeId } = args;

      try {
        const url = constructURL(
          `https://api.jikan.moe/v4/anime/${animeId}/characters`
        );

        const { error, response } =
          await fetchAPI<GetAnimeCharacterAPIResponseType>(url, {
            method: 'GET'
          });

        if (error) throw error;

        if (!response || !response.data) {
          return throwError('Unknown response');
        }

        const { data } = response;

        const animeCharacters = data
          .slice(0, 50)
          .reduce<AnimeCharacterType[]>((result, item) => {
            if (result.length >= MAXIMUM_CHARACTER_ANIME) return result;

            if (item && item.character && item.character.name) {
              const {
                character: { images, name }
              } = item;

              let imageUrl = '';
              if (images) {
                if (images.webp?.image_url) {
                  imageUrl = constructURL(images.webp?.image_url).toString();
                } else if (images.jpg?.image_url) {
                  imageUrl = constructURL(images.jpg?.image_url).toString();
                }
              }

              result.push({
                characterName: name,
                favorites: safeParseToNumber(item.favorites),
                image: imageUrl,
                role: safeParseToString(item.role)
              });
            }

            return result;
          }, []);

        return {
          response: animeCharacters
        };
      } catch (e) {
        return { error: castingError(e) };
      }
    },
    []
  );

  return { fetchAPI: handleOnFetchAPI };
};

export default useGetAnimeCharacter;
