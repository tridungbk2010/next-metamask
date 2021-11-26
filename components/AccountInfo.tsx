import React, { useMemo } from 'react';
import Avatar from '../shared/Avatar';
import { useEthereum } from './EthereumConext';

const AccountInfo = () => {
  const { account } = useEthereum();

  const address = useMemo(() => {
    if (!account) {
      return '';
    }
    return `${account?.substr(0, 4)}...${account?.substr(-4)}`;
  }, [account]);

  return (
    <div className="flex items-center space-x-1">
      <span className="bg-lightGreen rounded-full w-2 h-2 opacity-80" />
      <Avatar />
      <span className="font-bebasNeue">{address}</span>
    </div>
  );
};

export default AccountInfo;
