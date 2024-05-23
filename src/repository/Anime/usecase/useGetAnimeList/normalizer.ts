import type { GetAnimeListAPIResponseType } from '@/repository/Anime/contract/getAnimeList.contract';
import type { GetAnimeListResponseType } from '@/repository/Anime/types';

import { castingError, throwError } from '@/utils/error';
import { safeParseToNumber, safeParseToString } from '@/utils/parse';
import { constructURL } from '@/utils/url';
import { LIMIT_ANIME_CARDS } from '@/constant/anime';
import type { AnimeListItemType } from '@/model/anime';
import type { PaginationType } from '@/types/pagination';
import type { GenericNormalizeFnType } from '@/types/repository';

export const normalizeAnimeList: GenericNormalizeFnType<
  GetAnimeListResponseType,
  GetAnimeListAPIResponseType
> = (args) => {
  const { data, pagination } = args;

  try {
    if (data && pagination) {
      /**
       * Mapping Anime List
       */
      const animeList = data.reduce<AnimeListItemType[]>((result, item) => {
        if (result.length >= LIMIT_ANIME_CARDS) return result;

        if (item && item.mal_id && item.title) {
          const {
            background,
            episodes,
            images,
            mal_id,
            score,
            synopsis,
            title
          } = item;

          let imageUrl = '';
          if (images) {
            if (images.webp?.image_url) {
              imageUrl = constructURL(images.webp?.image_url).toString();
            } else if (images.jpg?.image_url) {
              imageUrl = constructURL(images.jpg?.image_url).toString();
            }
          }

          let shortDesc = '';
          if (background) shortDesc = background;
          else if (synopsis) shortDesc = synopsis;

          result.push({
            episodes: safeParseToNumber(episodes),
            id: safeParseToString(mal_id),
            image: imageUrl,
            rating: safeParseToNumber(score),
            shortDesc,
            title
          });
        }
        return result;
      }, []);

      /**
       * Mapping Pagination
       */
      const { current_page, items } = pagination;
      const perPage = safeParseToNumber(items?.per_page);
      const totalData = safeParseToNumber(items?.total);
      const totalPage = Math.ceil(totalData / perPage);

      const formattedPagination: PaginationType = {
        page: safeParseToNumber(current_page),
        perPage,
        totalData,
        totalPage
      };

      return {
        response: {
          animeList,
          pagination: formattedPagination
        }
      };
    }

    return throwError('data / pagination attribute is undefined');
  } catch (e) {
    return {
      error: castingError(e)
    };
  }
};
