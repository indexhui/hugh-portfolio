import { Flex } from '@chakra-ui/react';

const SectionContainer = props => {
  const { bgColor, align, ...rest } = props;
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      direction="column"
      py="40px"
      {...rest}
    >
      <Flex
        w={{ base: '100%', lg: '75%' }}
        direction="column"
        px="22px"
        justify="center"
        align={align || 'center'}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
