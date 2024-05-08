'use client';

import { Content } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import variants from './variants';

const SheetContent = ({ dir, className, ...props }, ref) => {
  return (
    <Content
    className={variants({ dir, className })}
    ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetContent);