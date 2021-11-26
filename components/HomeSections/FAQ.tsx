import React from 'react';
import Content from '../../shared/Content';

const DATA = [
  {
    id: '1',
    question: 'What’s so special about Cryptorontonians?',
    answer: (
      <p>
        Cryptorontonians is an experiment to bootstrap digital community,
        governance and treasury while acting as a vehicle to raise funds for Non
        Fungible Thrills. It represents a new paradigm where early adopters can
        get rewarded the most by supporting a project they believe in. That’s
        pretty special, if you ask me!
      </p>
    ),
  },
  {
    id: '2',
    question: "What's the story behind the artwork?",
    answer: (
      <p>
        Toronto to the metaverse! The artwork is a tribute to our home – Toronto
        – and its fiercest dwellers – the raccoons.
      </p>
    ),
  },
  {
    id: '3',
    question: 'When will Cryptorontonians be available to mint?',
    answer: (
      <p>
        From November 11 to December 4, there will be a limited number of
        Cryptorontonians available to be minted IRL at Stackt Market Art
        Gallery. Once those Cryptorontonians are minted, the remaining
        Cryptorontonians will be available online for everyone to participate.
      </p>
    ),
  },
  {
    id: '4',
    question: 'And for how much?',
    answer: (
      <p>
        The price of each Cryptorontonian is 0.08 ETH plus gas fees. There is no
        bonding curve so all Cryptorontonians are priced equally.
      </p>
    ),
  },
  {
    id: '5',
    question: 'How do I purchase Cryptorontonians?',
    answer: (
      <p>
        Before purchasing Cryptorontonians, you will need to take two simple and
        important steps. First, you will need to purchase ETH from a
        crypto-currency exchange such as{' '}
        <a
          className="text-blue-500"
          href="https://www.coinbase.com/plp/nar3?utm_source=google_search_b&utm_medium=cpc&utm_campaign=1711534994&utm_content=68048698078&utm_term=coinbase&utm_creative=409186026435&cb_device=c&cb_placement=&cb_country=us&cb_city=open&cb_language=en_us&gclid=CjwKCAjw7J6EBhBDEiwA5UUM2r0y-vlooaT3i5RASqxv3gu054JCCf6Y97jFnU4rS5ZiZsxTGtNfFBoCJnMQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          Coinbase{' '}
        </a>
        or{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
          href="https://www.binance.com/en"
        >
          {' '}
          Binance{' '}
        </a>
        . Once you have completed that step, you will need to transfer your ETH
        into your
        <a target="_blank" rel="noreferrer" href="https://metamask.io/">
          {' '}
          MetaMask
        </a>{' '}
        wallet. Metamask connects to the Cryptorontonians website and allows you
        to purchase the NFT.
      </p>
    ),
  },
  {
    id: '6',
    question: 'What is Metamask?',
    answer: (
      <p>
        Metamask is a non-custodial crypto wallet that can store your Ethereum
        and is needed to purchase and mint a Cryptorontonian. Having a wallet
        gives you an Ethereum address where your NFT will be stored. Learn more
        about Metamask and how easy it is to use over here!
        (https://metamask.io/)
      </p>
    ),
  },
  {
    id: '7',
    question: 'Tokenomics?',
    answer: (
      <div>
        <p>
          There are only 6,555 Cryptorontonians. We have reserved 200
          Cryptorontonians for giveaways and holder airdrops. Most of these will
          be given out after our launch.{' '}
        </p>
        <p>
          The team holds 20 Cryptorontonians. The remainder of the
          Cryptorontonians are for sale.
        </p>
      </div>
    ),
  },
  {
    id: '9',
    question: 'Are all the Cryptorontonians the same?',
    answer: (
      <>
        <p>
          All Cryptorontonians are unique and equally rare. They are created
          randomly by a custom generative algorithm from over 175 possible
          traits and there are no explicit rules for attribute scarcity.
        </p>
        <p>All Cryptorontonians are members of the Cryptorontonians DAO. </p>
      </>
    ),
  },
  {
    id: '10',
    question: 'Can I buy more than one Cryptorontonian?',
    answer: <p>Yes, you can buy up to 20 Cryptorontonians.</p>,
  },
  {
    id: '11',
    question: 'Can I resell my Cryptorontonians?',
    answer: (
      <p>
        Yes. Cryptorontonians can be resold on NFT marketplaces such as OpenSea.
        If a Cryptorontonian is resold there will be a 6% royalty fee.{' '}
      </p>
    ),
  },
  {
    id: '12',
    question: 'Where can I interact with other Cryptorontonians?',
    answer: (
      <p>
        We are always hanging out on our{' '}
        <a href="https://discord.gg/rFdqU34wsb">
          {' '}
          Cryptorontonians Discord channel.
        </a>
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <Content>
      {DATA.map((qs) => (
        <div key={qs.id} className="mt-3">
          <span className="text-lime-500 font-bold text-lg">{qs.question}</span>
          {qs.answer}
        </div>
      ))}
    </Content>
  );
};

export default Faq;
