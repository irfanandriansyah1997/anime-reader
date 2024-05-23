import { css } from '@emotion/react';

import {
  DEFAULT_DURATION,
  DEFAULT_TRANSITION,
  GRAY100
} from '@/constant/theme';

export const styAnimeEpisodesCard = css`
  cursor: pointer;

  &:hover {
    .anime-episode-card {
      &__image {
        &::before {
          opacity: 0;
        }
      }

      &__placeholder {
        opacity: 1;
      }
    }
  }

  .anime-episode-card {
    &__image {
      position: relative;
      border-radius: 12px;
      overflow: hidden;

      &::before {
        content: '';
        right: 0;
        bottom: 0;
        height: 100%;
        position: absolute;
        background: linear-gradient(
          0deg,
          ${GRAY100} 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 100%;
        z-index: 100;
        transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};
      }
    }

    &__placeholder {
      position: absolute;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};

      span {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
      }
    }

    &__content {
      margin: 16px 0 0;
    }
  }
`;
