import { Flex, Text, Image } from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSwiper = props => {
  const { bannerList } = props;
  return (
    <Flex w="50%" borderRadius="0 10px 10px 0" overflow="hidden">
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        speed={1000}
        // spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        {bannerList.map((item, index) => (
          <SwiperSlide key={index + 'banner'}>
            <Image h="100%" w="100%" objectFit="cover" src={item} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ... */}
      </Swiper>
    </Flex>
  );
};

export default BannerSwiper;
