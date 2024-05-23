import { useCallback } from 'react';
import type { ReactPaginateProps } from 'react-paginate';
import ReactPaginate from 'react-paginate';

import { safeParseToNumber } from '@/utils/parse';
import type { PaginationType } from '@/types/pagination';
import type { GetField } from '@/types/utils';

import { styPagination } from './style';

interface PaginationProps extends Partial<PaginationType> {
  className?: string;
  disable?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const {
    className,
    disable = false,
    onPageChange,
    page = 0,
    totalPage
  } = props;

  const handleOnPageChange: GetField<ReactPaginateProps, 'onPageChange'> =
    useCallback(
      (args) => {
        const { selected } = args;

        if (selected >= 0 && !disable) onPageChange(selected + 1);
      },
      [disable, onPageChange]
    );

  if (totalPage && totalPage > 1) {
    return (
      <section
        aria-label="pagination"
        css={styPagination}
        className={className}
        data-disable={String(disable)}
      >
        <ReactPaginate
          pageCount={safeParseToNumber(totalPage)}
          forcePage={page - 1}
          onPageChange={handleOnPageChange}
        />
      </section>
    );
  }
};

export default Pagination;
