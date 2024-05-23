import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import {
  httpMock_AnimeDetail,
  httpMock_AnimeDetail_error
} from '@/repository/Anime/__mocks__/getAnimeDetail.mock';
import type { GetAnimeDetailFetchAPIArgs } from '@/repository/Anime/types';
import useGetAnimeDetail from '@/repository/Anime/usecase/useGetAnimeDetail';

import { getJestMockArgument, JestBuilder } from '@/utils/test';

const MOCK_ARGS: GetAnimeDetailFetchAPIArgs = {
  animeId: 14
};

describe('Testing Get Anime Detail Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing with mock HTTP returning correct data', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeDetail);

    const { result } = renderHook(useGetAnimeDetail);
    expect(await result.current.fetchAPI(MOCK_ARGS)).toStrictEqual({
      response: {
        animeRelations: [
          {
            item: [
              {
                id: '43',
                name: 'Eyeshield 21'
              }
            ],
            relation: 'Adaptation'
          },
          {
            item: [
              {
                id: '1317',
                name: 'Eyeshield 21: Maboroshi no Golden Bowl'
              },
              {
                id: '6418',
                name: 'Eyeshield 21: Jump Festa 2005 Special'
              }
            ],
            relation: 'Side story'
          },
          {
            item: [
              {
                id: '57979',
                name: 'Eyeshield 21: 21st Anniversary PV'
              }
            ],
            relation: 'Other'
          }
        ],
        background:
          'Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and NFL Rush in collaboration with the National Football League, but the plan fell through and the anime made its debut only on Toonami Jetstream, which later dropped the series. It would then become available in its entirety on Crunchyroll. Sentai Filmworks later licensed and released the first 52 episodes on DVD from 2010 to 2011.',
        duration: '23 min per ep',
        episodes: 145,
        genre: ['Sports'],
        id: '15',
        image: 'https://cdn.myanimelist.net/images/anime/1079/133529.webp',
        producers: {
          data: ['TV Tokyo', 'Nihon Ad Systems', 'TV Tokyo Music', 'Shueisha'],
          formattedData: 'TV Tokyo, Nihon Ad Systems, TV Tokyo Music, Shueisha'
        },
        rating: {
          rating: 7.92,
          totalParticipant: 89439
        },
        streaming: [
          {
            streamName: 'Crunchyroll',
            url: 'http://www.crunchyroll.com/series-46844'
          }
        ],
        studios: {
          data: ['Gallop'],
          formattedData: 'Gallop'
        },
        synopsis: expect.stringContaining(
          'Shy, reserved, and small-statured, Deimon High School'
        ),
        title: 'Eyeshield 21',
        type: 'TV',
        year: 2005
      }
    });
    const [url, request] =
      getJestMockArgument<Parameters<typeof fetch>>(fetch)!;

    /**
     * Check request API
     */
    JestBuilder.test(request?.method).toBe('GET');
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/full');
  });

  it('Testing with mock HTTP returning error from backend', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeDetail_error);
    const { result } = renderHook(useGetAnimeDetail);

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
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/full');
  });
});
