import { css } from '@emotion/react';

import {
  DANGER500,
  DEFAULT_DURATION,
  DEFAULT_TRANSITION,
  GRAY200,
  GRAY300,
  WHITE
} from '@/constant/theme';

export const styBaseTextfield = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  width: 100%;
  padding: 0 12px;
  border-radius: 8px;
  background-color: ${WHITE};
  border: 1px solid ${GRAY200};
  overflow: hidden;
  transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};

  &[data-disabled='true'] {
    border-color: ${GRAY300};
    background-color: ${GRAY200};

    > input {
      background-color: ${GRAY200};
    }
  }

  &[data-error='true'] {
    border-color: ${DANGER500};
  }

  [data-section='icon'] {
    flex: 0 0 24px;
    width: 24px;
    min-width: 24px;
  }

  [role='button'] {
    cursor: pointer;
  }

  input {
    height: 100%;
    border: 0;
    outline: 0;
    flex: 1;
    width: 100%;
  }
`;
