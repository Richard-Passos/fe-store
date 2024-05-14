'use client';

import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/atoms/button';

const FormReset = ({ values, ...props }, ref) => {
  const { reset } = useFormContext();

  return (
    <Button
      onClick={() => reset(values)}
      ref={ref}
      type='reset'
      {...props}
    />
  );
};

export default forwardRef(FormReset);
