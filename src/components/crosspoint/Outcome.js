import {
  Flex,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

import outcome01 from 'assets/images/crosspoint/outcome01.jpg';
import outcome02 from 'assets/images/crosspoint/outcome02.jpg';
import outcome03 from 'assets/images/crosspoint/outcome03.jpg';

const Outcome = () => {
  return (
    <>
      <Container bgColor="grey.100" py="40px" pb="10px">
        <Flex w="100%" pb="20px">
          <Text textStyle="title0">Outcome</Text>
        </Flex>
        <Flex w="100%">
          <Text textStyle="title0" color="grey.800">
            在大型運動展覽嶄露改版成效
          </Text>
        </Flex>
        <Text textStyle="text01">
          檢測版本 Redesign 與 SaaS系統
          一同上線，並與聯新運醫的合作計劃中參與了台灣運動產業博覽會，在展場攤位上，讓民眾檢測並預約聯新運醫的體驗課程。三天的活動讓聯新運醫接觸了了
          800 多位參展民眾並完成體驗預約。
        </Text>
        <Text textStyle="text01">
          活動當下檢測服務由我方與聯新運醫輪流進行，讓我和團隊成員有機會以操作者(教練)的身分實際使用替民眾進行檢測，藉此收集改版後的體驗問題作為迭代依據。
        </Text>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacingX="30px"
          spacingY="12px"
          py="20px"
        >
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacingX="30px"
            spacingY="12px"
          >
            <SkeletonImage w="100%" src={outcome01} rounded="md" />
            <SkeletonImage w="100%" src={outcome02} rounded="md" />
          </SimpleGrid>
          <SkeletonImage
            h="100%"
            objectFit="cover"
            src={outcome03}
            rounded="md"
          />
        </SimpleGrid>
      </Container>
      <Container bgColor="grey.100" my="0px" pb="40px">
        <Grid
          w="100%"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={10}
        >
          <GridItem
            colSpan={1}
            border="1px solid"
            borderColor="grey.500"
            p="15px"
            rounded="md"
          >
            <VStack w="100%" align="flex-start" spacing="20px">
              <Flex w="100%" justify="space-between" align="flex-end">
                <Text textStyle="title1" color="grey.700">
                  產品數據成效
                </Text>
                <Text fontSize="12px" color="gray.500">
                  －來自後台數據
                </Text>
              </Flex>
              <VStack w="100%" align="flex-start" spacing="2px">
                <Text>70 間海內外運動場館所使用</Text>
                <Text>每月 3000分檢測報告</Text>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={2}
            border="1px solid"
            borderColor="grey.500"
            p="15px"
            rounded="md"
          >
            <VStack w="100%" align="flex-start" spacing="20px">
              <Flex w="100%" justify="space-between" align="flex-end">
                <Text textStyle="title0" color="grey.800">
                  首月對健身房營收成效
                </Text>
                <Text fontSize="12px" color="gray.500">
                  －來自場館經理人 Simon 回饋
                </Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <VStack align="flex-start" w="50%">
                  <Text>成交產值</Text>
                  <Flex w="100%" justify="space-between" pr="20px">
                    <Text>因檢測而預約體驗</Text>
                    <Text>$64896</Text>
                  </Flex>
                </VStack>
                <VStack align="flex-start" w="50%">
                  <Text>成交產值</Text>
                  <Flex w="100%" justify="space-between">
                    <Text>因檢測而預約體驗</Text>
                    <Text>$251180</Text>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Outcome;
