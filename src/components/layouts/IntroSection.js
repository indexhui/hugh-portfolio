import { useTranslation } from 'react-i18next';
import { Flex, Text, VStack, Heading, chakra } from '@chakra-ui/react';
import BannerSwiper from 'components/BannerSwiper';

const IntroSection = props => {
  const { title, subTitle, bannerList, introduction } = props;
  const { t } = useTranslation();

  return (
    <Flex
      wrap="wrap"
      direction="column"
      bgColor="blue.800"
      py={{ base: '20px', lg: '32px' }}
      w="100%"
    >
      <VStack pb="24px" spacing="12px">
        <Heading variant="banner" textAlign="center">
          <chakra.span fontFamily="'Montserrat'">
            {t(title?.en) || 'English title'}
          </chakra.span>
          {t(title?.zh) || '中文標題'}
        </Heading>
        <Text color="gray.200" textAlign="center" fontWeight="300">
          {t(subTitle) || '產品類型介紹'}
        </Text>
      </VStack>
      <Flex wrap="wrap" w="100%" align="center">
        {bannerList && <BannerSwiper bannerList={bannerList} />}
        <Flex
          w={{ base: '100%', lg: '37.5%' }}
          justify={{ base: 'flex-start', lg: 'center' }}
        >
          <VStack
            py={{ base: '20px', lg: '0' }}
            align="flex-start"
            px="22px"
            spacing="20px"
          >
            {introduction &&
              introduction?.map((item, index) => (
                <VStack key={item.title} spacing="2px" align="flex-start">
                  <Text variant="bannerTitle">{t(item.title)}</Text>
                  <Text variant="bannerText">{t(item.content)}</Text>
                </VStack>
              ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IntroSection;
