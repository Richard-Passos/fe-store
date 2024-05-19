'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'animate-slide-up overflow-hidden [--height:--radix-accordion-content-height] data-open:animate-slide-down',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionContent);
