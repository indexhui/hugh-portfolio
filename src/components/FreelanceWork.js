import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Link,
  Divider,
  AspectRatio,
} from '@chakra-ui/react';

import { Container, SkeletonImage } from 'components/layouts';

import womany from 'assets/images/works/womany.jpg';
import taiwanbar from 'assets/images/works/taiwanbar.jpg';
import school from 'assets/images/works/school.jpg';

const workList = [
  {
    title: '女人迷 EC 電商 2017',
    link: 'https://www.behance.net/gallery/64428637/-womany-EC-showcase',
    image: womany,
    linear: 'linear-gradient(0deg, #615A7E 0%, rgba(105, 80, 176, 0) 100%)',
  },
  {
    title: '台灣吧訂閱式集資官網 2017',
    link: 'https://www.behance.net/gallery/64428637/-womany-EC-showcase',
    image: taiwanbar,
    linear: 'linear-gradient(0deg, #654404 0%, rgba(182, 144, 9, 0) 100%)',
  },
  {
    title: '新加坡兒美官網 2017',
    link: 'https://www.behance.net/gallery/64428637/-womany-EC-showcase',
    image: school,
    linear: 'linear-gradient(0deg, #002B46 0%, rgba(9, 80, 125, 0) 100%)',
  },
];

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:  linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #e5e5f7 1px);
// background-size: 20px 20px;

const WorkCard = props => {
  const { title, link, image, linear } = props;
  return (
    <AspectRatio as={Link} href={link} ratio={400 / 250} isExternal>
      <Flex
        shadow="md"
        rounded="md"
        bgImage={image}
        bgPosition="center"
        bgSize="
      cover"
        w="100%"
        align="flex-end"
      >
        <Flex w="100%" h="100%" align="flex-end">
          <Flex
            backdropFilter="blur(2px)"
            bgGradient={linear}
            w="100%"
            h="55%"
            align="flex-end"
            p="12px"
          >
            <Text color="white">{title}</Text>
          </Flex>
        </Flex>
      </Flex>
    </AspectRatio>
  );
};

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 20px 20px;
// background-position: 0 0,10px 10px;

const FreelanceWork = () => {
  return (
    <Flex
      pt={{ base: '32px', lg: '60px' }}
      bgColor="white"
      // bgImage="linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(to right, #f0f0f0 1px, white 1px)"
      bgImage="radial-gradient(#bfbfbf 0.5px, transparent 0.5px), radial-gradient(#bfbfbf 0.5px, white 0.5px)"
      bgSize="20px 20px"
    >
      <Container>
        <VStack w="100%" pb="20px" spacing="5px">
          <Text textStyle="heading01">FreelanceWork</Text>
          <Text textStyle="text03" textAlign="center" maxW="700px">
            2017 全職自由接案者約一年左右，
            <br />
            合作過的對象和公司有女人迷、台灣吧、UX設計師 Jenny Shen
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          w="100%"
          spacingX="24px"
          spacingY="12px"
        >
          {workList.map(item => (
            <WorkCard key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default FreelanceWork;
