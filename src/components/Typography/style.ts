import { css } from '@emotion/react';

import {
  styBody1,
  styBody2,
  styBody3,
  styCaption,
  styDisplay1,
  styDisplay2,
  styDisplay3,
  styHeading1,
  styHeading2,
  styHeading3,
  styHeading4,
  styHeading5,
  styHeading6,
  styHeading7,
  styHeading8,
  styUI1,
  styUI2,
  styUI3
} from '@/styles/typography.style';

export const styTypography = css`
  &[data-modifier='body-1'] {
    ${styBody1}
  }

  &[data-modifier='body-2'] {
    ${styBody2}
  }

  &[data-modifier='body-3'] {
    ${styBody3}
  }

  &[data-modifier='display-1'] {
    ${styDisplay1}
  }

  &[data-modifier='display-2'] {
    ${styDisplay2}
  }

  &[data-modifier='display-3'] {
    ${styDisplay3}
  }

  &[data-modifier='heading-1'] {
    ${styHeading1}
  }

  &[data-modifier='heading-2'] {
    ${styHeading2}
  }

  &[data-modifier='heading-3'] {
    ${styHeading3}
  }

  &[data-modifier='heading-4'] {
    ${styHeading4}
  }

  &[data-modifier='heading-5'] {
    ${styHeading5}
  }

  &[data-modifier='heading-6'] {
    ${styHeading6}
  }

  &[data-modifier='heading-7'] {
    ${styHeading7}
  }

  &[data-modifier='heading-8'] {
    ${styHeading8}
  }

  &[data-modifier='ui-1'] {
    ${styUI1}
  }

  &[data-modifier='ui-2'] {
    ${styUI2}
  }

  &[data-modifier='ui-3'] {
    ${styUI3}
  }

  &[data-modifier='caption'] {
    ${styCaption}
  }
`;
