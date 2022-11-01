import { useEffect, useRef } from 'react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';
import Hero from 'components/home/Hero';
import SelfIntroduction from 'components/about/SelfIntroduction';
import DesignProjectList from 'components/home/DesignProjectList';
import FreelanceWork from 'components/FreelanceWork';
import FrontendWork from 'components/FrontendWork';

export function HomePage() {
  const location = useLocation();
  const handleScroll = () => {
    const element = document.getElementById('works');
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      inline: 'center',
    });
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => handleScroll(), 0);
    }
  }, []);
  return (
    <Flex w="100%" direction="column">
      {/* <Hero /> */}
      <SelfIntroduction />
      <DesignProjectList />
      <FreelanceWork />
      <FrontendWork />
    </Flex>
  );
}
