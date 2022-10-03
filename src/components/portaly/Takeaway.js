import {
  Flex,
  Text,
  Stack,
  VStack,
  HStack,
  Heading,
  Highlight,
  chakra,
  Image,
  Link,
  Icon,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';

import renddi from 'assets/images/portaly/renddi.jpg';

const Takeaway = () => {
  return (
    <Container py="30px">
      <Flex w="100%" pb="20px" direction="column">
        <Text color="blue.700" variant="title" pb="20px">
          Learn & Takeaway
        </Text>
        <VStack>
          <Text color="grey.800" variant="body">
            講述專案之前的小故事，大學同學 shiromaro
            是一名在日動畫師同時經營著20多萬的 IG
            圖文帳戶，我有協助她處理台灣的商品出貨。發現當時的 Link-in-Bio
            工具對於她來說無法擅長用圖像來表達，相當的可惜，但網站的架設的方式與功能又過於複雜。便替朋友製作了更適合他的網站。朋友的問題解決了，但這樣只能解決掉他的問題。因此當
            RealEngine
            來信討論想替創作者提供解決方案產品時我格外期待這次的合作。
            身為產品設計師讓我不只能觀察到問題，更是讓我有機會透過設計透過產品來滿足大家的需求。
          </Text>
          <Text color="grey.800" variant="body">
            每次重新檢視這次專案的執行，我都會反思是什麼原因讓我在設計最初後台版本。太過於自信的設計判斷讓我忽略了更重要的東西而導致需要透過易用性測試來迭代設計方案。未來無論是在自己很有熱情或明確的狀態，都得不斷的提醒自己重新回到設計師的角色，去檢視使用者和產品之間的關係。
          </Text>
          <VStack align="flex-start" pt="20px">
            <Text color="blue.700" pb="10px">
              專案夥伴的反饋
            </Text>
            <HStack align="flex-start" spacing="20px">
              <Image
                src={renddi}
                w={{ base: '40px', lg: '80px' }}
                rounded="full"
              />
              <Flex
                bgColor="blue.700"
                color="white"
                p="20px"
                borderRadius="0 10px 10px 10px"
                fontSize={{ base: '14px', lg: '16px' }}
              >
                Hugh 協助繪製MVP的介面，對於進行測試產品是非常重要的 。
                其中最大的部分是後台的基礎，我們一起建立了後台的操作語言後，即使後來我們這邊做了很多延伸，還是持續運用同一套設計語言、操作模式。
                而這代表不管是從管理端(真實引擎)還是從使用端(真實用戶XD)，這個設計模式都是work的。。
              </Flex>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Takeaway;
