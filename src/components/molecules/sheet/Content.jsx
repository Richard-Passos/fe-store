'use client';

import { Content } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { sheetContent } from './variants';

const SheetContent = ({ dir, className, ...props }, ref) => {
  return (
    <Content
      className={sheetContent({ dir, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetContent);
