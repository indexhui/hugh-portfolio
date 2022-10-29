import { Flex, Text, VStack, SimpleGrid, Divider } from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

const WorkCard = () => {
  return (
    <Flex w="100%" py="20px" border="1px solid red">
      hi
    </Flex>
  );
};

const FreelanceWork = () => {
  return (
    <Flex py="20px">
      <Container>
        <VStack w="100%" pb="20px" spacing="5px">
          <Text textStyle="heading01">FreelanceWork</Text>
          <Text textStyle="text03" textAlign="center" maxW="700px">
            2017 全職自由接案者約一年左右，
            <br />
            合作過的對象和公司有女人迷、台灣吧、UX設計師 Jenny Shen
          </Text>
        </VStack>
        <SimpleGrid w="100%">
          <WorkCard />
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default FreelanceWork;
