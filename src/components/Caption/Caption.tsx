import Typography from '@/components/Typography';

import { GRAY400, GRAY500 } from '@/constant/theme';

import { styCaption } from './style';

interface CaptionProps {
  content: string;
  title: string;
}

const Caption = (props: CaptionProps) => {
  const { content, title } = props;

  return (
    <section aria-label="caption" css={styCaption}>
      <Typography.H6 modifier="heading-4" color={GRAY500} margin="0 0 16px">
        <b>{title}</b>
      </Typography.H6>

      <Typography.Paragraph
        role="presentation"
        aria-label="desc"
        color={GRAY400}
        modifier="body-1"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export default Caption;
