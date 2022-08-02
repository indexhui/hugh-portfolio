import { Flex, Heading, Text, AspectRatio, Image, Box } from '@chakra-ui/react';

import architecture from 'assets/images/realengine/architecture.jpg';

const Architecture = () => {
  return (
    <Flex justify="center" py={{ base: '20px', lg: '48px' }}>
      <Flex w={{ base: '100%', lg: '75%' }} direction="column" px="22px">
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title">Structure</Text>
          <Box w="120px" h="1px" bgColor="grey.800"></Box>
        </Flex>
        <Flex wrap="wrap">
          <Flex
            w={{ base: '100%', lg: '50%' }}
            direction="column"
            pr="10%"
            justify="center"
          >
            <Text variant="title" pb={{ base: '12px', lg: '24px' }}>
              架構與基本功能規劃
            </Text>
            <Text
              variant="body"
              lineHeight="30px"
              maxW="500px"
              color="grey.800"
              fontSize={{ base: '22px', lg: '16px' }}
            >
              確認挑戰和專案核心目標後，研究目前市場美日韓台募資平台，功能和趨勢。盤點整個平台的資訊架構，接著著手設計
            </Text>
          </Flex>
          <Flex w={{ base: '100%', lg: '50%' }} rounded="md" overflow="hidden">
            <AspectRatio w="100%" ratio={5 / 3}>
              <Image src={architecture} />
            </AspectRatio>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Architecture;
