import { css } from '@emotion/react';

export const styImages = css`
  position: relative;
  display: block;
  overflow: hidden;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &[data-layout='circle'] {
    border-radius: 50%;
  }
`;
