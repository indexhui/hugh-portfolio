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
  return (
    <Flex
      w="100%"
      p="20px"
      boxShadow="0px 4px 10px rgba(214, 214, 214, 0.25)"
      border="1px solid"
      borderColor="grey.400"
      direction="column"
      rounded="sm"
    >
      <Flex w="100%" justify="space-between">
        <HStack spacing="10px">
          <SkeletonImage
            rounded="sm"
            w={{ base: '40px', lg: '55px' }}
            src={image}
          />
          <VStack align="flex-start">
            <Text fontWeight="500" color="grey.700">
              {company}
            </Text>
            <Text color="grey.800">{title}</Text>
          </VStack>
        </HStack>
        <VStack align="flex-end">
          <Text fontSize="12px">{time}</Text>
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
