import {
  Flex,
  Text,
  Stack,
  VStack,
  HStack,
  Heading,
  Highlight,
  chakra,
  Image,
  Link,
  Icon,
  Grid,
  GridItem,
  useToken,
} from '@chakra-ui/react';

import { AiOutlineLink } from 'react-icons/ai';

import { Container } from 'components/layouts';

import data01 from 'assets/images/portaly/data01.jpg';
import competition from 'assets/images/portaly/competition.png';
import re02 from 'assets/images/portaly/re02.jpg';
import re03 from 'assets/images/portaly/re03.jpg';

const DefineRequirement = () => {
  const [grey600] = useToken('colors', ['grey.600']);

  return (
    <Container bgColor="grey.300" py="40px">
      <Flex w="100%">
        <Text color="blue.700" variant="title">
          Define requirement
        </Text>
      </Flex>
      <Stack w="100%" direction={{ base: 'column', lg: 'row' }} align="center">
        <VStack w="100%" align="flex-center">
          <Text>分析使用者過去相關解決方案產品的經驗</Text>
          <Text>歸納對目前產品未被滿足的痛點</Text>
          <Text>調查對於不同延伸功能的期待程度</Text>
        </VStack>
        <VStack w="100%">
          <Image src={data01} border={`1px solid ${grey600}`} rounded="md" />
          <Text color="grey.600" fontSize="12px">
            需求統計，經過模糊處理
          </Text>
        </VStack>
      </Stack>
      <Grid
        py="30px"
        w="100%"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        <GridItem w="100%">
          <VStack spacing="20px">
            <Text
              w="100%"
              bg="blue.700"
              color="white"
              rounded="xl"
              textAlign="center"
              py="10px"
            >
              市面上具備的
            </Text>
            <VStack align="flex-start">
              <Text>純文字連結按鈕</Text>
              <Text>透過手機完成設定</Text>
              <Text>追蹤點擊成效</Text>
              <Text>更換背景色</Text>
            </VStack>
            <Image maxW="180px" src={competition} />
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="20px">
            <Text
              w="100%"
              bg="orange.500"
              color="white"
              rounded="xl"
              textAlign="center"
              py="10px"
            >
              未被滿足的訴求
            </Text>
            <VStack align="flex-start">
              <Text>圖文配置區塊</Text>
              <Text>區塊多元層級客製化</Text>
              <Text>分頁建置</Text>
              <Text>快速完成設定</Text>
            </VStack>
            <Image src={re02} w="100%" rounded="lg" />
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="20px">
            <Text
              w="100%"
              bg="pink.400"
              color="white"
              rounded="xl"
              textAlign="center"
              py="10px"
            >
              甜蜜點需求
            </Text>
            <VStack align="flex-start">
              <Text>贊助功能</Text>
              <Text>問卷表單問</Text>
              <Text>合作表單</Text>
              <Text>YT、Podcast 區塊</Text>
            </VStack>
            <Image w="100%" src={re03} rounded="lg" />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default DefineRequirement;
