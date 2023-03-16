import {
  Flex,
  Text,
  VStack,
  Grid,
  GridItem,
  Link,
  chakra,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Link as RouterLink } from 'react-router-dom';

import { Container, Span } from 'components/layouts';
import ExperienceCard from './ExperienceCard';

import institute from 'assets/images/about/institute.jpg';
import real from 'assets/images/about/real.jpg';
import crosspoint from 'assets/images/about/crosspoint.jpg';
import sov from 'assets/images/about/sov.jpg';

const InstituteContent = () => {
  const { t } = useTranslation();
  return (
    <VStack align="flex-start" w="100%" pt="12px" spacing="0px">
      <UnorderedList>
        <ListItem textStyle="text02">
          <Span>{t('ex01Content01_1')}</Span>
          <Link
            fontWeight="400"
            variant="link02"
            textStyle="text02"
            href="https://zinstitute.net/zh"
            isExternal
          >
            <chakra.span
              as="span"
              mx="4px"
              borderBottom="2px solid"
              borderColor="blue.500"
            >
              {t('ex01Content01_2')}
            </chakra.span>
          </Link>
          <Span> {t('ex01Content01_3')}</Span>
        </ListItem>
        <ListItem textStyle="text02">
          <Span>{t('ex01Content02')}</Span>
        </ListItem>
        <ListItem textStyle="text02">
          <Span>{t('ex01Content03')}</Span>
        </ListItem>
        <ListItem textStyle="text02">
          <Span>{t('ex01Content04')}</Span>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

const RealContent = () => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      align="flex-start"
      w="100%"
      pt="12px"
      color="grey.800"
      textStyle="text02"
    >
      <Text color="grey.800" fontWeight="300">
        {t('ex02Content01')}
      </Text>
      <UnorderedList>
        <ListItem textStyle="text02">
          <Link
            fontWeight="400"
            variant="link02"
            as={RouterLink}
            to="/realengine"
            // borderBottom="2px solid"
            // borderColor="blue.500"
            color="blue.700"
          >
            {t('ex02Content02_1')}
          </Link>
          <Span> &nbsp; {t('ex02Content02_2')}</Span>
        </ListItem>
        <ListItem textStyle="text02">
          <Link fontWeight="400" variant="link02" as={RouterLink} to="/portaly">
            <chakra.span as="span" color="blue.700">
              {t('ex02Content03_1')}
            </chakra.span>
          </Link>
          <Span> &nbsp; {t('ex02Content03_2')}</Span>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

const CrosspointContent = () => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      align="flex-start"
      w="100%"
      pt="12px"
      color="grey.800"
      textStyle="text02"
    >
      <Text color="grey.800" fontWeight="300">
        {t('ex03Content03_1')}
      </Text>
      <UnorderedList>
        <ListItem textStyle="text02">
          <Text textStyle="text02">{t('ex03Content03_2')}</Text>
        </ListItem>
        <ListItem textStyle="text02">
          <Text textStyle="text02">{t('ex03Content03_3')}</Text>
        </ListItem>
        <ListItem textStyle="text02">
          <Text textStyle="text02">{t('ex03Content03_4')}</Text>
        </ListItem>
        <ListItem textStyle="text02">
          <Text textStyle="text02">{t('ex03Content03_5')}</Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

const SovContent = () => {
  const { t } = useTranslation();
  return (
    <VStack
      align="flex-start"
      w="100%"
      pt="12px"
      color="grey.800"
      textStyle="text02"
    >
      <Box
        w="100%"
        color="grey.800"
        fontWeight="300"
        spacing="0"
        lineHeight="1.75"
      >
        <chakra.span color="grey.800" fontWeight="300">
          {t('ex03Content03_1')}
        </chakra.span>
        {/* <Link
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
        </chakra.span> */}
      </Box>
    </VStack>
  );
};

const experienceList = [
  {
    image: institute,
    company: 'ex01Company',
    title: 'ex01Title',
    time: 'Feb 2022 - May 2022 · 4 mos',
    isDesign: false,
    tag: ['React'],
    content: <InstituteContent />,
  },
  {
    image: real,
    company: 'ex02Company',
    title: 'ex02Title',
    time: 'Nov 2020 - Jan 2021 · 3 mos',
    isDesign: true,
    tag: ['creator', 'freelance'],
    content: <RealContent />,
  },
  {
    image: crosspoint,
    company: 'ex03Company',
    title: 'ex03Title',
    time: 'Feb 2019 - Aug 2021 · 2 ys 7 mos',
    isDesign: true,
    tag: ['AI', 'sport', 'health'],
    content: <CrosspointContent />,
  },
  {
    image: sov,
    company: 'ex04Company',
    title: 'ex04Title',
    time: 'Feb 2018  - Feb 2019 · 1 ys',
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
