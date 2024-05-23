import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import { constructURL } from '@/utils/url';
import { GRAY700, SECONDARY700, WHITE } from '@/constant/theme';
import type { AnimeEpisodesType } from '@/model/anime';

import { styAnimeEpisodesCard } from './style';

const AnimeEpisodesCard = (props: AnimeEpisodesType) => {
  const { id, image, title, url } = props;

  const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(() => {
    window.open(constructURL(url), '_blank');
  }, [url]);

  return (
    <section
      // INFO: for testing purpose
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      aria-label="episode card"
      onClick={handleOnClick}
      onKeyDown={noop}
      tabIndex={0}
      css={styAnimeEpisodesCard}
    >
      <section className="anime-episode-card__image">
        <Images
          src={image}
          size={['100%', 200]}
          objectFit="cover"
          alt="episodes preview"
        />

        <div className="anime-episode-card__placeholder">
          <Icon icon="playcircle-fill" size={48} color={WHITE} />
        </div>
      </section>

      <Flex
        className="anime-episode-card__content"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Flex.Item>
          <Typography.Paragraph ellipsis color={SECONDARY700} modifier="body-1">
            <strong>#{id}</strong>
          </Typography.Paragraph>
        </Flex.Item>

        <Flex.Item>
          <Typography.Paragraph ellipsis color={GRAY700} modifier="body-2">
            <strong>{title}</strong>
          </Typography.Paragraph>
        </Flex.Item>
      </Flex>
    </section>
  );
};

export default AnimeEpisodesCard;
