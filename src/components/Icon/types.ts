import type { HTMLAttributes } from 'react';

import type { FithubIconType } from '@/types/icon';

export type IconGradientPreset = 'danger' | 'success' | 'warning' | 'info';

interface BaseIconProps {
  color?: string;
  gradientPreset?: IconGradientPreset;
  icon: FithubIconType;
  margin?: number | string;
  size?: number;
}

type HTMLIconProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  keyof BaseIconProps | 'children' | 'style' | 'css'
>;

export type IconProps = HTMLIconProps & BaseIconProps;
