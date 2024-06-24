'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { FormProvider } from '@/contexts';
import { useFormContext } from '@/hooks/contexts';

const MoleculesForm = forwardRef(
  ({ asChild, action, onSubmit, ...props }, ref) => {
    const { onSubmit: handleSubmit, onReset } = useFormContext();

    const handleErrors = (errors, values) => {
      console.log('-  errors   -', errors);

      console.log('-  values   -', values);
    };

    action = handleSubmit(action, handleErrors);

    const Tag = asChild ? Slot : 'form';

    return (
      <Tag
        action={() => action(null)}
        onReset={onReset}
        onSubmit={handleSubmit(onSubmit, handleErrors)}
        ref={ref}
        {...props}
      />
    );
  }
);
MoleculesForm.displayName = 'MoleculesForm';

const MoleculesFormWithProvider = ({ fields, ...props }, ref) => {
  return (
    <FormProvider fields={fields}>
      <MoleculesForm
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

export default forwardRef(MoleculesFormWithProvider);
