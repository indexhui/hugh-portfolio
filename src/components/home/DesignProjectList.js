import { Flex, VStack, Heading } from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

import ProjectCard from 'components/ProjectCard';

import project01 from 'assets/images/project01.jpg';
import project02 from 'assets/images/project02.png';
import project03 from 'assets/images/project03.jpg';

const projectList = [
  {
    title: 'Crosspoint  AI 體態分析 ',
    subTitle: '運動檢測系統',
    tag: 'App Design, UI/UX Design, User Research',
    img: project02,
    link: '/crosspoint',
    isNeedPassword: false,
    content:
      'Crosspoint 透過攝影機捕捉人體動態變化搭配 AI 影像分析， 提供健身與復健場域，利用 AI 姿勢評估檢測系統，去了解運動時身體平衡差異與肌肉緊繃概況，讓教練以資訊視覺化圖像來提供會員建議。',
  },
  {
    title: 'Real Engine 真實引擎',
    subTitle: 'IP 創作者桌遊募資',
    tag: ' UI/UX Design, Web app',
    img: project01,
    link: '/realengine',
    content:
      '從頭開始規劃專屬於 IP 創作者的桌遊募資平台，因而定義了三項圍繞 IP 創作者優勢的設計策略',
  },
  {
    title: 'Portaly 傳送門',
    subTitle: 'Link-in-Bio 輕型個人網站',
    tag: '創作者工具, Web app',
    img: project03,
    link: '/portaly',
    content:
      '提供創作者們，一個較低成本、好上手的個人頁面建立工具，放大圖文的吸引力、藉此增加點擊與互動的機會，讓受眾得以透過「傳送門 Portaly」觸及他們喜愛的創作者，擴散創作的影響力。',
    // isNeedPassword: true,
  },
];

const DesignProjectList = () => {
  return (
    <Flex
      id="works"
      w="100%"
      justify="center"
      py={{ base: '48px', lg: '32px' }}
    >
      <Container>
        <Heading as="h2" py="40px">
          設計案例
        </Heading>
        <VStack w="100%" maxW="1220px" spacing={{ base: '16px', lg: '48px' }}>
          {projectList.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </VStack>
      </Container>
    </Flex>
  );
};

export default DesignProjectList;
