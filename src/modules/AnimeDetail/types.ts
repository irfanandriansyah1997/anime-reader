import type {
  AnimeCharacterType,
  AnimeDetailType,
  AnimeEpisodesType
} from '@/model/anime';

export interface AnimeDetailStateType {
  character: AnimeCharacterType[];
  detailInformation: AnimeDetailType;
  episodes: AnimeEpisodesType[];
}
