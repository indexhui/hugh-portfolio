import { useRef, useState } from 'react';

import {
  Flex,
  Text,
  VStack,
  Heading,
  AspectRatio,
  Image,
} from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';
// import 'swiper/css/thumbs';

import challenge01 from 'assets/images/realengine/challenge01.jpg';
import challenge02 from 'assets/images/realengine/challenge02.jpg';
import challenge03 from 'assets/images/realengine/challenge03.jpg';

const challengeList = [
  {
    title: '如何讓創作者的情感與支持他們的群眾產生貼近的連結感',
    img: challenge01,
  },
  {
    title: '如果讓桌遊資訊和特色融入募資的介紹區域',
    img: challenge02,
  },
  {
    title: '如何讓募資活動具備獨特的時效性',
    img: challenge03,
  },
];

const Challenge = () => {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnSetSwiper = index => {
    swiperRef.current.slideToLoop(index);
    // swiperRef.current.slideTo(index);
    // console.log(index);
  };

  const handleOnSlideChange = swiper => {
    const { realIndex } = swiper;
    setCurrentIndex(realIndex);
    // console.log(swiper.realIndex);
    // console.log('swiper.activeIndex', swiper.activeIndex);
    // console.log('currentIndex', currentIndex);
  };

  return (
    <Flex justify="center" align="center" direction="column" py="40px">
      <Flex w="75%">
        <Flex w="50%" direction="column" justify="center">
          <Heading as="h4" size="xl" pb="24px">
            Challenge
          </Heading>
          <Flex>
            <VStack align="flex-start" spacing="16px">
              {challengeList.map((item, index) => (
                <Text
                  fontSize="22px"
                  color={currentIndex === index ? 'grey.800' : 'grey.600'}
                  fontWeight="600"
                  pb="5px"
                  key={index + 'challenge'}
                  borderBottom={
                    currentIndex === index
                      ? '2px solid #196E79'
                      : '2px solid rgba(0,0,0,0)'
                  }
                  onClick={() => handleOnSetSwiper(index)}
                  cursor="pointer"
                >
                  {item.title}
                </Text>
              ))}
            </VStack>
          </Flex>
        </Flex>
        <Flex w="50%" overflow="hidden" rounded="md">
          <AspectRatio w="100%" ratio={5 / 3}>
            <Swiper
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              effect={'fade'}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
              onSlideChange={handleOnSlideChange}
              // activeIndexChange={handleOnSlideChange}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
            >
              <SwiperSlide>
                <AspectRatio w="100%" ratio={5 / 3}>
                  <Image src={challenge01} />
                </AspectRatio>
              </SwiperSlide>
              <SwiperSlide>
                <AspectRatio w="100%" ratio={5 / 3}>
                  <Image src={challenge02} />
                </AspectRatio>
              </SwiperSlide>
              <SwiperSlide>
                <AspectRatio w="100%" ratio={5 / 3}>
                  <Image src={challenge03} />
                </AspectRatio>
              </SwiperSlide>
            </Swiper>
          </AspectRatio>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Challenge;
