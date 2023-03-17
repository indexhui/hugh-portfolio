import { useTranslation } from 'react-i18next';
import { Flex, Text, VStack, SimpleGrid } from '@chakra-ui/react';

import { Container } from 'components/layouts';
import WorkCard from 'components/WorkCard';

import womany from 'assets/images/works/womany.jpg';
import taiwanbar from 'assets/images/works/taiwanbar.jpg';
import school from 'assets/images/works/school.jpg';

const workList = [
  {
    title: 'freelanceWork01',
    link: 'https://www.behance.net/gallery/64428637/-womany-EC-showcase',
    image: womany,
    linear: 'linear-gradient(0deg, #615A7E 0%, rgba(105, 80, 176, 0) 100%)',
  },
  {
    title: 'freelanceWork02',
    link: 'https://www.behance.net/gallery/51615403/2017',
    image: taiwanbar,
    linear: 'linear-gradient(0deg, #654404 0%, rgba(182, 144, 9, 0) 100%)',
  },
  {
    title: 'freelanceWork03',
    link: 'https://dribbble.com/shots/4446605-UI-Design-for-English-School-Website',
    image: school,
    linear: 'linear-gradient(0deg, #002B46 0%, rgba(9, 80, 125, 0) 100%)',
  },
];

const FreelanceWork = () => {
  const { t } = useTranslation();

  return (
    <Flex
      pt={{ base: '32px', lg: '60px' }}
      bgColor="white"
      bgImage="radial-gradient(#bfbfbf 0.5px, transparent 0.5px), radial-gradient(#bfbfbf 0.5px, white 0.5px)"
      bgSize="20px 20px"
    >
      <Container>
        <VStack w="100%" pb="20px" spacing="5px">
          <Text textStyle="heading01">Freelance Work</Text>
          <Text textStyle="text03" textAlign="center" maxW="700px">
            {t('freelanceIntro')}
            {/* 2017 全職自由接案者約一年左右，
            <br />
            合作過的對象和公司有女人迷、台灣吧、UX設計師 Jenny Shen */}
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

export default FreelanceWork;
