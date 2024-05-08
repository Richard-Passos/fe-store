'use client';

import { ScrollDownButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import variants from './variants';

const SelectScrollDownButton = ({ dir = 'down', className, ...props }, ref) => {
  return (
    <ScrollDownButton
      className={variants({ dir, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollDownButton);
