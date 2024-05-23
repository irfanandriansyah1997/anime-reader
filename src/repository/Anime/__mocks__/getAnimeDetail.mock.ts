import type { MockResponseInit } from 'jest-fetch-mock';

import type { GetAnimeDetailAPIResponseType } from '@/repository/Anime/contract/getAnimeDetail.contract';

import { safeStringifyJSON } from '@/utils/parse';

/////////////////////////////////////////////////////////////////////////////
// Success API
/////////////////////////////////////////////////////////////////////////////{

export const dataMock_AnimeDetail: GetAnimeDetailAPIResponseType = {
  data: {
    aired: {
      from: '2005-04-06T00:00:00+00:00',
      prop: {
        from: {
          day: 6,
          month: 4,
          year: 2005
        },
        to: {
          day: 19,
          month: 3,
          year: 2008
        }
      },
      string: 'Apr 6, 2005 to Mar 19, 2008',
      to: '2008-03-19T00:00:00+00:00'
    },
    airing: false,
    approved: true,
    background:
      'Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and NFL Rush in collaboration with the National Football League, but the plan fell through and the anime made its debut only on Toonami Jetstream, which later dropped the series. It would then become available in its entirety on Crunchyroll. Sentai Filmworks later licensed and released the first 52 episodes on DVD from 2010 to 2011.',
    broadcast: {
      day: 'Wednesdays',
      string: 'Wednesdays at 19:00 (JST)',
      time: '19:00',
      timezone: 'Asia/Tokyo'
    },
    demographics: [
      {
        mal_id: 27,
        name: 'Shounen',
        type: 'anime',
        url: 'https://myanimelist.net/anime/genre/27/Shounen'
      }
    ],
    duration: '23 min per ep',
    episodes: 145,
    explicit_genres: [],
    external: [
      {
        name: 'Official Site',
        url: 'http://www.tv-tokyo.co.jp/anime/eyeshield21/'
      },
      {
        name: 'AniDB',
        url: 'https://anidb.net/perl-bin/animedb.pl?show=anime&aid=2441'
      },
      {
        name: 'ANN',
        url: 'https://www.animenewsnetwork.com/encyclopedia/anime.php?id=4778'
      },
      {
        name: 'Wikipedia',
        url: 'http://en.wikipedia.org/wiki/Eyeshield_21'
      }
    ],
    favorites: 2059,
    genres: [
      {
        mal_id: 30,
        name: 'Sports',
        type: 'anime',
        url: 'https://myanimelist.net/anime/genre/30/Sports'
      }
    ],
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1079/133529.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1079/133529l.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1079/133529t.jpg'
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1079/133529.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1079/133529l.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1079/133529t.webp'
      }
    },
    licensors: [
      {
        mal_id: 119,
        name: 'VIZ Media',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/119/VIZ_Media'
      },
      {
        mal_id: 376,
        name: 'Sentai Filmworks',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks'
      }
    ],
    mal_id: 15,
    members: 184187,
    popularity: 1304,
    producers: [
      {
        mal_id: 16,
        name: 'TV Tokyo',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo'
      },
      {
        mal_id: 139,
        name: 'Nihon Ad Systems',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems'
      },
      {
        mal_id: 717,
        name: 'TV Tokyo Music',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music'
      },
      {
        mal_id: 1365,
        name: 'Shueisha',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha'
      }
    ],
    rank: 779,
    rating: 'PG-13 - Teens 13 or older',
    relations: [
      {
        entry: [
          {
            mal_id: 43,
            name: 'Eyeshield 21',
            type: 'manga',
            url: 'https://myanimelist.net/manga/43/Eyeshield_21'
          }
        ],
        relation: 'Adaptation'
      },
      {
        entry: [
          {
            mal_id: 1317,
            name: 'Eyeshield 21: Maboroshi no Golden Bowl',
            type: 'anime',
            url: 'https://myanimelist.net/anime/1317/Eyeshield_21__Maboroshi_no_Golden_Bowl'
          },
          {
            mal_id: 6418,
            name: 'Eyeshield 21: Jump Festa 2005 Special',
            type: 'anime',
            url: 'https://myanimelist.net/anime/6418/Eyeshield_21__Jump_Festa_2005_Special'
          }
        ],
        relation: 'Side story'
      },
      {
        entry: [
          {
            mal_id: 57979,
            name: 'Eyeshield 21: 21st Anniversary PV',
            type: 'anime',
            url: 'https://myanimelist.net/anime/57979/Eyeshield_21__21st_Anniversary_PV'
          }
        ],
        relation: 'Other'
      }
    ],
    score: 7.92,
    scored_by: 89439,
    season: 'spring',
    source: 'Manga',
    status: 'Finished Airing',
    streaming: [
      {
        name: 'Crunchyroll',
        url: 'http://www.crunchyroll.com/series-46844'
      }
    ],
    studios: [
      {
        mal_id: 36,
        name: 'Gallop',
        type: 'anime',
        url: 'https://myanimelist.net/anime/producer/36/Gallop'
      }
    ],
    synopsis:
      "Shy, reserved, and small-statured, Deimon High School student Sena Kobayakawa is the perfect target for bullies. However, as a result of running errands throughout his life, Sena has become agile and developed a skill for avoiding crowds of people. After the cunning Youichi Hiruma\u2014captain of the Deimon Devil Bats football team\u2014witnesses Sena's rapid legs in motion, he coerces the timid boy into joining his squad.\n\nAs Hiruma wants to conceal Sena's identity from other clubs, Sena is forced to hide under the visored helmet of \"Eyeshield 21,\" a mysterious running back wearing the number 21 jersey. The legendary Eyeshield 21 can supposedly run at the speed of light and has achieved remarkable feats in the United States during his time at the Notre Dame College.\n\nAccustomed to avoiding his problems in the past, Sena's specialty might just help him become the new secret weapon of the Deimon Devil Bats. As he interacts with his teammates, Sena gradually gains more self-confidence and forges valuable bonds along the way.\n\n[Written by MAL Rewrite]",
    theme: {
      endings: [
        '1: "Be Free" by Rikken\'z (eps 1-13)',
        '2: "Blaze Away" by TRAX (eps 14-35)',
        '3: "Goal" by Arashiro Beni (eps 36-64)',
        '4: "Run to Win" by Mamori (Aya Hirano), Sena (Miyu Irino), Kurita (Koichi Nagano), Rimon (Kappei Yamaguchi) (eps 65-100)',
        '5: "A day dreaming..." by BACK-ON (eps 101-116)',
        '6: "Flower" by BACK-ON (eps 117-126)',
        '7: "Song of Power" by SHORT LEG SUMMER (eps 127-144)',
        '8: "Dang Dang" by ZZ (eps 145)'
      ],
      openings: [
        '1: "Breakthrough" by Coming Century (eps 1-35)',
        '2: "Innocence" by 20th Century (eps 36-64)',
        '3: "Dang Dang" by ZZ (eps 65-103)',
        '4: "BLAZE LINE" by BACK-ON (eps 104-126)',
        '5: "Hanno no Runningback" by SHORT LEG SUMMER (eps 127-145)'
      ]
    },
    themes: [
      {
        mal_id: 77,
        name: 'Team Sports',
        type: 'anime',
        url: 'https://myanimelist.net/anime/genre/77/Team_Sports'
      }
    ],
    title: 'Eyeshield 21',
    title_english: undefined,
    title_japanese: '\u30a2\u30a4\u30b7\u30fc\u30eb\u30c921',
    title_synonyms: ['Eyeshield21'],
    titles: [
      {
        title: 'Eyeshield 21',
        type: 'Default'
      },
      {
        title: 'Eyeshield21',
        type: 'Synonym'
      },
      {
        title: '\u30a2\u30a4\u30b7\u30fc\u30eb\u30c921',
        type: 'Japanese'
      }
    ],
    type: 'TV',
    url: 'https://myanimelist.net/anime/15/Eyeshield_21',
    year: 2005
  }
};

export const httpMock_AnimeDetail: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeDetail),
  status: 200
};

/////////////////////////////////////////////////////////////////////////////
// Error API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeDetail_error: GetAnimeDetailAPIResponseType = {};

export const httpMock_AnimeDetail_error: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeDetail_error),
  status: 400
};
