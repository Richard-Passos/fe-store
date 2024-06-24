'use client';

import { forwardRef } from 'react';

const MoleculesPathText = (
  { text, path, pathProps, textProps, ...props },
  ref
) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d={path}
        fill='none'
        id='path-text'
        {...pathProps}
      />

      <text
        fill='currentColor'
        {...textProps}
      >
        <textPath href='#path-text'>{text}</textPath>
      </text>
    </svg>
  );
};

export default forwardRef(MoleculesPathText);
