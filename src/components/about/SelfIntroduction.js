import {
  Flex,
  Image,
  Box,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Container, SkeletonImage } from 'components/layouts';

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
      <RevealBox
        delay={3}
        w="50px"
        bgColor="blue.600"
        top="-20px"
        left="45%"
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
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <Flex w="100%" position="relative" bgColor="grey.400" overflow="hidden">
      {isLargerThan1280 && <Decoration />}
      <Container my={{ base: '40px', lg: '80px' }}>
        <Flex w="100%" justify="space-between" wrap="wrap">
          <Flex
            zIndex="10"
            w={{ base: '100%', md: '65%' }}
            align={{ base: 'center', md: 'flex-start' }}
            direction="column"
            pr={{ base: '0', md: '20px' }}
          >
            <Flex position="relative" ml={{ base: '0', md: '20px' }}>
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
            <VStack
              pt="24px"
              spacing={{ base: '6px', lg: '12px' }}
              align="flex-start"
              textStyle="text03"
              color="grey.800"
            >
              <Text>大家好，我是 Hugh，一位擅長前端、UI/UX 的產品設計師。</Text>
              <Text>
                我目前是 Freelane 前端工程師 / 產品設計師。我過去經歷包括在
                zinstitute 擔任前端工程師，在 Crosspoint AI
                擔任產品設計師，在日本寶可夢擔任卡牌平面設計師。我擁有工藝設計學士學位。
              </Text>
              <Text>
                我相信設計發揮的力量有助於人與產品之間創造流暢的互動和愉快的體驗。也相信以商業策略進行思考有助設計落地並將概念化為現實。我享受作為設計師讓我有機會為人類進程做出貢獻的過程和成就感。它是我作為設計師的原動力。
              </Text>
              <Text>
                除了設計也喜歡接觸各領域的專業，包含學習前端並運用在工作與生活上。
              </Text>
            </VStack>
          </Flex>
          <Flex w={{ base: '100%', md: '35%' }} justify="center">
            <SkeletonImage
              w="100%"
              pt={{ base: '20px', lg: '0' }}
              borderRadius="20px 0 20px 20px"
              maxW="300px"
              h="300px"
              src={avatar}
              alt="hello world"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default SelfIntroduction;
