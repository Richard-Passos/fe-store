'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FormRoot, FormProvider } from '@/components/molecules/form';
import { capitalize } from '@/utils';

const tabsDemoPasswordClientFormSchema = z.object({
  currPassword: z
    .string()
    .min(2, 'Current password must be at least 2 characters.'),
  newPassword: z.string().min(2, 'New password must be at least 2 characters.'),
});

const TabsDemoPasswordClientForm = (props) => {
  const form = useForm({
    resolver: zodResolver(tabsDemoPasswordClientFormSchema),
    defaultValues: {
      currPassword: '',
      newPassword: '',
    },
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <FormRoot
        onSubmit={tabsDemoPasswordClientFormOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const tabsDemoPasswordClientFormOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default TabsDemoPasswordClientForm;
