import type { ImgHTMLAttributes } from 'react';

import type { Property } from 'csstype';

export type ImageSizeType = string | number;

export type ImageLayoutType = 'default' | 'circle' | 'rectangle';

interface BaseImagesProps {
  layout?: ImageLayoutType;
  objectFit?: Property.ObjectFit;
  size: ImageSizeType | [ImageSizeType, ImageSizeType];
}

type HTMLImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  keyof BaseImagesProps | 'width' | 'height'
>;

export type ImagesProps = HTMLImageProps & BaseImagesProps;
