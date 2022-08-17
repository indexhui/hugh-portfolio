import { Flex, Text, VStack, Box } from '@chakra-ui/react';

const OverviewSection = props => {
  const { content } = props;
  return (
    <Flex
      bg="grey.300"
      px="22px"
      py={{ base: '32px', lg: '48px' }}
      w="100%"
      justify="center"
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        maxW="1280px"
        direction="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title">Overview</Text>
          <Box w="120px" h="1px" bgColor="grey.800"></Box>
        </Flex>
        <VStack spacing="12px" maxW="1080px">
          {content.map((item, index) => (
            <Text variant="body" key={index}>
              {item}
            </Text>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OverviewSection;
