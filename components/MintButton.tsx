import React, { useState } from 'react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import useUnitPrice from '../lib/useUnitPrice';
import { useEthereum } from './EthereumConext';
import useBalance from '../lib/useBalance';
import InputNumber from '../shared/InputNumber';
import Spinner from '../shared/Spinner';
import { contract } from '../lib/contract';

const MintText = () => (
  <span className="font-bebasNeue tracking-wider inline-block mt-1 text-xl">
    MINT
  </span>
);

const MintBtn = ({
  loadingMint,
  onMint,
  className,
}: {
  onMint: () => void;
  loadingMint: boolean;
  className?: string;
}) => (
  <button disabled={loadingMint} onClick={onMint} className={className}>
    {loadingMint && <Spinner />}
    <MintText />
  </button>
);

const MintButton = () => {
  const [loadingMint, setLoadingMint] = useState(false);
  const { account } = useEthereum();
  const { unitPrice } = useUnitPrice();
  const walletBalance = useBalance(account);
  const [noToken, setNoOfToken] = useState(1);

  const isNotConnected = !contract || !account;

  const isInsufficient =
    parseFloat(walletBalance) - parseFloat(unitPrice) * noToken <= 0;

  function validate(): string {
    switch (true) {
      case isNotConnected:
        return 'Please connect wallet';
      case !noToken:
        return 'Please enter the quantity of token(s)';
      case noToken > 20:
        return '20 tokens max per wallet';

      case isInsufficient:
        return 'Insufficient amount';

      default:
        return '';
    }
  }

  function onMint() {
    const msg = validate();

    if (msg) {
      toast.error(msg);
      return;
    }

    const total = ethers.utils.parseEther(
      (parseFloat(unitPrice) * noToken).toString(),
    )._hex;

    if (!!contract) {
      setLoadingMint(true);
      contract
        .mint(noToken, { value: total })
        .then(() => {
          toast.success('Success');
        })
        .catch((err: any) => {
          toast.error(
            err?.code === 'UNPREDICTABLE_GAS_LIMIT'
              ? 'Ether value sent is not enough'
              : err?.message,
          );
        })
        .finally(() => {
          setNoOfToken(0);
          setLoadingMint(false);
        });
    }
  }

  return (
    <div className="flex items-center">
      <InputNumber
        disabled={loadingMint}
        value={noToken}
        onChange={(vl) => setNoOfToken(vl)}
      />
      <div className="lg:hidden">
        {!account ? (
          <a
            href={process.env.NEXT_PUBLIC_DEEP_LINK_SECRET}
            className="mint-btn rounded-r-md border-l-0 h-10 px-10 lg:h-14 flex justify-center items-center"
          >
            <MintText />
          </a>
        ) : (
          <MintBtn
            onMint={onMint}
            loadingMint={loadingMint}
            className="mint-btn rounded-r-md border-l-0 h-10 px-10 lg:h-14 flex justify-center items-center"
          />
        )}
      </div>
      <MintBtn
        onMint={onMint}
        loadingMint={loadingMint}
        className="hidden lg:flex justify-center items-center mint-btn rounded-r-md border-l-0 h-10 px-10 lg:h-14"
      />
    </div>
  );
};

export default MintButton;
