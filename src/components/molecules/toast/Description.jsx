'use client';

import { Description } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const ToastDescription = ({ className, children, ...props }, ref) => {
  return (
    <TextDescription
      asChild
      className={cn('text-sm/relaxed', className)}
      ref={ref}
      {...props}
    >
      <Description>{children}</Description>
    </TextDescription>
  );
};

export default forwardRef(ToastDescription);
