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

import style from 'assets/images/realengine/style.jpg';
import card from 'assets/images/realengine/card.jpg';

import animal from 'assets/images/realengine/icon/animal.svg';
import castle from 'assets/images/realengine/icon/castle.svg';
import coffee from 'assets/images/realengine/icon/coffee.svg';
import cunning from 'assets/images/realengine/icon/cunning.svg';
import conversation from 'assets/images/realengine/icon/conversation.svg';
import family from 'assets/images/realengine/icon/family.svg';
import key from 'assets/images/realengine/icon/key.svg';
import luck from 'assets/images/realengine/icon/luck.svg';
import meme_cat from 'assets/images/realengine/icon/meme_cat.svg';
import party_balloon from 'assets/images/realengine/icon/party_balloon.svg';
import party from 'assets/images/realengine/icon/party.svg';
import people from 'assets/images/realengine/icon/people.svg';
import puzzle from 'assets/images/realengine/icon/puzzle.svg';
import sword from 'assets/images/realengine/icon/sword.svg';
import tent from 'assets/images/realengine/icon/tent.svg';
import time from 'assets/images/realengine/icon/time.svg';
import theater from 'assets/images/realengine/icon/theater.svg';

const mainColorList = [
  {
    name: 'blue.900',
    code: '#033946',
  },
  {
    name: 'blue.800',
    code: '#0C5A6A',
  },
  {
    name: 'blue.700',
    code: '#148191',
  },
  {
    name: 'blue.600',
    code: '#1B9AA6',
  },
  {
    name: 'blue.500',
    code: '#1DA4AF',
  },
  {
    name: 'blue.400',
    code: '#22B6C2',
  },
  {
    name: 'blue.300',
    code: '#8EE5E3',
  },
  {
    name: 'blue.200',
    code: '#C2F3F1',
  },
  {
    name: 'blue.100',
    code: '#EEFFFE',
  },
];

const iconList = [
  {
    name: '人數',
    img: people,
  },
  {
    name: '時間',
    img: time,
  },
  {
    name: '運氣',
    img: luck,
  },
  {
    name: '互動',
    img: conversation,
  },
  {
    name: '思考',
    img: coffee,
  },
  {
    name: '角色',
    img: sword,
  },
  {
    name: '派對',
    img: party,
  },
  {
    name: '解迷',
    img: puzzle,
  },
  {
    name: '陣營',
    img: tent,
  },
  {
    name: '家庭',
    img: family,
  },
  {
    name: '劇場',
    img: theater,
  },
  {
    name: '經營',
    img: castle,
  },
  {
    name: '心機',
    img: cunning,
  },
  {
    name: '動物',
    img: animal,
  },
  {
    name: '迷因',
    img: meme_cat,
  },
];

const ColorPlate = props => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Tooltip hasArrow label={props.name + ' ' + props.code} fontSize="md">
      <Box
        mx="5px"
        onClick={() => copyToClipboard(props.code)}
        cursor="pointer"
        rounded="sm"
        w="40px"
        h="40px"
        bgColor={props.code}
      ></Box>
    </Tooltip>
  );
};

const Color = () => {
  return (
    <Flex color="white" w="100%" direction="column">
      <Text fontWeight="600" fontSize={{ base: '16px', lg: '22px' }}>
        Color
      </Text>
      <Flex w="100%" wrap="wrap" p="16px" bgColor="grey.300" rounded="md">
        {mainColorList.map(color => (
          <ColorPlate key={color.name} {...color} />
        ))}
      </Flex>
      <Text w="100%" textAlign="center" fontSize="14px" pt="5px">
        Theme
      </Text>
    </Flex>
  );
};

const Icon = props => {
  return <Image w="24px" h src={props.img} />;
};

const Icons = () => {
  return (
    <Flex color="white" w="100%" direction="column">
      <Text fontWeight="600" fontSize={{ base: '16px', lg: '22px' }}>
        Icon
      </Text>
      <Flex w="100%" wrap="wrap" p="16px" bgColor="grey.300" rounded="md">
        {iconList.map(item => (
          <Icon key={item.name} {...item} />
        ))}
      </Flex>
      <Text w="100%" textAlign="center" fontSize="14px" pt="5px">
        Theme
      </Text>
    </Flex>
  );
};

const Style = () => {
  return (
    <VStack w="100%" align="center">
      <Image src={style} rounded="lg" />
      <Text textAlign="center" maxW="600px">
        探索風格時，有往遊戲語言強的視覺發展
        <br />
        經過團隊聚焦討論後，誕生出了現在的版本，無論是哪種氣質的桌遊都可以襯托內容
        ，並保有桌遊的活潑氛圍
      </Text>
    </VStack>
  );
};

const Card = () => {
  return (
    <VStack w="100%" align="center">
      <Image src={card} rounded="lg" />
      <Text textAlign="center" maxW="600px">
        方案卡片規劃了兩個版本，最後選擇了左邊。
        <br />
        吸引眼球的標示，每個卡片本身可以容易閱讀內容同時一目了覽其他方案差異
      </Text>
    </VStack>
  );
};

const UserInterface = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      justify="center"
      bgColor="grey.800"
      py={{ base: '24px', lg: '48px' }}
      color="white"
    >
      <Heading w="100%" textAlign="center" pb="24px">
        UI 設計產出
      </Heading>
      <Flex w="75%" border="1px solid blue">
        <Flex w={{ base: '100%', lg: '35%' }} border="1px solid blue">
          <VStack w="100%">
            <Color />
            <Icons />
          </VStack>
        </Flex>
        <VStack w={{ base: '100%', lg: '65%' }} px="48px">
          <Style />
          <Card />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default UserInterface;
