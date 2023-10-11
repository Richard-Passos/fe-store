'use client';

import { Trigger } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogTrigger);
