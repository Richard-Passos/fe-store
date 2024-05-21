'use client';

import { forwardRef } from 'react';

import { useForm } from '@/hooks';

const FormReset = ({ values, ...props }, ref) => {
  const { reset } = useForm();

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      type='reset'
      {...props}
      onClick={(ev) => {
        reset(values);

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(FormReset);
