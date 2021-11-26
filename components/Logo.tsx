import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <img src="/logo-white.svg" className="h-14 lg:h-16" alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
