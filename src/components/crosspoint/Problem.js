import { useTranslation } from 'react-i18next';
import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { Container, SkeletonImage } from 'components/layouts';

import discover01 from 'assets/images/crosspoint/discover01.jpg';
import discover02 from 'assets/images/crosspoint/discover02.jpg';

const problemList = [
  {
    title: 'cpProblemDefineTitle01',
    content: 'cpProblemDefineContent01',
  },
  {
    title: 'cpProblemDefineTitle02',
    content: 'cpProblemDefineContent02',
  },
  {
    title: 'cpProblemDefineTitle03',
    content: 'cpProblemDefineContent03',
  },
  {
    title: 'cpProblemDefineTitle04',
    content: 'cpProblemDefineContent04',
  },
];

const ProblemCard = props => {
  const { order, title, content } = props;
  const { t } = useTranslation();

  return (
    <VStack align="flex-start">
      <HStack>
        <Flex
          w="28px"
          h="28px"
          bgColor="gray.800"
          color="white"
          align="center"
          justify="center"
          rounded="md"
        >
          {'0' + order}
        </Flex>
        <Text textStyle="title1">{t(title)}</Text>
      </HStack>
      <Text textStyle="text02">{t(content)}</Text>
    </VStack>
  );
};

const Problem = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container py="40px" bgColor="grey.300">
        <Flex w="100%" pb="15px">
          <Text textStyle="title0">Problem discover</Text>
        </Flex>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={6}
        >
          <GridItem colSpan={2}>
            <Text textStyle="text01" pb="10px">
              {t('cpProblemDiscoverContent')}
            </Text>
            <SkeletonImage rounded="md" src={discover01} />
          </GridItem>
          <GridItem colSpan={2}>
            <SkeletonImage rounded="md" h="100%" src={discover02} />
          </GridItem>
        </Grid>
      </Container>
      <Container py="40px" bgColor="grey.400">
        <Flex w="100%" pb="20px">
          <Text textStyle="title0">Problem define</Text>
        </Flex>
        <SimpleGrid
          w="100%"
          columns={{ base: 1, md: 2, lg: 2 }}
          spacingX="20px"
          spacingY="15px"
        >
          {problemList.map((item, index) => (
            <ProblemCard key={item.title} {...item} order={index + 1} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Problem;
