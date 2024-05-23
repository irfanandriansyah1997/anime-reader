import type { ReactNode } from 'react';

export type PropsWithRequiredChildren<P = unknown> = P & {
  children: ReactNode;
};

export type GenericCompoundComponentType<T, N extends string> = T & {
  COMPONENT_NAME: N;
};
