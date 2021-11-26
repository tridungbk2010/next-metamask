import React from 'react';

const ARR = new Array(4).fill('IRL • SHOWCASE • ');

const TextChain = ({ className }: { className?: string }) => (
  <div className={className}>
    {ARR.map((text, index) => (
      <span className="font-bold text-sm" key={index}>
        {text}
      </span>
    ))}
  </div>
);

const AnimatedTexts = ({ direction }: { direction: 'right' | 'left' }) => {
  return (
    <div className="whitespace-nowrap flex">
      <TextChain className={`move-${direction}`} />
      <TextChain className={`move-${direction}-next`} />
    </div>
  );
};

const PopupContent = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="bg-black p-3">
      <div
        className="bg-lime-500 overflow-hidden"
        style={{ boxShadow: '0 0px 10px 2px rgba(173, 255, 0)' }}
      >
        <AnimatedTexts direction="left" />
        <div className="flex items-center justify-between bg-black">
          <div className="text-white border-r-4 border-l-4 border-lime-500">
            <div className="px-5 text-base lg:text-lg pt-5">
              <span className="">
                Cryptorontonians will be showcased at Stackt Market Art Gallery
                in Toronto from
              </span>
              <span className="text-yellow-400 font-bold">
                {' '}
                November 11 to December 4, 2021.{' '}
              </span>
              <span className="">
                Presale is now available IRL at the gallery ahead of our public
                launch on{' '}
                <span className="text-yellow-400 font-bold">December 5</span>.
              </span>
            </div>
            <div className="text-center py-5">
              <button
                onClick={onClose}
                className="font-bold hover:bg-lime-500 border-lime-500 border-2 px-10 py-2 active:bg-lime-500 outline-none"
              >
                Cool
              </button>
            </div>
          </div>
        </div>
        <AnimatedTexts direction="right" />
      </div>
    </div>
  );
};

export default PopupContent;
