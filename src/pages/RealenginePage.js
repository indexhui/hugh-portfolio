import { Flex } from '@chakra-ui/react';
import IntroSection from 'components/layouts/IntroSection';

import Overview from 'components/realengine/Overview';
import Process from 'components/realengine/Process';
import Challenge from 'components/realengine/Challenge';
import Architecture from 'components/realengine/Architecture';
import DesignStrategy from 'components/realengine/DesignStrategy';
import UserInterface from 'components/realengine/UserInterface';
import Outcome from 'components/realengine/Outcome';
import FollowUp from 'components/realengine/FollowUp';

import banner01 from 'assets/images/realengine/banner01.jpg';
import banner02 from 'assets/images/realengine/banner02.jpg';

const JOB_TITLE = { en: 'RealEngine', zh: '真實引擎' };
const JOB_SUBTITLE = '圖文作家桌遊募資平台';

const introduction = [
  {
    title: '專案時辰 / 時間',
    content: ' 3個月 / November 2021 - January 2022',
  },
  {
    title: '我的角色',
    content: '產品設計師',
  },
  {
    title: '團隊組成',
    content: 'PO x1, Developer x1 ,Designer x1',
  },
  {
    title: '工作範疇',
    content: '架構規劃、功能流程規劃、設計完稿、工程交付',
  },
];

const bannerList = [banner01, banner01];

export function RealenginePage() {
  return (
    <Flex bgColor="grey.100" direction="column">
      <IntroSection
        title={JOB_TITLE}
        subTitle={JOB_SUBTITLE}
        bannerList={bannerList}
        introduction={introduction}
      />
      {/* <Intro /> */}
      <Overview />
      <Process />
      <Challenge />
      <Architecture />
      <DesignStrategy />
      {/* <UserInterface /> */}
      <Outcome />
      <FollowUp />
    </Flex>
  );
}
