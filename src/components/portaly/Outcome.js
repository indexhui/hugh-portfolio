import {
  Flex,
  Text,
  Stack,
  VStack,
  HStack,
  Heading,
  Highlight,
  chakra,
  Image,
  Link,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';

import outcome00 from 'assets/images/portaly/outcome00.jpg';

const Outcome = () => {
  return (
    <Container bgColor="white" py="40px">
      <Flex w="100%">
        <Text color="blue.700" variant="title">
          Outcome
        </Text>
      </Flex>
      <Text w="100%" textAlign="left">
        已經有超過 3000 位不同領域的創作者使用 Portaly 作為自己的 Link-in-Bio
        與微型官網，累積 4000萬粉絲瀏覽
      </Text>
      <Image src={outcome00} my="20px" />
    </Container>
  );
};

export default Outcome;
