import { Flex, Text } from '@chakra-ui/react';

import IntroSection from 'components/layouts/IntroSection';
import OverviewSection from 'components/layouts/OverviewSection';

import banner01 from 'assets/images/crosspoint/banner01.png';

const title = { en: 'Crosspoint AI', zh: '運動風險檢測' };
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

const overview = [
  'Crosspoint 透過攝影機捕捉人體動態變化搭配 AI 影像分析， 提供健身與復健場域，利用 AI 姿勢評估檢測系統，去了解運動時身體平衡差異與肌肉緊繃概況，讓教練以資訊視覺化圖像來提供會員建議。',
  '團隊首位設計師，除了設計庶務需求外，更需要了解團隊特性來培養團隊與設計師的信任合作關係，也同時需要加強運動產業的了解與觀察從中發揮設計價值。',
];

export function CrosspointPage() {
  return (
    <>
      <IntroSection
        title={title}
        bannerList={bannerList}
        introduction={introduction}
      />
      <OverviewSection content={overview} />
    </>
  );
}
