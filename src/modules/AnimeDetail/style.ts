import { css } from '@emotion/react';

import { WHITE } from '@/constant/theme';

export const styAnimeDetailModules = css`
  .anime-detail {
    &__spinner {
      position: fixed;
      top: 150px;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
      width: fit-content;
      padding: 10px;
      border-radius: 50%;
      background-color: ${WHITE};
      z-index: 200;
      left: 50%;
      transform: translateX(-50%);
    }

    &__container {
      flex-wrap: wrap;
      padding-top: 24px;
    }

    &__content {
      flex: 0 0 calc(70% - 24px);
      min-width: calc(70% - 24px);
      max-width: calc(70% - 24px);
    }

    &__sidebar {
      flex: 0 0 calc(30% - 24px);
      min-width: calc(30% - 24px);
      max-width: calc(30% - 24px);
    }
  }
`;
