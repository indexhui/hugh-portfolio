import { Flex, Text, VStack, SimpleGrid, Divider } from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

import iteration01 from 'assets/images/crosspoint/iteration01.jpg';
import iteration02 from 'assets/images/crosspoint/iteration02.jpg';
import iteration03 from 'assets/images/crosspoint/iteration03.jpg';
import iteration04 from 'assets/images/crosspoint/iteration04.jpg';
import iteration05 from 'assets/images/crosspoint/iteration05.jpg';
import iteration06 from 'assets/images/crosspoint/iteration06.jpg';
import iteration07 from 'assets/images/crosspoint/iteration07.jpg';
import iteration08 from 'assets/images/crosspoint/iteration08.jpg';
import iteration09 from 'assets/images/crosspoint/iteration09.jpg';
import iteration10 from 'assets/images/crosspoint/iteration10.jpg';
import iteration11 from 'assets/images/crosspoint/iteration11.jpg';

const Iterations = () => {
  return (
    <>
      <Container bgColor="blue.700" color="white" py="40px" pb="10px">
        <Flex w="100%" pb="20px">
          <Text textStyle="title0" color="white">
            How we Iterations & Iterations approach
          </Text>
        </Flex>
        <Flex w="100%">
          <Text textStyle="title0" color="white">
            持續的迭代，該迭代什麼，而我們是透過下列四個機會，作為我們功能迭代的重要依據
          </Text>
        </Flex>
        <VStack w="100%" align="flex-start" spacing="2px" py="10px">
          <Text textStyle="text02" color="whiteAlpha.900">
            1.用戶回饋:持續收集合作場館的體驗回饋與功能需求，收斂並規劃 Roadmap
            。
          </Text>
          <Text textStyle="text02" color="whiteAlpha.900">
            2.實體觀察:與場館主約定時間實際到健身房現場觀察教練如何運用
            Crosspoint 替客人完成服務（從引導說明、進行解說、推薦個人規劃課程）
          </Text>
          <Text textStyle="text02" color="whiteAlpha.900">
            3.專家訪談: 訪問業界的經理人與場館經營者，收集對於業界重要的戰略目標
          </Text>
          <Text textStyle="text02" color="whiteAlpha.900">
            4.戰略合作夥伴: 醫療領域(聯新運醫)、運動器材領域(InBody
            身體組成檢測)合作機會，促使新功能開發的可能性
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacingX="30px"
          spacingY="12px"
          py="20px"
        >
          <VStack>
            <SkeletonImage w="100%" src={iteration01} rounded="md" />
            <Text>在 Rizap 線下實體觀察</Text>
          </VStack>
          <VStack>
            <SkeletonImage w="100%" src={iteration02} rounded="md" />
            <Text>與聯新運醫開發跳躍動作檢測</Text>
          </VStack>
          <VStack>
            <SkeletonImage src={iteration03} rounded="md" />
            <Text>InBody 合作串接身體組成 API</Text>
          </VStack>
        </SimpleGrid>
        <Divider my="20px" />
        <VStack w="100%" align="flex-start" pt="20px">
          <Text>
            根據用戶回饋與專家訪談上收斂，促使開發功能:
            會員問卷、部位數據、客戶數據分析
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacingX="30px"
          spacingY="12px"
          py="40px"
          pt="12px"
        >
          <VStack>
            <SkeletonImage w="100%" src={iteration04} rounded="md" />
          </VStack>
          <VStack>
            <SkeletonImage w="100%" src={iteration05} rounded="md" />
          </VStack>
          <VStack>
            <SkeletonImage src={iteration06} rounded="md" />
          </VStack>
        </SimpleGrid>
        <VStack w="100%" align="flex-start">
          <Text>
            根據場館需求加深品牌感，進而增強檢測設備帶來的專業度讓場館會員對場館增加信賴
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacingX="30px"
          spacingY="12px"
          py="40px"
          pt="12px"
        >
          <VStack>
            <SkeletonImage w="100%" src={iteration07} rounded="md" />
          </VStack>
          <VStack>
            <SkeletonImage w="100%" src={iteration08} rounded="md" />
          </VStack>
          <VStack>
            <SkeletonImage src={iteration09} rounded="md" />
          </VStack>
        </SimpleGrid>
        <VStack w="100%" align="flex-start">
          <Text maxW="800px">
            提供場館物理治療師講座，讓場館旗下教練更加熟悉身體醫學科學並了解如何透過
            Crosspoint AI 向會員進行報告解說與安排訓練菜單
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacingX="30px"
          spacingY="12px"
          py="20px"
          pt="12px"
        >
          <VStack>
            <SkeletonImage w="100%" src={iteration10} rounded="md" />
          </VStack>
          <VStack>
            <SkeletonImage w="100%" src={iteration11} rounded="md" />
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Iterations;
