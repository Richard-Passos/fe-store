'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormField } from '@/hooks';

const FormDescription = (props, ref) => {
  const { descriptionId } = useFormField();

  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      id={descriptionId}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormDescription);
