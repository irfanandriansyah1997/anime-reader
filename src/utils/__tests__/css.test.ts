import { cx } from '@/utils/css';

describe('Testing css utils', () => {
  describe('Tesing cx method', () => {
    it.each`
      testCase                                      | args                                                       | expectedOutput
      ${'Test with argument is array'}              | ${[['ui-accordion']]}                                      | ${'ui-accordion'}
      ${'Test with argument is boolean'}            | ${[{ 'ui-accordion': true, 'ui-accordion--bold': false }]} | ${'ui-accordion'}
      ${'Test with argument is string'}             | ${['ui-accordion']}                                        | ${'ui-accordion'}
      ${'Test with argument is multiple arguments'} | ${['ui-accordion', { 'ui-accordion--bold': false }]}       | ${'ui-accordion'}
      ${'Test with argument is null'}               | ${[null]}                                                  | ${''}
    `('$testCase', ({ args, expectedOutput }) => {
      expect(cx(...args)).toBe(expectedOutput);
    });
  });
});
