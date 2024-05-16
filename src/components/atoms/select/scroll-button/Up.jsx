'use client';

import { ScrollUpButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { selectScrollButton} from '../variants';

const SelectScrollUpButton = ({ dir = 'up', className, ...props }, ref) => {
  return (
    <ScrollUpButton
    className={selectScrollButton({ dir, className })}
    ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollUpButton);
