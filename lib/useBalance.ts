import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useEthereum } from '../components/EthereumConext';
import { ethers } from 'ethers';

export default function useBalance(address: string) {
  const { account } = useEthereum();
  const [balance, setBalance] = useState('0');

  useEffect(() => {
    if (account) {
      window.ethereum
        .request({
          method: 'eth_getBalance',
          params: [address, 'latest'],
        })
        .then((balance: any) => {
          setBalance(ethers.utils.formatEther(balance).substr(0, 6));
        })
        .catch((error: any) => {
          toast.error(error.message || "This didn't work.");
        });
    }
  }, [account, address]);
  return balance;
}
