import {
  Flex,
  Text,
  VStack,
  Heading,
  HStack,
  Stack,
  AspectRatio,
  Image,
  Box,
} from '@chakra-ui/react';

import strategy01_01 from 'assets/images/realengine/strategy01_01.jpg';
import strategy01_02 from 'assets/images/realengine/strategy01_02.jpg';
import strategy01_03 from 'assets/images/realengine/strategy01_03.jpg';
import strategy02_01 from 'assets/images/realengine/strategy02_01.jpg';
import strategy02_02 from 'assets/images/realengine/strategy02_02.jpg';
import strategy03_01 from 'assets/images/realengine/strategy03.jpg';
import strategy03_02 from 'assets/images/realengine/challenge03.jpg';

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
        <Text variant="text02" color="white">
          {props.number}
        </Text>
      </Flex>
      <Text variant="text02">{props.children}</Text>
    </HStack>
  );
};

const DesignStrategy = () => {
  return (
    <Flex
      py={{ base: '20px', lg: '48px' }}
      align="center"
      justify="center"
      direction="column"
      bg="white"
      px="22px"
    >
      <Flex w={{ base: '100%', lg: '75%' }} direction="column">
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title">Evaluation & Iterations</Text>
          <Box w="120px" h="1px" bgColor="grey.800"></Box>
        </Flex>
        <Flex w="100%" justify="center" py="40px">
          <VStack spacing="24px" pt="20px" w="100%">
            <VStack spacing="8px">
              <Text variant="smallTitle">桌遊特色介紹模板</Text>
              <Text
                variant="title"
                textAlign="center"
                // maxW="720px"
                color="grey.700"
                letterSpacing=".05em"
              >
                透過資訊設計釐清桌上遊戲的性質以其受眾性情作為分類區分
                <br />
                讓介紹區域就可以了解桌遊特性
              </Text>
            </VStack>
            <Stack
              w="100%"
              direction={{ base: 'column', md: 'row' }}
              spacing="24px"
            >
              <Flex
                w={{ base: '100%', lg: 1 / 3 }}
                rounded="lg"
                overflow="hidden"
              >
                <AspectRatio w="100%" ratio={5 / 3}>
                  <Image src={strategy01_01} />
                </AspectRatio>
              </Flex>
              <AspectRatio
                w={{ base: '100%', lg: 1 / 3 }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
                <Image src={strategy01_02} />
              </AspectRatio>
              <AspectRatio
                w={{ base: '100%', lg: 1 / 3 }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
                <Image src={strategy01_03} />
              </AspectRatio>
            </Stack>
            <VStack align="flex-start" spacing="10px">
              <Badge number="1">遊玩的人數條件和時間</Badge>
              <Badge number="2">桌遊遊戲性性質</Badge>
              <Badge number="3">桌遊類型</Badge>
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
          <VStack w="100%" spacing="24px">
            <VStack spacing="8px">
              <Text variant="smallTitle">增強募資方和群眾的情感連結</Text>
              <Text
                textAlign="center"
                color="grey.700"
                letterSpacing=".05em"
                fontSize={{ base: '14px', lg: '18px' }}
              >
                邀請贊助者表達支持，運用贊助者生成內容，渲染氛圍
                <br />
                在完成付款後，給予贊助者號碼牌與創作者的感謝
              </Text>
            </VStack>
            <Stack
              w="100%"
              spacing="5%"
              rounded="lg"
              direction={{ base: 'column', md: 'row' }}
            >
              <AspectRatio
                w={{ base: '100%', lg: '50%' }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
                <Image src={strategy02_01} />
              </AspectRatio>
              <AspectRatio
                w={{ base: '100%', lg: '50%' }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
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
          <VStack w="100%" spacing="24px">
            <VStack spacing="8px">
              <Text variant="smallTitle">專屬限量加購</Text>
              <Text
                textAlign="center"
                color="grey.700"
                letterSpacing=".05em"
                fontSize={{ base: '14px', lg: '18px' }}
              >
                提供參與募資民眾，獨特的加購方式
                <br />
                提升參與募資參與感獨特性
              </Text>
            </VStack>
            <Stack
              w="100%"
              spacing="5%"
              rounded="lg"
              direction={{ base: 'column', md: 'row' }}
            >
              <AspectRatio
                w={{ base: '100%', lg: '50%' }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
                <Image src={strategy03_01} />
              </AspectRatio>
              <AspectRatio
                w={{ base: '100%', lg: '50%' }}
                ratio={5 / 3}
                rounded="lg"
                overflow="hidden"
              >
                <Image src={strategy03_02} />
              </AspectRatio>
            </Stack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesignStrategy;
