import React from 'react';

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-8 text-white prose">{children}</div>;
};

export default Content;
