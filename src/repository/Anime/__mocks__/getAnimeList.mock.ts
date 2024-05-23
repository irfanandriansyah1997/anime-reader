import type { MockResponseInit } from 'jest-fetch-mock';

import type { GetAnimeListAPIResponseType } from '@/repository/Anime/contract/getAnimeList.contract';

import { safeStringifyJSON } from '@/utils/parse';

/////////////////////////////////////////////////////////////////////////////
// Success API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeList_page1: GetAnimeListAPIResponseType = {
  data: [
    {
      aired: {
        from: '1998-04-03T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 4,
            year: 1998
          },
          to: {
            day: 24,
            month: 4,
            year: 1999
          }
        },
        string: 'Apr 3, 1998 to Apr 24, 1999',
        to: '1999-04-24T00:00:00+00:00'
      },
      airing: false,
      approved: true,
      background:
        'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.',
      broadcast: {
        day: 'Saturdays',
        string: 'Saturdays at 01:00 (JST)',
        time: '01:00',
        timezone: 'Asia/Tokyo'
      },
      demographics: [],
      duration: '24 min per ep',
      episodes: 26,
      explicit_genres: [],
      favorites: 82648,
      genres: [
        {
          mal_id: 1,
          name: 'Action',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/1/Action'
        },
        {
          mal_id: 46,
          name: 'Award Winning',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/46/Award_Winning'
        },
        {
          mal_id: 24,
          name: 'Sci-Fi',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi'
        }
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.jpg'
        }
      },
      licensors: [
        {
          mal_id: 102,
          name: 'Funimation',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/102/Funimation'
        }
      ],
      mal_id: 1,
      members: 1870633,
      popularity: 43,
      producers: [
        {
          mal_id: 23,
          name: 'Bandai Visual',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
        }
      ],
      rank: 47,
      rating: 'R - 17+ (violence & profanity)',
      score: 8.75,
      scored_by: 967716,
      season: 'spring',
      source: 'Original',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 14,
          name: 'Sunrise',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise'
        }
      ],
      synopsis:
        "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
      themes: [
        {
          mal_id: 50,
          name: 'Adult Cast',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast'
        },
        {
          mal_id: 29,
          name: 'Space',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/29/Space'
        }
      ],
      title: 'Cowboy Bebop',
      title_english: 'Cowboy Bebop',
      title_japanese: 'カウボーイビバップ',
      title_synonyms: [],
      titles: [
        {
          title: 'Cowboy Bebop',
          type: 'Default'
        },
        {
          title: 'カウボーイビバップ',
          type: 'Japanese'
        },
        {
          title: 'Cowboy Bebop',
          type: 'English'
        }
      ],
      trailer: {
        embed_url:
          'https://www.youtube.com/embed/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/default.jpg',
          large_image_url:
            'https://img.youtube.com/vi/gY5nDXOtv_o/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/gY5nDXOtv_o/maxresdefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/gY5nDXOtv_o/mqdefault.jpg',
          small_image_url:
            'https://img.youtube.com/vi/gY5nDXOtv_o/sddefault.jpg'
        },
        url: 'https://www.youtube.com/watch?v=gY5nDXOtv_o',
        youtube_id: 'gY5nDXOtv_o'
      },
      type: 'TV',
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      year: 1998
    },
    {
      aired: {
        from: '2001-09-01T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 9,
            year: 2001
          },
          to: {
            year: null
          }
        },
        string: 'Sep 1, 2001',
        to: null
      },
      airing: false,
      approved: true,
      broadcast: {
        timezone: null
      },
      demographics: [],
      duration: '1 hr 55 min',
      episodes: 1,
      explicit_genres: [],
      favorites: 1590,
      genres: [
        {
          mal_id: 1,
          name: 'Action',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/1/Action'
        },
        {
          mal_id: 24,
          name: 'Sci-Fi',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi'
        }
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1439/93480.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1439/93480.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480t.webp'
        }
      },
      licensors: [
        {
          mal_id: 15,
          name: 'Sony Pictures Entertainment',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment'
        },
        {
          mal_id: 102,
          name: 'Funimation',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/102/Funimation'
        }
      ],
      mal_id: 5,
      members: 379497,
      popularity: 619,
      producers: [
        {
          mal_id: 14,
          name: 'Sunrise',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise'
        },
        {
          mal_id: 23,
          name: 'Bandai Visual',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
        }
      ],
      rank: 196,
      rating: 'R - 17+ (violence & profanity)',
      score: 8.38,
      scored_by: 216153,
      season: null,
      source: 'Original',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 4,
          name: 'Bones',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/4/Bones'
        }
      ],
      synopsis:
        'Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\n\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\n\n[Written by MAL Rewrite]',
      themes: [
        {
          mal_id: 50,
          name: 'Adult Cast',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast'
        },
        {
          mal_id: 29,
          name: 'Space',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/29/Space'
        }
      ],
      title: 'Cowboy Bebop: Tengoku no Tobira',
      title_english: 'Cowboy Bebop: The Movie',
      title_japanese: 'カウボーイビバップ 天国の扉',
      title_synonyms: ["Cowboy Bebop: Knockin' on Heaven's Door"],
      titles: [
        {
          title: 'Cowboy Bebop: Tengoku no Tobira',
          type: 'Default'
        },
        {
          title: "Cowboy Bebop: Knockin' on Heaven's Door",
          type: 'Synonym'
        },
        {
          title: 'カウボーイビバップ 天国の扉',
          type: 'Japanese'
        },
        {
          title: 'Cowboy Bebop: The Movie',
          type: 'English'
        },
        {
          title: 'Cowboy Bebop: Der Film',
          type: 'German'
        },
        {
          title: 'Cowboy Bebop: La Película',
          type: 'Spanish'
        },
        {
          title: 'Cowboy Bebop: Le Film',
          type: 'French'
        }
      ],
      trailer: {
        embed_url: null,
        images: {
          image_url: null,
          large_image_url: null,
          maximum_image_url: null,
          medium_image_url: null,
          small_image_url: null
        },
        url: null,
        youtube_id: null
      },
      type: 'Movie',
      url: 'https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira',
      year: null
    },
    {
      aired: {
        from: '1998-04-01T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 4,
            year: 1998
          },
          to: {
            day: 30,
            month: 9,
            year: 1998
          }
        },
        string: 'Apr 1, 1998 to Sep 30, 1998',
        to: '1998-09-30T00:00:00+00:00'
      },
      airing: false,
      approved: true,
      background:
        "The Japanese release by Victor Entertainment has different openings relating to the specific episode it's played on. The initial Geneon Entertainment USA (then known as Pioneer) releases on VHS and DVD (singles, Signature Series, and box set) used only the first opening on each episode. This was due to the Japanese licensor providing them clean materials for only the first opening to put the English credits on. Geneon later fixed this mistake on their Limited Edition tin releases in 2005/2006, as well as on the Remix singles. Following Geneon USA's demise in late 2007, the show went out of print. When FUNimation Entertainment picked up the show in 2010 and released it, they repeated Geneon's mistake of using only the first opening on every episode. This mistake was later fixed in 2013 on the Anime Classics re-release.",
      broadcast: {
        day: 'Thursdays',
        string: 'Thursdays at 01:15 (JST)',
        time: '01:15',
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
      duration: '24 min per ep',
      episodes: 26,
      explicit_genres: [],
      favorites: 16066,
      genres: [
        {
          mal_id: 1,
          name: 'Action',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/1/Action'
        },
        {
          mal_id: 2,
          name: 'Adventure',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/2/Adventure'
        },
        {
          mal_id: 24,
          name: 'Sci-Fi',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi'
        }
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/20310.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/20310.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310t.webp'
        }
      },
      licensors: [
        {
          mal_id: 102,
          name: 'Funimation',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/102/Funimation'
        }
      ],
      mal_id: 6,
      members: 765608,
      popularity: 253,
      producers: [
        {
          mal_id: 123,
          name: 'Victor Entertainment',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/123/Victor_Entertainment'
        }
      ],
      rank: 361,
      rating: 'PG-13 - Teens 13 or older',
      score: 8.22,
      scored_by: 374308,
      season: 'spring',
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 11,
          name: 'Madhouse',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/11/Madhouse'
        }
      ],
      synopsis:
        'Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he\'s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\n\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash\'s agonizing past will be unraveled and his morality and principles pushed to the breaking point.\n\n[Written by MAL Rewrite]',
      themes: [
        {
          mal_id: 50,
          name: 'Adult Cast',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast'
        }
      ],
      title: 'Trigun',
      title_english: 'Trigun',
      title_japanese: 'トライガン',
      title_synonyms: [],
      titles: [
        {
          title: 'Trigun',
          type: 'Default'
        },
        {
          title: 'トライガン',
          type: 'Japanese'
        },
        {
          title: 'Trigun',
          type: 'English'
        }
      ],
      trailer: {
        embed_url:
          'https://www.youtube.com/embed/bJVyIXeUznY?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/bJVyIXeUznY/default.jpg',
          large_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/maxresdefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/mqdefault.jpg',
          small_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/sddefault.jpg'
        },
        url: 'https://www.youtube.com/watch?v=bJVyIXeUznY',
        youtube_id: 'bJVyIXeUznY'
      },
      type: 'TV',
      url: 'https://myanimelist.net/anime/6/Trigun',
      year: 1998
    }
  ],
  pagination: {
    current_page: 1,
    has_next_page: true,
    items: {
      count: 3,
      per_page: 20,
      total: 26717
    },
    last_visible_page: 8906
  }
};

export const httpMock_AnimeList_page1: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeList_page1),
  status: 200
};

export const dataMock_AnimeList_page2: GetAnimeListAPIResponseType = {
  data: [
    {
      aired: {
        from: '2002-07-03T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 7,
            year: 2002
          },
          to: {
            day: 25,
            month: 12,
            year: 2002
          }
        },
        string: 'Jul 3, 2002 to Dec 25, 2002',
        to: '2002-12-25T00:00:00+00:00'
      },
      airing: false,
      approved: true,
      background: null,
      broadcast: {
        day: 'Wednesdays',
        string: 'Wednesdays at 01:25 (JST)',
        time: '01:25',
        timezone: 'Asia/Tokyo'
      },
      demographics: [],
      duration: '25 min per ep',
      episodes: 26,
      explicit_genres: [],
      favorites: 649,
      genres: [
        {
          mal_id: 1,
          name: 'Action',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/1/Action'
        },
        {
          mal_id: 8,
          name: 'Drama',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/8/Drama'
        },
        {
          mal_id: 7,
          name: 'Mystery',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/7/Mystery'
        },
        {
          mal_id: 37,
          name: 'Supernatural',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural'
        }
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/10/19969.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/10/19969l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/10/19969t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/10/19969.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/10/19969l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/10/19969t.webp'
        }
      },
      licensors: [
        {
          mal_id: 102,
          name: 'Funimation',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/102/Funimation'
        },
        {
          mal_id: 233,
          name: 'Bandai Entertainment',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment'
        }
      ],
      mal_id: 7,
      members: 117229,
      popularity: 1862,
      producers: [
        {
          mal_id: 23,
          name: 'Bandai Visual',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
        },
        {
          mal_id: 53,
          name: 'Dentsu',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/53/Dentsu'
        },
        {
          mal_id: 123,
          name: 'Victor Entertainment',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/123/Victor_Entertainment'
        },
        {
          mal_id: 717,
          name: 'TV Tokyo Music',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music'
        }
      ],
      rank: 3358,
      rating: 'PG-13 - Teens 13 or older',
      score: 7.26,
      scored_by: 44202,
      season: 'summer',
      source: 'Original',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 14,
          name: 'Sunrise',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise'
        }
      ],
      synopsis:
        "Robin Sena is a powerful craft user drafted into the STNJ—a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she's got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!\n\n(Source: Funimation)",
      themes: [
        {
          mal_id: 39,
          name: 'Detective',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/39/Detective'
        }
      ],
      title: 'Witch Hunter Robin',
      title_english: 'Witch Hunter Robin',
      title_japanese: 'Witch Hunter ROBIN (ウイッチハンターロビン)',
      title_synonyms: ['WHR'],
      titles: [
        {
          title: 'Witch Hunter Robin',
          type: 'Default'
        },
        {
          title: 'WHR',
          type: 'Synonym'
        },
        {
          title: 'Witch Hunter ROBIN (ウイッチハンターロビン)',
          type: 'Japanese'
        },
        {
          title: 'Witch Hunter Robin',
          type: 'English'
        }
      ],
      trailer: {
        embed_url:
          'https://www.youtube.com/embed/7UkaILjPk8M?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/default.jpg',
          large_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/maxresdefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/mqdefault.jpg',
          small_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/sddefault.jpg'
        },
        url: 'https://www.youtube.com/watch?v=7UkaILjPk8M',
        youtube_id: '7UkaILjPk8M'
      },
      type: 'TV',
      url: 'https://myanimelist.net/anime/7/Witch_Hunter_Robin',
      year: 2002
    },
    {
      aired: {
        from: '2004-09-30T00:00:00+00:00',
        prop: {
          from: {
            day: 30,
            month: 9,
            year: 2004
          },
          to: {
            day: 29,
            month: 9,
            year: 2005
          }
        },
        string: 'Sep 30, 2004 to Sep 29, 2005',
        to: '2005-09-29T00:00:00+00:00'
      },
      airing: false,
      approved: true,
      background: null,
      broadcast: {
        day: 'Thursdays',
        string: 'Thursdays at 18:30 (JST)',
        time: '18:30',
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
      episodes: 52,
      explicit_genres: [],
      favorites: 15,
      genres: [
        {
          mal_id: 1,
          name: 'Action',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/1/Action'
        },
        {
          mal_id: 2,
          name: 'Adventure',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/2/Adventure'
        },
        {
          mal_id: 10,
          name: 'Fantasy',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy'
        }
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/21569.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/21569.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569t.webp'
        }
      },
      licensors: [
        {
          mal_id: 2262,
          name: 'Illumitoon Entertainment',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/2262/Illumitoon_Entertainment'
        }
      ],
      mal_id: 8,
      members: 15770,
      popularity: 5347,
      producers: [
        {
          mal_id: 16,
          name: 'TV Tokyo',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo'
        },
        {
          mal_id: 53,
          name: 'Dentsu',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/53/Dentsu'
        }
      ],
      rank: 4636,
      rating: 'PG - Children',
      score: 7.05,
      scored_by: 6838,
      season: 'fall',
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 18,
          name: 'Toei Animation',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/18/Toei_Animation'
        }
      ],
      synopsis:
        "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century.",
      themes: [],
      title: 'Bouken Ou Beet',
      title_english: 'Beet the Vandel Buster',
      title_japanese: '冒険王ビィト',
      title_synonyms: ['Adventure King Beet'],
      titles: [
        {
          title: 'Bouken Ou Beet',
          type: 'Default'
        },
        {
          title: 'Adventure King Beet',
          type: 'Synonym'
        },
        {
          title: '冒険王ビィト',
          type: 'Japanese'
        },
        {
          title: 'Beet the Vandel Buster',
          type: 'English'
        }
      ],
      trailer: {
        embed_url: null,
        images: {
          image_url: null,
          large_image_url: null,
          maximum_image_url: null,
          medium_image_url: null,
          small_image_url: null
        },
        url: null,
        youtube_id: null
      },
      type: 'TV',
      url: 'https://myanimelist.net/anime/8/Bouken_Ou_Beet',
      year: 2004
    },
    {
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
          image_url:
            'https://cdn.myanimelist.net/images/anime/1079/133529.webp',
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
      score: 7.92,
      scored_by: 89439,
      season: 'spring',
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 36,
          name: 'Gallop',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/36/Gallop'
        }
      ],
      synopsis:
        "Shy, reserved, and small-statured, Deimon High School student Sena Kobayakawa is the perfect target for bullies. However, as a result of running errands throughout his life, Sena has become agile and developed a skill for avoiding crowds of people. After the cunning Youichi Hiruma—captain of the Deimon Devil Bats football team—witnesses Sena's rapid legs in motion, he coerces the timid boy into joining his squad.\n\nAs Hiruma wants to conceal Sena's identity from other clubs, Sena is forced to hide under the visored helmet of \"Eyeshield 21,\" a mysterious running back wearing the number 21 jersey. The legendary Eyeshield 21 can supposedly run at the speed of light and has achieved remarkable feats in the United States during his time at the Notre Dame College.\n\nAccustomed to avoiding his problems in the past, Sena's specialty might just help him become the new secret weapon of the Deimon Devil Bats. As he interacts with his teammates, Sena gradually gains more self-confidence and forges valuable bonds along the way.\n\n[Written by MAL Rewrite]",
      themes: [
        {
          mal_id: 77,
          name: 'Team Sports',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/77/Team_Sports'
        }
      ],
      title: 'Eyeshield 21',
      title_english: null,
      title_japanese: 'アイシールド21',
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
          title: 'アイシールド21',
          type: 'Japanese'
        }
      ],
      trailer: {
        embed_url: null,
        images: {
          image_url: null,
          large_image_url: null,
          maximum_image_url: null,
          medium_image_url: null,
          small_image_url: null
        },
        url: null,
        youtube_id: null
      },
      type: 'TV',
      url: 'https://myanimelist.net/anime/15/Eyeshield_21',
      year: 2005
    }
  ],
  pagination: {
    current_page: 2,
    has_next_page: true,
    items: {
      count: 3,
      per_page: 20,
      total: 26717
    },
    last_visible_page: 8906
  }
};

export const httpMock_AnimeList_page2: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeList_page2),
  status: 200
};

export const dataMock_AnimeList_customKeyword: GetAnimeListAPIResponseType = {
  data: [
    {
      aired: {
        from: '2004-08-06T00:00:00+00:00',
        prop: {
          from: {
            day: 6,
            month: 8,
            year: 2004
          },
          to: {
            day: null,
            month: null,
            year: null
          }
        },
        string: 'Aug 6, 2004',
        to: null
      },
      airing: false,
      approved: true,
      background: null,
      broadcast: {
        day: null,
        string: null,
        time: null,
        timezone: null
      },
      demographics: [
        {
          mal_id: 27,
          name: 'Shounen',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/27/Shounen'
        }
      ],
      duration: '29 min',
      episodes: 1,
      explicit_genres: [],
      favorites: 8,
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
          image_url: 'https://cdn.myanimelist.net/images/anime/6/6087.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/6087l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/6087t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/6/6087.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/6087l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/6087t.webp'
        }
      },
      licensors: [],
      mal_id: 1317,
      members: 8838,
      popularity: 6769,
      producers: [
        {
          mal_id: 23,
          name: 'Bandai Visual',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
        }
      ],
      rank: 6955,
      rating: 'PG - Children',
      score: 6.61,
      scored_by: 3749,
      season: null,
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 10,
          name: 'Production I.G',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/10/Production_IG'
        }
      ],
      synopsis:
        "The Uraharajuku Boarders may have been knocked out of the Kantou Tournament, but a mysterious proposition from a mysterious man may influence the Governor, a graduate of Uraharajuku High School, to allow Uraharajuku to play Sena Kobayakawa and the Deimon Devilbats in the equally mysterious Golden Bowl, whose winner will seemingly receive a place in the Kantou Tournament. However, when Sena and company arrive at the field, they find the Golden Bowl may be something they didn't bargain for against opponents they may not be able to beat. \n\n(Source: ANN)",
      themes: [
        {
          mal_id: 77,
          name: 'Team Sports',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/77/Team_Sports'
        }
      ],
      title: 'Eyeshield 21: Maboroshi no Golden Bowl',
      title_english: 'The Illusionary Golden Bowl',
      title_japanese: 'アイシールド21 幻のゴールデンボウル',
      title_synonyms: ['Eyeshield 21 Jump Fest 2004'],
      titles: [
        {
          title: 'Eyeshield 21: Maboroshi no Golden Bowl',
          type: 'Default'
        },
        {
          title: 'Eyeshield 21 Jump Fest 2004',
          type: 'Synonym'
        },
        {
          title: 'アイシールド21 幻のゴールデンボウル',
          type: 'Japanese'
        },
        {
          title: 'The Illusionary Golden Bowl',
          type: 'English'
        }
      ],
      trailer: {
        embed_url: null,
        images: {
          image_url: null,
          large_image_url: null,
          maximum_image_url: null,
          medium_image_url: null,
          small_image_url: null
        },
        url: null,
        youtube_id: null
      },
      type: 'Special',
      url: 'https://myanimelist.net/anime/1317/Eyeshield_21__Maboroshi_no_Golden_Bowl',
      year: null
    },
    {
      aired: {
        from: '2005-01-01T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 2005
          },
          to: {
            day: null,
            month: null,
            year: null
          }
        },
        string: '2005',
        to: null
      },
      airing: false,
      approved: true,
      background: null,
      broadcast: {
        day: null,
        string: null,
        time: null,
        timezone: null
      },
      demographics: [
        {
          mal_id: 27,
          name: 'Shounen',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/27/Shounen'
        }
      ],
      duration: '11 min',
      episodes: 1,
      explicit_genres: [],
      favorites: 4,
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
          image_url: 'https://cdn.myanimelist.net/images/anime/12/32103.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/12/32103l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/12/32103t.jpg'
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/12/32103.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/12/32103l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/12/32103t.webp'
        }
      },
      licensors: [],
      mal_id: 6418,
      members: 6803,
      popularity: 7533,
      producers: [],
      rank: 6388,
      rating: 'PG-13 - Teens 13 or older',
      score: 6.71,
      scored_by: 2825,
      season: null,
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 36,
          name: 'Gallop',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/36/Gallop'
        }
      ],
      synopsis: 'A brief OVA about the Devil Bats training on an island.',
      themes: [
        {
          mal_id: 77,
          name: 'Team Sports',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/77/Team_Sports'
        }
      ],
      title: 'Eyeshield 21: Jump Festa 2005 Special',
      title_english: null,
      title_japanese: 'アイシールド21ジャンプフェスタ 2005',
      title_synonyms: ['Eyeshield 21: Jump Super Anime Tour 2005 Special'],
      titles: [
        {
          title: 'Eyeshield 21: Jump Festa 2005 Special',
          type: 'Default'
        },
        {
          title: 'Eyeshield 21: Jump Super Anime Tour 2005 Special',
          type: 'Synonym'
        },
        {
          title: 'アイシールド21ジャンプフェスタ 2005',
          type: 'Japanese'
        }
      ],
      trailer: {
        embed_url: null,
        images: {
          image_url: null,
          large_image_url: null,
          maximum_image_url: null,
          medium_image_url: null,
          small_image_url: null
        },
        url: null,
        youtube_id: null
      },
      type: 'Special',
      url: 'https://myanimelist.net/anime/6418/Eyeshield_21__Jump_Festa_2005_Special',
      year: null
    },
    {
      aired: {
        from: '2024-01-28T00:00:00+00:00',
        prop: {
          from: {
            day: 28,
            month: 1,
            year: 2024
          },
          to: {
            day: null,
            month: null,
            year: null
          }
        },
        string: 'Jan 28, 2024',
        to: null
      },
      airing: false,
      approved: true,
      background: null,
      broadcast: {
        day: null,
        string: null,
        time: null,
        timezone: null
      },
      demographics: [
        {
          mal_id: 27,
          name: 'Shounen',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/27/Shounen'
        }
      ],
      duration: '46 sec',
      episodes: 1,
      explicit_genres: [],
      favorites: 0,
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
          image_url: 'https://cdn.myanimelist.net/images/anime/1455/141180.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1455/141180l.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1455/141180t.jpg'
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1455/141180.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1455/141180l.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1455/141180t.webp'
        }
      },
      licensors: [],
      mal_id: 57979,
      members: 170,
      popularity: 20965,
      producers: [],
      rank: null,
      rating: 'G - All Ages',
      season: null,
      source: 'Manga',
      status: 'Finished Airing',
      studios: [
        {
          mal_id: 2624,
          name: 'Village Studio',
          type: 'anime',
          url: 'https://myanimelist.net/anime/producer/2624/Village_Studio'
        }
      ],
      themes: [
        {
          mal_id: 77,
          name: 'Team Sports',
          type: 'anime',
          url: 'https://myanimelist.net/anime/genre/77/Team_Sports'
        }
      ],
      title: 'Eyeshield 21: 21st Anniversary PV',
      title_japanese: '【アイシールド21 】21st ANNIVERSARY PV',
      title_synonyms: [],
      titles: [
        {
          title: 'Eyeshield 21: 21st Anniversary PV',
          type: 'Default'
        },
        {
          title: '【アイシールド21 】21st ANNIVERSARY PV',
          type: 'Japanese'
        }
      ],
      trailer: {
        images: {
          small_image_url: null
        },
        youtube_id: null
      },
      type: 'PV',
      url: 'https://myanimelist.net/anime/57979/Eyeshield_21__21st_Anniversary_PV',
      year: null
    }
  ],
  pagination: {
    current_page: 1,
    has_next_page: true,
    items: {
      count: 3,
      per_page: 3,
      total: 4
    },
    last_visible_page: 2
  }
};

export const httpMock_AnimeList_customKeyword: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeList_customKeyword),
  status: 200
};

/////////////////////////////////////////////////////////////////////////////
// Error API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeCharacter_error: GetAnimeListAPIResponseType = {};

export const httpMock_AnimeCharacter_error: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeCharacter_error),
  status: 400
};
