import { chakra } from '@chakra-ui/react';
export function Span(props) {
  return <chakra.span {...props}>{props.children}</chakra.span>;
}

export default Span;
