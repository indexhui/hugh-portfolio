import { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  HomePage,
  RealenginePage,
  CrosspointPage,
  PortalyPage,
  AboutPage,
  WorksPage,
} from 'pages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);
  return children;
};

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/resource" element={<ResourcePage />}>
            <Route path=":content" element={<ResourcePage />} />
          </Route> */}
          {/* <Route path="/works" element={<WorkPage />} /> */}
          <Route path="/realengine" element={<RealenginePage />} />
          <Route path="/crosspoint" element={<CrosspointPage />} />
          <Route path="/portaly" element={<PortalyPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Router;
