'use client';

import { Header } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionHeader = ({ className, ...props }, ref) => {
  return (
    <Header
      className={cn(
        'relative -mb-px w-full border-b border-transparent before:absolute before:-bottom-px before:left-1/2 before:h-px before:w-9/10 before:-translate-x-1/2 before:bg-border',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionHeader);
