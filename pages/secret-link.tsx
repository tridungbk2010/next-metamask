import React from 'react';
import { Layout } from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SecretSeo from '../Seo/SecretSeo';

const SecretLink = () => {
  return (
    <>
      <SecretSeo />
      <Layout>
        <HeroSection />
      </Layout>
    </>
  );
};

export default SecretLink;
