import { Flex, Text } from '@chakra-ui/react';

import IntroSection from 'components/layouts/IntroSection';
import OverviewSection from 'components/layouts/OverviewSection';

import Background from 'components/crosspoint/Background';
import RedesignIntro from 'components/crosspoint/RedesignIntro';
import Problem from 'components/crosspoint/Problem';
import Solution from 'components/crosspoint/Solution';
import Outcome from 'components/crosspoint/Outcome';
import Iterations from 'components/crosspoint/Iterations';
import Takeaway from 'components/crosspoint/Takeaway';

import banner01 from 'assets/images/crosspoint/banner01.png';

const title = { en: 'Crosspoint AI', zh: '運動風險檢測' };
const subTitle = '運健檢測系統';

const bannerList = [banner01, banner01];

const introduction = [
  {
    title: '任職時間',
    content: '兩年三個月 / Feb. 2019 - April 2021',
  },
  {
    title: '我得角色',
    content: '產品設計師',
  },
  {
    title: '團隊組成',
    content: 'PO x1, Developer x3 ,Designer x1',
  },
  {
    title: '工作範疇',
    content: '識別設計、功能規劃、使用者研究、設計完稿、工程交付',
  },
];

const overviewContent = {
  overview: [
    'Crosspoint 透過攝影機捕捉人體動態變化搭配 AI 影像分析， 提供健身與復健場域，利用 AI 姿勢評估檢測系統，去了解運動時身體平衡差異與肌肉緊繃概況，讓教練以資訊視覺化圖像來提供會員建議。',
    '團隊首位設計師，除了設計庶務需求外，更需要了解團隊特性來培養團隊與設計師的信任合作關係，也同時需要加強運動產業的了解與觀察從中發揮設計價值。',
  ],
  projectOutcomes: [
    '+ 設計品牌識別，衍生應用於產品視覺、文宣品與日後的實體展出',
    '+ 優化檢測服務，每月檢測報告提升至 5000 +',
    '+ 持續解決 B 端需求，客戶涵蓋聯新醫院、森林跑站、RIZAP 等 15 家連鎖健身房與康復中心',
    '+ 協助 Dream Fitness  提升開幕會員數 : 25萬',
  ],
};

export function CrosspointPage() {
  return (
    <>
      <IntroSection
        title={title}
        subTitle={subTitle}
        bannerList={bannerList}
        introduction={introduction}
      />
      <OverviewSection
        content={overviewContent.overview}
        projectOutcomes={overviewContent.projectOutcomes}
      />
      <Background />
      <RedesignIntro />
      <Problem />
      <Solution />
      <Outcome />
      <Iterations />
      <Takeaway />
    </>
  );
}
