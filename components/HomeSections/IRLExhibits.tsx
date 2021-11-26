import React from 'react';
import Content from '../../shared/Content';

const IrlExhibits = () => {
  return (
    <Content>
      <div>
        <p>
          What sets us apart is that we are all about growing the
          Cryptorontonians brand through strong collabs and IRL displays at
          events, concerts, art galleries and any other disruptive environments.
        </p>
        <p>
          We are very proud to announce that{' '}
          <span className="text-lime-500">
            Cryptorontonians will be showcased at Stackt Market Art Gallery from
            November 11 to December 4.
          </span>{' '}
          {`Stackt Market is one of the trendiest spaces in Toronto and we can't
          think of a better way to raise awareness for the brand.`}
        </p>
        <p>
          During the exhibit there will be a handful of Cryptorontonians
          available to be minted IRL on a first come, first serve basis. Once
          the IRL minting is over, the rest will be available online for
          everyone to participate. We will also be hosting events such as the
          Cryptorontonians Launch Party and various seminars to bring awareness
          and education around the NFT space.
        </p>
      </div>
      <div>
        <h4>Relevant info: </h4>
        <ul>
          <li>
            <h4>IRL MINTING</h4>
            <p>
              Minting a Cryptorontonian is simple. All you have to do is show up
              to our Cryptorontonian exhibit at Stackt Market Art Gallery
              starting on November 11 with your Metamask wallet loaded with ETH,
              and we will walk you through the minting process.
            </p>
            <p>The cost of minting a Cryptorontonian is 0.08 ETH.</p>
          </li>
          <li>
            <h4>MINTING SCHEDULE</h4>
            <p>
              Weekdays: From 4PM to 8PM <br />
              Weekends: From 2PM to 7PM
            </p>
            <p>
              {`There are a limited number of Cryptorontonians for pre-sale. This
              will be on an entirely first come, first serve basis. Don't get
              left behind!`}
            </p>
          </li>
          <li>
            <h4>ADDRESS</h4>
            <p>
              Stackt Market Art Gallery is located at 28 Bathurst St., Toronto,
              ON.
            </p>
          </li>
        </ul>
      </div>
    </Content>
  );
};

export default IrlExhibits;
