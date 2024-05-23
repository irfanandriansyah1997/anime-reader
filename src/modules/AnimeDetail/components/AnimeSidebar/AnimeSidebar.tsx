import { Fragment } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { GRAY500, SECONDARY700 } from '@/constant/theme';
import type { AnimeRelationType, AnimeStreamingType } from '@/model/anime';

import { styAnimeSidebar } from './style';

interface AnimeSidebarProps {
  animeRelation: AnimeRelationType[];
  streaming: AnimeStreamingType[];
}

const AnimeSidebar = (props: AnimeSidebarProps) => {
  const { animeRelation, streaming } = props;
  return (
    <section css={styAnimeSidebar}>
      {streaming.length > 0 && (
        <>
          <section>
            <Typography.H6
              modifier="heading-4"
              color={GRAY500}
              margin="0 0 16px"
            >
              <b>Watch</b>
            </Typography.H6>

            <ul>
              {streaming.map((item) => {
                return (
                  <li key={item.url}>
                    <Icon icon="link-linked" color={SECONDARY700} />
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <Typography.Paragraph modifier="body-1">
                        {item.streamName}
                      </Typography.Paragraph>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}

      {animeRelation.length > 0 && (
        <>
          {animeRelation.map((relation) => {
            if (relation.relation && relation.item.length > 0) {
              return (
                <Fragment key={relation.relation}>
                  <Typography.H6
                    modifier="heading-4"
                    color={GRAY500}
                    margin="36px 0 16px"
                  >
                    <b>{relation.relation}</b>
                  </Typography.H6>

                  <ul>
                    {relation.item.map((item) => {
                      return (
                        <li key={item.id}>
                          <Icon icon="link-linked" color={SECONDARY700} />
                          <a
                            href={`/anime/${item.id}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Typography.Paragraph modifier="body-1" ellipsis>
                              {item.name}
                            </Typography.Paragraph>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Fragment>
              );
            }

            return null;
          })}
        </>
      )}
    </section>
  );
};

export default AnimeSidebar;
