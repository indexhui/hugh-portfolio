import { useTranslation } from 'react-i18next';

import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Link,
  AspectRatio,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';
import WorkCard from 'components/WorkCard';

import z from 'assets/images/works/z.jpg';
import samurai from 'assets/images/works/samurai.jpg';
import gold from 'assets/images/works/gold.jpg';

const workList = [
  {
    title: 'frontendWork01',
    link: 'https://zinstitute.net/zh',
    image: z,
    linear: 'linear-gradient(0deg, #01FEA050 0%, rgba(105, 80, 176, 0) 100%)',
  },
  {
    title: 'frontendWork02',
    link: 'https://yamato.katanansamurai.art/',
    image: samurai,
    linear: 'linear-gradient(0deg, #654404 0%, rgba(182, 144, 9, 0) 100%)',
  },
  {
    title: 'frontendWork03',
    link: 'https://www.mineartfestival.com/',
    image: gold,
    linear: 'linear-gradient(0deg, #002B46 0%, rgba(9, 80, 125, 0) 100%)',
  },
];

const FrontendWork = () => {
  const { t } = useTranslation();

  return (
    <Flex
      py={{ base: '32px', lg: '48px' }}
      pb={{ base: '48px', lg: '72px' }}
      bgColor="white"
      bgImage="radial-gradient(#bfbfbf 0.5px, transparent 0.5px), radial-gradient(#bfbfbf 0.5px, white 0.5px)"
      bgSize="20px 20px"
    >
      <Container>
        <VStack w="100%" pb="20px" spacing="5px">
          <Text textStyle="heading01">Front-end Works</Text>
          <Text textStyle="text03" textAlign="center" maxW="700px">
            {t('frontendIntro')}
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          w="100%"
          spacingX="24px"
          spacingY="12px"
        >
          {workList.map(item => (
            <WorkCard key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default FrontendWork;
