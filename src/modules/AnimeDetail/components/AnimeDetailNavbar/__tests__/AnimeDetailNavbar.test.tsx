import { MemoryRouter } from 'react-router-dom';

import { render, screen, within } from '@testing-library/react';

import AnimeDetailNavbar from '@/modules/AnimeDetail/components/AnimeDetailNavbar';

import { JestBuilder } from '@/utils/test';

describe('Testing Anime Detail Navbar Component', () => {
  it('Should be render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/home-page']} initialIndex={0}>
        <AnimeDetailNavbar />
      </MemoryRouter>
    );

    const navbar = screen.getByRole('region', { name: 'navbar' });
    expect(navbar).toBeInTheDocument();
    expect(within(navbar).getByAltText('Anime Logo')).toBeInTheDocument();

    const link = within(navbar).getByRole('link');
    JestBuilder.test(link).toBeInTheDocument().toHaveAttribute('href', '/');
  });
});
