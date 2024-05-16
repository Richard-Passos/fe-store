'use client';

import { ScrollDownButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { selectScrollButton } from '../variants';

const SelectScrollDownButton = ({ dir = 'down', className, ...props }, ref) => {
  return (
    <ScrollDownButton
      className={selectScrollButton({ dir, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollDownButton);
