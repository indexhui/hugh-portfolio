import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Container } from 'components/layouts';

import { useTranslation } from 'react-i18next';

import SectionTitle from 'components/SectionTitle';

const valueList = [
  {
    title: '發揮想像力',
    content:
      '不設限的發揮想像力，發想設計的可能性，更能幫助我在各個領域，適當地去提供新的機會運用。',
  },
  {
    title: '保持好奇心的學習',
    content:
      '隨時有新的領域與新的機會接觸，保持好奇心讓我能持續跨領域的了解產業新知與學習新技能。',
  },
  {
    title: '換位思考',
    content:
      '無論是夥伴或是使用者，各自有獨特背景而有不同思考模式與考量，換位思考幫助我與夥伴溝通以及了解產品的使用者',
  },
];

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
      top="20px"
      mt="20px"
      rounded="full"
      w="200px"
      h="200px"
      overflow="hidden"
    >
      {Array(...new Array(10)).map((_, i) => (
        <CoreLine key={i} delay={i} />
      ))}
    </Flex>
  );
};

const ValueCard = props => {
  const { title, content } = props;
  return (
    <Flex w="100%" {...props} px={{ base: '0', lg: '80px' }}>
      <Box bgColor="white" w="10px" h="20px" rounded="full" mr="10px" />
      <VStack align="flex-start">
        <Text color="white" fontWeight="500" fontSize="18px">
          {title}
        </Text>
        <Text color="white" fontWeight="400" fontSize="16px">
          {content}
        </Text>
      </VStack>
    </Flex>
  );
};

const Value = () => {
  const { t } = useTranslation();
  return (
    <Flex bgColor="blue.700">
      <Container py={{ base: '40px', md: '60px' }}>
        <SectionTitle title="My value" isWhite={true} />
        <Flex w="100%" px={{ base: '0', lg: '80px' }} wrap="wrap">
          <Flex
            w={{ base: '100%', lg: '30%' }}
            justify="center"
            pb={{ base: '20px', lg: '0' }}
          >
            <ValueCore />
          </Flex>
          <VStack
            w={{ base: '100%', lg: '70%' }}
            align="flex-start"
            spacing={{ base: '20px', lg: '40px' }}
          >
            {valueList.map((item, index) => (
              <ValueCard
                key={index}
                title={t(`valueTitle0${index + 1}`)}
                content={t(`value0${index + 1}`)}
              />
            ))}
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};
export default Value;
