import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@/components/Flex';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
import Typography from '@/components/Typography';

import { GRAY400, GRAY900, SECONDARY500 } from '@/constant/theme';

import AnimeListCard from './components/AnimeListCard';
import AnimeListNavbar from './components/AnimeListNavbar';
import { useFetchAnimeList } from './usecase/useFetchAnimeList';
import { styAnimeListModules } from './style';

const AnimeListModules = () => {
  const navigate = useNavigate();
  const {
    action: { fetchAnimelist, setKeyword },
    state: { animeList, keyword, loading, pagination }
  } = useFetchAnimeList();

  const handleOnClickAnimeCard = useCallback(
    (animeId: string) => {
      navigate(`/anime/${animeId}`);
    },
    [navigate]
  );

  const handleOnPageChange = useCallback(
    (page: number) => {
      fetchAnimelist(page);

      window.scrollTo({ behavior: 'smooth', top: 0 });
    },
    [fetchAnimelist]
  );

  return (
    <section css={styAnimeListModules}>
      <AnimeListNavbar onChange={setKeyword} value={keyword} />

      <section className="anime-list__container">
        {loading && (
          <section className="anime-list__spinner">
            <Spinner size={24} spinnerColor={SECONDARY500} />
          </section>
        )}

        <>
          <Typography.Paragraph
            role="presentation"
            aria-label="search result label"
            margin="24px 0 8px"
            modifier="heading-4"
            color={GRAY900}
          >
            {keyword ? `Result for "${keyword}"` : 'All Anime'}
          </Typography.Paragraph>

          <Typography.Paragraph modifier="body-2" color={GRAY400}>
            Search result&nbsp;
            {loading ? '...' : `${pagination.totalData.toLocaleString()} Data`}
          </Typography.Paragraph>
        </>

        <Flex
          className="anime-list__content"
          data-loading={loading}
          flexWrap="wrap"
          gap={24}
        >
          {animeList.map((item, index) => (
            <Flex.Item key={`${item.title}-${index}-${item.id}`}>
              <AnimeListCard {...item} onClickCard={handleOnClickAnimeCard} />
            </Flex.Item>
          ))}
        </Flex>

        {pagination.totalData > 0 && (
          <Pagination
            className="anime-list__pagination"
            {...pagination}
            onPageChange={handleOnPageChange}
            disable={loading}
          />
        )}
      </section>
    </section>
  );
};

export default AnimeListModules;
