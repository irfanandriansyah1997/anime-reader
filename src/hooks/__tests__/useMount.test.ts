import { renderHook } from '@testing-library/react';

import useMount from '@/hooks/useMount';

describe('Testing useMount', () => {
  it('Should be working properly', () => {
    const fnSpy = jest.fn();

    const { rerender } = renderHook(useMount, { initialProps: fnSpy });
    expect(fnSpy).toHaveBeenCalledTimes(1);

    /**
     * Reset mocks
     */
    jest.clearAllMocks();

    rerender(fnSpy);
    expect(fnSpy).not.toHaveBeenCalled();
  });
});
