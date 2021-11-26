import React from 'react';

const Avatar = () => {
  return (
    <div className="rounded-full overflow-hidden">
      <svg width="24px" height="24px">
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="#2478E1"
          transform="translate(1.1162240349411547 1.4077106160711117) rotate(66.0 12 12)"
        />
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="#FC5C00"
          transform="translate(8.60298398324429 -11.12793037020386) rotate(345.8 12 12)"
        />
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="#03585D"
          transform="translate(-20.41399290332602 8.567328509353855) rotate(287.3 12 12)"
        />
      </svg>
    </div>
  );
};

export default Avatar;
