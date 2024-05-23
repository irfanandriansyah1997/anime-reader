import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { jsx } from '@emotion/react';

import { TYPOGRAPHY_ELEMENTS, TYPOGRAPHY_MODIFIER } from './constant';
import { styTypography } from './style';
import type { TypographyElementProps, TypographyProps } from './types';

const Typography = <T extends Element>(
  props: PropsWithChildren<TypographyProps<T>>
) => {
  const {
    children,
    color,
    ellipsis,
    margin,
    modifier = 'body-1',
    tagElement = 'paragraph',
    textAlign = 'left',
    textDecoration,
    ...res
  } = props;

  const selectedModifier = TYPOGRAPHY_MODIFIER[modifier];
  const selectedTag = TYPOGRAPHY_ELEMENTS[tagElement];

  const style = useMemo(() => {
    return {
      color: color,
      margin,
      overflow: ellipsis ? 'hidden' : 'initial',
      textAlign,
      textDecoration,
      textOverflow: ellipsis ? 'ellipsis' : 'initial',
      whiteSpace: ellipsis ? 'nowrap' : 'initial'
    };
  }, [color, ellipsis, margin, textAlign, textDecoration]);

  return jsx(
    selectedTag,
    { ...res, css: styTypography, 'data-modifier': selectedModifier, style },
    children
  );
};

/////////////////////////////////////////////////////////////////////////////
// Typography with specified tag element
/////////////////////////////////////////////////////////////////////////////

const H1 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h1" />;
};

const H2 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h2" />;
};

const H3 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h3" />;
};

const H4 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h4" />;
};

const H5 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h5" />;
};

const H6 = (props: TypographyElementProps<HTMLHeadingElement>) => {
  return <Typography {...props} tagElement="h6" />;
};

const Span = (props: TypographyElementProps<HTMLSpanElement>) => {
  return <Typography {...props} tagElement="span" />;
};

const Paragraph = (props: TypographyElementProps<HTMLParagraphElement>) => {
  return <Typography {...props} tagElement="paragraph" />;
};

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Span
};
