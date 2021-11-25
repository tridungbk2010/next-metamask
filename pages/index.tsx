import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Home: NextPage = () => {
  const [acc, setAcc] = useState("");
  function connectWallet() {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        setAcc(accounts[0]);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  return (
    <div className={styles.container}>
      <button onClick={connectWallet}>Connect wallet</button>
      <div>Acc: {acc}</div>
    </div>
  );
};

export default Home;
