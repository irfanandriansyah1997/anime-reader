import type { HTMLAttributes } from 'react';

type HTMLCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof BaseCardProps | 'style'
>;

interface BaseCardProps {
  margin?: string | number;
  rounded?: boolean;
  withBackground?: boolean;
  withPadding?: boolean;
}

export type CardProps = BaseCardProps & HTMLCardProps;
