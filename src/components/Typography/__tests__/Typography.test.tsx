import { render, screen } from '@testing-library/react';

import Typography from '@/components/Typography';
import type { TypographyProps } from '@/components/Typography/types';

import { JestBuilder } from '@/utils/test';
import { GRAY700 } from '@/constant/theme';

const MOCK_PROPS: TypographyProps<HTMLParagraphElement> = {
  children: 'Sample Text',
  color: GRAY700,
  ellipsis: false,
  margin: '12px 8px',
  modifier: 'body-1',
  textDecoration: 'initial'
};

describe('testing Typography Component', () => {
  describe('should be render correctly', () => {
    it('testing default test case', () => {
      render(<Typography.Paragraph {...MOCK_PROPS} />);

      const typography = screen.getByText('Sample Text');

      JestBuilder.test(typography)
        .toBeInTheDocument()
        .toHaveAttribute('data-modifier', 'body-1')
        .toHaveStyle({ color: GRAY700 })
        .toHaveStyle({ margin: '12px 8px' })
        .toHaveStyle({ overflow: 'initial' })
        .toHaveStyle({ textOverflow: 'initial' })
        .toHaveStyle({ whiteSpace: 'initial' })
        .toHaveStyle({ textDecoration: 'initial' })
        .toHaveStyle({ textAlign: 'left' });
    });

    it('testing with ellipsis props is true', () => {
      render(<Typography.Paragraph {...MOCK_PROPS} ellipsis />);

      const typography = screen.getByText('Sample Text');

      JestBuilder.test(typography)
        .toBeInTheDocument()
        .toHaveStyle({ overflow: 'hidden' })
        .toHaveStyle({ textOverflow: 'ellipsis' })
        .toHaveStyle({ whiteSpace: 'nowrap' });
    });

    it.each`
      testCase                                         | textAlign    | expectedTextAlign
      ${'Testing with textAlign props is left'}        | ${'left'}    | ${'left'}
      ${'Testing with textAlign props is right'}       | ${'right'}   | ${'right'}
      ${'Testing with textAlign props is center'}      | ${'center'}  | ${'center'}
      ${'Testing with textAlign props is not defined'} | ${undefined} | ${'left'}
    `('$testCase', ({ expectedTextAlign, textAlign }) => {
      render(<Typography.Paragraph {...MOCK_PROPS} textAlign={textAlign} />);

      const typography = screen.getByText('Sample Text');

      JestBuilder.test(typography)
        .toBeInTheDocument()
        .toHaveStyle({ textAlign: expectedTextAlign });
    });

    describe('Testing render typography with specified modifier', () => {
      it.each`
        testCase                                        | modifier       | expectedModifier
        ${'Testing with modifier props is undefined'}   | ${undefined}   | ${'body-1'}
        ${'Testing with modifier props is "body-1"'}    | ${'body-1'}    | ${'body-1'}
        ${'Testing with modifier props is "body-2"'}    | ${'body-2'}    | ${'body-2'}
        ${'Testing with modifier props is "body-3"'}    | ${'body-3'}    | ${'body-3'}
        ${'Testing with modifier props is "caption"'}   | ${'caption'}   | ${'caption'}
        ${'Testing with modifier props is "display-1"'} | ${'display-1'} | ${'display-1'}
        ${'Testing with modifier props is "display-2"'} | ${'display-2'} | ${'display-2'}
        ${'Testing with modifier props is "display-3"'} | ${'display-3'} | ${'display-3'}
        ${'Testing with modifier props is "heading-1"'} | ${'heading-1'} | ${'heading-1'}
        ${'Testing with modifier props is "heading-2"'} | ${'heading-2'} | ${'heading-2'}
        ${'Testing with modifier props is "heading-3"'} | ${'heading-3'} | ${'heading-3'}
        ${'Testing with modifier props is "heading-4"'} | ${'heading-4'} | ${'heading-4'}
        ${'Testing with modifier props is "heading-5"'} | ${'heading-5'} | ${'heading-5'}
        ${'Testing with modifier props is "heading-6"'} | ${'heading-6'} | ${'heading-6'}
        ${'Testing with modifier props is "heading-7"'} | ${'heading-7'} | ${'heading-7'}
        ${'Testing with modifier props is "heading-8"'} | ${'heading-8'} | ${'heading-8'}
        ${'Testing with modifier props is "ui-1"'}      | ${'ui-1'}      | ${'ui-1'}
        ${'Testing with modifier props is "ui-2"'}      | ${'ui-2'}      | ${'ui-2'}
        ${'Testing with modifier props is "ui-3"'}      | ${'ui-3'}      | ${'ui-3'}
      `('$testCase', ({ expectedModifier, modifier }) => {
        render(<Typography.Paragraph {...MOCK_PROPS} modifier={modifier} />);

        const typography = screen.getByText('Sample Text');

        JestBuilder.test(typography)
          .toBeInTheDocument()
          .toHaveAttribute('data-modifier', expectedModifier);
      });
    });

    describe('Testing render typography with specified tag element', () => {
      it.each`
        testCase                                                     | Element                 | tagName
        ${'Testing Typography.Paragraph should be working properly'} | ${Typography.Paragraph} | ${'P'}
        ${'Testing Typography.H1 should be working properly'}        | ${Typography.H1}        | ${'H1'}
        ${'Testing Typography.H2 should be working properly'}        | ${Typography.H2}        | ${'H2'}
        ${'Testing Typography.H3 should be working properly'}        | ${Typography.H3}        | ${'H3'}
        ${'Testing Typography.H4 should be working properly'}        | ${Typography.H4}        | ${'H4'}
        ${'Testing Typography.H5 should be working properly'}        | ${Typography.H5}        | ${'H5'}
        ${'Testing Typography.H6 should be working properly'}        | ${Typography.H6}        | ${'H6'}
        ${'Testing Typography.Span should be working properly'}      | ${Typography.Span}      | ${'SPAN'}
      `('$testCase', ({ Element, tagName }) => {
        render(<Element {...MOCK_PROPS} />);

        const typography = screen.getByText('Sample Text');

        expect(typography.tagName).toBe(tagName);

        JestBuilder.test(typography)
          .toBeInTheDocument()
          .toHaveAttribute('data-modifier', 'body-1')
          .toHaveStyle({ color: GRAY700 })
          .toHaveStyle({ margin: '12px 8px' })
          .toHaveStyle({ overflow: 'initial' })
          .toHaveStyle({ textOverflow: 'initial' })
          .toHaveStyle({ whiteSpace: 'initial' })
          .toHaveStyle({ textDecoration: 'initial' })
          .toHaveStyle({ textAlign: 'left' });
      });
    });
  });
});
