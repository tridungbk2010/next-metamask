import React from 'react';
import { DAO_WALLET_ADDRESS, ETHER_SCAN_URL } from '../const';
import useBalance from '../lib/useBalance';

const Treasury = () => {
  const balance = useBalance(DAO_WALLET_ADDRESS);

  return (
    <a
      target="_blank"
      href={`${ETHER_SCAN_URL}/${DAO_WALLET_ADDRESS}`}
      rel="noreferrer"
      className="font-bebasNeue hover:text-lime-500"
    >
      <span>Treasury</span> {balance}
    </a>
  );
};

export default Treasury;
