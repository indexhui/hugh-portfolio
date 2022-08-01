import { Flex, Text, VStack, Heading, chakra } from '@chakra-ui/react';
import BannerSwiper from 'components/BannerSwiper';
import banner01 from 'assets/images/realengine/banner01.jpg';
import banner02 from 'assets/images/realengine/banner02.jpg';

const bannerList = [banner01, banner02, banner01];

const Intro = () => {
  return (
    <Flex
      wrap="wrap"
      direction="column"
      bgColor="blue.800"
      py={{ base: '20px', lg: '32px' }}
      w="100%"
    >
      <Heading variant="banner" textAlign="center" pb="24px">
        <chakra.span fontFamily="'Montserrat'">Real Engine </chakra.span>
        真實引擎
      </Heading>
      <Flex wrap="wrap" w="100%" align="center">
        <BannerSwiper bannerList={bannerList} />
        <Flex
          w={{ base: '100%', lg: '37.5%' }}
          justify={{ base: 'flex-start', lg: 'center' }}
        >
          <VStack
            py={{ base: '20px', lg: '0' }}
            // w="100%"
            // w={{ base: '100%', lg: '37.5%' }}
            align="flex-start"
            px="22px"
            spacing="20px"
          >
            <VStack spacing="2px" align="flex-start">
              <Text variant="bannerTitle">專案時辰 / 時間</Text>
              <Text variant="bannerText">
                3個月 / November 2021 - January 2022
              </Text>
            </VStack>
            <VStack spacing="2px" align="flex-start">
              <Text variant="bannerTitle">我的角色</Text>
              <Text variant="bannerText">產品設計師</Text>
            </VStack>
            <VStack spacing="2px" align="flex-start">
              <Text variant="bannerTitle">團隊組成</Text>
              <Text variant="bannerText">PO x1, Developer x1 ,Designer x1</Text>
            </VStack>
            <VStack spacing="2px" align="flex-start">
              <Text variant="bannerTitle">工作範疇</Text>
              <Text variant="bannerText">
                架構規劃、功能流程規劃、設計完稿、工程交付
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Intro;
