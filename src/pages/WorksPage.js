import { Flex } from '@chakra-ui/react';
import DesignProjectList from 'components/home/DesignProjectList';

export function WorksPage() {
  return (
    <Flex w="100%" direction="column">
      <DesignProjectList />
    </Flex>
  );
}
