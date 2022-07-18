import { Flex, Text, VStack, Heading } from '@chakra-ui/react';

import ProjectCard from 'components/ProjectCard';

import project01 from 'assets/images/project01.jpg';
import project02 from 'assets/images/project02.png';
import project03 from 'assets/images/project03.png';

const projectList = [
  {
    title: 'Real Engine 真實引擎',
    tag: 'App Design, UI/UX Design, Prototyping, User Research',
    img: project01,
    link: '/realengine',
    content:
      '設計產品的 MVP 版本且順利上線。我也定義了產品團隊第一套設計系統與設計元件庫。',
  },
  {
    title: 'Crosspoint  AI 體態分析 ',
    tag: 'App Design, UI/UX Design, Prototyping, User Research',
    img: project02,
    link: '/realengine',
    isNeedPassword: false,
  },
  {
    title: 'Portaly 傳送門',
    tag: '桌遊資訊',
    img: project03,
    link: '/realengine',
    isNeedPassword: true,
  },
  {
    title: 'SOV 舒服美',
    tag: 'App Design, UI/UX Design, Prototyping, User Research',
    link: '/realengine',
    img: project03,
    isNeedPassword: true,
  },
];

const DesignProjectList = () => {
  return (
    <Flex w="100%" justify="center" py={{ base: '48px', lg: '32px' }}>
      <VStack w="75%" maxW="1220px" spacing={{ base: '24px', lg: '48px' }}>
        <Heading as="h2">設計案例</Heading>
        {projectList.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </VStack>
    </Flex>
  );
};

export default DesignProjectList;
