import {
  Flex,
  Text,
  Image,
  Heading,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';

import followUp01 from 'assets/images/realengine/followUp01.jpg';
import followUp02 from 'assets/images/realengine/followUp02.jpg';

const FollowUp = () => {
  return (
    <Flex
      w="100%"
      py={{ base: '32px', lg: '56px' }}
      borderColor="gray.300"
      borderTopWidth="1px"
      align="center"
      direction="column"
    >
      <Heading>專案後續</Heading>
      <Text maxW="800px">
        這次與真實引擎的合作，告一段落，但產品開發的旅程將會持續。未來將會有越來越多功能與內容在產品中出現
      </Text>
      <Stack
        w="75%"
        maxW="1200px"
        px="24px"
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '24px', lg: '48px' }}
      >
        <AspectRatio w="50%" ratio={5 / 3}>
          <Image src={followUp01} rounded="lg" />
        </AspectRatio>
        <AspectRatio w="50%" ratio={5 / 3}>
          <Image src={followUp02} rounded="lg" />
        </AspectRatio>
      </Stack>
    </Flex>
  );
};

export default FollowUp;
