import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AnimeListModules from '@/modules/AnimeList';
import {
  httpMock_AnimeList_customKeyword,
  httpMock_AnimeList_page1,
  httpMock_AnimeList_page2
} from '@/repository/Anime/__mocks__/getAnimeList.mock';

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

const wrapper = (props: PropsWithChildren<unknown>) => {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="/" element={<Fragment>{props.children}</Fragment>} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Testing Anime Detail Modules Component', () => {
  beforeEach(jest.clearAllMocks);

  it('Should be render correctly + simulate change pagination', async () => {
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

    render(<AnimeListModules />, { wrapper });

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

    const searchResultLabel = screen.getByRole('presentation', {
      name: 'search result label'
    });
    expect(searchResultLabel).toHaveTextContent('All Anime');

    /**
     * Check anime card list
     */
    const cardItems = screen.getAllByRole('region', {
      name: 'anime list card'
    });
    expect(cardItems).toHaveLength(3);

    expect(cardItems[0]).toHaveTextContent('Cowboy Bebop');
    expect(cardItems[1]).toHaveTextContent('Cowboy Bebop: Tengoku no Tobira');
    expect(cardItems[2]).toHaveTextContent('Trigun');

    const pagination = screen.getByRole('region', { name: 'pagination' });
    const paginationItem = within(pagination).getAllByRole('listitem');
    const link = paginationItem[1].getElementsByTagName('a')[0];

    /**
     * Simulate redirect to page 2
     */
    await act(() => userEvent.click(link));

    await waitFor(() => {
      const reRendercardItems = screen.getAllByRole('region', {
        name: 'anime list card'
      });
      expect(reRendercardItems).toHaveLength(3);
      expect(searchResultLabel).toHaveTextContent('All Anime');

      expect(reRendercardItems[0]).toHaveTextContent('Witch Hunter Robin');
      expect(reRendercardItems[1]).toHaveTextContent('Bouken Ou Beet');
      expect(reRendercardItems[2]).toHaveTextContent('Eyeshield 21');
    });
  });

  it('Should be render correctly + simulate change keyword', async () => {
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

    render(<AnimeListModules />, { wrapper });

    /**
     * Check loading bar on initial render
     */

    const searchResultLabel = await screen.findByRole('presentation', {
      name: 'search result label'
    });
    expect(searchResultLabel).toHaveTextContent('All Anime');

    /**
     * Check anime card list
     */
    const cardItems = screen.getAllByRole('region', {
      name: 'anime list card'
    });
    expect(cardItems).toHaveLength(3);

    expect(cardItems[0]).toHaveTextContent('Cowboy Bebop');
    expect(cardItems[1]).toHaveTextContent('Cowboy Bebop: Tengoku no Tobira');
    expect(cardItems[2]).toHaveTextContent('Trigun');

    const navbar = screen.getByRole('region', { name: 'navbar' });
    const textfieldInput = within(navbar).getByRole('textbox');

    /**
     * Simulate redirect to page 2
     */
    await act(() => {
      fireEvent.change(textfieldInput, { target: { value: 'eyeshield' } });
    });
    jest.runAllTimers();

    await waitFor(() => {
      const reRendercardItems = screen.getAllByRole('region', {
        name: 'anime list card'
      });
      expect(searchResultLabel).toHaveTextContent('Result for "eyeshield"');
      expect(reRendercardItems).toHaveLength(3);

      expect(reRendercardItems[0]).toHaveTextContent(
        'Eyeshield 21: Maboroshi no Golden Bowl'
      );
      expect(reRendercardItems[1]).toHaveTextContent(
        'Eyeshield 21: Jump Festa 2005 Special'
      );
      expect(reRendercardItems[2]).toHaveTextContent(
        'Eyeshield 21: 21st Anniversary PV'
      );
    });
  });

  it('Simulate click card should be redirected to detail page', async () => {
    fetchMock.mockResponse(async (req) => {
      if (req.url === 'https://api.jikan.moe/v4/anime?limit=20&page=1&q=') {
        return httpMock_AnimeList_page1;
      }

      return {};
    });

    render(<AnimeListModules />, { wrapper });

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

    const searchResultLabel = screen.getByRole('presentation', {
      name: 'search result label'
    });
    expect(searchResultLabel).toHaveTextContent('All Anime');

    /**
     * Check anime card list
     */
    const cardItems = screen.getAllByRole('region', {
      name: 'anime list card'
    });
    expect(cardItems).toHaveLength(3);

    expect(cardItems[0]).toHaveTextContent('Cowboy Bebop');
    expect(cardItems[1]).toHaveTextContent('Cowboy Bebop: Tengoku no Tobira');
    expect(cardItems[2]).toHaveTextContent('Trigun');

    /**
     * Simulate click card
     */
    expect(mockNavigate).not.toHaveBeenCalled();
    await act(() => userEvent.click(cardItems[1]));

    JestBuilder.test(mockNavigate)
      .toBeCalledTimes(1)
      .nthCalledWith(1, '/anime/5');
  });
});
