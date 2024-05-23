import { css } from '@emotion/react';

import { GRAY200 } from '@/constant/theme';

export const styDivider = css`
  width: 100%;
  height: fit-content;
  width: 100%;
  border-bottom: 1px solid ${GRAY200};

  &[data-size='large'] {
    border-bottom-width: 8px;
  }
`;
