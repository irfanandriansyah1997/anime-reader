import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import {
  httpMock_AnimeCharacter,
  httpMock_AnimeCharacter_error
} from '@/repository/Anime/__mocks__/getAnimeCharacter.mock';
import type { GetAnimeCharacterFetchAPIArgs } from '@/repository/Anime/types';
import useGetAnimeCharacter from '@/repository/Anime/usecase/useGetAnimeCharacter';

import { getJestMockArgument } from '@/utils/test';

const MOCK_ARGS: GetAnimeCharacterFetchAPIArgs = {
  animeId: 14
};

describe('Testing Get Anime Character Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing with mock HTTP returning correct data', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeCharacter);

    const { result } = renderHook(useGetAnimeCharacter);
    expect(await result.current.fetchAPI(MOCK_ARGS)).toStrictEqual({
      response: [
        {
          characterName: 'Anezaki, Mamori',
          favorites: 47,
          image:
            'https://cdn.myanimelist.net/images/characters/11/81049.jpg?s=a4eb0b928f3784b884d0ede290cb022c',
          role: 'Main'
        },
        {
          characterName: 'Hiruma, Youichi',
          favorites: 4255,
          image:
            'https://cdn.myanimelist.net/images/characters/4/61939.webp?s=a0b4fed6ed3bd7315db266636483e932',
          role: 'Main'
        },
        {
          characterName: 'Kobayakawa, Sena',
          favorites: 849,
          image:
            'https://cdn.myanimelist.net/images/characters/7/51024.webp?s=483eb12be404900be2c3d98d8464be1a',
          role: 'Main'
        }
      ]
    });
    const [url, request] =
      getJestMockArgument<Parameters<typeof fetch>>(fetch)!;

    /**
     * Check request API
     */
    expect(request?.method).toBe('GET');
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/characters');
  });

  it('Testing with mock HTTP returning error from backend', async () => {
    fetchMock.mockResponseOnce(async () => httpMock_AnimeCharacter_error);
    const { result } = renderHook(useGetAnimeCharacter);

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
    expect(url).toBe('https://api.jikan.moe/v4/anime/14/characters');
  });
});
