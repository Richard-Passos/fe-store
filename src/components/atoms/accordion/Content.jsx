'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        '[--accordion-content-h:--radix-accordion-content-height] [--accordion-content-w:--radix-accordion-content-width]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionContent);
