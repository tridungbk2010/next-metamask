import type { NextPage } from "next";
import { useEthereum } from "../components/EthereumConext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { connect, account, buttonText } = useEthereum();

  return (
    <div className={styles.container}>
      {account ? (
        <span>{buttonText}</span>
      ) : (
        <button onClick={connect}>{buttonText}</button>
      )}
      <div>Acc: {account}</div>
    </div>
  );
};

export default Home;
