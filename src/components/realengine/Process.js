import { Flex, Text, VStack, Heading, Box } from '@chakra-ui/react';

const Process = () => {
  return (
    <Flex
      w="100%"
      bg="linear-gradient(90deg, #648B91 -1.46%, #146B77 98.4%)"
      minH="200px"
      py={{ base: '24px', lg: '48px' }}
      pb={{ base: '24px', lg: '64px' }}
      px="22px"
      justify="center"
      align="center"
      direction="column"
      color="white"
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        maxW="1280px"
        direction="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" align="center" mb="40px">
          <Text variant="title">設計流程</Text>
          <Box w="120px" h="1px" bgColor="white"></Box>
        </Flex>
        {/* <Heading
          letterSpacing=".1em"
          as="h3"
          size="md"
          pb={{ base: '12px', lg: '28px' }}
        >
          設計流程
        </Heading> */}
        <Flex w="75%">
          <Flex w={1 / 3} direction="column">
            <Flex w="100%">
              <Text
                bgColor="rgba(255, 255, 255, 0.2)"
                w="100%"
                px="20px"
                py="5px"
                borderRadius="20px 0 0 20px"
              >
                First Step
              </Text>
            </Flex>
            <VStack mt="48px" spacing="14px">
              <Text variant="title">募資平台分析</Text>
              <Text variant="title">桌遊產業調查</Text>
              <Text variant="title">規劃資訊架構</Text>
            </VStack>
          </Flex>
          <Flex w={1 / 3} direction="column">
            <Flex
              w="100%"
              bgColor="rgba(255, 255, 255, 0.2)"
              direction="column"
            >
              <Text
                w="100%"
                px="20px"
                py="5px"
                bgColor="rgba(255, 255, 255, 0.2)"
                borderRadius="10px 0 0 10px"
              >
                Step .2
              </Text>
            </Flex>
            <VStack mt="48px" spacing="14px">
              <Text variant="title">定義解決方案</Text>
              <Text variant="title">規劃資訊架構</Text>
              <Text variant="title">flow & wireframe </Text>
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
                py="5px"
                bgColor="rgba(255, 255, 255, 0.2)"
                borderRadius="20px"
                fontWeight="500"
              >
                Test & Release
              </Text>
            </Flex>
            <VStack mt="48px" spacing="14px">
              <Text variant="title">精稿修改和工程交付</Text>
              <Text variant="title">第一階段測試</Text>
              <Text variant="title">正式上線和功能迭代</Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Process;
