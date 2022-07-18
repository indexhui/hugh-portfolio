import { Flex, Text } from '@chakra-ui/react';
import Hero from 'components/home/Hero';
import DesignProjectList from 'components/home/DesignProjectList';

export function HomePage() {
  return (
    <Flex w="100%" direction="column">
      <Hero />
      <DesignProjectList />
    </Flex>
  );
}
