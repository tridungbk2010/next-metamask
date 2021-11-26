import React from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Navigations from './Navigations';

const NavBar = () => {
  return (
    <div className="bg-black w-full h-14 sticky top-0 left-0 z-40">
      <div className="flex justify-between items-center px-4 h-full">
        <Logo />
        <div className="md:hidden">
          <MenuIcon />
        </div>
        <div className="hidden md:block">
          <Navigations />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
