'use client';

import { forwardRef } from 'react';
import { FormProvider } from 'react-hook-form';

import { useForm } from '@/hooks';

const FormRoot = forwardRef(({ onSubmit, ...props }, ref) => {
  const { handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      {...props}
    />
  );
});
FormRoot.displayName = 'FormRoot';

const FormRootWithProvider = ({ value, ...props }, ref) => {
  return (
    <FormProvider {...value}>
      <FormRoot
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

export default forwardRef(FormRootWithProvider);
