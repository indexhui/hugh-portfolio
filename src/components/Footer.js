import {
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

const Footer = () => {
  return (
    <Container bgColor="blue.800" mt="20px" py="20px" color="white">
      <Flex justify="space-between" w="100%" align="flex-end">
        <VStack align="flex-start">
          <Text fontSize="20px" fontWeight="500">
            Let's chat!
          </Text>
          <Text>indexhui@gmail.com</Text>
        </VStack>
        <HStack spacing="20px">
          <Text fontSize="18px" fontWeight="500">
            Linkedin
          </Text>
          <Text fontSize="18px" fontWeight="500">
            Cakeresume
          </Text>
          <Text fontSize="18px" fontWeight="500">
            Behance
          </Text>
          <Text fontSize="18px" fontWeight="500">
            Github
          </Text>
        </HStack>
      </Flex>
      <Text fontSize="12px" color="whiteAlpha.700" pt="20px">
        謝謝你觀看到最後 | 2022 © Hugh Feng All right reserved
      </Text>
    </Container>
  );
};

export default Footer;
