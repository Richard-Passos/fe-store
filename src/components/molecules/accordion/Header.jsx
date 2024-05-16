'use client';

import { Header } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionHeader = ({ className, ...props }, ref) => {
  return (
    <Header
      className={cn(
        'relative -mb-px w-full border-b border-transparent before:absolute before:inset-x-[5%] before:-bottom-px before:h-px before:bg-border',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionHeader);
