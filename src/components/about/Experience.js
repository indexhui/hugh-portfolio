import {
  Flex,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Link,
  chakra,
  Box,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { Container } from 'components/layouts';
import ExperienceCard from './ExperienceCard';

import institute from 'assets/images/about/institute.jpg';
import real from 'assets/images/about/real.jpg';
import crosspoint from 'assets/images/about/crosspoint.jpg';
import sov from 'assets/images/about/sov.jpg';

const InstituteContent = () => {
  return (
    <VStack align="flex-start" w="100%" pt="12px">
      <Box>
        <chakra.span>任職期間，製作</chakra.span>
        <Link
          fontWeight="400"
          variant="link02"
          href="https://zinstitute.net/zh"
          isExternal
        >
          <chakra.span
            as="span"
            borderBottom="2px solid"
            borderColor="blue.600"
          >
            互動式特效官網
          </chakra.span>
        </Link>
        <chakra.span>
          ，串接表單等功能並建構 CSV
          內容管理流程，並以網站熱點圖分析工具優化資訊安排。開發 React
          前端工程師 Web 3 開發實戰班課程教材模板。
        </chakra.span>
      </Box>
    </VStack>
  );
};

const RealContent = () => {
  return (
    <VStack align="flex-start" w="100%" pt="12px" color="grey.800">
      <Text color="grey.800" fontWeight="300">
        以顧問合作關係擔任產品設計師，前後協助規劃與設計了兩款產品的MVP。
        綜合使用者體驗和市場規劃產品策略，定義核心設計元件庫系統與操作模式。
      </Text>
      <Link
        fontWeight="400"
        variant="link02"
        as={RouterLink}
        to="/realengine"
        borderBottom="2px solid"
        borderColor="blue.600"
      >
        Real Engine 真實引擎 : IP創作者桌遊平台
      </Link>
      <Link fontWeight="400" variant="link02" as={RouterLink} to="/portaly">
        <chakra.span as="span" borderBottom="2px solid" borderColor="blue.600">
          Portaly 傳送門 : Link-in-Bio 輕型個人網站工具
        </chakra.span>
      </Link>
    </VStack>
  );
};

const CrosspointContent = () => {
  return (
    <VStack align="flex-start" w="100%" pt="12px" color="grey.800">
      <Text color="grey.800" fontWeight="300">
        團隊首位設計師，建立從需求探索到工程與設計的協作流程。定義了品牌識別以及設計系統分別用於檢測系統與
        SaaS 工具服務。負責增加場館對於檢測體驗的價值需求。
      </Text>
      <HStack color="grey.800" fontWeight="300" spacing="0">
        <Text color="grey.800" fontWeight="300">
          我設計的範圍有
        </Text>
        <Link
          fontWeight="400"
          variant="link02"
          as={RouterLink}
          to="/crosspoint"
          borderBottom="2px solid"
          borderColor="blue.600"
        >
          <HStack spacing="0">
            <chakra.span as="span">檢測服務</chakra.span>
          </HStack>
        </Link>
        <Text color="grey.800" fontWeight="300">
          、問卷系統、CRM、Ｃ端用戶報告與小程序。
        </Text>
      </HStack>
    </VStack>
  );
};

const SovContent = () => {
  return (
    <VStack align="flex-start" w="100%" pt="12px" color="grey.800">
      <Box
        w="100%"
        color="grey.800"
        fontWeight="300"
        spacing="0"
        lineHeight="1.75"
      >
        <chakra.span color="grey.800" fontWeight="300">
          導入使用者體驗中心來改善系統操作，建立起
        </chakra.span>
        <Link
          display="inline"
          variant="link02"
          href="https://www.behance.net/gallery/71249629/SOV-website-UXUI-Design"
          isExternal
        >
          <chakra.span
            as="span"
            mx="5px"
            fontWeight="400"
            borderBottom="2px solid"
            borderColor="blue.600"
          >
            官網新形象
          </chakra.span>
        </Link>
        <chakra.span color="grey.800" fontWeight="300">
          和規劃CRM系統，特別是規劃牙醫診所、牙技師、業務、病患溝通整合工具。
        </chakra.span>
      </Box>
    </VStack>
  );
};

const experienceList = [
  {
    image: institute,
    company: 'The Z Institute 區塊鏈線上學院',
    title: '前端工程師',
    time: '2022 Feb - May 2022  4 mos',
    isDesign: false,
    tag: ['React'],
    content: <InstituteContent />,
  },
  {
    image: real,
    company: 'Real Engine 真實引擎',
    title: '產品設計師(顧問)',
    time: '2020 Jan - 2021 Mar  6 mos',
    isDesign: true,
    tag: ['creator', 'freelance'],
    content: <RealContent />,
  },
  {
    image: crosspoint,
    company: 'Crosspoint  AI 檢測',
    title: '產品設計師',
    time: '2019 Feb - 2021 Aug.  2 ys',
    isDesign: true,
    tag: ['AI', 'sport', 'health'],
    content: <CrosspointContent />,
  },
  {
    image: sov,
    company: 'SOV 舒服美',
    title: 'UIUX 設計師',
    time: '2019 Feb - 2021 Aug.  2 ys',
    isDesign: true,
    tag: ['health'],
    content: <SovContent />,
  },
];

const Experience = () => {
  return (
    <Container bgColor="white" py="40px">
      <Grid
        w="100%"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
        py="20px"
      >
        <GridItem colSpan={1}>
          <Flex position="sticky" top="60px">
            <Text textStyle="title0">Experience</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <VStack spacing="40px">
            {experienceList.map((item, index) => (
              <ExperienceCard key={item.title} {...item} />
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Experience;
