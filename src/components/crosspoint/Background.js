import { useTranslation } from 'react-i18next';

import { Flex, Text, VStack, SimpleGrid } from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';
import bgImage from 'assets/images/crosspoint/bgImage.jpg';
import task01 from 'assets/images/crosspoint/task01.png';
import task02 from 'assets/images/crosspoint/task02.png';
import task03 from 'assets/images/crosspoint/task03.png';
import task04 from 'assets/images/crosspoint/task04.png';

const taskList = [
  {
    title: 'cpTaskList_01Title',
    content: 'cpTaskList_01Content',
    image: task02,
    // isMain: true,
  },
  {
    title: 'cpTaskList_02Title',
    content: 'cpTaskList_02Content',
    image: task01,
  },
  {
    title: 'cpTaskList_03Title',
    content: 'cpTaskList_03Content',
    image: task03,
  },
  {
    title: 'cpTaskList_04Title',
    content: 'cpTaskList_04Content',
    image: task04,
  },
];

const Background = () => {
  const { t } = useTranslation();

  return (
    <Container bgColor="grey.400" py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Background</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX="30px" spacingY="12px">
        <Flex align="center">
          <Text textStyle="text02">{t('cpBg')}</Text>
        </Flex>
        <SkeletonImage w="100%" src={bgImage} rounded="md" />
      </SimpleGrid>
      <VStack w="100%" py="30px" align="flex-start">
        <Text textStyle="title0">Task</Text>
        <Text textStyle="text01">{t('cpTask')}</Text>
        <Text>{t('cpTaskMemo')}</Text>
        <SimpleGrid
          pt="10px"
          columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
          spacingX="15px"
          spacingY="15px"
        >
          {taskList.map((item, index) => (
            <Flex
              key={item.title}
              rounded="lg"
              bgColor="white"
              direction="column"
              p="20px"
              border={item.isMain && '1px solid #34AAB7'}
            >
              <Flex justify="space-between" align="center" pb="15px">
                <Text fontSize="22px" fontWeight="500" color="gray.700">
                  {t(item.title)}
                </Text>
                <SkeletonImage w="40px" src={item.image} />
              </Flex>
              <Text color="gray.600">{t(item.content)}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Background;
