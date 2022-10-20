import { useState, useRef } from 'react';

import {
  Flex,
  Link,
  Image,
  HStack,
  StackDivider,
  useDisclosure,
  VStack,
  Box,
  Text,
  useOutsideClick,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { CloseIcon } from '@chakra-ui/icons';

import { motion, AnimatePresence } from 'framer-motion';

import menu from 'assets/images/menu.svg';

const MotionFlex = motion(Flex);

// const MenuLink = ()=> {
//   return ()
// }

const MobileMenu = () => {
  const ref = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <>
      <Flex w="80px" justify="flex-end">
        <Image
          onClick={onOpen}
          src={menu}
          display={{ base: 'block', lg: 'none' }}
          w="22px"
        />
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <MotionFlex
            ref={ref}
            initial={{ x: '150%', opacity: 1 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              x: '150%',
              opacity: 0,
              transition: { duration: 0.55 },
            }}
            top="0"
            right="0"
            display={{ base: 'flex', lg: 'none' }}
            position="fixed"
            w="75%"
            h="100%"
            bg="blue.800"
            color="white"
            pt="50px"
            px="20px"
          >
            <Flex
              onClick={onClose}
              bgColor="whiteAlpha.900"
              color="blue.800"
              position="absolute"
              top="16px"
              right="20px"
              w="32px"
              h="32px"
              rounded="full"
              align="center"
              justify="center"
            >
              <CloseIcon />
            </Flex>
            <VStack align="flex-start" w="100%" spacing="15px">
              <Text fontSize="18px" fontWeight="500">
                Works
              </Text>
              <RouterLink to="/crosspoint" onClick={onClose}>
                <Text>Crosspoint AI</Text>
              </RouterLink>
              <RouterLink to="/realengine" onClick={onClose}>
                <Text>Real Engine</Text>
              </RouterLink>
              <RouterLink to="/portaly" onClick={onClose}>
                <Text>Portaly傳送門</Text>
              </RouterLink>
              <Box w="100%" h="1px" bg="whiteAlpha.500"></Box>
              <RouterLink to="/about" onClick={onClose}>
                <Text>About</Text>
              </RouterLink>
              <Text fontSize="18px" fontWeight="500">
                Resume
              </Text>
              {/* {navList.map(item => (
                <Box key={item.link} onClick={onClose}>
                  <MobileMenuLink {...item} />
                </Box>
              ))} */}
            </VStack>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
