import { castingError, throwError } from '@/utils/error';
import { DEFAULT_ERROR_MESSAGE } from '@/constant/api';

describe('Testing Error Utils', () => {
  describe('Testing casting error method', () => {
    it.each`
      testCase                                                       | args                         | expectedErrorMessage
      ${'should return the same error message if args is Error'}     | ${new Error('Sample Error')} | ${'Sample Error'}
      ${'should return the same error message if args is string'}    | ${'Sample string'}           | ${'Sample string'}
      ${'should return the same error message if args is integer'}   | ${990}                       | ${'990'}
      ${'should return the same error message if args is array'}     | ${[1, 2, 3]}                 | ${'Unknown error: 1,2,3'}
      ${'should return the same error message if args is object'}    | ${{ name: 'john doe' }}      | ${'Unknown error: [object Object]'}
      ${'should return the same error message if args is null'}      | ${null}                      | ${'Unknown error: null'}
      ${'should return the same error message if args is undefined'} | ${undefined}                 | ${'Unknown error: undefined'}
    `('$testCase', ({ args, expectedErrorMessage }) => {
      expect(castingError(args).message).toBe(expectedErrorMessage);
    });
  });

  it('should log the error message and throw an Error with the default error message', () => {
    const errorMessage = 'Test error message';

    expect(() => throwError(errorMessage)).toThrow(DEFAULT_ERROR_MESSAGE);
  });
});
