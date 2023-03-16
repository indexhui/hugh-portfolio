import {
  Flex,
  Image,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { SkeletonImage } from 'components/layouts';

const Tag = props => {
  const { content, ...rest } = props;
  return (
    <Flex
      bgColor="grey.650"
      rounded="full"
      color="white"
      p="3px 10px"
      {...rest}
    >
      <Text fontSize="12px">{content}</Text>
    </Flex>
  );
};

const ExperienceCard = props => {
  const { image, title, company, time, isDesign, content, tag } = props;
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      p="24px"
      // boxShadow="0px 4px 10px rgba(214, 214, 214, 0.25)"
      border="1px solid"
      borderColor="grey.500"
      direction="column"
      rounded="md"
    >
      <Flex
        w="100%"
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
        align={{ base: 'flex-start', lg: 'center' }}
      >
        <HStack spacing="10px">
          <SkeletonImage
            rounded="md"
            w={{ base: '40px', lg: '55px' }}
            src={image}
          />
          <VStack align="flex-start" spacing="5px">
            <Text fontWeight="600" color="grey.650">
              {t(company)}
            </Text>
            <Text color="grey.800">{t(title)}</Text>
          </VStack>
        </HStack>
        <VStack align={{ base: 'flex-start', lg: 'flex-end' }}>
          <Text fontSize="14px">{time}</Text>
          <HStack spacing="4px">
            {tag.map(item => (
              <Tag key={item} content={item} />
            ))}
            {isDesign ? (
              <Tag content="design" color="orange.200" />
            ) : (
              <Tag content="develope" color="blue.300" />
            )}
          </HStack>
        </VStack>
      </Flex>
      {content}
    </Flex>
  );
};

export default ExperienceCard;
