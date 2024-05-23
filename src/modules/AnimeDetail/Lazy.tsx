import loadable from '@loadable/component';

const AnimeDetailModulesLazy = loadable(
  () => import(/* webpackChunkName: "anime-detail-modules" */ './AnimeDetail')
);

export default AnimeDetailModulesLazy;
