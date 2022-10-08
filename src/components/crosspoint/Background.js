import { Flex, Text, VStack, Box, SimpleGrid, Image } from '@chakra-ui/react';

import bgImage from 'assets/images/crosspoint/bgImage.jpg';

import { Container, SkeletonImage } from 'components/layouts';

const Background = () => {
  return (
    <Container bgColor="grey.400" py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Background</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX="30px" spacingY="12px">
        <Flex align="center">
          <Text textStyle="text02">
            初代產品是由團隊與上海康復中心物理治療師開發合作，讓院內物理治療師為會員進行檢測。
            2019年政府對運動產業推動與台灣健身產業日漸盛行，團隊迎來快速成長的機會。隨著產品優化的和新功能開發壓力下，創辦人尋找產品設計師加入。而我正尋找能快速衝刺的新創環境，在朋友的引薦下加入
            Crosspoint 。
          </Text>
        </Flex>
        <SkeletonImage w="100%" src={bgImage} rounded="md" />
      </SimpleGrid>
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Task</Text>
      </Flex>
    </Container>
  );
};

export default Background;
