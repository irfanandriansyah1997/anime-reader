import { useMemo } from 'react';

import AnimeCharacterCard from '@/modules/AnimeDetail/components/AnimeCharacterCard';
import AnimeEpisodesCard from '@/modules/AnimeDetail/components/AnimeEpisodeCard';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { GRAY400, GRAY500, SECONDARY600 } from '@/constant/theme';
import type { AnimeCharacterType, AnimeEpisodesType } from '@/model/anime';
import type { FithubIconType } from '@/types/icon';

import AnimeContentSection from './AnimeContentSection';
import { styAnimeContent } from './style';

interface AnimeContentProps {
  character: AnimeCharacterType[];
  duration: string;
  episode: number;
  episodes: AnimeEpisodesType[];
  producer: string;
  studio: string;
  synopsis: string;
}

interface AnimeContentInfoType {
  icon: FithubIconType;
  label: string;
  value: string;
}

const AnimeContent = (props: AnimeContentProps) => {
  const { character, duration, episode, episodes, producer, studio, synopsis } =
    props;

  const contentInfo = useMemo<AnimeContentInfoType[]>(() => {
    const result: AnimeContentInfoType[] = [];

    if (episode) {
      result.push({
        icon: 'bookmark-line',
        label: 'Episode',
        value: `${episode.toLocaleString()} ${episode > 1 ? 'Episodes' : 'Episode'}`
      });
    }

    if (duration) {
      result.push({
        icon: 'time-fill',
        label: 'Duration',
        value: duration
      });
    }

    return result;
  }, [duration, episode]);

  return (
    <section css={styAnimeContent}>
      {/* Synopsis */}
      <AnimeContentSection margin="0 0 8px" icon="note-line" title="Synopsis">
        <Typography.Paragraph
          color={GRAY400}
          modifier="body-1"
          dangerouslySetInnerHTML={{ __html: synopsis || '-' }}
        />
      </AnimeContentSection>

      {/* Info List */}
      <Flex gap={36} className="anime-content__list">
        {contentInfo.map((item) => {
          return (
            <Flex.Item key={item.label} className="anime-content__list-item">
              <section>
                <Icon icon={item.icon} color={SECONDARY600} />
                <Typography.Paragraph modifier="heading-6" color={GRAY500}>
                  <b>{item.label}</b>
                </Typography.Paragraph>
              </section>

              <Typography.Paragraph color={GRAY400} modifier="body-2">
                {item.value}
              </Typography.Paragraph>
            </Flex.Item>
          );
        })}
      </Flex>

      {/* Character */}
      {character.length > 0 && (
        <AnimeContentSection
          margin="36px 0 24px"
          icon="group-fill"
          title="Character"
        >
          <Flex className="anime-content__character-list" gap={16}>
            {character.map((item, index) => {
              return (
                <Flex.Item
                  key={`${item.characterName}-${index}`}
                  className="anime-content__character-list-item"
                >
                  <AnimeCharacterCard {...item} />
                </Flex.Item>
              );
            })}
          </Flex>
        </AnimeContentSection>
      )}

      {/* Episodes */}
      {episodes.length > 0 && (
        <AnimeContentSection
          margin="36px 0 24px"
          icon="paper-line"
          title="Episodes"
          className="anime-content__episodes"
        >
          <Flex className="anime-content__episodes-list" gap={16}>
            {episodes.map((item, index) => {
              return (
                <Flex.Item
                  key={`${item.title}-${index}`}
                  className="anime-content__episodes-list-item"
                >
                  <AnimeEpisodesCard {...item} />
                </Flex.Item>
              );
            })}
          </Flex>
        </AnimeContentSection>
      )}

      {/* Studio */}
      <AnimeContentSection
        margin="36px 0 8px"
        icon="homeclub-line"
        title="Studio"
      >
        <Typography.Paragraph
          color={GRAY400}
          modifier="body-1"
          dangerouslySetInnerHTML={{ __html: studio }}
        />
      </AnimeContentSection>

      {/* Producer */}
      <AnimeContentSection margin="36px 0 8px" icon="profile" title="Producer">
        <Typography.Paragraph
          color={GRAY400}
          modifier="body-1"
          dangerouslySetInnerHTML={{ __html: producer }}
        />
      </AnimeContentSection>
    </section>
  );
};

export default AnimeContent;
