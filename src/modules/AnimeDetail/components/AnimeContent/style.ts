import { css } from '@emotion/react';

import {
  DEFAULT_DURATION,
  DEFAULT_TRANSITION,
  GRAY100,
  GRAY200,
  GRAY500,
  GRAY700
} from '@/constant/theme';

export const styAnimeContent = css`
  padding-bottom: 200px;
  .anime-content {
    &__heading {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__list {
      padding: 16px;
      background: ${GRAY200};
      border-radius: 8px;
      margin: 36px 0 0;
    }

    &__list-item {
      > section {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 8px;
      }
    }

    &__character-list {
      flex-wrap: wrap;
      width: calc(100% + 16px);
    }

    &__character-list-item {
      flex: 0 0 calc(25% - 16px);
      max-width: calc(25% - 16px);
    }

    &__episodes {
      position: relative;

      &::before {
        content: '';
        right: 0;
        bottom: 0;
        height: 100%;
        position: absolute;
        background: linear-gradient(
          270deg,
          ${GRAY100} 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 200px;
        z-index: 100;
      }
    }

    &__episodes-list {
      position: relative;
      width: 100%;
      overflow-x: scroll;
      padding-bottom: 8px;
      transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};

      &::-webkit-scrollbar {
        height: 5px;
        transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};
      }

      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
        border-radius: 5px;
        transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0);
        border-radius: 5px;
        transition: all ${DEFAULT_DURATION} ${DEFAULT_TRANSITION};
      }

      &:hover {
        &::-webkit-scrollbar-thumb {
          background: ${GRAY500};
          opacity: 1;
        }
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${GRAY700};
      }
    }
    &__episodes-list-item {
      // width: 300px;
      flex: 0 0 300px;
    }
  }
`;
