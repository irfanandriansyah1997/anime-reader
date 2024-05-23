import { css } from '@emotion/react';

export const styAnimeCharacterCard = css`
  .anime-character-card {
    &__image {
      position: relative;
      display: block;
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

    &__list-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
