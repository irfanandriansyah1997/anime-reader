import type { PropsWithChildren } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { GRAY500, GRAY700 } from '@/constant/theme';
import type { FithubIconType } from '@/types/icon';

interface AnimeContentSectionProps {
  className?: string;
  icon: FithubIconType;
  margin?: string;
  title: string;
}

const AnimeContentSection = (
  props: PropsWithChildren<AnimeContentSectionProps>
) => {
  const { children, className, icon, margin = '0 0 16px', title } = props;

  return (
    <section className={className}>
      <Typography.H6
        className="anime-content__heading"
        modifier="heading-4"
        color={GRAY500}
        margin={margin}
      >
        <Icon icon={icon} size={24} color={GRAY700} />
        <b>{title}</b>
      </Typography.H6>
      {children}
    </section>
  );
};

export default AnimeContentSection;
