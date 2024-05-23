import loadable from '@loadable/component';

const AnimeListModulesLazy = loadable(
  () => import(/* webpackChunkName: "anime-list-modules" */ './AnimeList')
);

export default AnimeListModulesLazy;
