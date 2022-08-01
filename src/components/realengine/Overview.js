import { Flex, Text, Box, VStack } from '@chakra-ui/react';
const Overview = () => {
  return (
    <Flex
      bg="grey.300"
      px="22px"
      py={{ base: '20px', lg: '32px' }}
      w="100%"
      justify="center"
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        maxW="1280px"
        direction="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title">Overview</Text>
          <Box w="120px" h="1px" bgColor="grey.800"></Box>
        </Flex>
        <VStack spacing="12px" maxW="1080px">
          <Text variant="body">
            綿羊犬有著 10 年桌上遊戲品牌經驗，這次與豐富資訊設計與程式開發經驗的
            RE: LAB，打造專屬桌遊募資平台，來提供IP 創作
            從桌遊企劃、生產、行銷的整合性服務。
          </Text>
          <Text variant="body">
            2016 時我在 RE: LAB 擔任網頁設計實習生，並持續與 RE: LAB
            保持合作至今。此次 CTO
            邀請我以顧問接案的方式擔任產品設計師角色參與專案，協力打造桌遊募資服務平台。
          </Text>
          <Text variant="body">
            這幾年募資類型平台從實體產品，課程，數位內容等，各領域都發展趨於成熟。
            於是乎在專案進行前我鑽研了的亞太地區與歐美主流募資平台，以及台灣產品，他們各自的設計手法與特色。作為這次介面設計的底蘊。
          </Text>
          <Text variant="body">
            Product Owner 在桌遊產業有 10
            年的經驗，我們利用這點切入，深入了解桌遊特色，以他的觀點出發，來加強數位平台與桌遊之間結合，發展出獨特性。另一方面也調查了創作者與支持他們的粉絲的互動關係，尋找他們之間的連結性，替平台增加溫度。
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Overview;
