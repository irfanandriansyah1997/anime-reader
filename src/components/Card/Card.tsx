import type { PropsWithRequiredChildren } from '@/types/react';

import { styCard } from './style';
import type { CardProps } from './types';

const Card = (props: PropsWithRequiredChildren<CardProps>) => {
  const {
    margin,
    rounded = true,
    withBackground = true,
    withPadding = true,
    ...res
  } = props;

  return (
    <section
      css={styCard}
      {...res}
      data-rounded={rounded}
      data-default-padding={withPadding}
      data-default-background={withBackground}
      style={{ margin }}
    />
  );
};

export default Card;
