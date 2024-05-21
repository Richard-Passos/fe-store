'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormField } from '@/hooks';

const FormLabel = (props, ref) => {
  const { error, id } = useFormField();

  const Tag = asChild ? Slot : 'label';

  return (
    <Tag
      data-invalid={!!error}
      data-valid={!error}
      htmlFor={id}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormLabel);
