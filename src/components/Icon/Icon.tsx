import { cx } from '@/utils/css';

import { styIcon } from './style';
import type { IconProps } from './types';

/**
 * Icon Component
 *
 * @since 2024.02.02
 */
const Icon = (props: IconProps) => {
  const {
    'aria-label': ariaLabel = 'fithub icon',
    className,
    color,
    gradientPreset,
    icon,
    margin,
    role = 'img',
    size: fontSize = 16,
    ...res
  } = props;

  return (
    <span
      {...res}
      style={{
        color: !gradientPreset ? color : undefined,
        fontSize,
        fontWeight: 400,
        margin
      }}
      role={role}
      aria-label={ariaLabel}
      css={styIcon}
      data-icon={icon}
      data-gradient={gradientPreset ?? false}
      className={cx('fithub-icon', className)}
    />
  );
};

export default Icon;
