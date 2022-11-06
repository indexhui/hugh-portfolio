import { Flex, Text, VStack } from '@chakra-ui/react';
import { Container } from 'components/layouts';

const Takeaway = () => {
  return (
    <Container py="30px">
      <Flex w="100%" pb="20px" direction="column">
        <Text color="blue.700" variant="title" pb="12px">
          Learn & Takeaway
        </Text>
        <VStack align="flex-start" spacing="20px">
          <VStack align="flex-start" spacing="2px">
            <Text textStyle="title1">
              擔任新創的設計師，讓我對於產品概念不只有在完美的設計稿上
            </Text>
            <Text textStyle="text03">
              有幸在 Crosspoint AI 擔任了兩年的產品設計師，參與了產品 0.5 到 1
              的過程。新創的挑戰是必須在資源不多條件下，去探索各個機會點、摸索了解用戶，一有合適的機會便帶著對於產品熱情去實地踏訪展覽與場館。也因為人數少、目標一致能和團隊一起成長讓自己對於設計落地的價值觀獲得了高幅度的成長。
            </Text>
          </VStack>
          <VStack align="flex-start" spacing="2px">
            <Text textStyle="title1">認識經驗，運用經驗</Text>
            <Text textStyle="text03">
              我熱衷於參與設計思維的講座與活動像是服務設計年會，在組織沒有束縛的狀況下，時常有適合的時機運用在工作日常。理論的吸收加上新創務實的實戰，幫助我更能掌握住
            </Text>
          </VStack>
          <VStack align="flex-start" spacing="2px">
            <Text textStyle="title1">反省快速的平衡</Text>
            <Text textStyle="text03">
              新創面對需求與機會來的迅速，時常會幾次溝通與會議內，變更需求與完成任務。團隊溝通也較常習慣口頭溝通，這與我對於團隊組織營運價值觀相違，摸索片刻才建立起適合小團隊的文件方式。設計開發工具也剛好在這兩年間中產生了變化，從
              Sketch + Zeplin 組合改為
              Figma，對於設計系統維護移轉有一定的時間成本與並必須重新培養溝通方式，所幸是在任務的間隔中，後來
              Figma 線上共編留言等功能也對日後團隊設計溝通帶來了效益。
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Takeaway;
