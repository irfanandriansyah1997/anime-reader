import type { ComponentProps } from 'react';

import { act, render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Pagination from '@/components/Pagination';

import { JestBuilder } from '@/utils/test';

type Props = ComponentProps<typeof Pagination>;

const onPageChangeSpy = jest.fn();
const MOCK_PROPS: Props = {
  onPageChange: onPageChangeSpy,
  page: 1,
  totalPage: 5
};

describe('Testing Pagination Component', () => {
  it('Should be render correctly', () => {
    render(<Pagination {...MOCK_PROPS} />);

    const pagination = screen.getByRole('region', { name: 'pagination' });
    const listItem = within(pagination).getAllByRole('listitem');
    expect(listItem).toHaveLength(6);

    const [firstPage, secondPage, , , , nextButton] = listItem;

    JestBuilder.test(firstPage).toBeInTheDocument().toHaveTextContent('1');
    JestBuilder.test(secondPage).toBeInTheDocument().toHaveTextContent('2');
    JestBuilder.test(nextButton).toBeInTheDocument().toHaveTextContent('Next');
  });

  it('Simulate click other page should be onPageChange props invoked', async () => {
    const { rerender } = render(<Pagination {...MOCK_PROPS} />);

    const pagination = screen.getByRole('region', { name: 'pagination' });
    const listItem = within(pagination).getAllByRole('listitem');
    expect(listItem).toHaveLength(6);

    const [, secondPage] = listItem;
    const link = secondPage.getElementsByTagName('a')[0];

    /**
     * Simulate click button page 2
     */
    expect(onPageChangeSpy).not.toHaveBeenCalled();
    await act(() => userEvent.click(link));

    JestBuilder.test(onPageChangeSpy).toBeCalledTimes(1).nthCalledWith(1, 2);
    jest.clearAllMocks();

    /**
     * Re-render with set disabled props is true
     */
    rerender(<Pagination {...MOCK_PROPS} disable />);

    /**
     * Simulate click button page 2
     */
    expect(onPageChangeSpy).not.toHaveBeenCalled();
    await act(() => userEvent.click(link));

    expect(onPageChangeSpy).not.toHaveBeenCalled();
  });
});
