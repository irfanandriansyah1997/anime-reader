import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render, screen, waitFor } from '@testing-library/react';

import AnimeDetailModules from '@/modules/AnimeDetail';
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

describe('Testing Anime Detail Modules Component', () => {
  beforeEach(jest.clearAllMocks);

  it('Should be render correctly', async () => {
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

    render(<AnimeDetailModules />, { wrapper: wrapper('/anime/14') });

    /**
     * Check loading bar on initial render
     */

    const loading = await screen.findByRole('presentation', {
      name: 'loading'
    });
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });

    /**
     * Check content after success load data from API
     */

    const title = screen.getByRole('heading', { name: 'title' });
    JestBuilder.test(title)
      .toBeInTheDocument()
      .toHaveTextContent('Eyeshield 21');

    const image = screen.getByAltText('anime picture');
    JestBuilder.test(image)
      .toBeInTheDocument()
      .toHaveAttribute(
        'src',
        'https://cdn.myanimelist.net/images/anime/1079/133529.webp'
      );
  });

  it('Should be redirect to 404 page if anime is not found from API', async () => {
    fetchMock.mockResponse(async () => {
      return {};
    });

    render(<AnimeDetailModules />, { wrapper: wrapper('/anime/14') });

    /**
     * Check loading bar on initial render
     */

    const loading = await screen.findByRole('presentation', {
      name: 'loading'
    });
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      JestBuilder.test(mockNavigate)
        .toBeCalledTimes(1)
        .nthCalledWith(1, '/404');
    });
  });
});
