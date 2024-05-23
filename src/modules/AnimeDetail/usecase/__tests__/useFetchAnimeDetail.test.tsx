import { Fragment, type PropsWithChildren } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { renderHook, waitFor } from '@testing-library/react';

import useFetchAnimeDetail from '@/modules/AnimeDetail/usecase/useFetchAnimeDetail';
import { httpMock_AnimeCharacter } from '@/repository/Anime/__mocks__/getAnimeCharacter.mock';
import { httpMock_AnimeDetail } from '@/repository/Anime/__mocks__/getAnimeDetail.mock';
import { httpMock_AnimeEpisode } from '@/repository/Anime/__mocks__/getAnimeEpisode.mock';

import { JestBuilder } from '@/utils/test';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const module = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...module,
    useNavigate: () => mockNavigate
  };
});

const wrapper = (url: string) => (props: PropsWithChildren<unknown>) => {
  return (
    <MemoryRouter initialEntries={[url]} initialIndex={0}>
      <Routes>
        <Route
          path="/anime/:animeId"
          element={<Fragment>{props.children}</Fragment>}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe('Testing Fetch Anime Detail Custom Hooks', () => {
  beforeEach(jest.clearAllMocks);

  it('Testing positive case should be all data success to retrieve from API', async () => {
    fetchMock.mockResponse(async (req) => {
      if (req.url === 'https://api.jikan.moe/v4/anime/14/characters') {
        return httpMock_AnimeCharacter;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime/14/full') {
        return httpMock_AnimeDetail;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime/14/videos/episodes') {
        return httpMock_AnimeEpisode;
      }

      return {};
    });

    const { result } = renderHook(useFetchAnimeDetail, {
      wrapper: wrapper('/anime/14')
    });
    expect(result.current.state.loading).toBeTruthy();
    expect(result.current.state.result).toBeUndefined();

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(result.current.state.loading).toBeFalsy();
      expect(result.current.state.result).toStrictEqual({
        character: [
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
        ],
        detailInformation: {
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
            data: [
              'TV Tokyo',
              'Nihon Ad Systems',
              'TV Tokyo Music',
              'Shueisha'
            ],
            formattedData:
              'TV Tokyo, Nihon Ad Systems, TV Tokyo Music, Shueisha'
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
        },
        episodes: [
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
    });
  });

  it('Testing negative case if anime id is empty string should be redirected to 404 page', async () => {
    fetchMock.mockResponse(async (req) => {
      if (req.url === 'https://api.jikan.moe/v4/anime/14/characters') {
        return httpMock_AnimeCharacter;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime/14/full') {
        return httpMock_AnimeDetail;
      }

      if (req.url === 'https://api.jikan.moe/v4/anime/14/videos/episodes') {
        return httpMock_AnimeEpisode;
      }

      return {};
    });

    const { result } = renderHook(useFetchAnimeDetail, {
      wrapper: wrapper('/anime/ ')
    });

    expect(result.current.state.loading).toBeTruthy();
    expect(result.current.state.result).toBeUndefined();

    await waitFor(() => {
      JestBuilder.test(mockNavigate)
        .toBeCalledTimes(1)
        .nthCalledWith(1, '/404');
    });
  });

  it('Testing negative case if API returning not 2xx on status code should be redirected 404', async () => {
    fetchMock.mockResponse(async () => {
      return {};
    });

    const { result } = renderHook(useFetchAnimeDetail, {
      wrapper: wrapper('/anime/14')
    });

    expect(result.current.state.loading).toBeTruthy();
    expect(result.current.state.result).toBeUndefined();

    await waitFor(() => {
      JestBuilder.test(mockNavigate)
        .toBeCalledTimes(1)
        .nthCalledWith(1, '/404');
    });
  });
});
