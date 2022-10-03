import {
  Flex,
  Text,
  Stack,
  VStack,
  HStack,
  Heading,
  Highlight,
  chakra,
  Image,
  Link,
  Icon,
  Grid,
  GridItem,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Container } from 'components/layouts';

import outcome00 from 'assets/images/portaly/outcome00.jpg';
import outcomeBlock01 from 'assets/images/portaly/outcomeBlock01.jpg';
import outcomeBlock02 from 'assets/images/portaly/outcomeBlock02.jpg';
import outcomeBlock03 from 'assets/images/portaly/outcomeBlock03.jpg';
import outcomeBlock04 from 'assets/images/portaly/outcomeBlock04.jpg';
import outcomeBlock05 from 'assets/images/portaly/outcomeBlock05.jpg';
// import outcome00 from 'assets/images/portaly/outcome00.jpg';

import socialImage01 from 'assets/images/portaly/socialImage01.jpg';
import socialImage02 from 'assets/images/portaly/socialImage02.jpg';
import socialImage03 from 'assets/images/portaly/socialImage03.jpg';

import socialAvatar01 from 'assets/images/portaly/socialAvatar01.jpg';
import socialAvatar02 from 'assets/images/portaly/socialAvatar02.jpg';
import socialAvatar03 from 'assets/images/portaly/socialAvatar03.jpg';

import userAvatar01 from 'assets/images/portaly/userAvatar01.jpg';
import userAvatar02 from 'assets/images/portaly/userAvatar02.jpg';

const outcomeImageList = [
  {
    link: 'https://portaly.cc/Pinkoi',
    image: outcomeBlock01,
  },
  {
    link: 'https://portaly.cc/GOGOHOME',
    image: outcomeBlock02,
  },
  {
    link: 'https://portaly.cc/wanshing',
    image: outcomeBlock03,
  },
  {
    link: 'https://portaly.cc/Pinkoi',
    image: outcomeBlock04,
  },
  {
    link: 'https://portaly.cc/Pinkoi',
    image: outcomeBlock05,
  },
];

const SocialList = [
  {
    title: '郭政佑 Kevin',
    content:
      '總覺得 Link-in-Bio 少了點什麼，直到我遇到傳送門，才知道我期望的不只是方便。',
    avatar: socialAvatar01,
    image: socialImage01,
    link: 'https://www.facebook.com/photo/?fbid=457943016340620&set=pcb.457943136340608',
    portaly: 'https://portaly.cc/kevindesign',
  },
  {
    title: 'Inside 網路趨勢',
    content:
      '如果是個人創作者沒有資源建立官方網頁，這是不錯的選擇，透過更細節的介紹呈現特色商品、傳遞品牌理念',
    avatar: socialAvatar02,
    image: socialImage02,
    link: 'https://www.inside.com.tw/article/29008-portaly-hands-on?fbclid=IwAR3SxNY3SCfLtNh62aY_T9HmDwka2SZxcedXSFBMkfnlYeAU1czdLp7XKJo',
    portaly: 'https://portaly.cc/inside.tw',
  },
  {
    title: '簡報診療室',
    content:
      '有像 Linktree 般整合多連結頁面的工具，滿足了方便性卻在吸引力稍微弱了那麼一些，這時 Portaly 傳送門 就出現了！',
    avatar: socialAvatar03,
    image: socialImage03,
    link: 'https://www.facebook.com/dr52ppt/photos/a.100105702418613/183837494045433/',
    portaly: 'https://portaly.cc/dr52ppt',
  },
];

const userList = [
  {
    type: '圖文創作',
    list: [
      {
        name: '無所事事小海豹',
        avatar: userAvatar01,
        portaly: 'https://portaly.cc/thenothingseal',
      },
      {
        name: '怪奇事物所',
        avatar: userAvatar02,
        portaly: 'https://portaly.cc/thenothingseal',
      },
      {
        name: '無所事事小海豹',
        avatar: userAvatar02,
        portaly: 'https://portaly.cc/thenothingseal',
      },
      {
        name: '無所事事小海豹',
        avatar: userAvatar02,
        portaly: 'https://portaly.cc/thenothingseal',
      },
      {
        name: '無所事事小海豹',
        avatar: userAvatar02,
        portaly: 'https://portaly.cc/thenothingseal',
      },
      {
        name: '無所事事小海豹',
        avatar: userAvatar02,
        portaly: 'https://portaly.cc/thenothingseal',
      },
    ],
  },
  {
    type: '個人品牌',
    list: [
      {
        name: '三個字SunGuts',
        avatar: '',
        portaly: 'https://portaly.cc/sunguts',
      },
    ],
  },
  {
    type: '官方品牌',
    list: [
      {
        name: 'Pinkoi',
        avatar: '',
        portaly: 'https://portaly.cc/Pinkoi',
      },
    ],
  },
];

const MotionImage = motion(Image);

const RevealImage = props => {
  const { custom, ...rest } = props;

  const defaultVariants = {
    visible: custom => ({
      opacity: 1,
      y: '0',
      transition: {
        delay: (custom?.order || 0) * 0.2,
        duration: 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0, y: '25%' }),
  };
  // const transition = { duration: 0.5, type: 'tween' };
  return (
    <MotionImage
      custom={custom}
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      // transition={transition}
      {...rest}
    ></MotionImage>
  );
};

const DemoSection = () => {
  const variants = {
    visible: {
      opacity: 1,
      y: 50,
    },
    hidden: {
      opacity: 0.2,
      y: 100,
    },
  };
  const transition = { duration: 0.5, type: 'tween' };
  return (
    <Flex
      align="flex-end"
      justify="space-between"
      w="100%"
      my="24px"
      pt={{ base: '20px', lg: '40px' }}
      px={{ base: '20px', lg: '48px' }}
      bgColor="grey.400"
      rounded="lg"
      // h={{ base: '200px', lg: '480px' }}
      overflow="hidden"
    >
      {outcomeImageList.map((outcome, index) => (
        <Link
          w={1 / 5}
          display="flex"
          key={index}
          href={outcome.link}
          isExternal
          mx={{ base: '6px', lg: '12px' }}
        >
          <RevealImage
            w="100%"
            custom={{ order: index }}
            src={outcome.image}
            maxW="350px"
            shadow="sm"
          />
        </Link>
      ))}
    </Flex>
  );
};

const SocialProofSection = () => {
  return (
    <Flex w="100%" direction="column" py="24px">
      <Text pb="12px">來自創作者之間的主動推薦</Text>
      <SimpleGrid w="100%" gap="30px" columns={{ base: 1, lg: 3 }}>
        {SocialList.map((item, index) => (
          <Flex
            w="100%"
            key={index}
            bgColor="grey.300"
            py="20px"
            rounded="md"
            p="16px"
            direction="column"
          >
            <VStack flex="1" align="flex-start">
              <HStack spacing="20px">
                <Link href={item.portaly} isExternal>
                  <Image w="40px" h="40px" rounded="full" src={item.avatar} />
                </Link>
                <Text color="gray.600">{item.title}</Text>
              </HStack>
            </VStack>
            <Flex flex="1" py="5px" justify="center">
              <Text fontSize="14px">{item.content}</Text>
            </Flex>
            <Flex align="flex-end" justify="flex-end">
              <Link
                href={item.link}
                isExternal
                color="blue.600"
                fontSize="12px"
              >
                看完整貼文
              </Link>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const UserTypeSection = props => {
  const { type, list } = props;
  return (
    <Flex bgColor="grey.300" rounded="md" p="20px" direction="column">
      <Text pb="8px">{type}</Text>
      <SimpleGrid columns="4" spacingX="8px" spacingY="8px">
        {list.map((item, index) => (
          <Tooltip
            key={index + 'user'}
            hasArrow
            label={item.name}
            aria-label="A tooltip"
          >
            <Link href={item.portaly} isExternal>
              <Image rounded="full" src={item.avatar} />
            </Link>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const UsersSection = () => {
  return (
    <Flex direction="column" w="100%">
      <Text pb="12px">適合各領域的使用者</Text>
      <SimpleGrid
        w="100%"
        columns={{ base: 1, lg: 3 }}
        spacingX="30px"
        spacingY="16px"
      >
        {userList.map((item, index) => (
          <UserTypeSection key={index} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const Outcome = () => {
  return (
    <Container bgColor="white" py="40px">
      <Flex w="100%" pb="20px">
        <Text color="blue.700" variant="title">
          Outcome
        </Text>
      </Flex>
      <Text w="100%" textAlign="left">
        超過 3000 位不同領域的創作者使用 Portaly 作為自己的 Link-in-Bio
        與微型官網，累積 4000萬粉絲瀏覽
      </Text>
      <DemoSection />
      <SocialProofSection />
      <UsersSection />
    </Container>
  );
};

export default Outcome;
