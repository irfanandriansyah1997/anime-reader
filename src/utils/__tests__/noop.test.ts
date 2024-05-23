import { noop } from '@/utils/noop';

describe('Testing noop utils', () => {
  it('Testing noop method', () => {
    expect(noop()).toBeUndefined();
  });
});
