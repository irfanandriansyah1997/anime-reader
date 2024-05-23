import { useMemo } from 'react';
import { usePalette } from 'react-palette';

import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { shortenNumber } from '@/utils/parse';
import {
  GRAY400,
  GRAY700,
  GRAY900,
  SECONDARY600,
  WHITE
} from '@/constant/theme';
import type { AnimeRatingType } from '@/model/anime';

import { styAnimeHeading } from './style';

interface AnimeHeadingProps {
  genre: string[];
  image: string;
  rating: AnimeRatingType;
  title: string;
  type: string;
  year: number;
}

interface AnimeHeadingListInfo {
  color: string;
  text: string;
}

const AnimeHeading = (props: AnimeHeadingProps) => {
  const {
    genre,
    image,
    rating: { rating, totalParticipant },
    title,
    type,
    year
  } = props;
  const { data } = usePalette(image);

  const listInfo = useMemo<AnimeHeadingListInfo[]>(() => {
    const result: AnimeHeadingListInfo[] = [
      { color: SECONDARY600, text: type }
    ];

    genre.forEach((item) => {
      result.push({
        color: GRAY700,
        text: item
      });
    });

    return result;
  }, [genre, type]);

  return (
    <section css={styAnimeHeading}>
      <section
        className="anime-heading__background"
        style={{ background: data.vibrant }}
      />

      <section className="anime-heading__content">
        <Container>
          <Flex gap={24}>
            <Flex.Item>
              <Images
                alt="anime picture"
                className="anime-heading__picture"
                src={image}
                objectFit="cover"
                size={[150, 200]}
              />
            </Flex.Item>

            <Flex.Item>
              <Typography.H1
                aria-label="title"
                modifier="heading-3"
                color={data.muted}
                margin="16px 0 8px"
              >
                <strong>
                  {title} {year && `(${year})`}
                </strong>
              </Typography.H1>

              <Flex gap={8} alignItems="center">
                <Flex.Item className="anime-heading__rating">
                  <Icon color={SECONDARY600} icon="star-fill" size={24} />
                  <Typography.Paragraph color={GRAY900} modifier="body-1">
                    <strong>{rating.toFixed(1)} / 10</strong>
                  </Typography.Paragraph>
                  <Typography.Paragraph color={GRAY400} modifier="body-2">
                    ({shortenNumber(totalParticipant)} Users)
                  </Typography.Paragraph>
                </Flex.Item>

                {listInfo.map((item) => {
                  return (
                    <Flex.Item key={item.text}>
                      <div
                        className="anime-heading__info-item"
                        style={{ background: item.color }}
                      >
                        <Typography.Span color={WHITE} modifier="body-2">
                          {item.text}
                        </Typography.Span>
                      </div>
                    </Flex.Item>
                  );
                })}
              </Flex>
            </Flex.Item>
          </Flex>
        </Container>
      </section>
    </section>
  );
};

export default AnimeHeading;
