import {
  Flex,
  Image,
  Box,
  Text,
  VStack,
  SimpleGrid,
  HStack,
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
          <Text textStyle="text02">
            打造UIUX 領域自學者的資源指南以及中文網站靈感收集
          </Text>
          <HStack>
            <Text textStyle="text02">前往</Text>
            <Text textStyle="text02">了解故事</Text>
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
          <Text textStyle="text02">
            在學米擔任業師，提供學生作品上的建議與職涯解惑
          </Text>
          <Text textStyle="text02">諮詢次數: 300</Text>
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
          <Text textStyle="text02">
            在學米擔任業師，提供學生作品上的建議與職涯解惑
          </Text>
          <Text textStyle="text02">諮詢次數: 300</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default CurrentProject;
