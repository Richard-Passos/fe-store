'use client';

import { Trigger } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn('focus-visible:outline-0', className)}
      data-accordion-trigger
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionTrigger);
