import { Flex, Text, VStack, Heading } from '@chakra-ui/react';
import BannerSwiper from 'components/BannerSwiper';
import banner01 from 'assets/images/realengine/banner01.jpg';

const bannerList = [banner01, banner01, banner01];

const Intro = () => {
  return (
    <Flex>
      <BannerSwiper bannerList={bannerList} />
      <VStack w="37.5%" align="flex-start" px="32px" spacing="20px">
        <Heading size="lg">IP 桌遊募資平台</Heading>
        <Text>Real Engine 真實引擎</Text>
        <VStack spacing="2px" align="flex-start">
          <Text color="grey.600" fontSize="14px">
            Background
          </Text>
          <Text>
            綿羊犬有著 10 年桌上遊戲品牌經驗，這次與有著豐富資訊設計的經驗 Re:
            lab ，打造專屬給IP創作者的桌遊牧資平台。
          </Text>
        </VStack>
        <VStack spacing="2px" align="flex-start">
          <Text color="grey.600" fontSize="14px">
            專案時辰 / 時間
          </Text>
          <Text>3個月 / November 2021 - January 2022</Text>
        </VStack>
        <VStack spacing="2px" align="flex-start">
          <Text color="grey.600" fontSize="14px">
            團隊成員
          </Text>
          <Text>PM XXX ,Developer Renddie, Product Designer Hugh</Text>
        </VStack>
        <VStack spacing="2px" align="flex-start">
          <Text color="grey.600" fontSize="14px">
            我的腳色
          </Text>
          <Text>Product Designer</Text>
        </VStack>
        <VStack spacing="2px" align="flex-start">
          <Text color="grey.600" fontSize="14px">
            負責項目
          </Text>
          <Text>架構規劃、功能流程規劃、設計完稿、工程交付</Text>
        </VStack>
      </VStack>
    </Flex>
  );
};
export default Intro;
