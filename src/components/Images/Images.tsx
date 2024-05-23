import { useMemo } from 'react';

import { styImages } from './style';
import type { ImagesProps } from './types';

const Images = (props: ImagesProps) => {
  const {
    alt,
    className,
    layout = 'default',
    loading = 'lazy',
    objectFit = 'initial',
    size,
    src,
    ...res
  } = props;

  /**
   * Memoizes and formats the size based on layout and size props.
   * @notes The formatted size object or undefined if the format is invalid.
   */
  const formattedSize = useMemo(() => {
    const isSizePropsArray = Array.isArray(size) && size.length === 2;
    const isSizePropsNotArray =
      typeof size === 'number' || typeof size === 'string';
    const isInvalidFormat =
      size === undefined || size === null || size === 0 || size === '';

    if (isInvalidFormat) return undefined;

    if (layout === 'default' && isSizePropsArray) {
      const [width, height] = size;
      return { height, width };
    }

    if (
      isSizePropsNotArray &&
      (layout === 'circle' || layout === 'rectangle')
    ) {
      return { height: size, width: size };
    }

    return undefined;
  }, [layout, size]);

  if (!formattedSize) {
    console.error(
      'The props size and layout are incorrect; kindly re-check their value.'
    );
    return null;
  }

  return (
    <section
      aria-label="images"
      className={className}
      css={styImages}
      style={formattedSize}
      data-layout={layout}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={{ ...formattedSize, objectFit }}
        {...res}
      />
    </section>
  );
};

export default Images;
