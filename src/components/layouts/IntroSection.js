import { Flex, Text, VStack, Heading, chakra } from '@chakra-ui/react';
import BannerSwiper from 'components/BannerSwiper';

const IntroSection = props => {
  const { title, bannerList, introduction } = props;
  return (
    <Flex
      wrap="wrap"
      direction="column"
      bgColor="blue.800"
      py={{ base: '20px', lg: '32px' }}
      w="100%"
    >
      <Heading variant="banner" textAlign="center" pb="24px">
        <chakra.span fontFamily="'Montserrat'">
          {title.en || 'English title'}
        </chakra.span>
        {title.zh || '中文標題'}
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
            {introduction.map((item, index) => (
              <VStack key={item.title} spacing="2px" align="flex-start">
                <Text variant="bannerTitle">{item.title}</Text>
                <Text variant="bannerText">{item.content}</Text>
              </VStack>
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IntroSection;
