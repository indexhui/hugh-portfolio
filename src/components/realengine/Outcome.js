import {
  Flex,
  Heading,
  Text,
  AspectRatio,
  Image,
  Tooltip,
  VStack,
  Box,
} from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import case01 from 'assets/images/realengine/case/case01.jpg';
import case02 from 'assets/images/realengine/case/case02.jpg';
import case03 from 'assets/images/realengine/case/case03.jpg';
import case04 from 'assets/images/realengine/case/case04.jpg';
import case05 from 'assets/images/realengine/case/case05.jpg';
import case06 from 'assets/images/realengine/case/case06.jpg';
import case07 from 'assets/images/realengine/case/case07.jpg';
import case08 from 'assets/images/realengine/case/case08.jpg';

const caseList = [
  {
    title: '豆苗先生',
    img: case01,
  },
  {
    title: '小海豹',
    img: case02,
  },
  {
    title: '豆苗先生',
    img: case03,
  },
  {
    title: '豆苗先生',
    img: case04,
  },
  {
    title: '豆苗先生',
    img: case05,
  },
  {
    title: '豆苗先生',
    img: case06,
  },
  {
    title: '豆苗先生',
    img: case07,
  },
  {
    title: '豆苗先生',
    img: case08,
  },
];

const Outcome = () => {
  return (
    <Flex direction="column" align="center" py={{ base: '24px', lg: '48px' }}>
      <Heading letterSpacing=".05em" color="grey.800">
        專案成果
      </Heading>
      <Text
        maxW="800px"
        textAlign="center"
        color="grey.700"
        py={{ base: '12px', lg: '24px' }}
      >
        豆苗先生作為專案前期最密切的合作夥伴，
        人生酷東西也成為首位在平台上成功達標的桌遊。
        真實引擎團隊持協助創作者製作桌遊，並在平台上獲得好成績
      </Text>
      <Flex w={{ base: '100%', lg: '75%' }} position="relative" pb="20px">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          speed={1000}
          spaceBetween={50}
          slidesPerView={3}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
          centeredSlides={true}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {caseList.map((item, index) => (
            <SwiperSlide key={index + 'banner'}>
              <Flex p="10px">
                <Image
                  border="1px solid #c6c6c6"
                  rounded="lg"
                  // shadow="xl"
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  src={item.img}
                />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Outcome;
