import type { GetAnimeDetailAPIResponseType } from '@/repository/Anime/contract/getAnimeDetail.contract';

import { castingError, throwError } from '@/utils/error';
import { safeParseToNumber, safeParseToString } from '@/utils/parse';
import { constructURL } from '@/utils/url';
import type {
  AnimeAdditionalInfoType,
  AnimeDetailType,
  AnimeRatingType,
  AnimeRelationItemType,
  AnimeRelationType,
  AnimeStreamingType
} from '@/model/anime';
import type { GenericNormalizeFnType } from '@/types/repository';
import type { GetField } from '@/types/utils';

type RawStudiosType = GetField<GetAnimeDetailAPIResponseType, 'data.studios'>;
type RawProducerType = GetField<
  GetAnimeDetailAPIResponseType,
  'data.producers'
>;

const mappingAdditionalInfo = (
  args: RawStudiosType | RawProducerType
): AnimeAdditionalInfoType => {
  if (args.length > 0) {
    const formattedData: string[] = args.reduce<string[]>((result, item) => {
      if (item && item.name) {
        result.push(item.name);
      }
      return result;
    }, []);

    return { data: formattedData, formattedData: formattedData.join(', ') };
  }

  return { data: [], formattedData: '-' };
};

export const normalizeAnimeList: GenericNormalizeFnType<
  AnimeDetailType,
  GetAnimeDetailAPIResponseType
> = (args) => {
  const { data } = args;

  try {
    if (data && data.mal_id && data.title) {
      const {
        background,
        duration,
        episodes,
        genres = [],
        images,
        mal_id: id,
        producers = [],
        relations = [],
        score,
        scored_by,
        streaming: rawStreaming = [],
        studios = [],
        synopsis,
        title,
        type,
        year
      } = data;

      // INFO: mapping image url

      let imageUrl = '';
      if (images) {
        if (images.webp?.image_url) {
          imageUrl = constructURL(images.webp?.image_url).toString();
        } else if (images.jpg?.image_url) {
          imageUrl = constructURL(images.jpg?.image_url).toString();
        }
      }

      // INFO: mapping rating

      const rating: AnimeRatingType = { rating: 0, totalParticipant: 0 };
      if (score) rating.rating = score;
      if (scored_by) rating.totalParticipant = scored_by;

      // INFO: mapping genre

      const genre = genres.reduce<string[]>((result, item) => {
        if (item && item.name) {
          result.push(item.name);
        }
        return result;
      }, []);

      // INFO: mapping streaming

      const streaming = rawStreaming.reduce<AnimeStreamingType[]>(
        (result, item) => {
          if (item && item.name && item.url) {
            result.push({ streamName: item.name, url: item.url });
          }

          return result;
        },
        []
      );

      // INFO: mapping anime relations

      const animeRelations = relations.reduce<AnimeRelationType[]>(
        (result, item) => {
          if (
            item &&
            item.relation &&
            Array.isArray(item.entry) &&
            item.entry.length > 0
          ) {
            const { entry, relation } = item;

            const formattedRelationItems = entry.reduce<
              AnimeRelationItemType[]
            >((result, relationItem) => {
              if (relationItem && relationItem.mal_id && relationItem.name) {
                const { mal_id, name } = relationItem;

                result.push({ id: safeParseToString(mal_id), name });
              }

              return result;
            }, []);

            if (formattedRelationItems.length) {
              result.push({ item: formattedRelationItems, relation });
            }
          }
          return result;
        },
        []
      );

      const response: AnimeDetailType = {
        animeRelations,
        background: safeParseToString(background),
        duration: safeParseToString(duration),
        episodes: safeParseToNumber(episodes),
        genre,
        id: safeParseToString(id),
        image: imageUrl,
        producers: mappingAdditionalInfo(producers),
        rating,
        streaming,
        studios: mappingAdditionalInfo(studios),
        synopsis: safeParseToString(synopsis),
        title,
        type: safeParseToString(type),
        year: safeParseToNumber(year)
      };

      return {
        response
      };
    }

    return throwError('data / pagination attribute is undefined');
  } catch (e) {
    return {
      error: castingError(e)
    };
  }
};
