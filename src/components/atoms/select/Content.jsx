'use client';

import { Content } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { selectContentVariants } from './variants.js';

const SelectContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      className={selectContentVariants({ color, className })}
      position='popper'
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(SelectContent);
