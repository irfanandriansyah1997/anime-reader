import { abortProcess, createAbortSignal } from '@/utils/process';
import { DEFAULT_ERROR_MESSAGE } from '@/constant/api';

const timeoutFn = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success');
  }, 150000);
});

const errorFn = new Promise((_, reject) =>
  reject(new Error(DEFAULT_ERROR_MESSAGE))
);

const successFn = new Promise((resolve) => resolve('success'));

describe('Testing Process Utils', () => {
  describe('Testing abortProcess method', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it('Testing with async process is success', async () => {
      expect(await abortProcess({ fn: successFn })).toStrictEqual({
        result: 'success'
      });
    });

    it('Testing with async process is throwing error', async () => {
      expect(await abortProcess({ fn: errorFn })).toStrictEqual({
        error: expect.objectContaining({
          message: "Oops! Something went wrong on our end. We're fixing it"
        })
      });
    });

    it('Testing with async process is timeout', async () => {
      const fn = abortProcess({ fn: timeoutFn });

      jest.runAllTimers();

      expect(await fn).toStrictEqual({
        error: expect.objectContaining({
          message: 'Request Time Out'
        })
      });
    });
  });

  describe('Testing createAbortSignal method', () => {
    it('Testing with abort signal is defined should be returning abort signal', () => {
      const signal = createAbortSignal(1000);
      expect(signal).toBeInstanceOf(AbortSignal);
    });

    it('Testing with abort signal is not defined should be throw error', () => {
      // @ts-expect-error irfan@fithub.id expected error for testing purpose
      AbortSignal.timeout = undefined;

      const signal = createAbortSignal(1000);
      expect(signal).toBeInstanceOf(AbortSignal);
    });
  });
});
