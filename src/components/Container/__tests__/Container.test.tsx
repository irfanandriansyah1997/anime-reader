import { render, screen } from '@testing-library/react';

import Container from '@/components/Container';

import { JestBuilder } from '@/utils/test';

describe('Testing Container Component', () => {
  it('Should be render correctly', () => {
    render(<Container>Hello World</Container>);

    const container = screen.getByRole('region', { name: 'container' });
    JestBuilder.test(container)
      .toBeInTheDocument()
      .toHaveTextContent('Hello World');
  });
});
