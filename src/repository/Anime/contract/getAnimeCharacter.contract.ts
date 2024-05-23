/**
 * WARN: Don't edit manually!
 * generated using quicktype.io
 */

export interface GetAnimeCharacterAPIResponseType {
  data?: Datum[];
}

interface Datum {
  character?: Character;
  favorites?: number;
  role?: string;
  voice_actors?: VoiceActor[];
}

interface Character {
  images?: CharacterImages;
  mal_id?: number;
  name?: string;
  url?: string;
}

interface CharacterImages {
  jpg?: Jpg;
  webp?: Webp;
}

interface Jpg {
  image_url?: string;
}

interface Webp {
  image_url?: string;
  small_image_url?: string;
}

interface VoiceActor {
  language?: string;
  person?: Person;
}

interface Person {
  images?: PersonImages;
  mal_id?: number;
  name?: string;
  url?: string;
}

interface PersonImages {
  jpg?: Jpg;
}
