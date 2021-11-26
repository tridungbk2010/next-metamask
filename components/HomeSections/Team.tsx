import React from 'react';
import NextImage from '../../shared/NextImage';
import Twitter from '../../shared/svg-icons/Twitter';

const DATA = [
  {
    name: 'KDN',
    title: 'Co-founder',
    avatar: '/avatars/KDN.png',
    description:
      'Creator of Non fungible Thrills. Passionate about the web3 and its possibilities, and don’t even get him started on how he feels about NFTs!',
    twitter: 'https://twitter.com/kdn87_eth?s=21',
  },
  {
    name: 'STAZIE',
    title: 'Co-founder',
    twitter: 'https://twitter.com/stazie?s=21',
    avatar: '/avatars/STAZIE.png',
    description:
      'CryptoPunk owner. An OG in the NFT space with an unmatched ability to sniff out the next big thing in crypto art. Guess who sold the Meebit #17522 for 1,000 ETH?',
  },
  {
    name: 'SUBORG',
    title: 'Lead Developer',
    twitter: 'https://twitter.com/yasvami?s=21',
    avatar: '/avatars/suborg.png',
    description:
      'A builder. Problem solver by day, an artist by night. Senior dev with 25 years’ experience to his name.',
  },
  {
    name: 'MC1',
    avatar: '/avatars/mc1.png',
    title: 'Art and Design',
    description:
      'Jack of all trades. Illustrator, designer and filmmaker mesmerized by NFTs. He illustrates in his sleep, for real.',
  },
];

const Team = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 pt-8">
      {DATA.map((member) => (
        <div
          className="flex flex-col items-center text-center"
          key={member.name}
        >
          <NextImage
            src={member.avatar}
            width={300}
            height={300}
            objectFit={'contain'}
          />
          <span className="font-bold text-xl">{member.name}</span>
          <span className="block">{member.title}</span>
          {member.twitter ? (
            <a
              href={member.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-block pt-3"
            >
              <Twitter className="text-blue-400 w-6" />
            </a>
          ) : (
            <div className="w-6 h-8 pt-3" />
          )}
          <p className="text-justify text-xs md:text-sm pt-3">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Team;
