'use client';

import { Trigger } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'flex w-full items-center justify-between p-4 font-medium hover:bg-muted/20',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionTrigger);
