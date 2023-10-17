'use client';

import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils';

const Form = ({ className, onSubmit, ...props }) => {
  const { handleSubmit } = useFormContext();

  return (
    <form
      className={cn('space-y-8', className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    />
  );
};

export default Form;
