import { useState, useEffect } from 'react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

import logo from 'assets/images/logo.svg';

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
        Works <ChevronDownIcon />
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

  const handleScroll = () => {
    const element = document.getElementById('works');
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      inline: 'center',
    });
  };

  const handleClick = () => {
    if (location.pathname === '/') {
      handleScroll();
    } else {
      navigate('/#works', { replace: true });
    }
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
              isActive={location.pathname === '/'}
              handleClick={handleClick}
            />
            <RouterLink to="/about">
              <Text
                color={location.pathname === '/about' ? 'blue.700' : 'grey.700'}
              >
                About
              </Text>
            </RouterLink>
            <Text>Resume</Text>
          </HStack>
        ) : (
          <MobileMenu />
        )}
      </Flex>
    </MotionFlex>
  );
};
export default Header;
