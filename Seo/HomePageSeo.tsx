import React from 'react';
import { NextSeo } from 'next-seo';

const HomePageSeo = () => {
  return (
    <NextSeo
      title="Cryptorontonians | A DAO driven collection of 6,555 unique digital characters living on the Ethereum blockchain."
      description="Cryptorontonians is a DAO driven collection of 6,555 unique digital characters living on the Ethereum blockchain."
      canonical="https://cryptorontonians.com"
      openGraph={{
        url: 'https://cryptorontonians.com',
        title: 'Cryptorontonians',
        images: [
          {
            width: 1000,
            height: 563,
            url: '/desktop-bg.jpeg',
            alt: 'Cryptorontonians',
          },
          {
            width: 640,
            height: 768,
            url: '/mobile-bg.jpeg',
            alt: 'Cryptorontonians',
          },
        ],
      }}
    />
  );
};

export default HomePageSeo;
