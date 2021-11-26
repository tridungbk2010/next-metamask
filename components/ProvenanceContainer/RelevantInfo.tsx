import React from 'react';
import { SMART_CONTRACT_ADDRESS } from '../../const';

const RelevantInfo = ({ finalHash }: { finalHash: string }) => {
  return (
    <div>
      <h4 className="font-medium">IMPORTANT INFORMATION</h4>
      <div className="md:hidden">
        <div className="">
          <div className="bg-gray-200 font-courier text-left break-words rounded px-2">
            CRYPTORONTONIANS CONTRACT ADDRESS: {SMART_CONTRACT_ADDRESS}
          </div>
          <div className="py-2" />
          <div className="font-courier bg-gray-200 text-left break-words rounded px-2">
            FINAL PROOF HASH: {finalHash}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <table className="bg-gray-100 w-full py-5 rounded font-courier">
          <tfoot>
            <tr>
              <td className="text-right">CRYPTORONTONIANS CONTRACT ADDRESS</td>
              <td className="px-3">|</td>
              <td className="text-left">{SMART_CONTRACT_ADDRESS}</td>
            </tr>
            <tr>
              <td className="text-right">FINAL PROOF HASH</td>
              <td className="px-3">|</td>
              <td className="text-left">{finalHash}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RelevantInfo;
