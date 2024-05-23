import { css } from '@emotion/react';

import { GRAY400, SECONDARY700 } from '@/constant/theme';

export const styAnimeSidebar = css`
  ul {
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 4px 0;
    }

    a {
      text-decoration: none;
      width: 100%;

      p {
        color: ${GRAY400};
      }

      &:hover {
        p {
          color: ${SECONDARY700};
        }
      }
    }
  }
`;
