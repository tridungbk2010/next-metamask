import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const CONNECT_TEXT = "Connect Wallet";
export const CONNECTED_TEXT = "Connected";

const Home: NextPage = () => {
  const [account, setAccount] = useState("");
  const [connButtonText, setConnButtonText] = useState(CONNECT_TEXT);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          setAccount(result[0]);
          setConnButtonText(CONNECTED_TEXT);
        });
    }
  };

  // update account, will cause component re-render
  function accountChangedHandler(newAccount: string) {
    if (!!newAccount?.length) {
      setAccount(newAccount[0]);
    }
  }

  useEffect(() => {
    // Check mobile and init connecting to wallet
    if (window.innerWidth < 768) {
      connectWalletHandler();
    }
  }, []);

  useEffect(() => {
    const isMetamask = window.ethereum;

    if (isMetamask) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
    }
    return () => {
      if (isMetamask) {
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

    const isMetamask = window.ethereum;

    if (isMetamask) {
      window.ethereum.on("chainChanged", chainChangedHandler);
    }
    return () => {
      if (isMetamask) {
        window.ethereum.removeListener("chainChanged", chainChangedHandler);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {account ? (
        <span>{connButtonText}</span>
      ) : (
        <button onClick={connectWalletHandler}>{connButtonText}</button>
      )}
      <div>Acc: {account}</div>
    </div>
  );
};

export default Home;
