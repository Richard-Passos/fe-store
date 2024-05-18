'use client';

import { Content } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { selectContent } from './variants';

const SelectContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={selectContent({ color, className })}
      position='popper'
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(SelectContent);
