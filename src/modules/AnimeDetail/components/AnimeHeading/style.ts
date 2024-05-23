import { css } from '@emotion/react';

import { WHITE } from '@/constant/theme';

export const styAnimeHeading = css`
  width: 100%;
  height: auto;
  display: block;
  position: relative;

  .anime-heading {
    &__background {
      display: block;
      height: 150px;
      width: 100%;
    }

    &__content {
      height: 100px;
      width: 100%;
      background-color: ${WHITE};
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);

      > section {
        height: 100%;
      }
    }

    &__picture {
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      overflow: hidden;
      transform: translateY(calc(-50% - 20px));
    }

    &__info-item {
      padding: 4px 12px;
      border-radius: 12px;
    }

    &__rating {
      display: flex;
      align-items: center;
      gap: 4px;
      padding-right: 12px;
    }
  }
`;
