import type { ComponentProps } from 'react';

import { act, render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AnimeEpisodeCard from '@/modules/AnimeDetail/components/AnimeEpisodeCard';

import { JestBuilder } from '@/utils/test';

type Props = ComponentProps<typeof AnimeEpisodeCard>;

const MOCK_PROPS: Props = {
  id: '145',
  image:
    'https://img1.ak.crunchyroll.com/i/spire4-tmb/d46e3f9d734efe8505e7539871478a851230091762_large.jpg',
  title: "Everyone, Let's Play Football! Ya-Ha!",
  url: 'https://myanimelist.net/anime/15/Eyeshield_21/episode/145'
};

window.open = jest.fn();

describe('Testing Anime Episode Card Component', () => {
  it('Should be render correctly', () => {
    render(<AnimeEpisodeCard {...MOCK_PROPS} />);

    const card = screen.getByRole('button', { name: 'episode card' });
    JestBuilder.test(card)
      .toHaveTextContent('#145')
      .toHaveTextContent('#145')
      .toHaveTextContent("Everyone, Let's Play Football! Ya-Ha!");

    const image = within(card).getByAltText('episodes preview');
    JestBuilder.test(image)
      .toBeInTheDocument()
      .toHaveAttribute('src', MOCK_PROPS.image);
  });

  it('Simulate click card should be redirected to anime list website', async () => {
    render(<AnimeEpisodeCard {...MOCK_PROPS} />);

    const card = screen.getByRole('button', { name: 'episode card' });

    // Simulate click card
    expect(window.open).not.toHaveBeenCalled();
    await act(() => userEvent.click(card));

    JestBuilder.test(window.open)
      .toBeCalledTimes(1)
      .nthCalledWith(
        1,
        new URL('https://myanimelist.net/anime/15/Eyeshield_21/episode/145'),
        '_blank'
      );
  });
});
