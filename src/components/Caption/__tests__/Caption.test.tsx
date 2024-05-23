import type { ComponentProps } from 'react';

import { render, screen, within } from '@testing-library/react';

import Caption from '@/components/Caption';

type Props = ComponentProps<typeof Caption>;

const MOCK_PROPS: Props = {
  content: `Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and NFL Rush in collaboration with the National Football League, but the plan fell through and the anime made its debut only on Toonami Jetstream, which later dropped the series. It would then become available in its entirety on Crunchyroll. Sentai Filmworks later licensed and released the first 52 episodes on DVD from 2010 to 2011.`,
  title: 'Short Intro'
};

describe('Testing Caption Component', () => {
  it('Should be render correctly', () => {
    render(<Caption {...MOCK_PROPS} />);

    const container = screen.getByRole('region', { name: 'caption' });

    const title = within(container).getByRole('heading', { level: 6 });
    expect(title).toHaveTextContent('Short Intro');

    const desc = within(container).getByRole('presentation', { name: 'desc' });
    expect(desc).toHaveTextContent(
      /Eyeshield 21 was original scheduled to stream in North America/
    );
  });
});
