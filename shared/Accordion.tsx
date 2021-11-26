import React, { useRef, useState } from 'react';

type Props = {
  question: {
    title: React.ReactNode;
    content: React.ComponentProps<any>;
  };
};

const AccordionItem = ({ question }: Props) => {
  const { title, content: Content } = question;
  const [expanded, setExpanded] = useState(false);

  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <li className="my-3 flex">
      <div className="text-gray-500 group-hover:text-white transition-all text-xl">
        {expanded ? (
          <span className="inline-block w-6">-</span>
        ) : (
          <span className="inline-block w-6">+</span>
        )}
      </div>
      <div>
        <button
          className={`${
            expanded ? 'text-lime-500' : ''
          } hover:text-lightGreen font-bebasNeue text-white text-3xl`}
          onClick={() => setExpanded(!expanded)}
        >
          {title}
        </button>
        <div
          ref={contentEl}
          className="transition-all duration-400 ease-linear overflow-hidden"
          style={
            expanded
              ? { height: contentEl.current?.scrollHeight }
              : { height: 0 }
          }
        >
          <div className="text-white pb-3">
            <Content />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
