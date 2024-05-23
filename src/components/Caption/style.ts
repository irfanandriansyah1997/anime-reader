import { css } from '@emotion/react';

import { GRAY200, GRAY300, WRITING_FONT_FAMILY } from '@/constant/theme';

export const styCaption = css`
  position: relative;
  padding: 48px 24px 24px 48px;
  background: ${GRAY200};
  border-radius: 8px;

  &::before {
    content: '“';
    font-family: ${WRITING_FONT_FAMILY};
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 90px;
    color: ${GRAY300};
  }

  > p[data-modifier='body-1'] {
    line-height: 1.5;
  }
`;
