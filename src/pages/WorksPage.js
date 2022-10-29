import { Flex } from '@chakra-ui/react';
import DesignProjectList from 'components/home/DesignProjectList';
import FreelanceWork from 'components/FreelanceWork';

export function WorksPage() {
  return (
    <Flex w="100%" direction="column">
      <DesignProjectList />
      <FreelanceWork />
    </Flex>
  );
}
