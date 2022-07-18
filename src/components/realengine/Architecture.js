import { Flex, Heading, Text, AspectRatio, Image } from '@chakra-ui/react';

import architecture from 'assets/images/realengine/architecture.jpg';

const Architecture = () => {
  return (
    <Flex justify="center">
      <Flex w="75%">
        <Flex w="50%" direction="column" pr="10%" justify="center">
          <Heading as="h4" size="xl" pb="24px">
            架構與基本功能規劃
          </Heading>
          <Text
            lineHeight="30px"
            maxW="500px"
            color="grey.800"
            fontSize={{ base: '22px', lg: '16px' }}
          >
            確認挑戰和專案核心目標後，研究目前市場美日韓台募資平台，功能和趨勢。盤點整個平台的資訊架構，接著著手設計
          </Text>
        </Flex>
        <Flex w="50%" rounded="md" overflow="hidden">
          <AspectRatio w="100%" ratio={5 / 3}>
            <Image src={architecture} />
          </AspectRatio>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Architecture;
