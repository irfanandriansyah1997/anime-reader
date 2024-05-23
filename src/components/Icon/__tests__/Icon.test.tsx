import { render, screen } from '@testing-library/react';

import Icon from '@/components/Icon';

import { GRAY600, WARNING500 } from '@/constant/theme';

describe('Testing Icon Component', () => {
  it('Testing icon with custom color, size and margin should be working properly', () => {
    render(<Icon icon="activity" color={WARNING500} margin={10} size={24} />);

    const icon = screen.getByRole('img', { name: 'fithub icon' });

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon', 'activity');
    expect(icon).toHaveStyle('font-size: 24px;');
    expect(icon).toHaveStyle(`color: ${WARNING500}`);
    expect(icon).toHaveStyle(`margin: 10px`);
  });

  describe('Testing icon with various kind icon props', () => {
    it.each`
      testCase                                                     | input             | expected
      ${'Should render correctly with icon props is activity'}     | ${'activity'}     | ${'activity'}
      ${'Should render correctly with icon props is addnote-line'} | ${'addnote-line'} | ${'addnote-line'}
      ${'Should render correctly with icon props is login'}        | ${'login'}        | ${'login'}
      ${'Should render correctly with icon props is bicep'}        | ${'bicep'}        | ${'bicep'}
    `('$testCase', ({ expected, input }) => {
      render(<Icon icon={input} color={GRAY600} />);
      const icon = screen.getByRole('img', { name: 'fithub icon' });

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('data-icon', expected);
      expect(icon).toHaveStyle('font-size: 16px;');
      expect(icon).toHaveStyle(`color: ${GRAY600}`);
    });
  });
});
