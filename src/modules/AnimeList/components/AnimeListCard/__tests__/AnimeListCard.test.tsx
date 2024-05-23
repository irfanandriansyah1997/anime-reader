import type { ComponentProps } from 'react';

import { act, render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AnimeListCard from '@/modules/AnimeList/components/AnimeListCard';

import { JestBuilder } from '@/utils/test';

type Props = ComponentProps<typeof AnimeListCard>;

const onClickCardSpy = jest.fn();
const MOCK_PROPS: Props = {
  episodes: 145,
  id: '15',
  image: 'https://cdn.myanimelist.net/images/anime/1079/133529.webp',
  onClickCard: onClickCardSpy,
  rating: 7.92,
  shortDesc:
    'Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and NFL Rush in collaboration with the National Football League, but the plan fell through and the anime made its debut only on Toonami Jetstream, which later dropped the series. It would then become available in its entirety on Crunchyroll. Sentai Filmworks later licensed and released the first 52 episodes on DVD from 2010 to 2011.',
  title: 'Eyeshield 21'
};

describe('Testing Anime List Card Component', () => {
  it('Should be render correctly', () => {
    render(<AnimeListCard {...MOCK_PROPS} />);
    const card = screen.getByRole('region', { name: 'anime list card' });

    const image = within(card).getByAltText('anime image');
    JestBuilder.test(image)
      .toBeInTheDocument()
      .toHaveAttribute('src', MOCK_PROPS.image);

    const title = within(card).getByRole('heading', {
      name: 'anime list item title'
    });
    JestBuilder.test(title)
      .toBeInTheDocument()
      .toHaveTextContent('Eyeshield 21');
  });

  it('Simulate click card should be onClickCard props invoked', async () => {
    render(<AnimeListCard {...MOCK_PROPS} />);
    const card = screen.getByRole('region', { name: 'anime list card' });

    /**
     * Simulate click card
     */
    expect(onClickCardSpy).not.toHaveBeenCalled();
    await act(() => userEvent.click(card));

    JestBuilder.test(onClickCardSpy).toBeCalledTimes(1).nthCalledWith(1, '15');
  });
});
