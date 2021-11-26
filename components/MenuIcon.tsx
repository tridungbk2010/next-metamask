import React, { useEffect, useState } from 'react';
import styles from './MenuIcon.module.css';
import SocialLinks from '../shared/SocialLinks';
import Navigations from './Navigations';
import MintButton from './MintButton';
import { useLayout } from './Layout';
import PresaleMintButton from './PresaleMintButton';
import MintNote from './MintNote';

const MenuIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const { isPresale } = useLayout();

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [expanded]);

  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className={`${styles.menuIcon} ${expanded ? styles.expand : null}`}
        />
      </button>
      {expanded && (
        <div className="bg-black absolute top-[56px] left-0 h-screen w-screen">
          <div className="flex items-center justify-center h-3/4 w-full">
            <div className="text-center">
              <Navigations />
              <div className="py-6 flex justify-center flex-col items-center">
                {isPresale ? <PresaleMintButton /> : <MintButton />}
                <MintNote />
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuIcon;
