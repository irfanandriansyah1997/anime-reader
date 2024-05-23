import { constructURL } from '@/utils/url';

describe('Testing URL Utils', () => {
  describe('Testing method constructURL', () => {
    it.each`
      testCase                                           | inputBaseURL                 | inputParameter                                                                                        | output
      ${'Testing with parameter is not defined'}         | ${'https://www.google.com/'} | ${undefined}                                                                                          | ${'https://www.google.com/'}
      ${'Testing with parameter is array'}               | ${'https://www.google.com/'} | ${{ name: [1, 2, 3] }}                                                                                | ${'https://www.google.com/?name[0]=1&name[1]=2&name[2]=3'}
      ${'Testing with parameter is array of object'}     | ${'https://www.google.com/'} | ${{ address: [{ city: 'bandung' }, { city: 'semarang' }] }}                                           | ${'https://www.google.com/?address[0][city]=bandung&address[1][city]=semarang'}
      ${'Testing with parameter is array of object (2)'} | ${'https://www.google.com/'} | ${{ address: [{ city: 'bandung' }, { city: 'semarang' }], error: new Error(), undefined: undefined }} | ${'https://www.google.com/?address[0][city]=bandung&address[1][city]=semarang'}
      ${'Testing with parameter is array of object (3)'} | ${'https://www.google.com/'} | ${{ address: [{ city: 'bandung', person: [{ no: 1 }, { no: 2 }] }] }}                                 | ${'https://www.google.com/?address[0][city]=bandung&address[0][person][0][no]=1&address[0][person][1][no]=2'}
      ${'Testing with parameter is object'}              | ${'https://www.google.com/'} | ${{ address: { city: 'semarang' }, age: 1 }}                                                          | ${'https://www.google.com/?address[city]=semarang&age=1'}
      ${'Testing with parameter is null'}                | ${'https://www.google.com/'} | ${null}                                                                                               | ${'https://www.google.com/'}
      ${'Testing with parameter is boolean'}             | ${'https://www.google.com/'} | ${true}                                                                                               | ${'https://www.google.com/'}
    `(
      '$testCase should be returning URL object',
      ({ inputBaseURL, inputParameter, output }) => {
        expect(
          decodeURI(constructURL(inputBaseURL, inputParameter).toString())
        ).toBe(output);
      }
    );

    it.each`
      testCase                           | inputBaseURL | inputParameter | output
      ${'Testing with url is undefined'} | ${undefined} | ${undefined}   | ${''}
      ${'Testing with url is null'}      | ${null}      | ${undefined}   | ${''}
      ${'Testing with url is boolean'}   | ${true}      | ${undefined}   | ${''}
    `('$testCase should be throw error', ({ inputBaseURL, inputParameter }) => {
      expect(() => constructURL(inputBaseURL, inputParameter)).toThrow(
        `Invalid URL: ${inputBaseURL}`
      );
    });
  });
});
