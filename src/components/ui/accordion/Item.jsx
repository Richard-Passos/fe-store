'use client';

import { Item } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'overflow-hidden border-x border-b first:rounded-t-sm first:border-t last:rounded-b-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionItem);
