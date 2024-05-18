'use client';

import { CommandLoading as Loading } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandLoading = ({ className, ...props }, ref) => {
  return (
    <Loading
      className={cn(
        'flex flex-col items-center justify-center py-md text-center',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandLoading);
