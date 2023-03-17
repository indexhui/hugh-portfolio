import { useTranslation } from 'react-i18next';

import { Flex, VStack, Heading } from '@chakra-ui/react';

import { Container } from 'components/layouts';

import ProjectCard from 'components/ProjectCard';

import project01 from 'assets/images/project01.jpg';
import project02 from 'assets/images/project02.png';
import project03 from 'assets/images/project03.jpg';

const projectList = [
  {
    title: 'project01Title',
    subTitle: 'project01Subtitle',
    tag: 'App Design, UI/UX Design, User Research',
    img: project02,
    link: '/crosspoint',
    isNeedPassword: false,
    content: 'project01Content',
  },

  {
    title: 'project02Title',
    subTitle: 'project02Subtitle',
    tag: 'project02Tag',
    img: project03,
    link: '/portaly',
    content: 'project02Content',
    // isNeedPassword: true,
  },
  {
    title: 'project03Title',
    subTitle: 'project03Subtitle',
    tag: ' UI/UX Design, Web app',
    img: project01,
    link: '/realengine',
    content: 'project03Content',
  },
];

const DesignProjectList = () => {
  const { t } = useTranslation();

  return (
    <Flex
      id="works"
      w="100%"
      justify="center"
      py={{ base: '48px', lg: '72px' }}
    >
      <Container>
        <Heading as="h2" pb="40px">
          {t('project')}
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
