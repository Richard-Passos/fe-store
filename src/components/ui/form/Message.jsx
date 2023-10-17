'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormMessage = ({ className, children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  return (
    <p
      className={cn('text-sm font-medium text-danger', className)}
      id={messageId}
      ref={ref}
      {...props}
    >
      {error?.message ?? children}
    </p>
  );
};

export default forwardRef(FormMessage);
