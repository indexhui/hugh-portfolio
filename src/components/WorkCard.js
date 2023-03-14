import { Flex, Text, Link, AspectRatio, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BiLinkExternal } from 'react-icons/bi';

const MotionFlex = motion(Flex);

const WorkCard = props => {
  const { title, link, image, linear } = props;
  return (
    <AspectRatio as={Link} href={link} ratio={400 / 250} isExternal>
      <MotionFlex
        shadow="md"
        whileHover={{ scale: 1.05, y: -4 }}
        transition=".25"
        rounded="md"
        bgImage={image}
        bgPosition="center"
        bgSize="cover"
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
            <Flex w="100%" align="center" justify="space-between">
              <Text color="white">{title}</Text>
              <Icon color="white" as={BiLinkExternal} />
            </Flex>
          </Flex>
        </Flex>
      </MotionFlex>
    </AspectRatio>
  );
};

export default WorkCard;
