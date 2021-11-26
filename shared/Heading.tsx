import React from 'react';

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="border-b border-lime-500">
      <span className="heading">{children}</span>
    </h3>
  );
};

export default Heading;
