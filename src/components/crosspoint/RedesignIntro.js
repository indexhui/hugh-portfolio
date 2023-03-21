import { useTranslation } from 'react-i18next';

import { Flex, Text, VStack, SimpleGrid, Divider } from '@chakra-ui/react';
import { Container, SkeletonImage } from 'components/layouts';

import mvp01 from 'assets/images/crosspoint/mvp01.jpg';
import mvp02 from 'assets/images/crosspoint/mvp02.jpg';
import redesign01 from 'assets/images/crosspoint/redesign01.jpg';
import redesign02 from 'assets/images/crosspoint/redesign02.jpg';

const RedesignIntro = () => {
  const { t } = useTranslation();

  return (
    <Container bgColor="blue.800" py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0" color="white">
          Redesign MVP Product
        </Text>
      </Flex>
      <Text textStyle="text01" color="whiteAlpha.900">
        {t('cpRedesignIntro')}
      </Text>
      <VStack justify="flex" align="flex-start" py="20px">
        <Text color="white">{t('cpRedesignBefore')}</Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="30px"
          spacingY="12px"
        >
          <VStack>
            <SkeletonImage src={mvp01} rounded="md" />
            <Text color="whiteAlpha.800">{t('cpStaticDetection')}</Text>
          </VStack>
          <VStack>
            <SkeletonImage src={mvp02} rounded="md" />
            <Text color="whiteAlpha.800">{t('cpAnalysisReport')}</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
      <Divider />
      <VStack justify="flex" align="flex-start" py="20px">
        <Text color="white">{t('cpRedesignAfter')}</Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="30px"
          spacingY="12px"
        >
          <VStack>
            <SkeletonImage src={redesign01} rounded="md" />
            <Text color="whiteAlpha.800">靜態評估</Text>
          </VStack>
          <VStack>
            <SkeletonImage src={redesign02} rounded="md" />
            <Text color="whiteAlpha.800">分析報告</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RedesignIntro;
