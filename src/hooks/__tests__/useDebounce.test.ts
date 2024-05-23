import { renderHook } from '@testing-library/react';

import useDebounce from '@/hooks/useDebounce';

import { JestBuilder } from '@/utils/test';

type UseDebounceResponseType = ReturnType<typeof useDebounce<number>>;
type UseDebounceArgs = Parameters<typeof useDebounce<number>>;

const fnSpy = jest.fn();

describe('Testing useDebounce Custom Hooks', () => {
  it('Simulate change value should be fn arg invoked after delay 500ms', async () => {
    jest.useFakeTimers();

    const { rerender, result } = renderHook<
      UseDebounceResponseType,
      UseDebounceArgs
    >((args) => useDebounce<number>(...args), {
      initialProps: [1, fnSpy, 500]
    });

    expect(result.current[0]).toBe(1);

    /**
     * Simulate change value from parent component
     */
    expect(fnSpy).not.toHaveBeenCalled();
    rerender([500, fnSpy, 500]);
    rerender([501, fnSpy, 500]);
    rerender([502, fnSpy, 500]);
    rerender([503, fnSpy, 500]);
    jest.runAllTimers();

    JestBuilder.test(fnSpy).toBeCalledTimes(1).nthCalledWith(1, 503);
    expect(result.current[0]).toBe(503);
  });
});
