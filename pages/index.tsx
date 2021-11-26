import React from 'react';
import type { NextPage } from 'next';
import HeroSection from '../components/HeroSection';
import VideoPlayer from '../shared/VideoPlayer';
import AskQuestions from '../components/AskQuestions';
import { Layout } from '../components/Layout';
import Intro from '../components/HomeSections/Intro';
import HomePageSeo from '../Seo/HomePageSeo';
import Presale from '../components/HomeSections/Presale';

const sources = {
  url: '/video/randomize-desktop.mp4',
  mobileUrl: '/video/randomize-mobile.mp4',
};

const Home: NextPage = () => {
  return (
    <>
      <HomePageSeo />
      <Layout isPresale>
        <div className="bg-black">
          <div className="max-w-5xl mx-auto pb-20 px-4 md:px-0">
            <div className="pt-8">
              <img
                src="/logo-and-slogan.svg"
                className="h-20 lg:h-24 xl:h-28"
                alt="logo2"
              />
            </div>
            <Presale />
            <Intro />
            <div className="-ml-5 -mt-8">
              <VideoPlayer {...sources} />
            </div>
            <AskQuestions />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
