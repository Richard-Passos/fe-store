'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const AccordionContent = ({ className, children, ...props }, ref) => {
  return (
    <TextDescription
      asChild
      className={cn(
        'overflow-hidden text-sm [--height:--radix-accordion-content-height] data-closed:animate-slide-up data-open:animate-slide-down [&>div]:p-md',
        className
      )}
      ref={ref}
      {...props}
    >
      <Content>
        <div>{children}</div>
      </Content>
    </TextDescription>
  );
};

export default forwardRef(AccordionContent);
