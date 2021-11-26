import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useEthereum } from '../components/EthereumConext';
import { contract } from './contract';

export default function useUnitPrice() {
  const { account } = useEthereum();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('0');

  useEffect(() => {
    if (!!account && !!contract) {
      setLoading(true);
      contract
        .getUnitPrice()
        .then((res: any) => {
          setPrice(ethers.utils.formatEther(res));
        })
        .catch((e: any) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPrice('0');
    }
  }, [account]);
  return {
    loading,
    unitPrice: price,
  };
}
