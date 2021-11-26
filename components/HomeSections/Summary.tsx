import React from 'react';
import Content from '../../shared/Content';

const DATA = [
  'Non Fungible Thrills is the NFT studio behind Cryptorontonians.',
  'There are 6,555 Cryptorontonians.',
  '25% of Cryptorontonians sale proceeds are sent to the DAO treasury, including royalties from secondary sales.',
  '25% of all Non Fungible Thrills future sale proceeds will be funnelled to the DAO treasury',
  'One Cryptorontonian = One vote.',
  'DAO treasury is controlled by Cryptorontonians via governance.',
  'Artwork is created by a custom generative algorithm.',
  'Cryptorontonians are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.',
  'All Cryptorontonians are unique and equally rare. There are no explicit rules for attribute scarcity.',
  'Purchasing a Cryptorontonian costs 0.08 ETH.',
  'There is a 6% royalty fee in secondary sales.',
];

const Summary = () => {
  return (
    <Content>
      <ul>
        {DATA.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </Content>
  );
};

export default Summary;
