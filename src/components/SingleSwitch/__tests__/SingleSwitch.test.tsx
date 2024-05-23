import { render, screen } from '@testing-library/react';

import Section from '@/components/Section/Section';
import SingleSwitch from '@/components/SingleSwitch';

import { JestBuilder } from '@/utils/test';

describe('Testing <Put Component Name> Component', () => {
  it('Should be render correctly', () => {
    render(
      <SingleSwitch match="section a">
        <Section name="section a">
          <section aria-label="section a">Hello from section a</section>
        </Section>
        <Section name="section b">
          <section aria-label="section b">Hello from section b</section>
        </Section>
        <section aria-label="section c">Hello from section c</section>
        Hello from section d
      </SingleSwitch>
    );

    JestBuilder.test(screen.getByRole('region', { name: 'section a' }))
      .toBeInTheDocument()
      .toHaveTextContent('Hello from section a');

    JestBuilder.test(
      screen.queryByRole('region', { name: 'section b' })
    ).not.toBeInTheDocument();

    JestBuilder.test(
      screen.queryByRole('region', { name: 'section c' })
    ).not.toBeInTheDocument();
  });
});
