'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionContent = ({ className, children, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'data-closed:animate-slide-up data-open:animate-slide-down overflow-hidden text-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className='p-4 pt-0'>{children}</div>
    </Content>
  );
};

export default forwardRef(AccordionContent);
