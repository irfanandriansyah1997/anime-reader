import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import {
  httpMock_AnimeCharacter_error,
  httpMock_AnimeList_page1
} from '@/repository/Anime/__mocks__/getAnimeList.mock';
import type { GetAnimeListFetchAPIArgs } from '@/repository/Anime/types';
import useGetAnimeList from '@/repository/Anime/usecase/useGetAnimeList';

import { getJestMockArgument, JestBuilder } from '@/utils/test';
import { LIMIT_ANIME_CARDS } from '@/constant/anime';

const MOCK_ARGS: GetAnimeListFetchAPIArgs = {
  limit: LIMIT_ANIME_CARDS,
  page: 1
};

describe('Testing Get Anime List Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing with mock HTTP returning correct data', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeList_page1);

    const { result } = renderHook(useGetAnimeList);
    expect(await result.current.fetchAPI(MOCK_ARGS)).toStrictEqual({
      response: {
        animeList: [
          {
            episodes: 26,
            id: '1',
            image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
            rating: 8.75,
            shortDesc: expect.stringContaining(
              `When Cowboy Bebop first aired in spring of 1998`
            ),
            title: 'Cowboy Bebop'
          },
          {
            episodes: 1,
            id: '5',
            image: 'https://cdn.myanimelist.net/images/anime/1439/93480.webp',
            rating: 8.38,
            shortDesc: expect.stringContaining(
              `Another day, another bounty—such is the life of the often unlucky`
            ),
            title: 'Cowboy Bebop: Tengoku no Tobira'
          },
          {
            episodes: 26,
            id: '6',
            image: 'https://cdn.myanimelist.net/images/anime/7/20310.webp',
            rating: 8.22,
            shortDesc: expect.stringContaining(
              'The Japanese release by Victor Entertainment has different'
            ),
            title: 'Trigun'
          }
        ],
        pagination: {
          page: 1,
          perPage: 20,
          totalData: 26717,
          totalPage: 1336
        }
      }
    });
    const [url, request] =
      getJestMockArgument<Parameters<typeof fetch>>(fetch)!;

    /**
     * Check request API
     */
    JestBuilder.test(request?.method).toBe('GET');
    expect(url).toBe('https://api.jikan.moe/v4/anime?limit=20&page=1');
  });

  it('Testing with mock HTTP returning error from backend', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeCharacter_error);
    const { result } = renderHook(useGetAnimeList);

    expect(await result.current.fetchAPI(MOCK_ARGS)).toStrictEqual({
      error: expect.objectContaining({
        message: "Oops! Something went wrong on our end. We're fixing it"
      })
    });
    const [url, request] =
      getJestMockArgument<Parameters<typeof fetch>>(fetch)!;

    /**
     * Check request API
     */
    expect(request?.method).toBe('GET');
    expect(url).toBe('https://api.jikan.moe/v4/anime?limit=20&page=1');
  });
});
