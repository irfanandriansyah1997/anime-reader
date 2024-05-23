import type { ComponentProps } from 'react';

import { act, fireEvent, render, screen, within } from '@testing-library/react';

import AnimeListNavbar from '@/modules/AnimeList/components/AnimeListNavbar';

import { JestBuilder } from '@/utils/test';

type Props = ComponentProps<typeof AnimeListNavbar>;

const onChangeSpy = jest.fn();
const MOCK_PROPS: Props = {
  onChange: onChangeSpy,
  value: ''
};

describe('Testing Anime List Navbar Component', () => {
  it('Should be render correctly', () => {
    render(<AnimeListNavbar {...MOCK_PROPS} />);
    const navbar = screen.getByRole('region', { name: 'navbar' });

    const image = within(navbar).getByAltText('Anime Logo');
    expect(image).toBeInTheDocument();

    const textfieldContainer = within(navbar).getByRole('region', {
      name: 'textfield'
    });
    const textfieldInput = within(textfieldContainer).getByRole('textbox');
    JestBuilder.test(textfieldInput)
      .toBeInTheDocument()
      .toHaveValue('')
      .toHaveAttribute('placeholder', 'Find your favorite anime...')
      .not.toHaveAttribute('disabled')
      .not.toHaveFocus();
  });

  it('Simulate search keyword on textfield should be onChange props invoked', async () => {
    jest.useFakeTimers();
    render(<AnimeListNavbar {...MOCK_PROPS} />);

    const navbar = screen.getByRole('region', { name: 'navbar' });
    const textfieldInput = within(navbar).getByRole('textbox');

    /**
     * Simulate search text
     */
    expect(onChangeSpy).not.toHaveBeenCalled();
    await act(() => {
      fireEvent.change(textfieldInput, { target: { value: 'eyeshield' } });
    });
    jest.runAllTimers();

    JestBuilder.test(onChangeSpy)
      .toBeCalledTimes(1)
      .nthCalledWith(1, 'eyeshield');
  });
});
