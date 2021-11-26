import React from 'react';
import { toast } from 'react-hot-toast';
import InputNumber from '../shared/InputNumber';

const PresaleMintButton = () => {
  function showMsg() {
    toast.error(
      <span className="text-center">
        Launch on Dec 5. <br /> Presale now available IRL
      </span>,
    );
  }
  return (
    <div className="flex items-center" onClick={showMsg}>
      <InputNumber disabled value={0} onChange={() => {}} />
      <button className="flex justify-center items-center mint-btn rounded-r-md border-l-0 h-10 px-10 lg:h-14">
        <span className="font-bebasNeue tracking-wider inline-block mt-1 text-xl">
          MINT
        </span>
      </button>
    </div>
  );
};

export default PresaleMintButton;
