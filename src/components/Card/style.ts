import { css } from '@emotion/react';

import { DEFAULT_DURATION, DEFAULT_TRANSITION, WHITE } from '@/constant/theme';

export const styCard = css`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }

  &[data-rounded='true'] {
    border-radius: 8px;
  }

  &[data-default-padding='true'] {
    padding: 12px;
  }

  &[data-default-background='true'] {
    background-color: ${WHITE};
  }
`;
