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

import z from 'assets/images/works/z.jpg';
import samurai from 'assets/images/works/samurai.jpg';
import gold from 'assets/images/works/gold.jpg';

const workList = [
  {
    title: '互動特效官網',
    link: 'https://zinstitute.net/zh',
    image: z,
    linear: 'linear-gradient(0deg, #01FEA050 0%, rgba(105, 80, 176, 0) 100%)',
  },
  {
    title: '日式文化地圖',
    link: 'https://yamato.katanansamurai.art/',
    image: samurai,
    linear: 'linear-gradient(0deg, #654404 0%, rgba(182, 144, 9, 0) 100%)',
  },
  {
    title: '2022礦山藝術季',
    link: 'https://www.mineartfestival.com/',
    image: gold,
    linear: 'linear-gradient(0deg, #002B46 0%, rgba(9, 80, 125, 0) 100%)',
  },
];

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

const FrontendWork = () => {
  return (
    <Flex
      py={{ base: '32px', lg: '48px' }}
      pb={{ base: '48px', lg: '72px' }}
      bgColor="white"
      // bgImage="linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(to right, #f0f0f0 1px, white 1px)"
      bgImage="radial-gradient(#bfbfbf 0.5px, transparent 0.5px), radial-gradient(#bfbfbf 0.5px, white 0.5px)"
      bgSize="20px 20px"
    >
      <Container>
        <VStack w="100%" pb="20px" spacing="5px">
          <Text textStyle="heading01">Front-end Works</Text>
          <Text textStyle="text03" textAlign="center" maxW="700px">
            在2022 上半年以前端工程師身分任職於 The Z Institute。並下半年以
            freelance 身分接觸各類前端專案
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

export default FrontendWork;
