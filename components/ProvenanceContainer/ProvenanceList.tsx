import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Provenance } from '../../shared/types';
import { csvToArray } from '../../lib/csv';

const Row = ({ data, index, style }: any) => {
  return (
    <div style={{ ...style }} className="text-xs flex justify-between">
      <span>{data[index].token_id}</span>
      <span className="inline-block px-2">|</span>
      <span>{data[index].hash}</span>
      <span className="inline-block px-2">|</span>
      <a
        href={data[index].image_url}
        target="_blank"
        className="text-lime-500 hover:underline hover:text-yellow-600"
        rel="noreferrer"
      >
        {data[index].image_url}
      </a>
    </div>
  );
};

const ProvenanceList = () => {
  const [loading, setLoading] = useState(false);
  const [provenanceList, setProvenanceList] = useState<Array<Provenance>>([]);
  useEffect(() => {
    setLoading(true);
    fetch('/provenance/provenance.csv', {
      headers: {
        'Content-Type': 'text/csv',
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        setProvenanceList(csvToArray(data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-3">
      <div>
        <h4 className="font-medium">PROVENANCE RECORD</h4>
        <p className="">
          The table below lists the original index, assigned Cryptorontonians
          Token ID, SHA256 Hash output and IPFS link of each Cryptorontonian
          image.
        </p>
      </div>
      <div className="rounded-t bg-gray-800 text-white text-center text-xs md:text-sm font-courier flex justify-center py-2 md:font-bold md:uppercase">
        <span>Cryptorontonians Token ID</span>
        <span className="px-3">|</span>
        <span>SHA256 Hash</span>
        <span className="px-3">|</span>
        <span>IPFS Hash</span>
      </div>
      <div className="p-2 overflow-hidden bg-black text-white text-xs font-courier w-full h-600">
        {loading ? (
          'Loading...'
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                itemCount={provenanceList.length}
                itemSize={30}
                itemData={provenanceList}
                width={width}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        )}
      </div>
    </div>
  );
};

export default ProvenanceList;
