'use client';

import { ScrollUpButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import variants from './variants';

const SelectScrollUpButton = ({ dir = 'up', className, ...props }, ref) => {
  return (
    <ScrollUpButton
    className={variants({ dir, className })}
    ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollUpButton);
