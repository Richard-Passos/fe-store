'use client';

import { List } from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TabsList = ({ className, ...props }, ref) => {
  return (
    <List
      className={cn(
        'bg-content/75/25 flex h-10 items-center justify-center gap-1 rounded-md p-1 text-content/75 focus-visible:[&~div]:rounded-md',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TabsList);
