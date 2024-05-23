import type {
  AnimeCharacterType,
  AnimeDetailType,
  AnimeEpisodesType,
  AnimeListItemType
} from '@/model/anime';
import type { PaginationType } from '@/types/pagination';
import type { GenericNormalizeResponseType } from '@/types/repository';

/////////////////////////////////////////////////////////////////////////////
// Get Anime List Contract
/////////////////////////////////////////////////////////////////////////////

export interface GetAnimeListFetchAPIArgs {
  limit: number;
  page: number;
  query?: string;
}

export interface GetAnimeListResponseType {
  animeList: AnimeListItemType[];
  pagination: PaginationType;
}

export type GetAnimeListFetchAPIFnType = (
  args: GetAnimeListFetchAPIArgs
) => Promise<GenericNormalizeResponseType<GetAnimeListResponseType>>;

/////////////////////////////////////////////////////////////////////////////
// Get Anime Detail Contract
/////////////////////////////////////////////////////////////////////////////

export interface GetAnimeDetailFetchAPIArgs {
  animeId: number;
}

export type GetAnimeDetailFetchAPIFnType = (
  args: GetAnimeDetailFetchAPIArgs
) => Promise<GenericNormalizeResponseType<AnimeDetailType>>;

/////////////////////////////////////////////////////////////////////////////
// Get Anime Character Contract
/////////////////////////////////////////////////////////////////////////////

export interface GetAnimeCharacterFetchAPIArgs {
  animeId: number;
}

export type GetAnimeCharacterFetchAPIFnType = (
  args: GetAnimeCharacterFetchAPIArgs
) => Promise<GenericNormalizeResponseType<AnimeCharacterType[]>>;

/////////////////////////////////////////////////////////////////////////////
// Get Anime Episodes Contract
/////////////////////////////////////////////////////////////////////////////

export interface GetAnimeEpisodesFetchAPIArgs {
  animeId: number;
}

export type GetAnimeEpisodesFetchAPIFnType = (
  args: GetAnimeEpisodesFetchAPIArgs
) => Promise<GenericNormalizeResponseType<AnimeEpisodesType[]>>;
