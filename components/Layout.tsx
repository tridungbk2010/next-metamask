import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const LayoutContext = React.createContext<{ isPresale?: boolean }>({
  isPresale: false,
});

const Layout = ({
  children,
  isPresale,
  hideFooter,
}: {
  children: React.ReactNode;
  isPresale?: boolean;
  hideFooter?: boolean;
}) => {
  return (
    <LayoutContext.Provider value={{ isPresale }}>
      <>
        <NavBar />
        {children}
        {hideFooter ? null : <Footer />}
      </>
    </LayoutContext.Provider>
  );
};

const useLayout = () => React.useContext(LayoutContext);

export { Layout, useLayout };
