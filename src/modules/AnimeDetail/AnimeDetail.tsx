import Caption from '@/components/Caption/Caption';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Spinner from '@/components/Spinner';

import { SECONDARY500 } from '@/constant/theme';

import AnimeContent from './components/AnimeContent';
import AnimeDetailNavbar from './components/AnimeDetailNavbar';
import AnimeHeading from './components/AnimeHeading';
import AnimeSidebar from './components/AnimeSidebar';
import useFetchAnimeDetail from './usecase/useFetchAnimeDetail';
import { styAnimeDetailModules } from './style';

const AnimeDetail = () => {
  const {
    state: { loading, result }
  } = useFetchAnimeDetail();

  return (
    <section css={styAnimeDetailModules}>
      <AnimeDetailNavbar />

      {loading && (
        <section className="anime-detail__spinner">
          <Spinner size={24} spinnerColor={SECONDARY500} />
        </section>
      )}

      {loading || !result ? null : (
        <>
          <AnimeHeading
            image={result.detailInformation.image}
            title={result.detailInformation.title}
            year={result.detailInformation.year}
            type={result.detailInformation.type}
            genre={result.detailInformation.genre}
            rating={result.detailInformation.rating}
          />
          <Container>
            <Flex
              className="anime-detail__container"
              gap={24}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {result.detailInformation.background && (
                <Flex.Item fullWidth>
                  <Caption
                    title="Short Intro"
                    content={result.detailInformation.background}
                  />
                </Flex.Item>
              )}

              <Flex.Item className="anime-detail__content">
                <AnimeContent
                  synopsis={result.detailInformation.synopsis}
                  duration={result.detailInformation.duration}
                  episode={result.detailInformation.episodes}
                  producer={result.detailInformation.producers.formattedData}
                  studio={result.detailInformation.studios.formattedData}
                  character={result.character}
                  episodes={result.episodes}
                />
              </Flex.Item>

              <Flex.Item className="anime-detail__sidebar">
                <AnimeSidebar
                  streaming={result.detailInformation.streaming}
                  animeRelation={result.detailInformation.animeRelations}
                />
              </Flex.Item>
            </Flex>
          </Container>
        </>
      )}
    </section>
  );
};

export default AnimeDetail;
