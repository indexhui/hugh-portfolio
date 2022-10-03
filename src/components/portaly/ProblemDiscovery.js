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
} from '@chakra-ui/react';

import { AiOutlineLink } from 'react-icons/ai';

import { Container } from 'components/layouts';

import story01 from 'assets/images/portaly/story01.png';
import lee from 'assets/images/portaly/lee.jpg';
import ig01 from 'assets/images/portaly/ig01.jpg';
import ig02 from 'assets/images/portaly/ig02.jpg';

const ProblemDiscovery = () => {
  return (
    <Container bgColor="white" py="40px">
      <Flex w="100%">
        <Text color="blue.700" variant="title">
          Problem Discovery
        </Text>
      </Flex>
      <Text fontSize="3xl" w="100%" pt="24px">
        <Highlight query="圖像" styles={{ px: '1', py: '1', bg: 'orange.100' }}>
          社群創作者們善於用圖像的力量向受眾傳遞價值
        </Highlight>
        <br />
        <Highlight
          query="文字連結"
          styles={{ px: '1', py: '1', bg: 'orange.100' }}
        >
          現行的 Link-in-Bio 工具僅文字連結限制了創作者的發揮
        </Highlight>
      </Text>
      {/* 從先前專案中發現需求 */}
      <Flex direction="column" py="50px" w="100%">
        <Text color="gray.700" fontWeight="500" letterSpacing="0.2em" pb="20px">
          從先前專案中發現需求
        </Text>
        <Flex w="100%" wrap="wrap">
          <Flex w={{ base: '100%', lg: '50%' }}>
            <VStack pb={{ base: '20px', lg: '0' }}>
              <Image src={story01} />
              <Link
                fontSize="12px"
                variant="main"
                href="https://realengine.com.tw/game/bailee/"
                isExternal
              >
                <HStack>
                  <Text fontSize="12px">李白街頭故事桌遊募資頁</Text>
                  <Icon as={AiOutlineLink} />
                </HStack>
              </Link>
            </VStack>
          </Flex>
          <Flex w={{ base: '100%', lg: '50%' }} align="center">
            <VStack align="flex-start" px="12px">
              <Text variant="body">
                先前與真實引擎公司合作，打造 IP 創作者的募資平台，
              </Text>
              <Text variant="body">
                讓我們有深入了解圖文作家的機會，在與圖文作家的訪談過程中發現:
              </Text>
              <Text variant="body">
                相較募資平台粉絲能不能順利完成付款，他們更煩惱在 IG 的導流狀況
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
      {/* 導流過程 */}
      <Flex direction="column" py="40px" w="100%" align="center">
        <VStack align="flex-start" w="100%">
          <Text color="gray.700" fontWeight="500" letterSpacing="0.2em">
            IG 上的導流不易
          </Text>
          <Text align="left" variant="body">
            大部分的社群平台像是 Instagram 不鼓勵附上過多的外部連結， <br />
            這導致創作者在讓導流過程中會仰賴個人主頁與限時動態 <br />
            因此驅使 Link-in- Bio 工具誕生
          </Text>
        </VStack>
        <Stack
          w="100%"
          direction={{ base: 'column', lg: 'row' }}
          spacing="30px"
          pt="30px"
        >
          <VStack w="100%">
            <Image
              border="2px"
              borderColor="grey.400"
              w="100%"
              rounded="md"
              src={ig01}
            />
            <Text color="grey.800" fontSize="12px">
              IG 貼文不能附上連結
            </Text>
          </VStack>
          <VStack w="100%">
            <Image
              border="2px"
              borderColor="grey.400"
              w="100%"
              rounded="md"
              src={ig02}
            />
            <Text color="grey.800" fontSize="12px">
              個人主頁與限時態動成為連結
            </Text>
          </VStack>
        </Stack>
      </Flex>
      {/* 訪談李白 */}
      <Flex direction="column" py="30px">
        <Text color="gray.700" fontWeight="500" letterSpacing="0.2em" pb="20px">
          訪談中，了解現行的 Link-In-Bio 無法滿足創作者的需求
        </Text>
        <Flex
          direction="column"
          bg="grey.300"
          w="100%"
          py="50px"
          justify="center"
          align="center"
        >
          <Flex justify="center">
            <VStack>
              <Image w="80px" h="80px" src={lee} rounded="full" />
              <Text>街頭故事 李白</Text>
            </VStack>
            <VStack w="70%" spacing="20px">
              <Flex
                w="80%"
                bg="blue.700"
                borderRadius="0 15px 15px 15px"
                p="20px"
              >
                <Text color="white">
                  收入來源有很多種，所以會有很多不一樣的網站、業主，也都會有不一樣的需求。我需要有個地方像抽屜一樣，把我的作品、我提供的服務都整理收集在一起，讓不同需求的人有一個平台來觀看、取得他們需要的資訊
                </Text>
              </Flex>
              <Text>有許多不種類型的連結，需要有效的分區塊安排各個類型</Text>
              <Flex
                w="80%"
                bg="blue.700"
                borderRadius="0 15px 15px 15px"
                p="20px"
              >
                <Text color="white">
                  一般 Link-In-Bio 這種平台或網站，
                  大部分多以文字為主，加上會有很多東西不能己隨心所欲去調整。
                </Text>
              </Flex>
              <Text>對創作者來說他們需要圖文搭配和調整的空間</Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProblemDiscovery;
