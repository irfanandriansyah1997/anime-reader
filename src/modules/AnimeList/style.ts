import { css } from '@emotion/react';

import { DEFAULT_DURATION, DEFAULT_TRANSITION, WHITE } from '@/constant/theme';

export const styAnimeListModules = css`
  margin-bottom: 100px;

  .anime-list {
    &__container {
      width: 1024px;
      margin: auto;
    }

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

    &__content {
      position: relative;
      margin: 24px 0;
      transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};

      &::before {
        content: '';
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        display: none;
      }

      &[data-loading='true'] {
        opacity: 0.5;

        &::before {
          display: block;
        }
      }

      > section {
        flex: 0 0 calc(25% - 18px);
      }
    }

    &__pagination {
      width: fit-content;
      margin: 0 auto 24px;
    }
  }
`;
