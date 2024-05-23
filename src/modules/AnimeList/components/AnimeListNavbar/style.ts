import { css } from '@emotion/react';

import { WHITE } from '@/constant/theme';

export const styAnimeListNavbar = css`
  width: 100%;
  height: 76px;
  padding: 8px 0;
  background-color: ${WHITE};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;

  .anime-list-navbar {
    &__textfield {
      flex: 1;
    }
  }
`;
