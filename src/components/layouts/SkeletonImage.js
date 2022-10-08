import { Image, Skeleton } from '@chakra-ui/react';

export function SkeletonImage(props) {
  // const { bgColor, ...rest } = props;
  return <Image fallback={<Skeleton />} {...props} />;
}
