/**
 * WARN: Don't edit manually!
 * generated using quicktype.io
 */

export interface GetAnimeEpisodesAPIResponseType {
  data?: Datum[];
  pagination?: Pagination;
}

interface Datum {
  episode?: string;
  images?: Images;
  mal_id?: number;
  title?: string;
  url?: string;
}

interface Images {
  jpg?: Jpg;
}

interface Jpg {
  image_url?: string;
}

interface Pagination {
  has_next_page?: boolean;
  last_visible_page?: number;
}
