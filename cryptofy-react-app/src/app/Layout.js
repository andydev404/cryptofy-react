import React from 'react';
import Helmet from 'react-helmet';

import { Header } from './layout/Header';
import { Content } from './layout/Content';
import { HeroSection } from './layout/HeroSection';

export const Layout = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Cryptofy"
        script={[
          { src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js' }
        ]}
      />
      <Header />
      <HeroSection />
      <Content />
    </div>
  );
};
