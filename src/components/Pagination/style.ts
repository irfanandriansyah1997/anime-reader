import { css } from '@emotion/react';

import { FONT_WEIGHT, GRAY100, SECONDARY500, WHITE } from '@/constant/theme';

export const styPagination = css`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: none;
  }

  &[data-disable='true'] {
    opacity: 0.5;

    &::before {
      display: block;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 8px;

    li {
      a {
        cursor: pointer;
        line-height: 40px;
        text-align: center;
        height: 40px;
        min-width: 40px;
        display: block;
        border-radius: 5px;
        padding: 0 8px;
        border: 1px solid ${GRAY100};
        background: ${WHITE};
        font-size: 14px;
        font-weight: ${FONT_WEIGHT.medium};
      }

      &.selected {
        a {
          background: ${SECONDARY500};
        }
      }

      &.disabled {
        display: none;
      }
    }
  }
`;
