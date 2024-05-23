import type { HTMLAttributes } from 'react';

import type { Property } from 'csstype';

import type {
  GenericCompoundComponentType,
  PropsWithRequiredChildren
} from '@/types/react';

type HTMLSectionProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

/////////////////////////////////////////////////////////////////////////////
// Flex Item Interface
/////////////////////////////////////////////////////////////////////////////

export interface FlexItemProps extends HTMLSectionProps {
  fullWidth?: boolean;
}

export type FlexItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithRequiredChildren<FlexItemProps>): JSX.Element;
  },
  'flex-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Flex Interface
/////////////////////////////////////////////////////////////////////////////

interface BaseFlexProps {
  alignItems: Property.AlignItems;
  flexBasis: Property.FlexBasis<string | number>;
  flexDirection: Property.FlexDirection;
  flexGrow: number;
  flexShrink: number;
  flexWrap: Property.FlexWrap;
  gap: number;
  justifyContent: Property.JustifyContent;
}

export type FlexProps = Omit<HTMLSectionProps, keyof BaseFlexProps> &
  Partial<BaseFlexProps>;

export interface FlexFnType {
  (props: PropsWithRequiredChildren<FlexProps>): JSX.Element;
  Item: FlexItemFnType;
}
