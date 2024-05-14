'use client';

import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormDescription = ({ className, children, ...props }, ref) => {
  const { descriptionId } = useFormField();

  return (
    children && (
      <TextDescription
        className={cn('text-xs', className)}
        id={descriptionId}
        ref={ref}
        {...props}
      >
        {children}
      </TextDescription>
    )
  );
};

export default forwardRef(FormDescription);
