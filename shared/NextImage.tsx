import React from 'react';
import Image, { ImageProps } from 'next/image';

const NextImage = (props: ImageProps) => {
  return <Image {...props} />;
};

export default NextImage;
