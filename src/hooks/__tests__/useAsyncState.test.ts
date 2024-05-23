import { act, renderHook } from '@testing-library/react';

import useAsyncState from '@/hooks/useAsyncState';

describe('Testing useAsyncState Custom Hooks', () => {
  it('Should be returning default value and loading is false on initial render', () => {
    const { result } = renderHook(useAsyncState, {
      initialProps: { initialValue: 1 }
    });

    expect(result.current[0].result).toBe(1);
    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();
  });

  it('Invoked setLoading method should be loading value is changed', async () => {
    const { result } = renderHook(useAsyncState);

    expect(result.current[0].result).toBeUndefined();
    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();

    /**
     * Simulate invoked setLoading method
     */
    await act(() => result.current[1].setLoading(true));

    expect(result.current[0].loading).toBeTruthy();
  });

  it('Invoked setValue, setError and reset method should be state value changed', async () => {
    const { result } = renderHook(useAsyncState, {
      initialProps: { initialLoading: true, initialValue: 1 }
    });

    expect(result.current[0].result).toBe(1);
    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeTruthy();

    /**
     * Simulate invoked setValue
     */
    await act(() => result.current[1].setValue(100));

    expect(result.current[0].result).toBe(100);
    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();

    /**
     * Simulate invoked setError
     */
    await act(() =>
      result.current[1].setError(new Error('Internal Server Error'))
    );

    expect(result.current[0].result).toBe(100);
    expect(result.current[0].error).toStrictEqual(
      expect.objectContaining({ message: 'Internal Server Error' })
    );
    expect(result.current[0].loading).toBeFalsy();

    /**
     * Simulate invoked reset
     */
    await act(() => result.current[1].reset());
    expect(result.current[0].result).toBe(1);
    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();
  });
});
