import { Flex, Text } from '@chakra-ui/react';

import IntroSection from 'components/layouts/IntroSection';

// import banner0 from 'assets/images/portaly/banner01.png';
import banner02 from 'assets/images/portaly/banner02.jpg';
import banner03 from 'assets/images/portaly/banner03.jpg';

const title = { en: 'Portaly', zh: '傳送門' };
const bannerList = [banner03, banner02];
const introduction = [
  {
    title: '專案時辰 / 時間',
    content: '4個月 / November 2020 - April 2021',
  },
  {
    title: '我得角色',
    content: '產品設計師',
  },
  {
    title: '團隊組成',
    content: 'PO x1, Developer x1 ,Designer x1',
  },
  {
    title: '工作範疇',
    content: 'MVP、架構規劃、功能流程規劃、設計完稿、工程交付',
  },
];

export function PortalyPage() {
  return (
    <>
      <IntroSection
        title={title}
        bannerList={bannerList}
        introduction={introduction}
      />
    </>
  );
}
