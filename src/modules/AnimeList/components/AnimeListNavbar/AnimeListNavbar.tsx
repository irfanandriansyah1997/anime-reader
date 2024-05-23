import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Images from '@/components/Images';
import Textfield from '@/components/Textfield';

import { styAnimeListNavbar } from './style';

import illustrationLogo from '@/assets/logo.png';

interface AnimeListNavbarProps {
  onChange: (keyword: string) => void;
  value: string;
}

const AnimeListNavbar = (props: AnimeListNavbarProps) => {
  const { onChange, value } = props;

  return (
    <section aria-label="navbar" css={styAnimeListNavbar}>
      <Container>
        <Flex alignItems="center" gap={24}>
          <Flex.Item>
            <Images
              alt="Anime Logo"
              src={illustrationLogo}
              size={['auto', 60]}
            />
          </Flex.Item>

          <Flex.Item className="anime-list-navbar__textfield">
            <Textfield.Default
              onChange={onChange}
              value={value}
              icon="search"
              allowClear
              placeholder="Find your favorite anime..."
            />
          </Flex.Item>
        </Flex>
      </Container>
    </section>
  );
};

export default AnimeListNavbar;
