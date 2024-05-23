import { render, screen } from '@testing-library/react';

import Spinner from '@/components/Spinner';

import { JestBuilder } from '@/utils/test';
import { DANGER500, GRAY400 } from '@/constant/theme';

describe('Testing Spinner Component', () => {
  it('Should be render correctly', () => {
    render(<Spinner size={24} />);

    const spinner = screen.getByRole('presentation', { name: 'loading' });

    JestBuilder.test(spinner)
      .toBeInTheDocument()
      .toHaveStyle({ borderLeftColor: GRAY400 })
      .toHaveStyle({ borderRightColor: GRAY400 })
      .toHaveStyle({ borderTopColor: GRAY400 })
      .toHaveStyle({ borderWidth: '5px' })
      .toHaveStyle({ height: '24px' })
      .toHaveStyle({ width: '24px' });
  });

  it('Should be render correctly with custom color', () => {
    render(<Spinner size={24} spinnerColor={DANGER500} spinnerWidth={3} />);

    const spinner = screen.getByRole('presentation', { name: 'loading' });

    JestBuilder.test(spinner)
      .toBeInTheDocument()
      .toHaveStyle({ borderLeftColor: DANGER500 })
      .toHaveStyle({ borderRightColor: DANGER500 })
      .toHaveStyle({ borderTopColor: DANGER500 })
      .toHaveStyle({ borderWidth: '3px' })
      .toHaveStyle({ height: '24px' })
      .toHaveStyle({ width: '24px' });
  });
});
