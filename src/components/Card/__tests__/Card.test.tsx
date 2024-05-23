import { render, screen } from '@testing-library/react';

import Card from '@/components/Card';

import { JestBuilder } from '@/utils/test';

describe('Testing Card Component', () => {
  it.each`
    testCase                                                                                       | withPadding  | withBackground | expectedWithPadding | expectedWithBackground
    ${'Should be render correctly with withPadding & withBackground props is true'}                | ${true}      | ${true}        | ${'true'}           | ${'true'}
    ${'Should be render correctly with withPadding & withBackground props is not defined'}         | ${undefined} | ${undefined}   | ${'true'}           | ${'true'}
    ${'Should be render correctly with withPadding props is true & withBackground props is false'} | ${true}      | ${false}       | ${'true'}           | ${'false'}
    ${'Should be render correctly with withPadding props is false & withBackground props is true'} | ${false}     | ${true}        | ${'false'}          | ${'true'}
    ${'Should be render correctly with withPadding & withBackground props is false'}               | ${false}     | ${false}       | ${'false'}          | ${'false'}
  `(
    '$testCase',
    ({
      expectedWithBackground,
      expectedWithPadding,
      withBackground,
      withPadding
    }) => {
      render(
        <Card
          aria-label="card"
          withPadding={withPadding}
          withBackground={withBackground}
          margin="10px 0"
        >
          Lorem Ipsum Dolor Sim Amet
        </Card>
      );

      const card = screen.getByRole('region', { name: 'card' });

      JestBuilder.test(card)
        .toBeInTheDocument()
        .toHaveAttribute('data-default-padding', expectedWithPadding)
        .toHaveAttribute('data-default-background', expectedWithBackground)
        .toHaveStyle({ margin: '10px 0' })
        .toHaveTextContent('Lorem Ipsum Dolor Sim Amet');
    }
  );
});
