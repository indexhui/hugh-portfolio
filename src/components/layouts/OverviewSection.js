import { Flex, Text, VStack, Box } from '@chakra-ui/react';

const OverviewSection = props => {
  const { content } = props;
  return (
    <Flex
      bg="grey.300"
      px="22px"
      py={{ base: '32px', lg: '48px' }}
      w="100%"
      justify="center"
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        maxW="1080px"
        direction="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title" color="blue.700">
            Overview
          </Text>
          <Box w="120px" h="1px" bgColor="blue.600"></Box>
        </Flex>
        <VStack spacing="12px" maxW="1080px">
          {content.map((item, index) => (
            <Text variant="body" key={index} fontSize="20px" lineHeight="1.8">
              {item}
            </Text>
          ))}
        </VStack>
        <Flex align="flex-start" w="100%" py="24px" direction="column">
          <Text variant="title" color="blue.700">
            Project OutComes
          </Text>
          <VStack pt="24px" align="flex-start">
            <Text variant="body">
              + 完成 MVP
              設計，並藉由易用性測試，大幅改善體驗問題，增加使用者滿意度
            </Text>
            <Text variant="body">
              + 正式上線第二個月，進到全球流量排名前 50,000，國內排名前 2,000
            </Text>
            <Text variant="body">
              + Beta 期間，超過 3000 個傳送門被開啟，三個月的網站總瀏覽量加總：
              500k
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OverviewSection;
