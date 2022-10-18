import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Highlight,
} from '@chakra-ui/react';
import { Container, SkeletonImage } from 'components/layouts';

import mvp01 from 'assets/images/crosspoint/mvp01.jpg';
import mvp02 from 'assets/images/crosspoint/mvp02.jpg';
import solution01demo01 from 'assets/images/crosspoint/solution01demo01.jpg';
import redesign01 from 'assets/images/crosspoint/redesign01.jpg';
import solution0201 from 'assets/images/crosspoint/solution0201.jpg';

import solution0301 from 'assets/images/crosspoint/solution0301.jpg';
import solution0302 from 'assets/images/crosspoint/solution0302.jpg';

import solution0401 from 'assets/images/crosspoint/solution0401.jpg';
import solution0402 from 'assets/images/crosspoint/solution0402.jpg';
import solution0403 from 'assets/images/crosspoint/solution0403.jpg';
import solution0404 from 'assets/images/crosspoint/solution0404.jpg';
import solution05 from 'assets/images/crosspoint/solution05.png';
import solution0601 from 'assets/images/crosspoint/solution0601.jpg';
import solution0602 from 'assets/images/crosspoint/solution0602.jpg';
import solution0603 from 'assets/images/crosspoint/solution0603.jpg';

import walk from 'assets/images/crosspoint/walk.gif';
import squat from 'assets/images/crosspoint/squat.gif';

const Solution01 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          01
        </Flex>
        <Text textStyle="title1" color="white">
          介面層級梳理與優化
        </Text>
      </HStack>
      <HStack w="100%" justify="center" spacing="40px">
        <SkeletonImage src={mvp01} w="40%" rounded="sm" />
        <Text w="40%">
          將介面上的資訊，將資訊劃分成操作層和顯示層，操作層布局為產品識別、階段提示、操作按鈕固定於介面下方。顯示層為主要與檢測者引導以及互動反饋。
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <VStack bgColor="blue.800" p="15px" rounded="md">
          <Flex
            w="100%"
            h="80%"
            rounded="md"
            bgColor="rgba(255,255,255,0.3)"
            align="center"
            px="20px"
          >
            <Text color="white">資訊層</Text>
          </Flex>
          <Flex
            bgColor="rgba(255,255,255,0.5)"
            w="100%"
            h="20%"
            rounded="md"
            align="center"
            px="20px"
          >
            <Text color="blue.800">操作層</Text>
          </Flex>
        </VStack>
        <SkeletonImage src={solution01demo01} rounded="sm" />
      </SimpleGrid>
      <Text maxW="720px" textAlign="center">
        準備頁面為增強沉境感，提升檢測者的專注力，減去準備階段不需要的資訊，以品牌延伸色作為背景色大面積使用，讓使用聚焦於畫面中心。
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <VStack bgColor="blue.800" p="15px" rounded="md">
          <HStack w="100%" h="80%" rounded="md" align="center">
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.2)"
              rounded="md"
            ></Flex>
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.5)"
              align="center"
              justify="center"
              rounded="md"
            >
              <Text textStyle="title0" color="blue.800">
                顯示層
              </Text>
            </Flex>
            <Flex
              h="100%"
              w={1 / 3}
              bgColor="rgba(255,255,255,0.2)"
              rounded="md"
            ></Flex>
          </HStack>
          <Flex
            bgColor="rgba(255,255,255,0.2)"
            w="100%"
            h="20%"
            rounded="md"
            align="center"
            px="20px"
          ></Flex>
        </VStack>
        <SkeletonImage src={redesign01} rounded="sm" />
      </SimpleGrid>
      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </Flex>
  );
};

const Solution02 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px" pt="50px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          02
        </Flex>
        <Text textStyle="title1" color="white">
          新增引導階段，以動畫輔助說明
        </Text>
      </HStack>
      <SkeletonImage rounded="md" src={solution0201} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="20px" spacingX="20px">
        <SkeletonImage rounded="md" src={walk} />
        <SkeletonImage rounded="md" src={squat} />
      </SimpleGrid>
      <Text>藉由動畫來引導檢測民眾，同時降低教練(操作者)的解說工作量</Text>
    </Flex>
  );
};

const Solution03 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          03
        </Flex>
        <Text textStyle="title1" color="white">
          檢測報告不僅提供結果，更提供檢測過程中的圖文數據
        </Text>
      </HStack>
      <HStack w="100%" justify="center" spacing="40px">
        <SkeletonImage src={mvp02} w="40%" rounded="sm" />
        <Text w="40%">
          舊分析報告只提供了動態分析判斷與基本判斷依據，不利於教練針對檢測者進行解說。除了提供解果外，並把影像與動作判斷依據抽取出來，讓教練可以客觀的資訊圖像解說取代原本的結果。首先將檢測結果依照類別拆成靜態分析(正面與側伸站姿)、動態分析(深蹲)。
          靜態分析又分成了肌肉對稱緊繃分析、正面身體平衡、側面身體偏移，教練可以依照受測者狀態與自身專業判斷挑選項目進行說明
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <SkeletonImage src={solution0301} rounded="sm" />
        <SkeletonImage src={solution0302} rounded="sm" />
      </SimpleGrid>

      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </Flex>
  );
};

const Solution04 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          04
        </Flex>
        <Text textStyle="title1" color="white">
          數值與 AI 輔助線搭配影像紀錄提升檢測說服力
        </Text>
      </HStack>

      <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} py="40px" spacingX="20px">
        <SkeletonImage src={solution0401} rounded="sm" />
        <SkeletonImage src={solution0402} rounded="sm" />
        <SkeletonImage src={solution0403} rounded="sm" />
        <SkeletonImage src={solution0404} rounded="sm" />
      </SimpleGrid>

      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </Flex>
  );
};

const Solution05 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          05
        </Flex>
        <Text textStyle="title1" color="white">
          掃描 QR code ，取得個人報告
        </Text>
      </HStack>
      <SkeletonImage maxW="700px" src={solution05} rounded="sm" />

      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </Flex>
  );
};

const Solution06 = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <HStack w="100%" align="center" pb="20px">
        <Flex
          align="center"
          justify="center"
          bgColor="blue.700"
          color="white"
          w="28px"
          h="28px"
          rounded="md"
        >
          06
        </Flex>
        <Text textStyle="title1" color="white">
          在服務場景之中提供與誘發民眾體育與健康需求
        </Text>
      </HStack>
      <Text textStyle="text01" color="white">
        <Highlight
          query="產生需求後利於場館可以進一步為民眾進行互動與服務"
          styles={{ px: '1', py: '1', bg: 'blue.700', color: 'white' }}
        >
          在日常中大眾不易關注自身體態與動作狀況，而在場館的療體驗上教練或物理治療師缺乏圖像說明工具把自己專業觀察表達給客戶了解。透過檢測讓民眾透過影像紀錄與
          AI
          輔助線引導誘發健身或治療調整需求。產生需求後利於場館可以進一步為民眾進行互動與服務
        </Highlight>
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <SkeletonImage src={solution0601} rounded="sm" />
        <VStack align="center" justify="center" spacing="20px">
          <SkeletonImage src={solution0602} rounded="sm" />
          <SkeletonImage src={solution0603} rounded="sm" />
        </VStack>
      </SimpleGrid>

      <Text maxW="720px" textAlign="center">
        檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境吸引專注力。將擷取畫面縮減至畫面約
        1/3，讓受測者可以專注在正前方如同全身鏡。
      </Text>
    </Flex>
  );
};

const Solution = () => {
  return (
    <Container py="40px" bgColor="grey.800" color="white">
      <Flex w="100%" pb="15px">
        <Text textStyle="title0" color="blue.600">
          Approaching a Solution
        </Text>
      </Flex>
      <VStack spacing="80px">
        <Solution01 />
        <Solution02 />
        <Solution03 />
        <Solution04 />
        <Solution06 />
        <Solution05 />
      </VStack>
    </Container>
  );
};

export default Solution;
