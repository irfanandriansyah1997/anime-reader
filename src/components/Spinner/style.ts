import { css } from '@emotion/react';

import { keyframeRotation } from '@/styles/animation.style';

export const stySpinner = css`
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${keyframeRotation} 1s linear infinite;
`;
