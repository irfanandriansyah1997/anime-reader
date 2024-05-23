import { useCallback, useMemo, useState } from 'react';

import type { AsyncStateType } from '@/types/async';
import type { Maybe } from '@/types/utils';

/////////////////////////////////////////////////////////////////////////////
// Interface & Signature Contract
/////////////////////////////////////////////////////////////////////////////

interface UseAsyncActionType<T> {
  reset: () => void;
  setError: (error: Error) => void;
  setLoading: (loading: boolean) => void;
  setValue: (value: T) => void;
}

interface UseAsyncStateArgs<T> {
  initialLoading?: boolean;
  initialValue?: T;
}

type UseAsyncStateResponseType<T> = [AsyncStateType<T>, UseAsyncActionType<T>];

/////////////////////////////////////////////////////////////////////////////
// Overload UseAsyncState Hooks
/////////////////////////////////////////////////////////////////////////////

function useAsyncState<T>(): UseAsyncStateResponseType<T>;

function useAsyncState<T>(
  args: UseAsyncStateArgs<T>
): UseAsyncStateResponseType<T>;

/**
 * Custom React hook for managing asynchronous state.
 *
 * @template T - The type of data being handled.
 * @param args.initialLoading - Initial loading state.
 * @param args.initialValue - Initial value state.
 * @returns A tuple containing the state and action functions.
 */
function useAsyncState<T>(
  args: Maybe<UseAsyncStateArgs<T>> = {}
): UseAsyncStateResponseType<T> {
  const { initialLoading = false, initialValue = undefined } = args;
  const [state, dispatch] = useState<AsyncStateType<T>>(() => ({
    error: undefined,
    loading: initialLoading,
    result: initialValue
  }));

  const handleOnReset = useCallback(() => {
    dispatch({
      error: undefined,
      loading: false,
      result: initialValue
    });
  }, [initialValue]);

  const handleOnSetLoading = (loading: boolean) => {
    dispatch((currentState) => ({
      ...currentState,
      error: undefined,
      loading
    }));
  };

  const handleOnSetValue = useCallback((value: T) => {
    dispatch({ error: undefined, loading: false, result: value });
  }, []);

  const handleOnSetError = useCallback((error: Error) => {
    dispatch((currentState) => ({
      ...currentState,
      error: error,
      loading: false
    }));
  }, []);

  const action = useMemo(() => {
    return {
      reset: handleOnReset,
      setError: handleOnSetError,
      setLoading: handleOnSetLoading,
      setValue: handleOnSetValue
    };
  }, [handleOnReset, handleOnSetError, handleOnSetValue]);

  return [state, action];
}

export default useAsyncState;
