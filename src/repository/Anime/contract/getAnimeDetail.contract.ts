/**
 * WARN: Don't edit manually!
 * generated using quicktype.io
 */

export interface GetAnimeDetailAPIResponseType {
  data?: Data;
}

interface Data {
  aired?: Aired;
  airing?: boolean;
  approved?: boolean;
  background?: string;
  broadcast?: Broadcast;
  demographics?: unknown[];
  duration?: string;
  episodes?: number;
  explicit_genres?: unknown[];
  external?: External[];
  favorites?: number;
  genres?: Genre[];
  images?: DataImages;
  licensors?: Genre[];
  mal_id?: number;
  members?: number;
  popularity?: number;
  producers?: Genre[];
  rank?: number;
  rating?: string;
  relations?: Relation[];
  score?: number;
  scored_by?: number;
  season?: string;
  source?: string;
  status?: string;
  streaming?: External[];
  studios?: Genre[];
  synopsis?: string;
  theme?: Theme;
  themes?: Genre[];
  title?: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms?: unknown[];
  titles?: Title[];
  trailer?: Trailer;
  type?: string;
  url?: string;
  year?: number;
}

interface Aired {
  from?: string;
  prop?: Prop;
  string?: string;
  to?: string;
}

interface Prop {
  from?: From;
  to?: From;
}

interface From {
  day?: number;
  month?: number;
  year?: number;
}

interface Broadcast {
  day?: string;
  string?: string;
  time?: string;
  timezone?: string;
}

interface External {
  name?: string;
  url?: string;
}

interface Genre {
  mal_id?: number;
  name?: string;
  type?: string;
  url?: string;
}

interface DataImages {
  jpg?: Jpg;
  webp?: Jpg;
}

interface Jpg {
  image_url?: string;
  large_image_url?: string;
  small_image_url?: string;
}

interface Relation {
  entry?: Genre[];
  relation?: string;
}

interface Theme {
  endings?: string[];
  openings?: string[];
}

interface Title {
  title?: string;
  type?: string;
}

interface Trailer {
  embed_url?: string;
  images?: TrailerImages;
  url?: string;
  youtube_id?: string;
}

interface TrailerImages {
  image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
  medium_image_url?: string;
  small_image_url?: string;
}
