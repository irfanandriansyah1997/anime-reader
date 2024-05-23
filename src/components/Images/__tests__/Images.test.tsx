import { render, screen, within } from '@testing-library/react';

import Images from '@/components/Images';

const mockURL = 'https://www.google.com/image.png';

describe('Testing Images Component', () => {
  describe('Testing image with layout is default', () => {
    it('Should be render correctly', () => {
      render(<Images src={mockURL} alt="Hello World" size={[120, 100]} />);

      const wrapper = screen.getByRole('region', { name: 'images' });
      const image = within(wrapper).getByAltText('Hello World');

      /**
       * Check wrapper section
       */
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveStyle('width: 120px');
      expect(wrapper).toHaveStyle('height: 100px');
      expect(wrapper).toHaveAttribute('data-layout', 'default');

      /**
       * Check image element
       */
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', mockURL);
      expect(image).toHaveStyle('width: 120px');
      expect(image).toHaveStyle('height: 100px');
    });

    it('Test with put size props is not array should be return empty HTML', () => {
      render(<Images src={mockURL} alt="Hello World" size={120} />);

      expect(
        screen.queryByRole('region', { name: 'images' })
      ).not.toBeInTheDocument();
    });
  });

  describe('Testing image with rectangle / circle is default', () => {
    it.each`
      testCase                                                 | size   | layout
      ${'Should be render correctly with layout is rectangle'} | ${200} | ${'rectangle'}
      ${'Should be render correctly with layout is circle'}    | ${200} | ${'circle'}
    `('$testCase', ({ layout, size }) => {
      render(
        <Images src={mockURL} alt="Hello World" layout={layout} size={size} />
      );

      const wrapper = screen.getByRole('region', { name: 'images' });
      const image = within(wrapper).getByAltText('Hello World');

      /**
       * Check wrapper section
       */
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveStyle('width: 200px');
      expect(wrapper).toHaveStyle('height: 200px');
      expect(wrapper).toHaveAttribute('data-layout', layout);

      /**
       * Check image element
       */
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', mockURL);
      expect(image).toHaveStyle('width: 200px');
      expect(image).toHaveStyle('height: 200px');
    });

    it.each`
      testCase                                                                                       | layout
      ${'Test with put size props is not array and layout is rectangle should be return empty HTML'} | ${'rectangle'}
      ${'Test with put size props is not array and layout is circle should be return empty HTML'}    | ${'circle'}
    `('$testCase', ({ layout }) => {
      render(
        <Images
          src={mockURL}
          alt="Hello World"
          layout={layout}
          size={[120, 100]}
        />
      );

      expect(
        screen.queryByRole('region', { name: 'images' })
      ).not.toBeInTheDocument();
    });
  });

  it.each`
    testCase                                                           | size
    ${'Test with put size props is null be return empty HTML'}         | ${null}
    ${'Test with put size props is undefined be return empty HTML'}    | ${undefined}
    ${'Test with put size props is empty string be return empty HTML'} | ${''}
    ${'Test with put size props is 0 be return empty HTML'}            | ${''}
  `('$testCase', ({ size }) => {
    render(<Images src={mockURL} alt="Hello World" size={size} />);

    expect(
      screen.queryByRole('region', { name: 'images' })
    ).not.toBeInTheDocument();
  });
});
