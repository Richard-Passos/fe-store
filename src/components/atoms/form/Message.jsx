'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';

const FormMessage = ({ children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  const Tag = asChild ? Slot : 'p';

  children = children ?? error?.message;

  if (!children) return null;

  return (
    <Tag
      data-invalid={!!error}
      data-valid={!error}
      id={messageId}
      ref={ref}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default forwardRef(FormMessage);
