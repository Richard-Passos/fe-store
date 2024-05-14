'use client';

import { forwardRef } from 'react';

import { Label } from '@/components/atoms';
import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormLabel = ({ className, ...props }, ref) => {
  const { error, id } = useFormField();

  return (
    <Label
      className={cn(error && 'text-danger', className)}
      htmlFor={id}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormLabel);
