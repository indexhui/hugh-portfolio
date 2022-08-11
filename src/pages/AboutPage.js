import { Flex, HStack, Text, Image } from '@chakra-ui/react';

import SectionContainer from 'components/SectionContainer';
import SelfIntroduction from 'components/about/SelfIntroduction';
import Value from 'components/about/Value';

export function AboutPage() {
  return (
    <>
      <SelfIntroduction />
      <Value />
      <Value />
    </>
  );
}
