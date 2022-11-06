import {
  Flex,
  Image,
  Box,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Link,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';

const CurrentProject = () => {
  return (
    <Container py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Current projects</Text>
      </Flex>
      <SimpleGrid
        w="100%"
        columns={{ base: 1, lg: 3 }}
        spacingX="30px"
        spacingY="12px"
        py="20px"
      >
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">UX Navigate</Text>
          <Text textStyle="text04">
            打造 UIUX
            領域自學者的資源指南以及中文網站靈感收集，自己以專案主與開發者身分的
            side project。
          </Text>
          <HStack>
            <Link
              variant="link03"
              href="https://www.uishowreel.com/"
              isExternal
            >
              <Text>前往</Text>
            </Link>
            {/* <Text textStyle="text02">了解故事</Text> */}
          </HStack>
        </VStack>
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">學米 UI 業師諮詢</Text>
          <Text textStyle="text04">
            替轉職與學生 UIUX 學習諮詢，提供作業與履歷建、找出學習盲點。
            諮詢次數 300 次以上，期間幫助多位學生達成就職。
          </Text>
        </VStack>
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">PickUp design 社群經營</Text>
          <Text textStyle="text04">
            PickUp design 為千人的設計師 Line 群，目前負責社群資料庫的規劃
          </Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default CurrentProject;
