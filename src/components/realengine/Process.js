import { Flex, Text, VStack, Heading } from '@chakra-ui/react';

const Process = () => {
  return (
    <Flex
      w="100%"
      bg="linear-gradient(90deg, #648B91 -1.46%, #146B77 98.4%)"
      minH="200px"
      py="40px"
      justify="center"
      align="center"
      direction="column"
      color="white"
    >
      <Heading letterSpacing=".1em" as="h3" size="md" pb="10px">
        設計流程
      </Heading>
      <Flex w="75%">
        <Flex w={1 / 3} direction="column">
          <Flex w="100%">
            <Text
              w="100%"
              px="20px"
              bgColor="rgba(255, 255, 255, 0.2)"
              borderRadius="10px 0 0 10px"
            >
              First Step
            </Text>
          </Flex>
          <VStack mt="20px">
            <Text>募資平台分析</Text>
            <Text>桌遊產業調查</Text>
            <Text>規劃資訊架構</Text>
          </VStack>
        </Flex>
        <Flex w={1 / 3} direction="column">
          <Flex w="100%" bgColor="rgba(255, 255, 255, 0.2)" direction="column">
            <Text
              w="100%"
              px="20px"
              bgColor="rgba(255, 255, 255, 0.2)"
              borderRadius="10px 0 0 10px"
            >
              Step .2
            </Text>
          </Flex>
          <VStack mt="20px">
            <Text>定義解決方案</Text>
            <Text>規劃資訊架構</Text>
            <Text>flow & wireframe </Text>
          </VStack>
        </Flex>
        <Flex w={1 / 3} direction="column">
          <Flex
            w="100%"
            bgColor="rgba(255, 255, 255, 0.35)"
            direction="column"
            borderRadius="0 10px 10px 0"
          >
            <Text
              w="100%"
              px="20px"
              bgColor="rgba(255, 255, 255, 0.2)"
              borderRadius="10px"
              fontWeight="500"
            >
              Test & Release
            </Text>
          </Flex>
          <VStack mt="20px">
            <Text>精稿修改和工程交付</Text>
            <Text>第一階段測試</Text>
            <Text>正式上線和功能迭代</Text>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Process;
