import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Home: NextPage = () => {
  const [acc, setAcc] = useState("");
  const [text, setText] = useState("Connect wallet");

  useEffect(() => {
    connectWallet();
  }, []);

  function connectWallet() {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        setAcc(accounts[0]);
        setText("Connected");
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      {acc ? (
        <span>{text}</span>
      ) : (
        <button onClick={connectWallet}>{text}</button>
      )}
      <div>Acc: {acc}</div>
    </div>
  );
};

export default Home;
