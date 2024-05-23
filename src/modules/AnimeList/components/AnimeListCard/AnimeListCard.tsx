import type { MouseEventHandler } from 'react';
import { useCallback, useMemo } from 'react';

import Card from '@/components/Card';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { GRAY300, GRAY500, SECONDARY500 } from '@/constant/theme';
import type { AnimeListItemType } from '@/model/anime';
import type { FithubIconType } from '@/types/icon';

import { styAnimeListCard } from './style';

interface AnimeListCardProps extends AnimeListItemType {
  onClickCard: (animeId: string) => void;
}

interface AnimeAdditionalInfoType {
  color: string;
  icon: FithubIconType;
  value: string;
}

const AnimeListCard = (props: AnimeListCardProps) => {
  const { episodes, id, image, onClickCard, rating, shortDesc, title } = props;

  const listItem = useMemo<Array<AnimeAdditionalInfoType>>(() => {
    return [
      {
        color: SECONDARY500,
        icon: 'star-fill',
        value: String(rating)
      },
      {
        color: GRAY300,
        icon: 'bookmark-line',
        value: `${episodes ? `${episodes} Episodes` : 'Coming Soon'}`
      }
    ];
  }, [episodes, rating]);

  const handleOnClickCard: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();

      onClickCard(id);
    },
    [id, onClickCard]
  );

  return (
    <Card
      aria-label="anime list card"
      css={styAnimeListCard}
      withPadding={false}
      onClick={handleOnClickCard}
    >
      <div className="anime-card__image">
        <Images
          alt="anime image"
          src={image}
          size={['100%', '300px']}
          objectFit="cover"
        />
      </div>

      <div className="anime-card__content">
        <Typography.H4
          aria-label="anime list item title"
          className="anime-card__title"
          modifier="heading-4"
          margin="0 0 8px"
          ellipsis
        >
          {title}
        </Typography.H4>

        <Typography.Paragraph
          modifier="body-2"
          className="anime-card__desc"
          color={GRAY500}
          margin="0 0 16px"
        >
          {Boolean(shortDesc) && <>{shortDesc.slice(0, 40)}...</>}
        </Typography.Paragraph>

        <Flex gap={16} className="anime-card__info-bar">
          {listItem.map((item) => (
            <Flex.Item key={item.value}>
              <Flex alignItems="center" gap={4}>
                <Flex.Item>
                  <Icon icon={item.icon} color={item.color} />
                </Flex.Item>
                <Flex.Item>
                  <Typography.H4 modifier="body-3" color={GRAY500}>
                    {item.value}
                  </Typography.H4>
                </Flex.Item>
              </Flex>
            </Flex.Item>
          ))}
        </Flex>
      </div>
    </Card>
  );
};

export default AnimeListCard;
