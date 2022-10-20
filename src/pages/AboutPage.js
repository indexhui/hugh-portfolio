import { Flex, HStack, Text, Image } from '@chakra-ui/react';

import SectionContainer from 'components/SectionContainer';
import SelfIntroduction from 'components/about/SelfIntroduction';

import Value from 'components/about/Value';
import Experience from 'components/about/Experience';
import CurrentProject from 'components/about/CurrentProject';

export function AboutPage() {
  return (
    <>
      <SelfIntroduction />
      <Value />
      <Experience />
      <CurrentProject />
    </>
  );
}
