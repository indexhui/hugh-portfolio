import { Flex, Box, Text } from '@chakra-ui/react';

const SectionTitle = props => {
  const { title, isWhite, ...rest } = props;
  return (
    <Flex w="100%" justify="space-between" align="center" mb="24px" {...rest}>
      <Text variant="title" color={isWhite ? 'white' : 'grey.800'}>
        {title}
      </Text>
      <Box w="120px" h="1px" bgColor={isWhite ? 'white' : 'grey.800'}></Box>
    </Flex>
  );
};

export default SectionTitle;
