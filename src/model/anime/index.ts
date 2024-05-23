/////////////////////////////////////////////////////////////////////////////
// Anime List Interface
/////////////////////////////////////////////////////////////////////////////

export interface AnimeListItemType {
  episodes: number;
  id: string;
  image: string;
  rating: number;
  shortDesc: string;
  title: string;
}

/////////////////////////////////////////////////////////////////////////////
// Anime Detail Interface
/////////////////////////////////////////////////////////////////////////////

export interface AnimeRatingType {
  rating: number;
  totalParticipant: number;
}

export interface AnimeAdditionalInfoType {
  data: string[];
  formattedData: string;
}

export interface AnimeStreamingType {
  streamName: string;
  url: string;
}

export interface AnimeRelationItemType {
  id: string;
  name: string;
}

export interface AnimeRelationType {
  item: Array<AnimeRelationItemType>;
  relation: string;
}

export interface AnimeDetailType {
  animeRelations: AnimeRelationType[];
  background: string;
  duration: string;
  episodes: number;
  genre: string[];
  id: string;
  image: string;
  producers: AnimeAdditionalInfoType;
  rating: AnimeRatingType;
  streaming: AnimeStreamingType[];
  studios: AnimeAdditionalInfoType;
  synopsis: string;
  title: string;
  type: string;
  year: number;
}

/////////////////////////////////////////////////////////////////////////////
// Additional Data Anime
/////////////////////////////////////////////////////////////////////////////

export interface AnimeCharacterType {
  characterName: string;
  favorites: number;
  image: string;
  role: string;
}

export interface AnimeEpisodesType {
  id: string;
  image: string;
  title: string;
  url: string;
}
