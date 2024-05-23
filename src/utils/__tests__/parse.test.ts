import {
  safeParseBoolean,
  safeParseJSON,
  safeParseToNumber,
  safeParseToString,
  safeStringifyJSON,
  shortenNumber
} from '@/utils/parse';

describe('Testing Parse Utils', () => {
  describe('Testing safeParseToString method', () => {
    it.each`
      testCase                                               | input                              | output
      ${'Simulate testing with argument is string 1'}        | ${'Hello World'}                   | ${'Hello World'}
      ${'Simulate testing with argument is string 2'}        | ${'Lorem Ipsum'}                   | ${'Lorem Ipsum'}
      ${'Simulate testing with argument is string 3'}        | ${'1234'}                          | ${'1234'}
      ${'Simulate testing with argument is number 1'}        | ${1}                               | ${'1'}
      ${'Simulate testing with argument is number 2'}        | ${871}                             | ${'871'}
      ${'Simulate testing with argument is boolean (true)'}  | ${true}                            | ${'true'}
      ${'Simulate testing with argument is boolean (false)'} | ${false}                           | ${'false'}
      ${'Simulate testing with argument is undefined'}       | ${undefined}                       | ${''}
      ${'Simulate testing with argument is null'}            | ${null}                            | ${''}
      ${'Simulate testing with argument is object'}          | ${{ age: 16, name: 'john doe' }}   | ${''}
      ${'Simulate testing with argument is array'}           | ${[{ age: 16, name: 'john doe' }]} | ${''}
      ${'Simulate testing with argument is error'}           | ${new Error('')}                   | ${''}
    `('$testCase', ({ input, output }) => {
      expect(safeParseToString(input)).toBe(output);
    });
  });

  describe('Testing safeParseToNumber method', () => {
    it.each`
      testCase                                               | input                              | output
      ${'Simulate testing with argument is string 1'}        | ${'Hello World'}                   | ${0}
      ${'Simulate testing with argument is string 2'}        | ${'Lorem Ipsum'}                   | ${0}
      ${'Simulate testing with argument is string 3'}        | ${'1234'}                          | ${1234}
      ${'Simulate testing with argument is number 1'}        | ${1}                               | ${1}
      ${'Simulate testing with argument is number 2'}        | ${871}                             | ${871}
      ${'Simulate testing with argument is boolean (true)'}  | ${true}                            | ${0}
      ${'Simulate testing with argument is boolean (false)'} | ${false}                           | ${0}
      ${'Simulate testing with argument is undefined'}       | ${undefined}                       | ${0}
      ${'Simulate testing with argument is null'}            | ${null}                            | ${0}
      ${'Simulate testing with argument is object'}          | ${{ age: 16, name: 'john doe' }}   | ${0}
      ${'Simulate testing with argument is array'}           | ${[{ age: 16, name: 'john doe' }]} | ${0}
      ${'Simulate testing with argument is error'}           | ${new Error('')}                   | ${0}
    `('$testCase', ({ input, output }) => {
      expect(safeParseToNumber(input)).toBe(output);
    });
  });

  describe('Testing safeParseJSON method', () => {
    it.each`
      testCase                                                  | input                                | output
      ${'Simulate testing with argument is string json object'} | ${'{"name":"lorem ipsum","age":10}'} | ${{ age: 10, name: 'lorem ipsum' }}
      ${'Simulate testing with argument is string json array'}  | ${'[1,"2",3,"4"]'}                   | ${[1, '2', 3, '4']}
      ${'Simulate testing with argument is random string'}      | ${'Hello World'}                     | ${null}
      ${'Simulate testing with argument is number'}             | ${1}                                 | ${null}
      ${'Simulate testing with argument is number'}             | ${1}                                 | ${null}
      ${'Simulate testing with argument is boolean'}            | ${false}                             | ${null}
      ${'Simulate testing with argument is undefined'}          | ${undefined}                         | ${null}
      ${'Simulate testing with argument is null'}               | ${null}                              | ${null}
    `('$testCase', ({ input, output }) => {
      expect(safeParseJSON(input, null)).toStrictEqual(output);
    });
  });

  describe('Testing safeStringifyJSON method', () => {
    it.each`
      testCase                                                  | input                               | output
      ${'Simulate testing with argument is string json object'} | ${{ age: 10, name: 'lorem ipsum' }} | ${'{"age":10,"name":"lorem ipsum"}'}
      ${'Simulate testing with argument is string json array'}  | ${[1, '2', 3, '4']}                 | ${'[1,"2",3,"4"]'}
      ${'Simulate testing with argument is random string'}      | ${'Hello World'}                    | ${'"Hello World"'}
      ${'Simulate testing with argument is number'}             | ${1}                                | ${'1'}
      ${'Simulate testing with argument is boolean'}            | ${false}                            | ${'false'}
      ${'Simulate testing with argument is undefined'}          | ${undefined}                        | ${''}
      ${'Simulate testing with argument is null'}               | ${null}                             | ${''}
    `('$testCase', ({ input, output }) => {
      expect(safeStringifyJSON(input)).toBe(output);
    });
  });

  describe('Testing safeParseBoolean method', () => {
    it.each`
      testCase                                               | input                              | output
      ${'Simulate testing with argument is boolean (true)'}  | ${true}                            | ${true}
      ${'Simulate testing with argument is boolean (false)'} | ${false}                           | ${false}
      ${'Simulate testing with argument is string (true)'}   | ${'true'}                          | ${true}
      ${'Simulate testing with argument is string (false)'}  | ${'false'}                         | ${false}
      ${'Simulate testing with argument is number 1'}        | ${1}                               | ${false}
      ${'Simulate testing with argument is undefined'}       | ${undefined}                       | ${false}
      ${'Simulate testing with argument is null'}            | ${null}                            | ${false}
      ${'Simulate testing with argument is object'}          | ${{ age: 16, name: 'john doe' }}   | ${false}
      ${'Simulate testing with argument is array'}           | ${[{ age: 16, name: 'john doe' }]} | ${false}
      ${'Simulate testing with argument is error'}           | ${new Error('')}                   | ${false}
    `('$testCase', ({ input, output }) => {
      expect(safeParseBoolean(input)).toBe(output);
    });
  });

  describe('Testing shortenNumber method', () => {
    test('should return "950" for input 950', () => {
      expect(shortenNumber(950)).toBe('950');
    });

    test('should return "1.5K" for input 1500', () => {
      expect(shortenNumber(1500)).toBe('1.5K');
    });

    test('should return "2.0M" for input 2000000', () => {
      expect(shortenNumber(2000000)).toBe('2.0M');
    });

    test('should return "1.2B" for input 1234567890', () => {
      expect(shortenNumber(1234567890)).toBe('1.2B');
    });

    test('should return "9.9T" for input 9876543210000', () => {
      expect(shortenNumber(9876543210000)).toBe('9.9T');
    });

    test('should return "-1.5K" for input -1500', () => {
      expect(shortenNumber(-1500)).toBe('-1.5K');
    });

    test('should return "-2.0M" for input -2000000', () => {
      expect(shortenNumber(-2000000)).toBe('-2.0M');
    });
  });
});
