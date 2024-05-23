import { render, screen } from '@testing-library/react';

import Divider from '@/components/Divider';

import { JestBuilder } from '@/utils/test';

describe('Testing Divider Component', () => {
  it.each`
    testCase                                                     | size         | expectedSize
    ${'Should be render correctly with size props is small'}     | ${'small'}   | ${'small'}
    ${'Should be render correctly with size props is undefined'} | ${undefined} | ${'small'}
    ${'Should be render correctly with size props is big'}       | ${'big'}     | ${'big'}
  `('Should be render correctly', ({ expectedSize, size }) => {
    render(<Divider size={size} />);

    const divider = screen.getByRole('presentation', { name: 'divider' });

    JestBuilder.test(divider)
      .toBeInTheDocument()
      .toHaveAttribute('data-size', expectedSize);
  });
});
