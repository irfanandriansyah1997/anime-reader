import { styDivider } from './style';

interface DividerProps {
  size?: 'small' | 'big';
}

const Divider = (props: DividerProps) => {
  const { size = 'small' } = props;

  return (
    <div
      role="presentation"
      aria-label="divider"
      css={styDivider}
      data-size={size}
    />
  );
};

export default Divider;
