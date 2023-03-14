import { useState, useEffect, useCallback } from 'react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Flex,
  HStack,
  Text,
  Image,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FiDownload } from 'react-icons/fi';

import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

import logo from 'assets/images/logo.svg';
import i18n from 'i18next';
import { useSearchParams } from 'react-router-dom';
import LanguageSwitch from 'components/LanguageSwitch';
import { useTranslation } from 'react-i18next';

const MotionFlex = motion(Flex);

const HoverDropMenu = ({ handleClick, isActive }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu
      isOpen={isOpen}
      w="unset"
      px="20px"
      border="1px solid red"
      position="relative"
      direction="column"
      role="group"
    >
      <MenuButton
        color={isActive ? 'blue.700' : 'grey.700'}
        onMouseEnter={onOpen}
        onClick={() => handleClick()}
        onMouseLeave={onClose}
      >
        <RouterLink to="/works">
          Works <ChevronDownIcon />
        </RouterLink>
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w="100%"
        position="absolute"
        top="0px"
        bgColor="whiteAlpha.700"
        textStyle="text0"
        transition="all .25s"
        backdropFilter="blur(5px)"
        py="0"
      >
        <MenuItem
          as={RouterLink}
          to="/crosspoint"
          _hover={{ bgColor: 'whiteAlpha.900', color: 'blue.800' }}
          onClick={onClose}
        >
          Crosspoint AI
        </MenuItem>
        <MenuItem
          as={RouterLink}
          to="/realengine"
          _hover={{ bgColor: 'whiteAlpha.900', color: 'blue.800' }}
          onClick={onClose}
        >
          Real Engine
        </MenuItem>
        <MenuItem
          as={RouterLink}
          to="/portaly"
          _hover={{ bgColor: 'whiteAlpha.900', color: 'blue.800' }}
          onClick={onClose}
        >
          Portaly傳送門
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const Header = props => {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLargerThan980] = useMediaQuery('(min-width: 980px)');
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setSearchParams({ local: 'zh-TW' });
  };

  const handleDownload = useCallback(() => {
    const a = document.createElement('a');
    a.download = 'Hugh_Resume';
    a.href = `/Hugh_Resume.pdf`;
    a.click();
    // eslint-disable-next-line
  }, []);

  // const handleScroll = () => {
  //   const element = document.getElementById('works');
  //   polyfill();
  //   scrollIntoView(element, {
  //     behavior: 'smooth',
  //     inline: 'center',
  //   });
  // };

  const handleClick = () => {
    navigate('/works', { replace: true });
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -80 },
  };

  useEffect(() => {
    //only inside the hook
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY + 0.5 && window.scrollY > 80) {
          // if scroll down & over 80 hide the navbar
          setIsShow(false);
        } else {
          // if scroll up show the navbar
          setIsShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <MotionFlex
      transition={{ duration: 0.5 }}
      animate={isShow ? 'open' : 'closed'}
      variants={variants}
      bg="white"
      w="100%"
      position="sticky"
      top="0"
      left="0"
      h="68px"
      zIndex="20"
      justify="center"
      boxShadow={isShow ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        px="22px"
        justify="space-between"
        align="center"
      >
        <RouterLink to="/">
          <HStack>
            <Image w="30px" src={logo} />
            <Text fontWeight="500" color="grey.650">
              Hugh Feng
            </Text>
          </HStack>
        </RouterLink>

        {isLargerThan980 ? (
          <HStack spacing="20px">
            <HoverDropMenu
              isActive={location.pathname === '/works'}
              handleClick={handleClick}
            />
            <RouterLink to="/about">
              <Text
                _hover={{ color: 'blue.600' }}
                color={location.pathname === '/about' ? 'blue.700' : 'grey.700'}
              >
                {t('about')}
              </Text>
            </RouterLink>
            <Link onClick={handleDownload} variant="link02">
              <HStack spacing="2px">
                <Text _hover={{ color: 'blue.600' }}>Resume</Text>
                <Icon as={FiDownload} w="14px" />
              </HStack>
            </Link>
            <HStack onClick={() => handleChangeLanguage('zh')}>
              {currentLanguage} 🇹🇼
            </HStack>
            <LanguageSwitch />
          </HStack>
        ) : (
          <MobileMenu handleDownload={handleDownload} />
        )}
      </Flex>
    </MotionFlex>
  );
};
export default Header;
