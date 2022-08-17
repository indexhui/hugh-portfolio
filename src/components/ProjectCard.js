import { Flex, Text, VStack, Image, AspectRatio } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const ProjectCard = props => {
  const { isNeedPassword } = props;
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.75,
        type: 'tween',
      },
    },
    hidden: { opacity: 0.2, y: 50, x: -50 },
  };

  return (
    <Flex w="100%" direction={{ base: 'column', lg: 'row' }} align="center">
      <Flex w="50%" as={RouterLink} to={props.link}>
        <AspectRatio w="100%" ratio={5 / 3}>
          <Flex w="100%" bgColor="#EDEEF0" borderRadius="md" overflow="hidden">
            <AspectRatio w="100%" ratio={5 / 3}>
              <MotionImage
                variants={variants}
                initial="hidden"
                whileInView="visible"
                objectFit="cover"
                src={props.img}
              />
            </AspectRatio>
          </Flex>
        </AspectRatio>
      </Flex>
      <VStack
        px={{ lg: '24px' }}
        align="flex-start"
        spacing={{ base: '4px', lg: '16px' }}
      >
        <Text fontSize="20px" fontWeight="600">
          {props.title}
        </Text>
        <Text color="grey.500">{props.tag}</Text>
        <Text>{props.tag}</Text>
        <Text>{isNeedPassword ? '需要密碼' : ''}</Text>
      </VStack>
    </Flex>
  );
};

export default ProjectCard;
