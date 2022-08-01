import { Flex, Text, VStack, Heading } from '@chakra-ui/react';

import Intro from 'components/realengine/Intro';
import Overview from 'components/realengine/Overview';
import Process from 'components/realengine/Process';
import Challenge from 'components/realengine/Challenge';
import Architecture from 'components/realengine/Architecture';
import DesignStrategy from 'components/realengine/DesignStrategy';
import UserInterface from 'components/realengine/UserInterface';
import Outcome from 'components/realengine/Outcome';
import FollowUp from 'components/realengine/FollowUp';

export function RealenginePage() {
  return (
    <Flex bgColor="grey.100" direction="column">
      <Intro />
      <Overview />
      <Process />
      <Challenge />
      <Architecture />
      <DesignStrategy />
      <UserInterface />
      <Outcome />
      <FollowUp />
    </Flex>
  );
}
