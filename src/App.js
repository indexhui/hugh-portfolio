import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Router from 'routes';
import Header from 'components/header/Header';
import theme from 'theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Router />
    </ChakraProvider>
  );
}

export default App;
