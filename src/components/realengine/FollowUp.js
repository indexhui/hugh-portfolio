import {
  Flex,
  Text,
  Image,
  Heading,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';

import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';

import followUp01 from 'assets/images/realengine/followUp01.jpg';
import followUp02 from 'assets/images/realengine/followUp02.jpg';

const FollowUp = () => {
  return (
    <SectionContainer>
      <SectionTitle title="專案後續" />
      <Text
        maxW="720px"
        variant="bodyLg"
        textAlign="center"
        pt={{ base: '8px', lg: '12px' }}
        pb={{ base: '24px', lg: '32px' }}
      >
        這次與真實引擎的合作，告一段落，但產品開發的旅程將會持續。未來將會有越來越多功能與內容在產品中出現
      </Text>
      <Stack
        w="100%"
        px="24px"
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '24px', lg: '48px' }}
      >
        <AspectRatio w="100%" ratio={5 / 3}>
          <Image src={followUp01} rounded="lg" />
        </AspectRatio>
        <AspectRatio w="100%" ratio={5 / 3}>
          <Image src={followUp02} rounded="lg" />
        </AspectRatio>
      </Stack>
    </SectionContainer>
  );
};

export default FollowUp;
