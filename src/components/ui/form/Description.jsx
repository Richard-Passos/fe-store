'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormDescription = ({ className, ...props }, ref) => {
  const { descriptionId } = useFormField();

  return (
    <p
      className={cn('sr-only', className)}
      id={descriptionId}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormDescription);
