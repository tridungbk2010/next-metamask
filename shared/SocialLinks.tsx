import React from 'react';
import Discord from './svg-icons/Discord';
import Etherscan from './svg-icons/Etherscan';
import Twitter from './svg-icons/Twitter';
import Opensea from './svg-icons/Opensea';
import Instagram from './svg-icons/Instagram';
import { ETHER_SCAN_URL, SMART_CONTRACT_ADDRESS } from '../const';

const SOCIALS = [
  {
    url: '/socials/discord.svg',
    label: 'Discord',
    link: process.env.NEXT_PUBLIC_DISCORD_URL,
    icon: Discord,
  },
  {
    url: '/socials/etherscan.svg',
    label: 'Etherscan',
    link: `${ETHER_SCAN_URL}/${SMART_CONTRACT_ADDRESS}`,
    icon: Etherscan,
  },
  {
    url: '/socials/opensea.svg',
    label: 'Opensea',
    link: process.env.NEXT_PUBLIC_OPENSEA_URL,
    icon: Opensea,
  },
  {
    url: '/socials/twitter.svg',
    label: 'Twitter',
    link: process.env.NEXT_PUBLIC_TWITTER_URL,
    icon: Twitter,
  },
  {
    url: '/socials/twitter.svg',
    label: 'Instagram',
    link: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: Instagram,
  },
];

const Icon = ({
  link,
  icon: Icon,
}: {
  url: string;
  label: string;
  link?: string;
  icon: any;
}) => (
  <a
    className="flex flex-col items-center group"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="group-hover:text-lime-500 w-6 h-6 text-white transform transition-all group-hover:scale-125 group-hover:rotate-12" />
  </a>
);
const SocialLinks = () => {
  return (
    <div className="text-white flex items-center justify-center space-x-5 py-4">
      {SOCIALS.map((social) => (
        <Icon key={social.label} {...social} />
      ))}
    </div>
  );
};

export default SocialLinks;
