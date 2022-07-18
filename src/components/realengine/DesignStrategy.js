import {
  Flex,
  Text,
  VStack,
  Heading,
  HStack,
  Stack,
  AspectRatio,
  Image,
} from '@chakra-ui/react';

import strategy01_01 from 'assets/images/realengine/strategy01_01.jpg';
import strategy01_02 from 'assets/images/realengine/strategy01_02.jpg';
import strategy01_03 from 'assets/images/realengine/strategy01_03.jpg';
import strategy02_01 from 'assets/images/realengine/strategy02_01.jpg';
import strategy02_02 from 'assets/images/realengine/strategy02_02.jpg';
import strategy03 from 'assets/images/realengine/strategy03.jpg';

const Badge = props => {
  return (
    <HStack>
      <Flex
        rounded="full"
        bg="#FA8C16"
        w="24px"
        h="24px"
        align="center"
        justify="center"
      >
        <Text color="white">{props.number}</Text>
      </Flex>
      <Text>{props.children}</Text>
    </HStack>
  );
};

const DesignStrategy = () => {
  return (
    <Flex py="48px" align="center" justify="center" direction="column">
      <Heading textAlign="center">設計策略</Heading>
      <Flex w="100%" justify="center" bg="white" py="40px">
        <VStack spacing="24px" pt="20px" w="75%">
          <Text
            textAlign="center"
            maxW="720px"
            color="grey.700"
            letterSpacing=".05em"
            fontWeight="600"
            fontSize={{ base: '16px', lg: '20px' }}
          >
            透過資訊設計釐清桌上遊戲的性質以其受眾性情作為分類區分
            <br />
            讓介紹區域就可以了解桌遊特性
          </Text>
          <Stack
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            spacing="24px"
          >
            <Flex w={1 / 3} rounded="lg" overflow="hidden">
              <AspectRatio w="100%" ratio={5 / 3}>
                <Image src={strategy01_01} />
              </AspectRatio>
            </Flex>
            <AspectRatio w={1 / 3} ratio={5 / 3} rounded="lg" overflow="hidden">
              <Image src={strategy01_02} />
            </AspectRatio>
            <AspectRatio w={1 / 3} ratio={5 / 3} rounded="lg" overflow="hidden">
              <Image src={strategy01_03} />
            </AspectRatio>
          </Stack>
          <VStack>
            <Badge number="1">遊玩的人數條件和時間</Badge>
            <Badge number="2">遊玩的人數條件和時間</Badge>
          </VStack>
        </VStack>
      </Flex>
      <Flex
        w="100%"
        justify="center"
        bg="white"
        py="40px"
        borderTop="1px solid #c0c0e0"
      >
        <VStack w="75%">
          <Text
            textAlign="center"
            color="grey.700"
            letterSpacing=".05em"
            fontWeight="600"
            fontSize={{ base: '16px', lg: '20px' }}
          >
            增強募資方和群眾的情感連結
          </Text>
          <Text
            textAlign="center"
            color="grey.700"
            letterSpacing=".05em"
            fontSize={{ base: '14px', lg: '18px' }}
          >
            邀請贊助者表達支持，運用贊助者生成內容，渲染氛圍
          </Text>
          <Text
            textAlign="center"
            color="grey.700"
            letterSpacing=".05em"
            fontSize={{ base: '14px', lg: '18px' }}
          >
            在完成付款後，給予贊助者號碼牌與創作者的感謝
          </Text>
          <Stack
            w="100%"
            spacing="5%"
            rounded="lg"
            direction={{ base: 'column', md: 'row' }}
          >
            <AspectRatio w="50%" ratio={5 / 3} rounded="lg" overflow="hidden">
              <Image src={strategy02_01} />
            </AspectRatio>
            <AspectRatio w="50%" ratio={5 / 3} rounded="lg" overflow="hidden">
              <Image src={strategy02_02} />
            </AspectRatio>
          </Stack>
        </VStack>
      </Flex>
      <Flex
        w="100%"
        justify="center"
        bg="white"
        py="40px"
        borderTop="1px solid #c0c0e0"
      >
        <Flex w="75%" border="1px solid red" align="center">
          <VStack w="50%">
            <Text
              color="grey.700"
              letterSpacing=".05em"
              fontWeight="600"
              fontSize={{ base: '16px', lg: '20px' }}
            >
              專屬限量加購
            </Text>
            <Text
              color="grey.700"
              letterSpacing=".05em"
              fontWeight="600"
              fontSize={{ base: '16px', lg: '20px' }}
            >
              提升參與募資的鐵粉獨特性
            </Text>
          </VStack>

          <AspectRatio w="50%" ratio={5 / 3} rounded="lg" overflow="hidden">
            <Image src={strategy03} />
          </AspectRatio>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesignStrategy;
