import { castingError } from './error';

interface AbortProcessArgs<T> {
  delay?: number;
  fn: Promise<T>;
}

interface AbortProcessResponseType<T> {
  error?: Error;
  result?: T;
}

/**
 * Aborts a process after a specified delay.
 *
 * @template T - The type of the result expected from the process.
 * @param args - The arguments for aborting the process.
 * @returns  A promise resolving to the response of the aborted process.
 */
export async function abortProcess<T>(
  args: AbortProcessArgs<T>
): Promise<AbortProcessResponseType<T>> {
  try {
    const { delay = 1000, fn } = args;
    const abortInstance = new AbortController();
    const timeoutInstance = setTimeout(() => {
      abortInstance.abort();
    }, delay);

    const response = await new Promise<T>((resolve, reject) => {
      fn.then((response) => resolve(response)).catch((e) => reject(e));

      abortInstance.signal.addEventListener('abort', () => {
        clearTimeout(timeoutInstance);
        reject(new Error('Request Time Out'));
      });
    });
    clearTimeout(timeoutInstance);

    return { result: response };
  } catch (e) {
    return {
      error: castingError(e)
    };
  }
}

/**
 * Creates an abort signal with the given timeout in milliseconds
 * (polyfill if abortsignal is undefined on browser).
 *
 * @param {number} milisecond - The timeout duration in milliseconds.
 * @returns {AbortSignal} - An abort signal instance.
 */
export const createAbortSignal = (milisecond: number): AbortSignal => {
  try {
    return AbortSignal.timeout(milisecond);
  } catch {
    const controller = new AbortController();
    setTimeout(
      () => controller.abort(new DOMException('TimeoutError')),
      milisecond
    );
    return controller.signal;
  }
};
