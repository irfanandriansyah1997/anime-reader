/**
 * WARN: Don't edit manually!
 * generated using quicktype.io
 */

export interface GetAnimeListAPIResponseType {
  data?: Datum[];
  pagination?: Pagination;
}

interface Datum {
  aired?: Aired;
  airing?: boolean;
  approved?: boolean;
  background?: null | string;
  broadcast?: Broadcast;
  demographics?: Demographic[];
  duration?: string;
  episodes?: number;
  explicit_genres?: unknown[];
  favorites?: number;
  genres?: Demographic[];
  images?: DatumImages;
  licensors?: Demographic[];
  mal_id?: number;
  members?: number;
  popularity?: number;
  producers?: Demographic[];
  rank?: number | null;
  rating?: string;
  score?: number;
  scored_by?: number;
  season?: null | string;
  source?: string;
  status?: string;
  studios?: Demographic[];
  synopsis?: string;
  themes?: Demographic[];
  title?: string;
  title_english?: null | string;
  title_japanese?: string;
  title_synonyms?: string[];
  titles?: Title[];
  trailer?: Trailer;
  type?: string;
  url?: string;
  year?: number | null;
}

interface Aired {
  from?: string;
  prop?: Prop;
  string?: string;
  to?: null | string;
}

interface Prop {
  from?: From;
  to?: From;
}

interface From {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

interface Broadcast {
  day?: null | string;
  string?: null | string;
  time?: null | string;
  timezone?: null | string;
}

interface Demographic {
  mal_id?: number;
  name?: string;
  type?: string;
  url?: string;
}

interface DatumImages {
  jpg?: Jpg;
  webp?: Jpg;
}

interface Jpg {
  image_url?: string;
  large_image_url?: string;
  small_image_url?: string;
}

interface Title {
  title?: string;
  type?: string;
}

interface Trailer {
  embed_url?: null | string;
  images?: TrailerImages;
  url?: null | string;
  youtube_id?: null | string;
}

interface TrailerImages {
  image_url?: null | string;
  large_image_url?: null | string;
  maximum_image_url?: null | string;
  medium_image_url?: null | string;
  small_image_url?: null | string;
}

interface Pagination {
  current_page?: number;
  has_next_page?: boolean;
  items?: Items;
  last_visible_page?: number;
}

interface Items {
  count?: number;
  per_page?: number;
  total?: number;
}
