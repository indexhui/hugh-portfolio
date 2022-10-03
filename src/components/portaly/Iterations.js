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
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';
import usability01 from 'assets/images/portaly/usability01.jpg';
import usability02 from 'assets/images/portaly/usability02.jpg';
import edit01 from 'assets/images/portaly/edit01.jpg';
import edit02 from 'assets/images/portaly/edit02.jpg';
import hughAvatar from 'assets/images/portaly/hughAvatar.jpg';

const Iterations = () => {
  return (
    <>
      <Container bgColor="blue.800" py="40px" color="white">
        <Flex w="100%">
          <Text color="white" variant="title">
            Iterations from Usability Tests
          </Text>
        </Flex>
        <VStack align="flex-start" w="100%" color="whiteAlpha.800" py="20px">
          <Text>個人展示頁面</Text>
          <Text fontSize="16px">
            圖文版面以及進階功能，在展示和測試階段都獲得了受眾好評
          </Text>
        </VStack>
        <VStack align="flex-start" w="100%" color="whiteAlpha.800">
          <Text>編輯頁面</Text>
          <Text>
            吸引創作者的關鍵是展示效果，而讓創作者順利完成客製化關鍵在於編輯頁面。
            <br />
            我設計出方塊模組加強了客製的容易度，但實際的測試結果，紛紛反映編輯體驗得不理想，通過了易用性測試的
          </Text>
        </VStack>
        <Image w="100%" my="20px" rounded="md" src={usability01} />
        <Flex w="100%" justify="flex-end">
          <HStack align="flex-start">
            <Text
              fontSize="14px"
              textAlign="right"
              bgColor="white"
              color="gray.600"
              p="12px"
              rounded="10px 0 10px 10px"
            >
              此次易用性評估幫我們了解創作者在MVP無法順利完成任務的關鍵
              <br />
              同時以利我們透過服務流程思維評估功能調整的先後
            </Text>
            <Image w="48px" src={hughAvatar} rounded="full" />
          </HStack>
        </Flex>
        <Image w="100%" my="20px" src={usability02} rounded="md" shadow="lg" />
        <VStack align="flex-start" spacing="32px">
          <VStack align="flex-start">
            <Text>系統問題:</Text>
            <Text>
              前期測試開發版本經過團隊 QA 外還是會有遺漏沒檢測出來的 Bugs
              。不乏會影響到使用者的操作甚至會整個打斷任務，會優先排程開發修正排程。
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text>體驗問題:</Text>
            <Text color="whiteAlpha.800">
              排除了系統問題，讓使用者無法如設計方式預期完成任務或是造成使用者困惑不舒服與流程停滯。
              觀察到的實例會聚集起來一同評估該如何改善，在新服務推出時，尤其重要。
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text>功能期待:</Text>
            <Text>
              可能與體驗問題一樣會讓使用者感到不適，但是不影響主要任務，部分可視為使用者對於功能的期待。
              <br />
              我們會將這部分的項目列為增加功能的依據。
            </Text>
          </VStack>
          <Divider />
          <VStack align="flex-start">
            <Text>改善方案</Text>
            <Text fontSize="24px">
              對創作者更熟悉的操作方式，所見及所得之外的魔法
            </Text>
            <Text>
              創作者對於社群平台相對熟悉，以類似的操作概念來增加使用者對新介面的熟悉度，像是貼文的呈現去展示編輯頁。
              <br />
              儘管乍看點選編輯跳出
              Modal，是多一個步驟。但從整體上使用者可以優先理解他調整的版面為何。
            </Text>
          </VStack>
          <Text>舊版 & 新版比較</Text>
          <Grid
            w="100%"
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            direction={{ base: 'column', lg: 'row' }}
            gap={6}
          >
            <GridItem>
              <Text>MVP</Text>
              <Image rounded="sm" flex="1" src={edit01} />
            </GridItem>
            <GridItem>
              <Text>Current(Iterative)</Text>
              <Image rounded="sm" flex="1" src={edit02} />
            </GridItem>
          </Grid>
          <VStack align="flex-start">
            <Text>Iterations Result</Text>
            <Text>首次接觸的使用者完成編輯時間從</Text>
            <HStack>
              <Text fontSize="32px">7~8 分鐘</Text>
              <Text fontSize="32px" color="whiteAlpha.800">
                縮減至
              </Text>
              <Text fontSize="32px">3~5 分鐘</Text>
            </HStack>
            <Text>
              第一次完成編輯的時間減少，讓使用者有機會進一步熟悉進階的功能
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};
export default Iterations;
