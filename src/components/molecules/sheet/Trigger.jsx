'use client';

import { Trigger } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';

const SheetTrigger = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Trigger
      className={button({ color, variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetTrigger);
