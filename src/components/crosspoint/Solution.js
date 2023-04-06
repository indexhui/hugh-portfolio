import { useTranslation } from 'react-i18next';

import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Stack,
  Highlight,
  AspectRatio,
  Grid,
  GridItem,
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
  const { t } = useTranslation();
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
          {t('cpSolution01Title')}
        </Text>
      </HStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="100%"
        justify="center"
        align="center"
        spacing={{ base: '12px', lg: '40px' }}
      >
        <SkeletonImage
          src={mvp01}
          w={{ base: '100%', md: '45%' }}
          rounded="sm"
        />
        <Text
          textStyle="text02"
          color="whiteAlpha.900"
          w={{ base: '100%', md: '45%' }}
        >
          {t('cpSolution01Intro')}
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacingX="20px"
        spacingY="16px"
        pt={{ base: '20px', lg: '40px' }}
        pb={{ base: '12px', lg: '20px' }}
      >
        <AspectRatio w="100%" ratio={415 / 234}>
          <VStack w="100%" bgColor="blue.800" p="15px" rounded="md">
            <Flex
              w="100%"
              h="80%"
              rounded="md"
              bgColor="rgba(255,255,255,0.3)"
              align="center"
              px="20px"
            >
              <Text color="white"> {t('cpSolution01Intro_02')}</Text>
            </Flex>
            <Flex
              bgColor="rgba(255,255,255,0.5)"
              w="100%"
              h="20%"
              rounded="md"
              align="center"
              px="20px"
            >
              <Text color="blue.800"> {t('cpSolution01Intro_03')}</Text>
            </Flex>
          </VStack>
        </AspectRatio>
        <SkeletonImage w="100%" src={solution01demo01} rounded="sm" />
      </SimpleGrid>
      <Text
        textStyle="text04"
        maxW="720px"
        textAlign="center"
        color="whiteAlpha.800"
      >
        <Highlight
          query={['減去', '聚焦於畫面中心']}
          styles={{
            mx: '1',
            px: '1',
            py: '0',
            rounded: 'sm',
            bg: 'blue.400',
          }}
        >
          {t('cpSolution01Intro_01')}
        </Highlight>
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacingX="20px"
        spacingY="16px"
        pt={{ base: '20px', lg: '40px' }}
        pb={{ base: '12px', lg: '20px' }}
      >
        <AspectRatio w="100%" ratio={415 / 234}>
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
                  顯示層{t('cpSolution01Intro_04')}
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
        </AspectRatio>
        <SkeletonImage src={redesign01} rounded="sm" />
      </SimpleGrid>
      <Text
        textStyle="textStyle04"
        maxW="720px"
        textAlign="center"
        color="whiteAlpha.800"
      >
        <Highlight
          query={['分散專注力', '專注在正前方如同全身鏡']}
          styles={{
            mx: '1',
            px: '1',
            py: '0',
            rounded: 'sm',
            bg: 'blue.400',
          }}
        >
          檢測環節，攝影機擷取畫面正對使用者，如同鏡子一般的反饋讓使用者確認動作，但在研究觀察中，全螢幕的擷取畫面會讓使用者被周邊環境分散專注力。將擷取畫面縮減至畫面約
          1/3，讓受測者可以專注在正前方如同全身鏡。
        </Highlight>
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
      <Grid
        w="100%"
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={{ base: '12px', lg: '10px' }}
      >
        <GridItem colSpan={2} rounded="md">
          <AspectRatio w="100%" ratio={2 / 1}>
            <SkeletonImage rounded="md" src={solution0201} />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={1} rounded="md">
          <AspectRatio w="100%" ratio={1 / 1}>
            <SkeletonImage rounded="md" src={walk} />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={1} rounded="md">
          <SkeletonImage rounded="md" src={squat} />
        </GridItem>
      </Grid>
      <Text textStyle="text04" color="whiteAlpha.800" mt="12px">
        <Highlight
          query={['解說負擔']}
          styles={{
            mx: '1',
            px: '1',
            py: '0',
            rounded: 'sm',
            bg: 'blue.400',
          }}
        >
          藉由動畫來引導檢測民眾，同時減輕教練(操作者)的解說負擔
        </Highlight>
      </Text>
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
      <Stack
        w="100%"
        justify="center"
        align="center"
        spacing={{ base: '12px', lg: '40px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <SkeletonImage
          src={mvp02}
          w={{ base: '100%', md: '45%' }}
          rounded="sm"
        />
        <Text
          textStyle="text03"
          color="whiteAlpha.900"
          w={{ base: '100%', md: '45%' }}
        >
          <Highlight
            query={[
              '運用客觀的資訊圖像',
              '依照受測者狀態與自身專業判斷挑選項目進行說明',
            ]}
            styles={{
              mx: '1',
              px: '1',
              py: '0',
              rounded: 'sm',
              bg: 'blue.400',
            }}
          >
            舊報告僅提供了動態分析判斷與基本判斷依據，教練無法輕易的完成解說。將影像與動作判斷依據抽取，有利於教練運用客觀的資訊圖像來解說。首先將檢測結果依照類別分類為靜態分析(正面與側伸站姿)與動態分析(深蹲)。
            靜態分析歸類出肌肉對稱緊繃分析、正面身體平衡、側面身體偏移，教練可以依照受測者狀態與自身專業判斷挑選項目進行說明
          </Highlight>
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} py="40px" spacingX="20px">
        <VStack spacing={{ base: '8px', lg: '12px' }}>
          <SkeletonImage src={solution0301} rounded="sm" />
          <Text
            textStyle="text04"
            color="whiteAlpha.800"
            px="20px"
            textAlign="center"
          >
            <Highlight
              query={['緊繃分析', '正面身體平衡', '側面身體偏移']}
              styles={{
                mx: '1',
                px: '1',
                py: '0',
                rounded: 'sm',
                bg: 'blue.500',
              }}
            >
              將靜態分析技術關鍵提取出稱緊繃分析、正面身體平衡、側面身體偏移。教練可依照用戶狀況進行解說。
            </Highlight>
          </Text>
        </VStack>
        <VStack>
          <SkeletonImage src={solution0302} rounded="sm" />
          <Text
            textStyle="text04"
            color="whiteAlpha.800"
            px="20px"
            textAlign="center"
          >
            <Highlight
              query={['']}
              styles={{
                mx: '1',
                px: '1',
                py: '0',
                rounded: 'sm',
                bg: 'blue.500',
              }}
            >
              動態分析保留原本的身體結果圖，加強圖解的提示，並搭配動作截圖，讓教練選擇是否回放影片。
            </Highlight>
          </Text>
        </VStack>
      </SimpleGrid>
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

      <SimpleGrid
        columns={{ base: 4, md: 4, lg: 4 }}
        spacingX={{ base: '12px', lg: '20px' }}
      >
        <SkeletonImage src={solution0401} rounded="sm" />
        <SkeletonImage src={solution0402} rounded="sm" />
        <SkeletonImage src={solution0403} rounded="sm" />
        <SkeletonImage src={solution0404} rounded="sm" />
      </SimpleGrid>

      <Text
        textStyle="text04"
        color="whiteAlpha.800"
        maxW="720px"
        textAlign="center"
        mt="12px"
      >
        <Highlight
          query={['更能意識到體態問題']}
          styles={{
            mx: '1',
            px: '1',
            py: '0',
            rounded: 'sm',
            bg: 'blue.400',
          }}
        >
          輔助線是 AI
          分析體態的依據之一。檢測的過程中無論是場館人員或是民眾都會因為AI
          輔助線即時的出現於偵測畫面中，視覺上理解 AI
          運作中。此體驗認知運用在報告呈現上，檢測照片加上輔助線讓教練能更容易地闡述體態狀況，聆聽的民眾因為說明與輔助線更能意識到體態問題。
        </Highlight>
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
      <SkeletonImage w="100%" maxW="700px" src={solution05} rounded="sm" />

      <Text
        pt="12px"
        textStyle="text04"
        color="whiteAlpha.900"
        maxW="720px"
        textAlign="center"
      >
        場館方可以透過教練解說來推薦體驗者加入會員或購課。掃描 QR
        code，讓民眾主動採取行動增加再行銷的機會點。
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
          在服務場景中提供且誘發民眾體育與健康需求
        </Text>
      </HStack>
      <Text w="100%" textStyle="text01" color="whiteAlpha.900">
        <Highlight
          query={['產生需求', '進行互動與服務']}
          styles={{ px: '1', py: '1', bg: 'blue.700', color: 'white' }}
        >
          在日常中大眾少有機會留意自身體態與動作狀況，場館原先體驗流程中教練或物理治療師缺乏圖像說明工具把自己專業觀察表達給客戶了解。透過檢測讓民眾透過影像紀錄與
          AI
          輔助線引導誘發健身或治療調整需求。產生需求後利於場館可以進一步為民眾進行互動與服務。
        </Highlight>
      </Text>
      <SimpleGrid
        w="100%"
        pt={{ base: '12px', lg: '20px' }}
        pb="40px"
        columns={{ base: 1, md: 2, lg: 2 }}
        spacingX="20px"
        spacingY={{ base: '12px', lg: '20px' }}
      >
        <SkeletonImage
          w="100%"
          h={{ base: '280px', lg: 'unset' }}
          objectFit="cover"
          src={solution0601}
          rounded="sm"
        />
        <VStack
          align="center"
          justify="center"
          spacing={{ base: '12px', lg: '20px' }}
        >
          <SkeletonImage w="100%" src={solution0602} rounded="sm" />
          <SkeletonImage w="100%" src={solution0603} rounded="sm" />
        </VStack>
      </SimpleGrid>
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
      <VStack spacing={{ base: '32px', lg: '72px' }}>
        <Solution01 />
        <Solution02 />
        <Solution03 />
        <Solution04 />
        <Solution05 />
        <Solution06 />
      </VStack>
    </Container>
  );
};

export default Solution;
