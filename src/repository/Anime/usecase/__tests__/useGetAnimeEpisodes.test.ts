import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import {
  httpMock_AnimeEpisode,
  httpMock_AnimeEpisode_error
} from '@/repository/Anime/__mocks__/getAnimeEpisode.mock';
import type { GetAnimeEpisodesFetchAPIArgs } from '@/repository/Anime/types';
import useGetAnimeEpisodes from '@/repository/Anime/usecase/useGetAnimeEpisodes';

import { getJestMockArgument, JestBuilder } from '@/utils/test';

const MOCK_ARGS: GetAnimeEpisodesFetchAPIArgs = {
  animeId: 14
};

describe('Testing Get Anime Episode Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing with mock HTTP returning correct data', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeEpisode);

    const { result } = renderHook(useGetAnimeEpisodes);
    expect(await result.current.fetchAPI(MOCK_ARGS)).toStrictEqual({
      response: [
        {
          id: '145',
          image:
            'https://img1.ak.crunchyroll.com/i/spire4-tmb/d46e3f9d734efe8505e7539871478a851230091762_large.jpg',
          title: "Everyone, Let's Play Football! Ya-Ha!",
          url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/145'
        },
        {
          id: '144',
          image:
            'https://img1.ak.crunchyroll.com/i/spire1-tmb/64761ab44dae3b099d56de05278422501230982073_large.jpg',
          title: 'The Final Moment!',
          url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/144'
        },
        {
          id: '143',
          image:
            'https://img1.ak.crunchyroll.com/i/spire3-tmb/b2cb15ed8719b4b0cf7f59375ccee6bd1230981615_large.jpg',
          title: 'A Form of Desperation!',
          url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/143'
        },
        {
          id: '142',
          image:
            'https://img1.ak.crunchyroll.com/i/spire1-tmb/8796051cd9a4adc248718cf889b71a061230981326_large.jpg',
          title: "The Demon's Twin Wings!",
          url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/142'
        }
      ]
    });
    const [url, request] =
      getJestMockArgument<Parameters<typeof fetch>>(fetch)!;

    /**
     * Check request API
     */
    JestBuilder.test(request?.method).toBe('GET');
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/videos/episodes');
  });

  it('Testing with mock HTTP returning error from backend', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeEpisode_error);
    const { result } = renderHook(useGetAnimeEpisodes);

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
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/videos/episodes');
  });
});
