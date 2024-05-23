import { useMemo } from 'react';

import Card from '@/components/Card';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { shortenNumber } from '@/utils/parse';
import { GRAY400, GRAY500, SECONDARY600 } from '@/constant/theme';
import type { AnimeCharacterType } from '@/model/anime';
import type { FithubIconType } from '@/types/icon';

import { styAnimeCharacterCard } from './style';

interface AnimeCharacterInfoType {
  icon: FithubIconType;
  key: string;
  value: string;
}

const AnimeCharacterCard = (props: AnimeCharacterType) => {
  const { characterName, favorites, image, role } = props;

  const contentInfo = useMemo<AnimeCharacterInfoType[]>(() => {
    const result: AnimeCharacterInfoType[] = [];

    if (favorites) {
      result.push({
        icon: 'love-fill',
        key: 'favorites',
        value: shortenNumber(favorites)
      });
    }

    if (role) {
      result.push({
        icon: 'shield-line',
        key: 'role',
        value: role
      });
    }

    return result;
  }, [favorites, role]);

  return (
    <Card
      aria-label="anime character card"
      withPadding={false}
      css={styAnimeCharacterCard}
    >
      <div className="anime-character-card__image">
        <Images
          src={image}
          size={['100%', 200]}
          objectFit="cover"
          alt={characterName}
        />
      </div>

      <div className="anime-character-card__content">
        <Typography.Paragraph
          className="anime-character-card__title"
          margin="8px 0 16px"
          ellipsis
          textAlign="left"
          modifier="body-2"
          color={GRAY500}
        >
          <strong>{characterName}</strong>
        </Typography.Paragraph>

        {/* Info List */}
        <Flex gap={8}>
          {contentInfo.map((item) => {
            return (
              <Flex.Item
                key={item.key}
                aria-label={item.key}
                className="anime-character-card__list-item"
              >
                <Icon icon={item.icon} color={SECONDARY600} />
                <Typography.Paragraph modifier="body-3" color={GRAY400}>
                  {item.value}
                </Typography.Paragraph>
              </Flex.Item>
            );
          })}
        </Flex>
      </div>
    </Card>
  );
};

export default AnimeCharacterCard;
