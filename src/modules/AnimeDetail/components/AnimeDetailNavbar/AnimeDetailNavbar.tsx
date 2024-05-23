import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';

import { GRAY500 } from '@/constant/theme';

import { styAnimeDetailNavbar } from './style';

import illustrationLogo from '@/assets/logo.png';

const AnimeDetailNavbar = () => {
  return (
    <section aria-label="navbar" css={styAnimeDetailNavbar}>
      <Container>
        <Flex alignItems="center" gap={16}>
          <Flex.Item>
            <Link to="/">
              <Icon icon="chevron-nobox-left" size={36} color={GRAY500} />
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Images
              src={illustrationLogo}
              size={['auto', 60]}
              alt="Anime Logo"
            />
          </Flex.Item>
        </Flex>
      </Container>
    </section>
  );
};

export default AnimeDetailNavbar;
