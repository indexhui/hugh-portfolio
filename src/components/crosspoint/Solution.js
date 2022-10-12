import {
  Flex,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { Container, SkeletonImage } from 'components/layouts';

import mvp01 from 'assets/images/crosspoint/mvp01.jpg';
import solution01demo01 from 'assets/images/crosspoint/solution01demo01.jpg';
import redesign01 from 'assets/images/crosspoint/redesign01.jpg';

const Solution01 = () => {
  return (
    <>
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          01
        </Flex>
        <Text textStyle="title1" color="white">
          介面層級梳理與優化
        </Text>
      </HStack>
      <HStack w="100%" justify="center" spacing="40px">
        <SkeletonImage src={mvp01} w="40%" rounded="sm" />
        <Text w="40%">
          將介面上的資訊，將資訊劃分成操作層和顯示層，操作層布局為產品識別、階段提示、操作按鈕固定於介面下方。顯示層為主要與檢測者引導以及互動反饋。
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <VStack bgColor="blue.800" p="15px" rounded="md">
          <Flex
            w="100%"
            h="80%"
            rounded="md"
            bgColor="rgba(255,255,255,0.3)"
            align="center"
            px="20px"
          >
            <Text color="white">資訊層</Text>
          </Flex>
          <Flex
            bgColor="rgba(255,255,255,0.5)"
            w="100%"
            h="20%"
            rounded="md"
            align="center"
            px="20px"
          >
            <Text color="blue.800">操作層</Text>
          </Flex>
        </VStack>
        <SkeletonImage src={solution01demo01} rounded="sm" />
      </SimpleGrid>
      <Text maxW="720px" textAlign="center">
        準備頁面為增強沉境感，提升檢測者的專注力，減去準備階段不需要的資訊，以品牌延伸色作為背景色大面積使用，讓使用聚焦於畫面中心。
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <VStack bgColor="blue.800" p="15px" rounded="md">
          <HStack w="100%" h="80%" rounded="md" align="center">
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.2)"
              rounded="md"
            ></Flex>
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.5)"
              align="center"
              justify="center"
              rounded="md"
            >
              <Text textStyle="title0" color="blue.800">
                顯示層
              </Text>
            </Flex>
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.2)"
              rounded="md"
            ></Flex>
          </HStack>
          <Flex
            bgColor="rgba(255,255,255,0.2)"
            w="100%"
            h="20%"
            rounded="md"
            align="center"
            px="20px"
          ></Flex>
        </VStack>
        <SkeletonImage src={redesign01} rounded="sm" />
      </SimpleGrid>
      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </>
  );
};

const Solution = () => {
  return (
    <Container py="40px" bgColor="grey.800" color="white">
      <Flex w="100%" pb="15px">
        <Text textStyle="title0" color="blue.600">
          Approaching a Solution
        </Text>
      </Flex>
      <Solution01 />
    </Container>
  );
};

export default Solution;
