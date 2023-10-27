'use client';

import { Header } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionHeader = ({ className, ...props }, ref) => {
  return (
    <Header
      className={cn(
        'w-full shadow-[0_.8px_0] shadow-muted-content/50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionHeader);
