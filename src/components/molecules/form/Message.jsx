'use client';

import { forwardRef } from 'react';

import { TextRoot } from '@/components/atoms/text';
import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormMessage = ({ className, children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  const content = error?.message ?? children;

  return (
    content && (
      <TextRoot
        className={cn('text-xs font-medium text-danger', className)}
        id={messageId}
        ref={ref}
        {...props}
      >
        {content}
      </TextRoot>
    )
  );
};

export default forwardRef(FormMessage);
