import React from 'react';
import Accordion from '../shared/Accordion';
import IrlExhibits from './HomeSections/IRLExhibits';
import JustDaoIt from './HomeSections/JustDaoIt';
import TheVirtuousCycle from './HomeSections/TheVirtuousCycle';
import TheSpecsAndRarity from './HomeSections/TheSpecsAndRarity';
import Roadmap from './HomeSections/Roadmap';
import Summary from './HomeSections/Summary';
import Faq from './HomeSections/FAQ';
import NonFungibleThrills from './HomeSections/NonFungibleThrills';
import Team from './HomeSections/Team';

const DATA = [
  {
    title: 'IRL EXHIBITS',
    content: IrlExhibits,
  },
  {
    title: 'JUST DAO IT',
    content: JustDaoIt,
  },
  {
    title: 'THE VIRTUOUS CYCLE',
    content: TheVirtuousCycle,
  },
  {
    title: 'TEAM ',
    content: Team,
  },
  {
    title: 'THE SPECS & RARITY',
    content: TheSpecsAndRarity,
  },
  {
    title: 'ROADMAP',
    content: Roadmap,
  },
  {
    title: 'Summary',
    content: Summary,
  },
  {
    title: 'FAQ',
    content: Faq,
  },
  {
    title: <span className="text-lime-500">NON FUNGIBLE THRILLS</span>,
    content: NonFungibleThrills,
  },
];

const AskQuestions = () => {
  return (
    <div>
      {DATA.map((question, index) => (
        <Accordion key={index} question={question} />
      ))}
    </div>
  );
};

export default AskQuestions;
