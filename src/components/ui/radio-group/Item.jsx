'use client';

import { Indicator, Item } from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroupItem = ({ className, children, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'aspect-square w-4 rounded-full border border-content p-1 text-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      <Indicator className='flex h-full w-full items-center justify-center rounded-inherit'>
        {children}
      </Indicator>
    </Item>
  );
};

export default forwardRef(RadioGroupItem);
