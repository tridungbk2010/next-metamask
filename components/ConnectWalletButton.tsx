import React from 'react';
import { CONNECTED_TEXT, useEthereum } from './EthereumConext';
import AccountInfo from './AccountInfo';
import { useLayout } from './Layout';

const ConnectWalletButton = ({
  textClassName,
  btnClassName,
}: {
  textClassName?: string;
  btnClassName?: string;
}) => {
  const { isPresale } = useLayout();
  const { buttonText, connect, isDisabled } = useEthereum();

  if (buttonText === CONNECTED_TEXT) {
    return <AccountInfo />;
  }

  return (
    <>
      <button
        disabled={isDisabled}
        onClick={connect}
        className={`hidden md:block ${
          btnClassName ||
          'text-lime-500 border-lime-500 border rounded px-3 hover:bg-lime-500 hover:text-white'
        }`}
      >
        <span className={textClassName}>{buttonText}</span>
      </button>
      <a
        className="md:hidden text-lime-500 border-lime-500 border rounded px-3 py-1"
        href={
          isPresale
            ? process.env.NEXT_PUBLIC_DEEP_LINK
            : process.env.NEXT_PUBLIC_DEEP_LINK_SECRET
        }
      >
        Connect wallet
      </a>
    </>
  );
};

export default ConnectWalletButton;
