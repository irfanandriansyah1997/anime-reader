import { css } from '@emotion/react';

export const styFlex = css`
  display: flex;
  width: 100%;

  .flex {
    &__item {
      &[data-full-width='true'] {
        width: 100%;
        flex: 0 0 100%;
      }
    }
  }
`;
