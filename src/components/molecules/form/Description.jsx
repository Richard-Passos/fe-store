'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Text } from '@/components/atoms';

const FormDescription = ({ className, ...props }, ref) => {
  const { descriptionId } = useFormField();

  return (
    <Text.Root
      className={cn('sr-only', className)}
      id={descriptionId}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormDescription);
