import { Flex, Text, VStack, Box } from '@chakra-ui/react';

const OverviewSection = props => {
  const { content, projectOutcomes } = props;
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
        maxW="1080px"
        direction="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" align="center" mb="24px">
          <Text variant="title" color="blue.700">
            Overview
          </Text>
          <Box w="120px" h="1px" bgColor="blue.600"></Box>
        </Flex>
        <VStack spacing="12px" maxW="1080px">
          {content.map((item, index) => (
            <Text variant="body" key={index} fontSize="20px" lineHeight="1.8">
              {item}
            </Text>
          ))}
        </VStack>
        {projectOutcomes && (
          <Flex align="flex-start" w="100%" py="24px" direction="column">
            <Text variant="title" color="blue.700">
              Project OutComes
            </Text>
            <VStack pt="24px" align="flex-start">
              {projectOutcomes &&
                projectOutcomes.map((item, index) => (
                  <Text variant="body" key={index + 'projectOutcomes'}>
                    {item}
                  </Text>
                ))}
            </VStack>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default OverviewSection;
