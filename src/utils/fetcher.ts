import { DEFAULT_ERROR_MESSAGE } from '@/constant/api';
import type { Maybe } from '@/types/utils';

import { castingError } from './error';
import { createAbortSignal } from './process';

interface FetchAPIResponseType<T> {
  error?: Error;
  response?: T;
}

export const fetchAPI = async <T>(
  url: URL,
  args: Maybe<RequestInit> = undefined
): Promise<FetchAPIResponseType<T>> => {
  const { signal, ...res } = args || {};

  try {
    const instance = await fetch(url.toString(), {
      ...res,
      signal: signal ? signal : createAbortSignal(30000)
    });
    const result = await instance.json();

    if (result !== null && typeof result !== 'undefined') {
      if (!instance.ok) throw result;

      return { response: result };
    }

    throw new Error(DEFAULT_ERROR_MESSAGE);
  } catch (e) {
    if (e instanceof Error) return { error: e };

    return { error: castingError(DEFAULT_ERROR_MESSAGE) };
  }
};
