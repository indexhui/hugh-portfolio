import {
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Link,
} from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

const LinkList = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/hughfeng/',
  },
  {
    name: 'Cakeresume',
    link: 'https://www.cakeresume.com/me/indexhui',
  },
  {
    name: 'Behance',
    link: 'https://www.behance.net/indexhui',
  },
  {
    name: 'Github',
    link: 'https://github.com/indexhui',
  },
];

const Footer = () => {
  return (
    <Container bgColor="blue.800" mt="20px" py="20px" color="white">
      <Flex
        justify="space-between"
        w="100%"
        align={{ base: 'flex-start', lg: 'flex-end' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <VStack align="flex-start">
          <Text fontSize="20px" fontWeight="500">
            Let's chat!
          </Text>
          <Text>indexhui@gmail.com</Text>
        </VStack>
        <HStack spacing={{ base: '12px', lg: '20px' }} pt="10px">
          {LinkList.map(item => (
            <Link
              key={item.name}
              href={item.link}
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              isExternal
            >
              <Text fontSize={{ base: '14px', lg: '18px' }} fontWeight="500">
                {item.name}
              </Text>
            </Link>
          ))}
        </HStack>
      </Flex>
      <Text fontSize="12px" color="whiteAlpha.700" pt="20px">
        謝謝你觀看到最後 = ) | 2023 © Hugh Feng All right reserved
      </Text>
    </Container>
  );
};

export default Footer;
