import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, HStack, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from 'assets/images/logo.svg';

const MotionFlex = motion(Flex);

const Header = props => {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  console.log(location);

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
      zIndex="10"
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
              Hugh Feng{' '}
            </Text>
          </HStack>
        </RouterLink>
        <HStack spacing="20px">
          <RouterLink to="/">
            <Text
              fontWeight="500"
              color={location.pathname === '/' ? 'blue.700' : 'grey.700'}
            >
              Works
            </Text>
          </RouterLink>
          <RouterLink to="/about">
            <Text
              color={location.pathname === '/about' ? 'blue.700' : 'grey.700'}
            >
              About
            </Text>
          </RouterLink>
          <Text>Resume</Text>
        </HStack>
      </Flex>
    </MotionFlex>
  );
};
export default Header;
