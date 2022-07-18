import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react';
import useScrollPosition from '@react-hook/window-scroll';
import {
  motion,
  useMotionValue,
  useTransform,
  useElementScroll,
} from 'framer-motion';
import heroImg from 'assets/images/home/hero_img.png';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Hero = () => {
  const ref = useRef(null);
  const [elementBoundary, setElementBoundary] = useState({});
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollY = useScrollPosition(60 /*fps*/);
  const bgIsDark = scrollY < window.innerHeight * 0.5;

  useLayoutEffect(() => {
    const element = ref.current;
    setElementBoundary({
      top: element.offsetTop,
      height: element.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    setScrollPercentage(scrollY / elementBoundary.height);
  }, [scrollY, elementBoundary.top, elementBoundary.height]);
  return (
    <MotionFlex
      ref={ref}
      h={window.innerHeight * 2}
      position="relative"
      bg="#4C7E85"
    >
      <MotionFlex
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPercentage * 2.5 }}
        bg="#DFDFDF"
      ></MotionFlex>
      <Flex
        position="sticky"
        w="100%"
        h="100vh"
        top="0px"
        justify="center"
        align="center"
        overflow="hidden"
      >
        <Flex w="75%" h="50%" direction="column" justify="space-around">
          <Flex
            w="55%"
            direction="column"
            color={bgIsDark ? 'gray.200' : '#222'}
          >
            <VStack spacing="12px" align="left">
              <Heading size="lg" col>
                嗨 我是 Hugh
              </Heading>
              <Heading size="lg">
                是位喜歡透過實作
                <br />
                來擁抱用戶問題的Product Designer
              </Heading>
              <Heading size="lg">
                有著四年多的{' '}
                <Link textDecoration="underline">產品設計實戰</Link>
                和一年的
                <Link textDecoration="underline">前端開發經驗</Link>
              </Heading>
            </VStack>
          </Flex>
          <Flex opacity={bgIsDark ? '0' : '1'}>
            {' '}
            Start desing and create digital since 2016
          </Flex>
        </Flex>
        <MotionImage
          top="30vh"
          h="40vh"
          src={heroImg}
          right="-5%"
          // filter="hue-rotate(90deg)"
          filter={`hue-rotate(${scrollPercentage * 600}deg)`}
          position="absolute"
        ></MotionImage>
      </Flex>
    </MotionFlex>
  );
};

export default Hero;
