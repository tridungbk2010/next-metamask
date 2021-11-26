import { ethers } from 'ethers';
import { erc20Abi, SMART_CONTRACT_ADDRESS } from '../const';
import { isMetamask } from './metamask';

let initialContract: any = null;

function getContract() {
  if (!initialContract && isMetamask()) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    initialContract = new ethers.Contract(
      SMART_CONTRACT_ADDRESS,
      erc20Abi,
      signer,
    );
  }

  return initialContract;
}

export const contract = getContract();
