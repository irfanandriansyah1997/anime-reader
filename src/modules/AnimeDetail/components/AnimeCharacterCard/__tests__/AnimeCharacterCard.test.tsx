import type { ComponentProps } from 'react';

import { render, screen, within } from '@testing-library/react';

import AnimeCharacterCard from '@/modules/AnimeDetail/components/AnimeCharacterCard';

import { JestBuilder } from '@/utils/test';

type Props = ComponentProps<typeof AnimeCharacterCard>;

const MOCK_PROPS: Props = {
  characterName: 'Anezaki, Mamori',
  favorites: 47,
  image:
    'https://cdn.myanimelist.net/images/characters/11/81049.webp?s=a4eb0b928f3784b884d0ede290cb022c',
  role: 'Main'
};

describe('Testing Anime Character Card Component', () => {
  it('Should be render correctly', () => {
    render(<AnimeCharacterCard {...MOCK_PROPS} />);

    const card = screen.getByRole('region', { name: 'anime character card' });

    const images = within(card).getByAltText('Anezaki, Mamori');
    JestBuilder.test(images)
      .toBeInTheDocument()
      .toHaveAttribute('src', MOCK_PROPS.image);

    const characterName = within(card).getByText('Anezaki, Mamori');
    expect(characterName).toBeInTheDocument();

    const favorites = within(card).getByRole('region', { name: 'favorites' });
    JestBuilder.test(favorites).toBeInTheDocument().toHaveTextContent('47');

    const role = within(card).getByRole('region', { name: 'role' });
    JestBuilder.test(role).toBeInTheDocument().toHaveTextContent('Main');
  });
});
