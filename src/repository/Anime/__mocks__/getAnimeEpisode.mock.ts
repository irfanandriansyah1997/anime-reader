import type { MockResponseInit } from 'jest-fetch-mock';

import type { GetAnimeEpisodesAPIResponseType } from '@/repository/Anime/contract/getAnimeEpisodes.contract';

import { safeStringifyJSON } from '@/utils/parse';

/////////////////////////////////////////////////////////////////////////////
// Success API
/////////////////////////////////////////////////////////////////////////////{

export const dataMock_AnimeEpisode: GetAnimeEpisodesAPIResponseType = {
  data: [
    {
      episode: 'Episode 145',
      images: {
        jpg: {
          image_url:
            'https://img1.ak.crunchyroll.com/i/spire4-tmb/d46e3f9d734efe8505e7539871478a851230091762_large.jpg'
        }
      },
      mal_id: 145,
      title: "Everyone, Let's Play Football! Ya-Ha!",
      url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/145'
    },
    {
      episode: 'Episode 144',
      images: {
        jpg: {
          image_url:
            'https://img1.ak.crunchyroll.com/i/spire1-tmb/64761ab44dae3b099d56de05278422501230982073_large.jpg'
        }
      },
      mal_id: 144,
      title: 'The Final Moment!',
      url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/144'
    },
    {
      episode: 'Episode 143',
      images: {
        jpg: {
          image_url:
            'https://img1.ak.crunchyroll.com/i/spire3-tmb/b2cb15ed8719b4b0cf7f59375ccee6bd1230981615_large.jpg'
        }
      },
      mal_id: 143,
      title: 'A Form of Desperation!',
      url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/143'
    },
    {
      episode: 'Episode 142',
      images: {
        jpg: {
          image_url:
            'https://img1.ak.crunchyroll.com/i/spire1-tmb/8796051cd9a4adc248718cf889b71a061230981326_large.jpg'
        }
      },
      mal_id: 142,
      title: "The Demon's Twin Wings!",
      url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/142'
    }
  ],
  pagination: {
    has_next_page: true,
    last_visible_page: 4
  }
};

export const httpMock_AnimeEpisode: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeEpisode),
  status: 200
};

/////////////////////////////////////////////////////////////////////////////
// Error API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeEpisode_error: GetAnimeEpisodesAPIResponseType = {};

export const httpMock_AnimeEpisode_error: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeEpisode_error),
  status: 400
};
