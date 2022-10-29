import {
  Flex,
  Text,
  VStack,
  HStack,
  Heading,
  Highlight,
  Image,
  Link,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { AiOutlineLink } from 'react-icons/ai';

import { Container } from 'components/layouts';

import designIntro01 from 'assets/images/portaly/designIntro01.jpg';
import designIntro02 from 'assets/images/portaly/designIntro02.jpg';
import designIntro03 from 'assets/images/portaly/designIntro03.jpg';
import designBlock01 from 'assets/images/portaly/designBlock01.jpg';
import designBlock02 from 'assets/images/portaly/designBlock02.jpg';
import designBlock03 from 'assets/images/portaly/designBlock03.jpg';
import designFeature01 from 'assets/images/portaly/designFeature01.jpg';
import designFeature02 from 'assets/images/portaly/designFeature02.jpg';
import designFeature03 from 'assets/images/portaly/designFeature03.jpg';
// import competition from 'assets/images/portaly/competition.png';
// import re02 from 'assets/images/portaly/re02.jpg';
// import re03 from 'assets/images/portaly/re03.jpg';
const Feature = () => {
  return (
    <Flex w="100%" direction="column" pt="30px">
      <VStack align="flex-start">
        <Text fontWeight="500" fontSize="18px">
          進階功能
        </Text>
        <Text variant="body">
          創作者的產出越來越多元，支援 Youtube、Podcast 嵌入，提供內容更好的呈現
          <br />
          合作洽詢與小額贊助功能讓創作者可以更仰賴工具的生態，增加使用上的黏濁度
        </Text>
      </VStack>
      <Grid
        py="10px"
        w="100%"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designFeature01}
            />
            <Text textStyle="note">podcast、youtube 嵌入</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designFeature03}
            />
            <Text textStyle="note">合作洽詢</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designFeature02}
            />
            <Text textStyle="note">贊助功能</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Block = () => {
  return (
    <Flex w="100%" direction="column" pt="30px">
      <VStack align="flex-start">
        <Text fontWeight="500" fontSize="18px">
          四種版型區塊
        </Text>
        <Text variant="body">
          滿足創作者對於圖片的需求外，
          <br />
          我設計了四種圖文版型讓創作者可以依據資訊層級不同近來客製化的版型，增加版面變化和重要的層級運用
        </Text>
      </VStack>
      <Grid
        py="10px"
        w="100%"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designBlock01}
            />
            <Text textStyle="note">大型方塊</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designBlock02}
            />
            <Text textStyle="note">橫型方塊、純文字、兩格方格</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing="5px">
            <Image
              rounded="md"
              border="1px solid"
              borderColor="grey.500"
              src={designBlock03}
            />
            <Text textStyle="note">長型、橫型方塊可設定輪播</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Solution = () => {
  return (
    <Container bgColor="white" py="40px">
      <Flex w="100%" pb="20px">
        <Text color="blue.700" variant="title">
          Approaching a Solution
        </Text>
      </Flex>
      {/* 個人介紹 */}
      <Flex w="100%" direction="column">
        <VStack align="flex-start">
          <Text fontWeight="500" fontSize="18px">
            個人介紹
          </Text>
          <Text>強化分享功能、社群連結增加方便度</Text>
        </VStack>
        <Grid
          py="10px"
          w="100%"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
        >
          <GridItem w="100%">
            <VStack spacing="5px">
              <Image
                rounded="md"
                border="1px solid"
                borderColor="grey.500"
                src={designIntro01}
              />
              <Text textStyle="note">個人介紹區域</Text>
            </VStack>
          </GridItem>
          <GridItem w="100%">
            <VStack spacing="5px">
              <Image
                rounded="md"
                border="1px solid"
                borderColor="grey.500"
                src={designIntro02}
              />
              <Text textStyle="note">二維碼分享</Text>
            </VStack>
          </GridItem>
          <GridItem w="100%">
            <VStack spacing="5px">
              <Image
                rounded="md"
                border="1px solid"
                borderColor="grey.500"
                src={designIntro03}
              />
              <Text textStyle="note">提供社群連結搭配</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Flex>
      <Block />
      <Feature />
    </Container>
  );
};

export default Solution;
