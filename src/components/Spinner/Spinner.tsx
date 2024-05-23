import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import { GRAY400 } from '@/constant/theme';

import { stySpinner } from './style';

interface SpinnerProps {
  size: number;
  spinnerColor?: string;
  spinnerWidth?: number;
}

const Spinner = (props: SpinnerProps) => {
  const { size, spinnerColor = GRAY400, spinnerWidth = 5 } = props;

  const style = useMemo((): CSSProperties => {
    return {
      borderLeftColor: spinnerColor,
      borderRightColor: spinnerColor,
      borderTopColor: spinnerColor,
      borderWidth: spinnerWidth,
      height: size,
      width: size
    };
  }, [size, spinnerColor, spinnerWidth]);

  return (
    <div
      role="presentation"
      aria-label="loading"
      css={stySpinner}
      style={style}
    />
  );
};

export default Spinner;
