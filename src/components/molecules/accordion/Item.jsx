'use client';

import { Item } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import box from '@/components/atoms/box/variants';
import { cn } from '@/utils';

const AccordionItem = ({ color, className, ...props }, ref) => {
  return (
    <Item
      className={box({
        color,
        variant: 'solid',
        className: cn(
          'relative top-px -mt-px overflow-hidden p-0 has-[[data-accordion-trigger]:focus-visible]:z-10 has-[[data-accordion-trigger]:focus-visible]:outline [&:not(:first-child)]:rounded-t-none [&:not(:last-child)]:rounded-b-none',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionItem);
