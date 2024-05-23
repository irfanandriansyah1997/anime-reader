import type { PropsWithChildren } from 'react';

import { styContainer } from './style';

interface ContainerProps {
  className?: string;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, className } = props;

  return (
    <section aria-label="container" className={className} css={styContainer}>
      {children}
    </section>
  );
};

export default Container;
