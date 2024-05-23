import { css } from '@emotion/react';

export const styAnimeListCard = css`
  cursor: pointer;

  .anime-card {
    &__image {
      position: relative;
      display: block;
      height: 250px;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        z-index: 10;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    &__content {
      padding: 16px;
    }

    &__title {
      max-width: 200px;
    }

    &__desc {
      height: 34px;
    }
  }
`;
