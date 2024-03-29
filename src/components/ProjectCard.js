import { useTranslation } from 'react-i18next';

import {
  Flex,
  Text,
  VStack,
  Image,
  AspectRatio,
  Link,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const ProjectCard = props => {
  const { isNeedPassword } = props;
  const { t } = useTranslation();

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
      <Flex w={{ base: '100%', lg: '40%' }} as={RouterLink} to={props.link}>
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
        py={{ base: '16px', lg: '0' }}
        w={{ base: '100%', lg: '60%' }}
        px={{ lg: '24px' }}
        align="flex-start"
        spacing={{ base: '4px', lg: '12px' }}
      >
        <VStack spacing={{ base: '0px', lg: '0px' }} align="flex-start">
          <Text textStyle="title1">{t(props.subTitle)}</Text>
          <Text textStyle="text03">{t(props.title)}</Text>
        </VStack>
        <Text textStyle="text04" color="blue.700">
          {t(props.tag)}
        </Text>
        <Text textStyle="text04">{t(props.content)}</Text>
        <Text>{isNeedPassword ? '需要密碼' : ''}</Text>
        <Link as={RouterLink} to={props.link}>
          <HStack color="blue.700">
            <Text>{t('projectAction')}</Text>
            <ChevronRightIcon w="18px" h="18ox" />
          </HStack>
        </Link>
      </VStack>
    </Flex>
  );
};

export default ProjectCard;
