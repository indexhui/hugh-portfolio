import { Flex, Text, VStack, SimpleGrid, HStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/layouts';

const CurrentProject = () => {
  const { t } = useTranslation();
  return (
    <Container py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Current projects</Text>
      </Flex>
      <SimpleGrid
        w="100%"
        columns={{ base: 1, lg: 3 }}
        spacingX="30px"
        spacingY="12px"
        py="20px"
      >
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">{t('currentProject01Name')}</Text>
          <Text textStyle="text04">{t('currentProject01Content')}</Text>
          <HStack>
            <Link
              variant="link03"
              href="https://www.uishowreel.com/"
              isExternal
            >
              <Text>{t('currentProject01Action')}</Text>
            </Link>
          </HStack>
        </VStack>
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">{t('currentProject02Name')}</Text>
          <Text textStyle="text04">{t('currentProject02Content')}</Text>
        </VStack>
        <VStack
          w="100%"
          py="10px"
          align="flex-start"
          border="1px solid"
          borderColor="grey.600"
          p="20px"
          rounded="md"
        >
          <Text textStyle="title1">{t('currentProject03Name')}</Text>
          <Text textStyle="text04">{t('currentProject03Content')}</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default CurrentProject;
