import { Flex, Image, Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionContainer from 'components/SectionContainer';

import avatar from 'assets/images/about/hugh_avatar.jpg';
import hello from 'assets/images/about/hello.jpg';

const MotionBox = motion(Box);

const RevealBox = props => {
  const { children, once, delay, ...rest } = props;
  const variants = {
    visible: custom => ({
      height: '270px',
      opacity: 1,
      transition: {
        delay: (custom.delay || 0) * 0.2,
        duration: 1,
        type: 'tween',
      },
    }),

    hidden: custom => ({ height: custom || '50px' }),
  };
  const transition = { duration: 2, type: 'tween' };
  return (
    <MotionBox
      custom={{ delay: delay || 0 }}
      animate="visible"
      variants={variants}
      // custom={{
      //   delay: delay || 0,
      //   duration: props.duration || 0.5,
      //   y: props.y || 25,
      // }}
      initial="hidden"
      // whileInView="visible"
      // viewport={{ once: props.once ?? true, amount: 0.6 }}
      // variants={variants}
      transition={transition}
      transformOrigin="top"
      position="absolute"
      rounded="full"
      {...rest}
    >
      {props.children}
    </MotionBox>
  );
};

const Decoration = () => {
  return (
    <>
      <RevealBox delay={2} w="50px" h="100px" bgColor="blue.600" top="80%" />
      <RevealBox
        delay={3}
        w="50px"
        bgColor="blue.600"
        top="-50px"
        right="-10px"
        zIndex="1"
      />
    </>
  );
};

const RightHero = () => {
  return (
    <Flex
      position="absolute"
      right="0"
      h="100%"
      align="center"
      justify="flex-end"
      w="50%"
    >
      <Image
        borderRadius="100px 0 0 100px"
        w="100%"
        h="400px"
        src={hello}
        alt="hello world"
        objectFit="cover"
      />
    </Flex>
  );
};

const SelfIntroduction = () => {
  return (
    <Flex
      w="100%"
      position="relative"
      bgColor="grey.400"
      overflow="hidden"
      h="650px"
    >
      <Decoration />
      <RightHero />
      <SectionContainer>
        <Flex w="100%">
          <Flex w="50%" align="flex-start" direction="column" pr="100px">
            <Flex position="relative" ml="4px">
              <Box
                w="8px"
                h="20px"
                bgColor="blue.500"
                rounded="full"
                position="absolute"
                left="-20px"
                top="-18px"
              />
              <Box
                w="8px"
                h="20px"
                bgColor="blue.500"
                rounded="full"
                position="absolute"
                right="-20px"
                bottom="-18px"
              />
              <Text fontSize="20px" fontWeight="500" color="grey.800">
                透過觀察提供人們所需幫助 <br /> 是我做為設計師的熱情所在
              </Text>
            </Flex>
            <VStack pt="32px" spacing="24px">
              <Text lineHeight="30px">
                四年UIUX設計工作者經驗，參與了不同領域和幫助人們有關的的專案、產品設計。其中包含了在意性別議題、女力的自媒體
                女人迷。幫助人們微笑的SOV、台灣吧，台灣最有名的動畫媒體頻道，專門介紹台灣的歷史和傳遞知識。和其他新興產業及工作室。
              </Text>
              <Text>
                除了設計也喜歡接觸各個領域的專業，在設計背景的基礎下，也深入學習前端，並嘗試結合兩個專業的運用在工作上
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </SectionContainer>
    </Flex>
  );
};

export default SelfIntroduction;
