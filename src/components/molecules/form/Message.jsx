'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Text } from '@/components/atoms';

const FormMessage = ({ className, children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  return (
    <Text.Root
      className={cn('text-sm font-medium text-danger', className)}
      id={messageId}
      ref={ref}
      {...props}
    >
      {error?.message ?? children}
    </Text.Root>
  );
};

export default forwardRef(FormMessage);
