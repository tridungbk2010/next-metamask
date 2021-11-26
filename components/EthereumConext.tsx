import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { isMetamask } from "../lib/metamask";

// const ONBOARD_TEXT = 'Click here to install MetaMask!';
export const CONNECT_TEXT = "Connect Wallet";
export const CONNECTED_TEXT = "Connected";

declare global {
  interface Window {
    ethereum: any;
  }
}

type Context = {
  account: string;
  buttonText: string;
  connect?: () => void;
  isDisabled?: boolean;
  isMetaMaskInstalled?: boolean;
};

const EthereumContext = React.createContext<Context>({
  account: "",
  buttonText: "",
});

function EthereumProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState("");
  const [connButtonText, setConnButtonText] = useState(CONNECT_TEXT);

  const connectWalletHandler = useCallback(() => {
    if (isMetamask()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          accountChangedHandler(result);
          setConnButtonText(CONNECTED_TEXT);
        })
        .catch((error: any) => {
          toast.error(error.message);
        });
    }
  }, []);

  // update account, will cause component re-render
  function accountChangedHandler(newAccounts: string[]) {
    setAccount(newAccounts[0]);
  }

  React.useEffect(() => {
    // Check mobile and init connecting to wallet
    if (window.innerWidth < 768) {
      connectWalletHandler();
    }
  }, [connectWalletHandler]);

  useEffect(() => {
    if (isMetamask()) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
    }
    return () => {
      if (isMetamask()) {
        window.ethereum.removeListener(
          "accountsChanged",
          accountChangedHandler
        );
      }
    };
  }, []);

  useEffect(() => {
    function chainChangedHandler() {
      window.location.reload();
    }

    if (isMetamask()) {
      window.ethereum.on("chainChanged", chainChangedHandler);
    }
    return () => {
      if (isMetamask()) {
        window.ethereum.removeListener("chainChanged", chainChangedHandler);
      }
    };
  }, []);

  return (
    <EthereumContext.Provider
      value={{
        account,
        buttonText: connButtonText,
        isDisabled: false,
        connect: connectWalletHandler,
      }}
    >
      {children}
    </EthereumContext.Provider>
  );
}

const useEthereum = () => React.useContext(EthereumContext);
export { EthereumProvider, useEthereum };
