import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Property } from 'csstype';

import type { TYPOGRAPHY_ELEMENTS, TYPOGRAPHY_MODIFIER } from './constant';

/////////////////////////////////////////////////////////////////////////////
// Shared Interface
/////////////////////////////////////////////////////////////////////////////

export type TypographyElementType = keyof typeof TYPOGRAPHY_ELEMENTS;

export type TypographyModifierType = keyof typeof TYPOGRAPHY_MODIFIER;

type BaseTypographyProps = {
  className?: string;
  color?: string;
  ellipsis?: boolean;
  margin?: number | string;
  modifier?: TypographyModifierType;
  tagElement?: TypographyElementType;
  textAlign?: Property.TextAlign;
  textDecoration?: Property.TextDecoration;
};

type HTMLTypographyProps<T> = Omit<
  HTMLAttributes<T>,
  keyof BaseTypographyProps
>;

/////////////////////////////////////////////////////////////////////////////
// Typography Props
/////////////////////////////////////////////////////////////////////////////

export type TypographyProps<T extends Element> = HTMLTypographyProps<T> &
  BaseTypographyProps;

export type TypographyElementProps<T extends Element> = PropsWithChildren<
  Omit<TypographyProps<T>, 'tagElements'>
>;
