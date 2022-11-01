import { Flex, Text, VStack, Box, SimpleGrid, Image } from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';
import bgImage from 'assets/images/crosspoint/bgImage.jpg';
import task01 from 'assets/images/crosspoint/task01.png';
import task02 from 'assets/images/crosspoint/task02.png';
import task03 from 'assets/images/crosspoint/task03.png';
import task04 from 'assets/images/crosspoint/task04.png';

const taskList = [
  {
    title: '檢測系統',
    content:
      '產品 MVP 最初是建立在特定場館的服務，存在許多易用性問題與資訊架構混亂需重新規劃: 產品介面、文宣手冊等',
    image: task02,
    // isMain: true,
  },
  {
    title: '品牌識別',
    content: '規劃品牌識別運用在各項業務上: 產品介面、文宣手冊等',
    image: task01,
  },
  {
    title: 'SaaS',
    content:
      '檢測報告原本僅留存於本機上，拓展線上平台服務提供廠館，讓場館可以管理教練與會員之間的業務關係。並延伸出更多的服務: 問卷、產業數據統計、會員運動成效數據追蹤',
    image: task03,
  },
  {
    title: '功能迭代',
    content:
      '透過用戶回饋、服務場景觀察、專家訪談、戰略合作夥伴做為產品迭代依據。基於檢測服務上增加了不同面向的功能: 跳躍動作、InBody API 串接、會員問卷、數據分析等',
    image: task04,
  },
];

const Background = () => {
  return (
    <Container bgColor="grey.400" py="40px">
      <Flex w="100%" pb="20px">
        <Text textStyle="title0">Background</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX="30px" spacingY="12px">
        <Flex align="center">
          <Text textStyle="text02">
            初代產品是由團隊與上海康復中心物理治療師開發合作，讓院內物理治療師為會員進行檢測。
            2019年政府對運動產業推動與台灣健身產業日漸盛行，團隊迎來快速成長的機會。隨著產品優化的和新功能開發壓力下，創辦人尋找產品設計師加入。而我正尋找能快速衝刺的新創環境，在朋友的引薦下加入
            Crosspoint 。
          </Text>
        </Flex>
        <SkeletonImage w="100%" src={bgImage} rounded="md" />
      </SimpleGrid>
      <VStack w="100%" py="30px" align="flex-start">
        <Text textStyle="title0">Task</Text>
        <Text textStyle="text01">
          作為團隊首位設計師，了解團隊特性以及熟悉運動產業從後，制訂四個面向階段任務，首要為品牌識別與檢測服務重設計，接續規劃
          SaaS會員/教練管理與日後推出新功能研究。
        </Text>
        <Text>本篇主軸介紹檢測系統 Redesign 的過程。</Text>
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
                  {item.title}
                </Text>
                <SkeletonImage w="40px" src={item.image} />
              </Flex>
              <Text color="gray.600">{item.content}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Background;
