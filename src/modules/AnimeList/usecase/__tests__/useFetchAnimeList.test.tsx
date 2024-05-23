import { act, renderHook, waitFor } from '@testing-library/react';

import { useFetchAnimeList } from '@/modules/AnimeList/usecase/useFetchAnimeList';
import {
  httpMock_AnimeList_customKeyword,
  httpMock_AnimeList_page1,
  httpMock_AnimeList_page2
} from '@/repository/Anime/__mocks__/getAnimeList.mock';

describe('Testing Fetch Anime Detail Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing positive case (change pagination) - should be all data success to retrieve from API', async () => {
    fetchMock.mockResponse(async (req) => {
      if (req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=1&q=') {
        return httpMock_AnimeList_page1;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=2&q=') {
        return httpMock_AnimeList_page2;
      }

      if (
        req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=1&q=eyeshield'
      ) {
        return httpMock_AnimeList_customKeyword;
      }

      return {};
    });

    const { result } = renderHook(useFetchAnimeList);
    expect(result.current.state.loading).toBeTruthy();
    expect(result.current.state.animeList).toHaveLength(0);

    await waitFor(() => {
      expect(result.current.state.loading).toBeFalsy();
      expect(result.current.state.animeList).toStrictEqual([
        {
          episodes: 26,
          id: '1',
          image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          rating: 8.75,
          shortDesc: expect.stringContaining(
            'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes'
          ),
          title: 'Cowboy Bebop'
        },
        {
          episodes: 1,
          id: '5',
          image: 'https://cdn.myanimelist.net/images/anime/1439/93480.webp',
          rating: 8.38,
          shortDesc: expect.stringContaining(
            'Another day, another bounty—such is the life of'
          ),
          title: 'Cowboy Bebop: Tengoku no Tobira'
        },
        {
          episodes: 26,
          id: '6',
          image: 'https://cdn.myanimelist.net/images/anime/7/20310.webp',
          rating: 8.22,
          shortDesc: expect.stringContaining(
            'The Japanese release by Victor Entertainment has different openings relating'
          ),
          title: 'Trigun'
        }
      ]);
      expect(result.current.state.pagination).toStrictEqual({
        page: 1,
        perPage: 20,
        totalData: 26717,
        totalPage: 1336
      });
    });

    /**
     * Simulate access page 2
     */
    await act(() => result.current.action.fetchAnimelist(2));

    await waitFor(async () => {
      expect(result.current.state.loading).toBeFalsy();
      expect(result.current.state.animeList).toStrictEqual([
        {
          episodes: 26,
          id: '7',
          image: 'https://cdn.myanimelist.net/images/anime/10/19969.webp',
          rating: 7.26,
          shortDesc: expect.stringContaining(
            'Robin Sena is a powerful craft user drafted into'
          ),
          title: 'Witch Hunter Robin'
        },
        {
          episodes: 52,
          id: '8',
          image: 'https://cdn.myanimelist.net/images/anime/7/21569.webp',
          rating: 7.05,
          shortDesc: expect.stringContaining(
            'It is the dark century and the people are suffering under the rule of the devil'
          ),
          title: 'Bouken Ou Beet'
        },
        {
          episodes: 145,
          id: '15',
          image: 'https://cdn.myanimelist.net/images/anime/1079/133529.webp',
          rating: 7.92,
          shortDesc: expect.stringContaining(
            'Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and'
          ),
          title: 'Eyeshield 21'
        }
      ]);
      expect(result.current.state.pagination).toStrictEqual({
        page: 2,
        perPage: 20,
        totalData: 26717,
        totalPage: 1336
      });
    });
  });

  it('Testing positive case (search data by keyword) - should be all data success to retrieve from API', async () => {
    fetchMock.mockResponse(async (req) => {
      if (req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=1&q=') {
        return httpMock_AnimeList_page1;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=2&q=') {
        return httpMock_AnimeList_page2;
      }

      if (
        req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=1&q=eyeshield'
      ) {
        return httpMock_AnimeList_customKeyword;
      }

      return {};
    });

    const { result } = renderHook(useFetchAnimeList);
    expect(result.current.state.loading).toBeTruthy();
    expect(result.current.state.animeList).toHaveLength(0);

    await waitFor(() => {
      expect(result.current.state.loading).toBeFalsy();
      expect(result.current.state.animeList).toStrictEqual([
        {
          episodes: 26,
          id: '1',
          image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          rating: 8.75,
          shortDesc: expect.stringContaining(
            'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes'
          ),
          title: 'Cowboy Bebop'
        },
        {
          episodes: 1,
          id: '5',
          image: 'https://cdn.myanimelist.net/images/anime/1439/93480.webp',
          rating: 8.38,
          shortDesc: expect.stringContaining(
            'Another day, another bounty—such is the life of'
          ),
          title: 'Cowboy Bebop: Tengoku no Tobira'
        },
        {
          episodes: 26,
          id: '6',
          image: 'https://cdn.myanimelist.net/images/anime/7/20310.webp',
          rating: 8.22,
          shortDesc: expect.stringContaining(
            'The Japanese release by Victor Entertainment has different openings relating'
          ),
          title: 'Trigun'
        }
      ]);
      expect(result.current.state.pagination).toStrictEqual({
        page: 1,
        perPage: 20,
        totalData: 26717,
        totalPage: 1336
      });
    });

    /**
     * Simulate change keyword
     */
    await act(() => result.current.action.setKeyword('eyeshield'));

    await waitFor(async () => {
      expect(result.current.state.loading).toBeFalsy();
      expect(result.current.state.animeList).toStrictEqual([
        {
          episodes: 1,
          id: '1317',
          image: 'https://cdn.myanimelist.net/images/anime/6/6087.webp',
          rating: 6.61,
          shortDesc: expect.stringContaining(
            'The Uraharajuku Boarders may have been knocked out of the Kantou'
          ),
          title: 'Eyeshield 21: Maboroshi no Golden Bowl'
        },
        {
          episodes: 1,
          id: '6418',
          image: 'https://cdn.myanimelist.net/images/anime/12/32103.webp',
          rating: 6.71,
          shortDesc: 'A brief OVA about the Devil Bats training on an island.',
          title: 'Eyeshield 21: Jump Festa 2005 Special'
        },
        {
          episodes: 1,
          id: '57979',
          image: 'https://cdn.myanimelist.net/images/anime/1455/141180.webp',
          rating: 0,
          shortDesc: '',
          title: 'Eyeshield 21: 21st Anniversary PV'
        }
      ]);
      expect(result.current.state.pagination).toStrictEqual({
        page: 1,
        perPage: 3,
        totalData: 4,
        totalPage: 2
      });
    });
  });
});
