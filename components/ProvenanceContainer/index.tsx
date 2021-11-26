import React from 'react';
import Concatenated from './Concatenated';
import ProvenanceList from './ProvenanceList';

const ProvenanceContainer = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 prose-lg px-2 lg:px-0">
      <span className="font-bebasNeue text-4xl">
        Cryptorontonians Provenance Record
      </span>
      <p className="">
        This page presents the provenance record of each Cryptorontonian that
        will ever exist. Each Cryptorontonian image is firstly hashed using
        SHA-256 algorithm. A combined string is obtained by concatenating
        SHA-256 of each Cryptorontonian image in the specific order as listed
        below. The final proof is obtained by SHA-256 hashing this combined
        string. This is the final provenance record stored on the smart
        contract.
      </p>
      <Concatenated />
      <ProvenanceList />
    </div>
  );
};

export default ProvenanceContainer;
