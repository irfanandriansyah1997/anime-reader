import { createBrowserRouter, Outlet } from 'react-router-dom';

import AnimeDetailModulesLazy from '@/modules/AnimeDetail';
import AnimeList from '@/modules/AnimeList';

import Typography from '@/components/Typography';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <AnimeList />,
        path: '/'
      },
      {
        element: <AnimeDetailModulesLazy />,
        path: '/anime/:animeId'
      },
      {
        element: (
          <>
            <Typography.H1
              modifier="heading-1"
              css={{
                left: '50%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {' '}
              404 Not Found
            </Typography.H1>
          </>
        ),
        path: '*'
      }
    ],
    element: <Outlet />
  }
]);

export default router;
