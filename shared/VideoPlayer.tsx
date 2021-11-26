import React from 'react';

const VideoPlayer = ({
  url,
  mobileUrl,
  poster,
  mobilePoster,
}: {
  url: string;
  mobileUrl: string;
  poster?: string;
  mobilePoster?: string;
}) => {
  return (
    <>
      <video
        poster={mobilePoster}
        playsInline
        autoPlay
        muted
        loop
        className="block md:hidden bg-black"
      >
        <source src={mobileUrl} type="video/mp4" />
      </video>
      <video
        playsInline
        autoPlay
        muted
        loop
        className="hidden md:block mx-auto bg-black w-full"
        poster={poster}
      >
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
