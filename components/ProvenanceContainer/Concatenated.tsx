import React, { useEffect, useState } from 'react';
import RelevantInfo from './RelevantInfo';

const Concatenated = () => {
  const [loading, setLoading] = useState(false);
  const [hashContent, setHashContent] = useState({
    hash: '',
    finalHash: '',
  });

  useEffect(() => {
    setLoading(true);
    fetch('/provenance/final_hash.txt', {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then(async (res) => {
        const fileContents = await res.text();
        const arr = fileContents.toString().split('\n');
        let obj = {
          hash: '',
          finalHash: '',
        };
        const contentArr = arr.filter((text) => !!text);
        obj.hash = contentArr[0].replace('CONCATENATED: ', '');
        obj.finalHash = contentArr[1].replace('HASH: ', '');
        return obj;
      })
      .then((data) => {
        setHashContent(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <RelevantInfo finalHash={hashContent.finalHash} />
      <h4 className="font-medium">CONCATENATED HASH STRING</h4>
      <div className="font-courier break-words h-48 overflow-y-scroll bg-black text-white text-xs p-3 rounded">
        {loading ? 'Loading...' : hashContent.hash}
      </div>
    </div>
  );
};

export default Concatenated;
