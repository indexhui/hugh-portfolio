import {
  Flex,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Container, SkeletonImage } from 'components/layouts';

import mvp01 from 'assets/images/crosspoint/mvp01.jpg';
import mvp02 from 'assets/images/crosspoint/mvp02.jpg';
import redesign01 from 'assets/images/crosspoint/redesign01.jpg';
import redesign02 from 'assets/images/crosspoint/redesign02.jpg';

const RedesignIntro = () => {
  return (
    <Container bgColor="blue.800" py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0" color="white">
          Redesign MVP Product
        </Text>
      </Flex>
      <Text textStyle="text01" color="whiteAlpha.900">
        檢測系統 MVP
        最初是建立在特定康復產館的服務，即便熟悉產品操作的復健師存在許多易用性問題與資訊架構混亂需重新規劃
      </Text>
      <VStack justify="flex" align="flex-start" py="20px">
        <Text color="white"> MVP 改版前</Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="30px"
          spacingY="12px"
        >
          <VStack>
            <SkeletonImage src={mvp01} rounded="md" />
            <Text color="whiteAlpha.800">靜態評估</Text>
          </VStack>
          <VStack>
            <SkeletonImage src={mvp02} rounded="md" />
            <Text color="whiteAlpha.800">分析報告</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
      <Divider />
      <VStack justify="flex" align="flex-start" py="20px">
        <Text color="white">Redesign</Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="30px"
          spacingY="12px"
        >
          <VStack>
            <SkeletonImage src={redesign01} rounded="md" />
            <Text color="whiteAlpha.800">靜態評估</Text>
          </VStack>
          <VStack>
            <SkeletonImage src={redesign02} rounded="md" />
            <Text color="whiteAlpha.800">分析報告</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RedesignIntro;
