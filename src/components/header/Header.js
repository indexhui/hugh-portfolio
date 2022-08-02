import { Flex, HStack, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
const Header = props => {
  return (
    <Flex
      bg="white"
      w="100%"
      position="sticky"
      top="0"
      left="0"
      h="68px"
      zIndex="10"
      justify="center"
    >
      <Flex w="75%" justify="space-between" align="center">
        <RouterLink to="/">
          <HStack>
            <Image src={logo} />
            <Text>Hugh Feng </Text>
          </HStack>
        </RouterLink>
        <HStack spacing="20px">
          <RouterLink to="/works">
            <Text>Works</Text>
          </RouterLink>
          <Text>Works</Text>
          <Text>About</Text>
          <Text>Resume</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
export default Header;
