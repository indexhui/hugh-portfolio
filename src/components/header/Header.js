import { Flex, HStack, Text } from '@chakra-ui/react';

const Header = props => {
  return (
    <Flex
      w="100%"
      position="sticky"
      top="0"
      left="0"
      h="70px"
      zIndex="10"
      justify="center"
    >
      <Flex w="75%" justify="space-between">
        <HStack>
          <Text>Hugh Feng Portfolio</Text>
        </HStack>
        <HStack spacing="20px">
          <Text>Works</Text>
          <Text>About</Text>
          <Text>Resume</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
export default Header;
