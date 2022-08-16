import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';

const MotionBox = motion(Box);

const CoreLine = props => {
  const { delay } = props;
  const variants = {
    wave: custom => ({
      opacity: 1,
      backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'],
      transition: { delay: custom.delay, duration: 5, repeat: Infinity },
    }),
  };

  const opacityVariants = {
    visible: custom => ({
      opacity: 1,
      transition: {
        delay: (custom.delay || 0) * 1,
        duration: 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0.2 }),
  };

  return (
    <MotionBox
      custom={{ delay: delay * 0.5 || 0 }}
      variants={opacityVariants}
      viewport={{ once: false, amount: 0.6 }}
      initial="hidden"
      whileInView="visible"
      w="100%"
      height="100%"
    >
      <MotionBox
        custom={{ delay: delay * 0.05 || 0 }}
        animate="wave"
        variants={variants}
        w="100%"
        height="100%"
        background="linear-gradient(-45deg, #ffffff20, #ffffffcc, #ffffff50)"
        bgSize=" 200% 200%"
      ></MotionBox>
    </MotionBox>
  );
};

const ValueCore = () => {
  return (
    <Flex
      position="sticky"
      top="80px"
      mt="80px"
      rounded="full"
      w="400px"
      h="400px"
      overflow="hidden"
    >
      {Array(...new Array(4)).map((_, i) => (
        <CoreLine key={i} delay={i} />
      ))}
    </Flex>
  );
};

const ValueCard = props => {
  return (
    <Flex w="100%" {...props} px="80px">
      <Box bgColor="white" w="10px" h="20px" rounded="full" mr="10px" />
      <VStack align="flex-start">
        <Text color="white" fontWeight="500" fontSize="18px">
          保持想像力
        </Text>
        <Text color="white" fontWeight="400" fontSize="16px">
          充滿想像力的空間，發揮設計的可能性，更能幫助我在各個領域，適當地去提供新的機會運用。
        </Text>
      </VStack>
    </Flex>
  );
};

const Value = () => {
  return (
    <Flex bgColor="blue.700">
      <SectionContainer>
        <SectionTitle title="My value" isWhite={true} />
        <Flex w="100%" px="80px">
          <Flex w="40%" justify="center">
            <ValueCore />
          </Flex>
          <VStack w="60%" align="flex-start" spacing="100px">
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
          </VStack>
        </Flex>
      </SectionContainer>
    </Flex>
  );
};
export default Value;
