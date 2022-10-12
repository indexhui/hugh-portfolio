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
    title: '檢測服務過程不順暢',
    content:
      '由於介面操作層級凌亂，按鈕用語不夠明確，導致操作人員常常尋找操作按鈕，甚至誤觸導致檢測頻繁中斷。在人潮密集的營業時段或展覽會場會嚴重影響體驗品質',
  },
  {
    title: '分析報告對於健身教練不易說明',
    content:
      '當前版本報告結果是按照上海康復手冊所設計，但對於不同醫療集團與健身教練來說，不夠通用與解讀。',
  },
  {
    title: '報告內容對民眾過於抽象',
    content: '報告呈現只呈現數值，民眾難以理解數值對應自己身體表現的意義。',
  },
  {
    title: '帶給健身房什麼價值',
    content:
      '最初與上海康復中心所合作滿足當下需求。而如何帶給其他健身房與康復廠館價值也成為納入改版考量',
  },
];

const ProblemCard = props => {
  const { order, title, content } = props;
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
        <Text textStyle="title1">{title}</Text>
      </HStack>
      <Text textStyle="text02">{content}</Text>
    </VStack>
  );
};

const Problem = () => {
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
              在專案前期我們進駐了合作健身房，進入服務場域進行用戶研究來定義核心的用戶問題，以及更了解健身房、教練、民眾是如何去理解我們的產品。
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
