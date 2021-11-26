import React from 'react';
import VideoPlayer from '../shared/VideoPlayer';
import MintButton from './MintButton';
import PresaleMintButton from './PresaleMintButton';
import { useLayout } from './Layout';
import MintNote from './MintNote';

const sources = {
  url: '/video/video-lg.mp4',
  poster: '/desktop-bg.jpeg',
  mobilePoster: '/mobile-bg.jpeg',
  mobileUrl: '/video/video-mobile.mp4',
};

const HeroSection = () => {
  const { isPresale } = useLayout();
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 md:bottom-5 lg:bottom-32 text-center z-10">
        {isPresale ? <PresaleMintButton /> : <MintButton />}
        <MintNote />
      </div>
      <div>
        <VideoPlayer {...sources} />
      </div>
    </div>
  );
};

export default HeroSection;
